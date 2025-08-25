"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { api, IMG_URL } from "@/lib/api";

type Network = "EVM" | "SOL" | "BTC";

interface Giveaway {
  id: number;
  name: string;
  description: string;
  image: string;
  network?: Network;
  active: boolean;
  project_link?: string;
}

interface Entry {
  id: number;
  user_id: number;
  giveaway_id: number;
  wallet: string;
  verified: boolean | 0 | 1; // <-- это ставит АДМИН; после этого показываем блок подтверждения
  winner?: boolean | 0 | 1;
  needs_verification?: boolean | 0 | 1;
  user?: { discord_name?: string };
  giveaway?: { name?: string };
}

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://apifasdfsagsfd.offers/api";

export default function GiveawaysPage() {
  const router = useRouter();

  const [activeGiveaways, setActiveGiveaways] = useState<Giveaway[]>([]);
  const [endedGiveaways, setEndedGiveaways] = useState<Giveaway[]>([]);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [walletByGiveaway, setWalletByGiveaway] = useState<
    Record<number, string>
  >({});
  const [confirmWalletByEntry, setConfirmWalletByEntry] = useState<
    Record<number, string>
  >({});
  const [submittingId, setSubmittingId] = useState<number | null>(null);
  const [confirmingId, setConfirmingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const prevEntriesRef = useRef<Entry[] | null>(null);
  const pollingRef = useRef<number | null>(null);

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        setLoading(true);
        const all = await api.giveaways.list();
        setActiveGiveaways((all as Giveaway[]).filter((g) => g.active));
        setEndedGiveaways((all as Giveaway[]).filter((g) => !g.active));

        const myEntries = await api.entries.list();
        setEntries(myEntries as Entry[]);
        prevEntriesRef.current = myEntries as Entry[];
      } catch (e) {
        console.error("Failed to load:", e);
      } finally {
        setLoading(false);
      }
    };
    init();

    return () => {
      if (pollingRef.current) window.clearInterval(pollingRef.current);
    };
  }, [router]);

  // пуллинг — чтобы, как только админ врубил verified=1, тут сразу появился блок подтверждения
  useEffect(() => {
    if (!entries.length) return;
    if (pollingRef.current) window.clearInterval(pollingRef.current);

    pollingRef.current = window.setInterval(async () => {
      try {
        const fresh = (await api.entries.list()) as Entry[];
        setEntries(fresh);
        prevEntriesRef.current = fresh;
      } catch (e) {
        console.error("Polling error:", e);
      }
    }, 5000);

    return () => {
      if (pollingRef.current) window.clearInterval(pollingRef.current);
      pollingRef.current = null;
    };
  }, [entries]);

  const entryByGiveaway = useMemo(() => {
    const map = new Map<number, Entry>();
    for (const e of entries) map.set(e.giveaway_id, e);
    return map;
  }, [entries]);

  const resolveImage = (image: string) => {
    if (!image) return "/img/project1.png";
    if (/^https?:\/\//i.test(image)) return image;
    const base = (IMG_URL || "").replace(/\/+$/, "");
    const path = image.replace(/^\/+/, "");
    return `${base}/${path}`;
  };

  const handleWalletChange = (gid: number, value: string) => {
    setWalletByGiveaway((prev) => ({ ...prev, [gid]: value }));
  };

  const handleSubmit = async (giveawayId: number) => {
    const wallet = (walletByGiveaway[giveawayId] || "").trim();
    if (!wallet) {
      alert("Введите адрес кошелька");
      return;
    }

    try {
      setSubmittingId(giveawayId);
      const fd = new FormData();
      fd.append("giveaway_id", String(giveawayId));
      fd.append("wallet", wallet);

      const created = await api.entries.create(fd);
      setEntries((prev) =>
        created && created.id ? [...prev, created as Entry] : [...prev]
      );
      setWalletByGiveaway((prev) => ({ ...prev, [giveawayId]: "" }));
    } catch (e) {
      console.error("Ошибка регистрации:", e);
      alert("Ошибка при регистрации в розыгрыше");
    } finally {
      setSubmittingId(null);
    }
  };

  // подтверждение кошелька пользователем (после того как админ поставил verified=1)
  const handleConfirm = async (entryId: number, walletValue: string) => {
    const wallet = (walletValue || "").trim();
    if (!wallet) {
      alert("Введите адрес кошелька для подтверждения");
      return;
    }

    try {
      setConfirmingId(entryId);
      const token = localStorage.getItem("auth_token") || "";
      const fd = new FormData();
      fd.append("wallet", wallet);

      // ожидаемый эндпоинт: POST /entries/{id}/confirm
      const res = await fetch(`${API_BASE}/entries/${entryId}/confirm`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: fd,
        credentials: "include",
      });

      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || `Confirm failed with ${res.status}`);
      }

      const updated = await res.json();
      // если сервер возвращает обновлённую запись — примержим
      setEntries((prev) =>
        prev.map((e) => (e.id === entryId ? { ...e, ...updated } : e))
      );
      alert("Адрес подтверждён. Спасибо! 🎉");
    } catch (e) {
      console.error("Ошибка подтверждения:", e);
      alert("Не удалось подтвердить кошелёк");
    } finally {
      setConfirmingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#7bc5cd] text-white font-pixel-primary">
        Loading…
      </div>
    );
  }

  return (
    <div className="bg-[#7bc5cd] text-white min-h-screen font-pixel-primary px-4 py-10">
      <h1 className="text-3xl mb-6 text-center">🎁 Active Giveaways</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {activeGiveaways.map((g) => {
          const entry = entryByGiveaway.get(g.id);
          const registered = !!entry;
          const submitting = submittingId === g.id;
          const networkLabel = g.network ?? "EVM";
          const isAdminVerified = !!(
            entry &&
            (entry.verified === true || entry.verified === 1)
          );

          return (
            <div
              key={g.id}
              className="bg-[#DBDA96] border-4 border-[#D2AA4F] shadow-pixel p-4"
            >
              <img
                src={resolveImage(g.image)}
                alt={g.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-xl text-[#4E3B40] mb-1">{g.name}</h2>
              {g.network && (
                <p className="text-xs text-[#4E3B40] opacity-80 mb-1">
                  Network: {g.network}
                </p>
              )}
              <p className="text-[#4E3B40] mb-2">{g.description}</p>
              {g.project_link && (
                <a
                  href={g.project_link}
                  target="_blank"
                  className="text-blue-800 underline text-sm block mb-3"
                >
                  View on Alphabot ↗
                </a>
              )}

              {/* 1) Если НЕ зарегистрирован — обычная форма участия */}
              {!registered && (
                <>
                  <input
                    type="text"
                    placeholder={`Enter your ${networkLabel} wallet`}
                    value={walletByGiveaway[g.id] || ""}
                    onChange={(e) => handleWalletChange(g.id, e.target.value)}
                    className="w-full p-2 text-[#4E3B40] bg-[#C9C98A] outline-none mb-2"
                  />
                  
                  <button  onClick={() => handleSubmit(g.id)}
                    className={`bg-[#4E3B40] text-white w-full py-2 disabled:opacity-60 `}
                    disabled={submitting}
                  >
                    {submitting ? "Submitting…" : "Submit Wallet"}
                  </button>
                </>
              )}

              {/* 2) Если зарегистрирован, но админ ещё НЕ верифицировал — просто статус */}
              {registered && !isAdminVerified && (
                <p className="text-green-700 text-sm mt-2">
                  Registered ✅ (awaiting admin review)
                </p>
              )}

              {/* 3) Если админ верифицировал (verified=1) — показываем блок подтверждения КАК БЫЛО В МОДАЛКЕ */}
              {registered && isAdminVerified && (
                <div className="mt-3 bg-[#F0EFAE] border-2 border-[#D2AA4F] p-3 text-[#4E3B40]">
                  <p className="text-sm mb-2">
                    Please verify your wallet address:
                  </p>
                  <input
                    type="text"
                    placeholder={`Enter your ${networkLabel} wallet`}
                    defaultValue={entry?.wallet || ""}
                    onChange={(e) =>
                      setConfirmWalletByEntry((prev) => ({
                        ...prev,
                        [entry!.id]: e.target.value,
                      }))
                    }
                    className="w-full p-2 text-[#4E3B40] bg-[#C9C98A] outline-none mb-3"
                  />
                  <button
                      className={`bg-[#4E3B40] text-white w-full py-2 disabled:opacity-60 cnnctAprBtn ${
                      networkLabel === "SOL" ? "solCnnctAprBtn" : "cnnctAprBtn"
                    }`}
                    
                    disabled={confirmingId === entry!.id}
                  >
                    {confirmingId === entry!.id
                      ? "Confirming…"
                      : "Confirm Wallet"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl mt-12 mb-4 text-center">🕓 Past Giveaways</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {endedGiveaways.map((g) => (
          <div
            key={g.id}
            className="bg-[#B0B0B0] border-4 border-[#888] shadow-pixel p-4 opacity-70"
          >
            <img
              src={resolveImage(g.image)}
              alt={g.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl text-[#2f2f2f] mb-2">{g.name}</h2>
            <p className="text-[#2f2f2f]">{g.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
