"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { api, IMG_URL } from "@/lib/api"

type Network = "EVM" | "SOL" | "BTC"

interface Giveaway {
  id: number
  name: string
  description: string
  image: string
  network?: Network
  active: boolean
  project_link?: string
}

interface Entry {
  id: number
  user_id: number
  giveaway_id: number
  wallet: string
  verified: boolean | 0 | 1
  winner?: boolean | 0 | 1
  needs_verification?: boolean | 0 | 1
  // сервер может возвращать вложенные объекты
  user?: { discord_name?: string }
  giveaway?: { name?: string }
}

export default function GiveawaysPage() {
  const router = useRouter()

  // данные
  const [activeGiveaways, setActiveGiveaways] = useState<Giveaway[]>([])
  const [endedGiveaways, setEndedGiveaways] = useState<Giveaway[]>([])
  const [entries, setEntries] = useState<Entry[]>([])

  // формы/состояния
  const [walletByGiveaway, setWalletByGiveaway] = useState<Record<number, string>>({})
  const [submittingId, setSubmittingId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  // верификация (модалка)
  const [verifyModalOpen, setVerifyModalOpen] = useState(false)
  const [verifyEntry, setVerifyEntry] = useState<Entry | null>(null)

  // для сравнения старых/новых записей при пуллинге
  const prevEntriesRef = useRef<Entry[] | null>(null)
  const pollingRef = useRef<number | null>(null)

  // проверка авторизации + первая загрузка
  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("auth_token")
      if (!token) {
        router.replace("/login")
        return
      }

      try {
        setLoading(true)
        const all = await api.giveaways.list()
        const act = (all as Giveaway[]).filter(g => g.active)
        const end = (all as Giveaway[]).filter(g => !g.active)
        setActiveGiveaways(act)
        setEndedGiveaways(end)

        const myEntries = await api.entries.list()
        setEntries(myEntries as Entry[])
        // зафиксируем «старое» состояние после первой загрузки
        prevEntriesRef.current = myEntries as Entry[]
      } catch (e) {
        console.error("Failed to load:", e)
      } finally {
        setLoading(false)
      }
    }
    init()

    return () => {
      // на всякий — при уходе со страницы остановим интервал
      if (pollingRef.current) window.clearInterval(pollingRef.current)
    }
  }, [router])

  // пуллинг: каждые 5 сек тянем свежие entries и ищем переход verified: 0 -> 1
  useEffect(() => {
    if (!entries.length) return

    // уже может быть активен
    if (pollingRef.current) window.clearInterval(pollingRef.current)

    pollingRef.current = window.setInterval(async () => {
      try {
        const fresh = (await api.entries.list()) as Entry[]

        const prev = prevEntriesRef.current || []
        const prevMap = new Map<number, Entry>()
        prev.forEach(e => prevMap.set(e.id, e))

        // ищем те, у кого verified поменялся с false/0 на true/1
        let promoted: Entry | null = null
        for (const now of fresh) {
          const before = prevMap.get(now.id)
          const wasVerified = !!(before && (before.verified === true || before.verified === 1))
          const nowVerified = !!(now.verified === true || now.verified === 1)

          if (!wasVerified && nowVerified) {
            promoted = now
            break
          }
        }

        // обновляем локально
        setEntries(fresh)
        prevEntriesRef.current = fresh

        if (promoted && !verifyModalOpen) {
          setVerifyEntry(promoted)
          setVerifyModalOpen(true)
        }
      } catch (e) {
        console.error("Polling error:", e)
      }
    }, 5000)

    return () => {
      if (pollingRef.current) window.clearInterval(pollingRef.current)
      pollingRef.current = null
    }
  }, [entries, verifyModalOpen])

  // мапа: giveaway_id -> entry
  const entryByGiveaway = useMemo(() => {
    const map = new Map<number, Entry>()
    for (const e of entries) map.set(e.giveaway_id, e)
    return map
  }, [entries])

  const isRegistered = (giveawayId: number) => entryByGiveaway.has(giveawayId)

  const needsVerification = (giveawayId: number) => {
    const e = entryByGiveaway.get(giveawayId)
    if (!e) return false
    const winner = !!(e.winner === true || e.winner === 1)
    const needs = !!(e.needs_verification === true || e.needs_verification === 1)
    const verified = !!(e.verified === true || e.verified === 1)
    return (winner || needs) && !verified
  }

  const resolveImage = (image: string) => {
    if (!image) return "/img/project1.png"
    if (/^https?:\/\//i.test(image)) return image
    const base = (IMG_URL || "").replace(/\/+$/, "")
    const path = image.replace(/^\/+/, "")
    return `${base}/${path}`
  }

  const handleWalletChange = (gid: number, value: string) => {
    setWalletByGiveaway(prev => ({ ...prev, [gid]: value }))
  }

  const handleSubmit = async (giveawayId: number) => {
    const wallet = (walletByGiveaway[giveawayId] || "").trim()
    if (!wallet) {
      alert("Введите адрес кошелька")
      return
    }

    try {
      setSubmittingId(giveawayId)
      const fd = new FormData()
      fd.append("giveaway_id", String(giveawayId))
      fd.append("wallet", wallet)

      const created = await api.entries.create(fd)

      setEntries(prev => {
        if (created && created.id) return [...prev, created as Entry]
        return [...prev, { id: Date.now(), user_id: 0, giveaway_id: giveawayId, wallet, verified: false } as Entry]
      })

      // сбросим input для этого гива
      setWalletByGiveaway(prev => ({ ...prev, [giveawayId]: "" }))
    } catch (e) {
      console.error("Ошибка регистрации:", e)
      alert("Ошибка при регистрации в розыгрыше")
    } finally {
      setSubmittingId(null)
    }
  }

  const openVerifyModal = (giveawayId: number) => {
    const e = entryByGiveaway.get(giveawayId)
    if (!e) return
    setVerifyEntry(e)
    setVerifyModalOpen(true)
  }

  const handleVerify = async () => {
    if (!verifyEntry) return
    try {
      await api.entries.verify(verifyEntry.id)
      setEntries(prev => prev.map(e => (e.id === verifyEntry.id ? { ...e, verified: true } : e)))
      setVerifyModalOpen(false)
      setVerifyEntry(null)
      alert("Кошелёк верифицирован. 🎉")
    } catch (e) {
      console.error("Ошибка верификации:", e)
      alert("Не удалось подтвердить кошелёк")
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#7bc5cd] text-white font-pixel-primary">
        Loading…
      </div>
    )
  }

  return (
    <div className="bg-[#7bc5cd] text-white min-h-screen font-pixel-primary px-4 py-10">
      <h1 className="text-3xl mb-6 text-center">🎁 Active Giveaways</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {activeGiveaways.map((g) => {
          const entry = entryByGiveaway.get(g.id)
          const registered = !!entry
          const canVerify = needsVerification(g.id)
          const submitting = submittingId === g.id

          return (
            <div key={g.id} className="bg-[#DBDA96] border-4 border-[#D2AA4F] shadow-pixel p-4">
              <img src={resolveImage(g.image)} alt={g.name} className="w-full h-40 object-cover mb-4" />
              <h2 className="text-xl text-[#4E3B40] mb-1">{g.name}</h2>
              {g.network && <p className="text-xs text-[#4E3B40] opacity-80 mb-1">Network: {g.network}</p>}
              <p className="text-[#4E3B40] mb-2">{g.description}</p>
              {g.project_link && (
                <a href={g.project_link} target="_blank" className="text-blue-800 underline text-sm block mb-3">
                  View on Alphabot ↗
                </a>
              )}

              {!registered ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter your wallet"
                    value={walletByGiveaway[g.id] || ""}
                    onChange={(e) => handleWalletChange(g.id, e.target.value)}
                    className="w-full p-2 text-[#4E3B40] bg-[#C9C98A] outline-none mb-2"
                  />
                  <button
                    className="bg-[#4E3B40] text-white w-full py-2 disabled:opacity-60"
                    onClick={() => handleSubmit(g.id)}
                    disabled={submitting}
                  >
                    {submitting ? "Submitting…" : "Submit Wallet"}
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="text-green-700 text-sm">
                    Registered ✅ {entry?.verified ? "(verified)" : "(pending)"}
                  </p>
                  {canVerify && (
                    <button
                      className="bg-[#4E3B40] text-white w-full py-2"
                      onClick={() => openVerifyModal(g.id)}
                    >
                      Verify Wallet
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <h2 className="text-2xl mt-12 mb-4 text-center">🕓 Past Giveaways</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {endedGiveaways.map((g) => (
          <div key={g.id} className="bg-[#B0B0B0] border-4 border-[#888] shadow-pixel p-4 opacity-70">
            <img src={resolveImage(g.image)} alt={g.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl text-[#2f2f2f] mb-2">{g.name}</h2>
            <p className="text-[#2f2f2f]">{g.description}</p>
          </div>
        ))}
      </div>

      {/* Verify Modal */}
      {verifyModalOpen && verifyEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#DBDA96] p-6 border-4 border-[#D2AA4F] shadow-pixel text-[#4E3B40] max-w-[420px] w-full">
            <h3 className="text-xl mb-2">🎉 You Won!</h3>
            <p className="mb-4">Please verify your wallet address:</p>
            <p className="bg-[#C9C98A] p-2 mb-4 break-all">{verifyEntry.wallet}</p>
            <div className="flex gap-3">
              <button className="bg-[#4E3B40] text-white w-full py-2" onClick={handleVerify}>
                Verify Wallet
              </button>
              <button
                className="bg-[#91616E] text-white w-full py-2"
                onClick={() => {
                  setVerifyModalOpen(false)
                  setVerifyEntry(null)
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
