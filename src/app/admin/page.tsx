"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { api, IMG_URL } from "@/lib/api"

type Network = "EVM" | "SOL" | "BTC"

interface Giveaway {
  id: number
  name: string
  network: Network
  description: string
  image: string
  active: boolean
}

interface EntryUser { discord_name?: string }
interface EntryGiveaway { name?: string }

interface GiveawayEntry {
  id: number
  wallet: string
  verified: boolean
  user: EntryUser
  giveaway: EntryGiveaway
}

export default function AdminPanel() {
  const router = useRouter()
  const [entries, setEntries] = useState<GiveawayEntry[]>([])
  const [giveaways, setGiveaways] = useState<Giveaway[]>([])

  // форма добавления/редактирования
  const [editingId, setEditingId] = useState<number | null>(null)
  const [newGiveaway, setNewGiveaway] = useState<Omit<Giveaway, "id">>({
    name: "",
    network: "EVM",
    description: "",
    image: "",
    active: true,
  })
  const [imageFile, setImageFile] = useState<File | null>(null)

  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const init = async () => {
      const isAdmin = await api.auth.isAdmin()
      if (!isAdmin) {
        router.replace("/login")
        return
      }

      try {
        const [gives, users] = await Promise.all([
          api.giveaways.list(),
          api.entries.list(),
        ])
        setGiveaways(gives)
        setEntries(users)
      } catch (err) {
        console.error("Ошибка загрузки данных:", err)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [router])

  const verifyWallet = async (id: number) => {
    try {
      await api.entries.verify(id)
      setEntries(prev =>
        prev.map(e => (e.id === id ? { ...e, verified: true } : e))
      )
    } catch (err) {
      console.error("Ошибка при верификации:", err)
    }
  }

  const handleAddOrUpdateGiveaway = async () => {
    try {
      setSaving(true)
      const formData = new FormData()
      formData.append("name", newGiveaway.name)
      formData.append("network", newGiveaway.network)
      formData.append("description", newGiveaway.description)
      formData.append("active", String(newGiveaway.active))
      if (imageFile) formData.append("image", imageFile)

      if (editingId) {
        // UPDATE
        const updated = await api.giveaways.update(editingId, formData)
        setGiveaways(prev => prev.map(g => (g.id === editingId ? updated : g)))
      } else {
        // CREATE
        const created = await api.giveaways.create(formData)
        setGiveaways(prev => [...prev, created])
      }

      // reset
      setNewGiveaway({ name: "", network: "EVM", description: "", image: "", active: true })
      setImageFile(null)
      setEditingId(null)
    } catch (err) {
      console.error("Ошибка при сохранении гива:", err)
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteGiveaway = async (id: number) => {
    try {
      await api.giveaways.delete(id)
      setGiveaways(prev => prev.filter(g => g.id !== id))
      if (editingId === id) {
        setEditingId(null)
        setNewGiveaway({ name: "", network: "EVM", description: "", image: "", active: true })
        setImageFile(null)
      }
    } catch (err) {
      console.error("Ошибка при удалении:", err)
    }
  }

  const handleToggleEdit = (id: number) => {
    const g = giveaways.find(g => g.id === id)
    if (!g) return
    setEditingId(id)
    setNewGiveaway({
      name: g.name,
      network: g.network,
      description: g.description,
      image: g.image,
      active: g.active,
    })
    setImageFile(null)
  }

  // <<<— ТОГГЛ СТАТУСА (End/Activate)
  const handleToggleStatus = async (id: number) => {
    const g = giveaways.find(x => x.id === id)
    if (!g) return
    try {
      const updated = await api.giveaways.end(id)
      window.location.reload()
    } catch (e) {
      console.error("Не удалось изменить статус гива:", e)
    }
  }

  const filteredEntries = entries.filter(entry =>
    (entry.user?.discord_name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    (entry.wallet || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="p-6 bg-[#7bc5cd] min-h-screen text-white font-pixel-primary">
        <h1 className="text-3xl mb-6 text-center">Загрузка...</h1>
      </div>
    )
  }

  return (
    <div className="p-6 bg-[#7bc5cd] min-h-screen text-white font-pixel-primary">
      <h1 className="text-3xl mb-6 text-center">Admin Panel</h1>

      {/* GIVEAWAY MANAGEMENT */}
      <div className="mb-12">
        <h2 className="text-2xl mb-4">🎁 Manage Giveaways</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {giveaways.map(g => (
            <div key={`giveaway-${g.id}`} className="bg-[#DBDA96] border-4 border-[#D2AA4F] p-4 text-[#4E3B40]">
              <img src={IMG_URL + g.image} alt={g.name} className="w-full h-32 object-cover mb-3" />
              <h3 className="text-xl mb-1">{g.name}</h3>
              <p className="text-sm mb-1">Network: {g.network}</p>
              <p className="text-sm mb-1">{g.description}</p>
              <p className="text-sm mb-3">Status: {g.active ? "🟢 Active" : "🔴 Ended"}</p>

              <div className="flex flex-wrap gap-2">
                <button
                  className="bg-[#4E3B40] text-white px-3 py-1"
                  onClick={() => handleToggleEdit(g.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1"
                  onClick={() => handleDeleteGiveaway(g.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-[#91616E] text-white px-3 py-1"
                  onClick={() => handleToggleStatus(g.id)}
                >
                  {g.active ? "End Giveaway" : "Activate"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl mb-2">{editingId ? "✏️ Edit Giveaway" : "➕ Add Giveaway"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="p-2 text-[#4E3B40] bg-[#C9C98A]"
            placeholder="Name"
            value={newGiveaway.name}
            onChange={e => setNewGiveaway({ ...newGiveaway, name: e.target.value })}
          />
          <select
            className="p-2 text-[#4E3B40] bg-[#C9C98A]"
            value={newGiveaway.network}
            onChange={e => setNewGiveaway({ ...newGiveaway, network: e.target.value as Network })}
          >
            <option value="EVM">EVM</option>
            <option value="SOL">SOL</option>
            <option value="BTC">BTC</option>
          </select>
          <textarea
            className="p-2 text-[#4E3B40] bg-[#C9C98A] md:col-span-2"
            placeholder="Description"
            value={newGiveaway.description}
            onChange={e => setNewGiveaway({ ...newGiveaway, description: e.target.value })}
          />
          <div className="flex items-center gap-2 md:col-span-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={newGiveaway.active}
                onChange={(e) => setNewGiveaway({ ...newGiveaway, active: e.target.checked })}
              />
              <span className="text-[#4E3B40]">Active</span>
            </label>
          </div>
          <input
            type="file"
            accept="image/*"
            className="p-2 text-[#4E3B40] bg-[#C9C98A] md:col-span-2"
            onChange={e => {
              const file = e.target.files?.[0]
              if (file) setImageFile(file)
            }}
          />
        </div>
        <div className="mt-4 flex gap-2">
          <button
            className="bg-[#4E3B40] px-4 py-2 disabled:opacity-60"
            onClick={handleAddOrUpdateGiveaway}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Giveaway"}
          </button>
          {editingId && (
            <button
              className="bg-[#888] px-4 py-2"
              onClick={() => {
                setEditingId(null)
                setNewGiveaway({ name: "", network: "EVM", description: "", image: "", active: true })
                setImageFile(null)
              }}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      {/* PARTICIPANTS */}
      <div>
        <h2 className="text-2xl mb-4">🧑 Participants</h2>
        <input
          type="text"
          placeholder="Search Discord or Wallet"
          className="mb-4 p-2 w-full max-w-md text-[#4E3B40] bg-[#C9C98A]"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#4E3B40] text-white">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Giveaway</th>
                <th className="p-2 border">Discord</th>
                <th className="p-2 border">Wallet</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntries.map((entry, i) => (
                <tr key={entry.id} className="bg-[#DBDA96] text-[#4E3B40] text-center">
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{entry.giveaway?.name || "-"}</td>
                  <td className="border p-2">{entry.user?.discord_name || "-"}</td>
                  <td className="border p-2">{entry.wallet}</td>
                  <td className="border p-2">
                    {entry.verified ? "✅ Verified" : "⏳ Pending"}
                  </td>
                  <td className="border p-2">
                    {!entry.verified && (
                      <button
                        className="bg-[#4E3B40] text-white px-3 py-1"
                        onClick={() => verifyWallet(entry.id)}
                      >
                        Verify
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
