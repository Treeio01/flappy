// app/admin/page.tsx
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface Giveaway {
  id: number
  name: string
  project_link: string
  description: string
  image: string
  active: boolean
}

interface GiveawayEntry {
  id: number
  wallet: string
  discord: string
  giveaway_name: string
  verified: boolean
}

export default function AdminPanel() {
  const router = useRouter()
  const [entries, setEntries] = useState<GiveawayEntry[]>([])
  const [giveaways, setGiveaways] = useState<Giveaway[]>([])
  const [newGiveaway, setNewGiveaway] = useState<Omit<Giveaway, 'id'>>({
    name: "",
    project_link: "",
    description: "",
    image: "",
    active: true,
  })
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    const isAdmin = localStorage.getItem("is_admin") === "true"
    if (!token || !isAdmin) {
      //router.replace("/login")
    }

    setEntries([
      {
        id: 1,
        wallet: "0x123...abc",
        discord: "flappy#0420",
        giveaway_name: "Encore x Yardz",
        verified: false,
      },
      {
        id: 2,
        wallet: "0x456...def",
        discord: "yardz#0690",
        giveaway_name: "Another Project",
        verified: true,
      },
    ])

    setGiveaways([
      {
        id: 1,
        name: "Encore x Yardz",
        project_link: "https://www.alphabot.app/encore-x-yardz-5d562a",
        description: "Participate in the exclusive Encore x Yardz giveaway.",
        image: "/img/project1.png",
        active: true,
      },
    ])
  }, [])

  const verifyWallet = (id: number) => {
    setEntries(prev =>
      prev.map(e => (e.id === id ? { ...e, verified: true } : e))
    )
  }

  const handleAddGiveaway = () => {
    const id = giveaways.length + 1
    setGiveaways(prev => [...prev, { id, ...newGiveaway }])
    setNewGiveaway({ name: "", project_link: "", description: "", image: "", active: true })
  }

  const handleDeleteGiveaway = (id: number) => {
    setGiveaways(prev => prev.filter(g => g.id !== id))
  }

  const handleToggleEdit = (id: number) => {
    const g = giveaways.find(g => g.id === id)
    if (g) setNewGiveaway({ ...g })
  }

  const filteredEntries = entries.filter(entry =>
    entry.discord.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.wallet.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 bg-[#7bc5cd] min-h-screen text-white font-pixel-primary">
      <h1 className="text-3xl mb-6 text-center">Admin Panel</h1>

      {/* GIVEAWAY MANAGEMENT */}
      <div className="mb-12">
        <h2 className="text-2xl mb-4">🎁 Manage Giveaways</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {giveaways.map(g => (
            <div key={`giveaway-${g.id}`} className="bg-[#DBDA96] border-4 border-[#D2AA4F] p-4 text-[#4E3B40]">
              <h3 className="text-xl mb-2">{g.name}</h3>
              <p className="text-sm mb-1">{g.description}</p>
              <p className="text-sm mb-1 underline">{g.project_link}</p>
              <p className="text-sm mb-2">Status: {g.active ? "🟢 Active" : "🔴 Ended"}</p>
              <button className="mr-2 bg-[#4E3B40] text-white px-2 py-1" onClick={() => handleToggleEdit(g.id)}>Edit</button>
              <button className="bg-red-600 text-white px-2 py-1" onClick={() => handleDeleteGiveaway(g.id)}>Delete</button>
            </div>
          ))}
        </div>

        <h3 className="text-xl mb-2">➕ Add / Edit Giveaway</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="p-2 text-[#4E3B40] bg-[#C9C98A]"
            placeholder="Name"
            value={newGiveaway.name}
            onChange={e => setNewGiveaway({ ...newGiveaway, name: e.target.value })}
          />
          <input
            className="p-2 text-[#4E3B40] bg-[#C9C98A]"
            placeholder="Project Link"
            value={newGiveaway.project_link}
            onChange={e => setNewGiveaway({ ...newGiveaway, project_link: e.target.value })}
          />
          <input
            className="p-2 text-[#4E3B40] bg-[#C9C98A]"
            placeholder="Image URL"
            value={newGiveaway.image}
            onChange={e => setNewGiveaway({ ...newGiveaway, image: e.target.value })}
          />
          <input
            className="p-2 text-[#4E3B40] bg-[#C9C98A]"
            placeholder="Description"
            value={newGiveaway.description}
            onChange={e => setNewGiveaway({ ...newGiveaway, description: e.target.value })}
          />
        </div>
        <button className="mt-4 bg-[#4E3B40] px-4 py-2" onClick={handleAddGiveaway}>
          Save Giveaway
        </button>
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
                <tr
                  key={entry.id}
                  className="bg-[#DBDA96] text-[#4E3B40] text-center"
                >
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{entry.giveaway_name}</td>
                  <td className="border p-2">{entry.discord}</td>
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