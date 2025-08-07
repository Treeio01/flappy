// app/giveaways/page.tsx
"use client"

import { useState } from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
const activeGiveaways = [
    {
        id: 1,
        name: "Encore x Yardz",
        project_link: "https://www.alphabot.app/encore-x-yardz-5d562a",
        description: "Participate in the exclusive Encore x Yardz giveaway.",
        image: "/img/project1.png",
    },
    {
        id: 2,
        name: "Another Project",
        project_link: "https://www.alphabot.app/another-project",
        description: "A second awesome project giveaway.",
        image: "/img/project2.png",
    },
]

const endedGiveaways = [
    {
        id: 3,
        name: "Closed Project",
        project_link: "https://www.alphabot.app/closed",
        description: "Giveaway ended.",
        image: "/img/project3.png",
    },
]

export default function DashboardPage() {
    const [wallet, setWallet] = useState("")
    const [selectedGiveaway, setSelectedGiveaway] = useState<null | number>(null)
    const [submitted, setSubmitted] = useState(false)
    const [showWinnerModal, setShowWinnerModal] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            //router.replace("/login")
        }
    }, [])
    const handleSubmit = (id: number) => {
        setSelectedGiveaway(id)
        setSubmitted(true)
        // TODO: send to telegram API/backend
    }

    const handleVerify = () => {
        // TODO: call API to verify
        setShowWinnerModal(false)
    }

    return (
        <div className="bg-[#7bc5cd] text-white font-pixel-primary px-4 py-10">
            <h1 className="text-3xl mb-6 text-center">🎁 Active Giveaways</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {activeGiveaways.map((giveaway) => (
                    <div key={giveaway.id} className="bg-[#DBDA96] border-4 border-[#D2AA4F] shadow-pixel p-4">
                        <img src={giveaway.image} alt={giveaway.name} className="w-full h-40 object-cover mb-4" />
                        <h2 className="text-xl text-[#4E3B40] mb-2">{giveaway.name}</h2>
                        <p className="text-[#4E3B40] mb-2">{giveaway.description}</p>
                        <a href={giveaway.project_link} target="_blank" className="text-blue-800 underline text-sm block mb-3">
                            View on Alphabot ↗
                        </a>
                        <input
                            type="text"
                            placeholder="Enter your wallet"
                            value={wallet}
                            onChange={(e) => setWallet(e.target.value)}
                            className="w-full p-2 text-[#4E3B40] bg-[#C9C98A] outline-none mb-2"
                        />
                        <button
                            className="bg-[#4E3B40] text-white w-full py-2"
                            onClick={() => handleSubmit(giveaway.id)}
                        >
                            Submit Wallet
                        </button>
                        {submitted && selectedGiveaway === giveaway.id && (
                            <p className="text-green-700 text-sm mt-2">You are registered for the giveaway!</p>
                        )}
                    </div>
                ))}
            </div>

            <h2 className="text-2xl mt-12 mb-4 text-center">🕓 Past Giveaways</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {endedGiveaways.map((giveaway) => (
                    <div key={giveaway.id} className="bg-[#B0B0B0] border-4 border-[#888] shadow-pixel p-4 opacity-70">
                        <img src={giveaway.image} alt={giveaway.name} className="w-full h-40 object-cover mb-4" />
                        <h2 className="text-xl text-[#2f2f2f] mb-2">{giveaway.name}</h2>
                        <p className="text-[#2f2f2f]">{giveaway.description}</p>
                    </div>
                ))}
            </div>

            {/* Modal for winner */}
            {showWinnerModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-[#DBDA96] p-6 border-4 border-[#D2AA4F] shadow-pixel text-[#4E3B40] max-w-[400px]">
                        <h3 className="text-xl mb-2">🎉 You Won!</h3>
                        <p className="mb-4">Please verify your wallet address:</p>
                        <p className="bg-[#C9C98A] p-2 mb-4 break-all">{wallet}</p>
                        <button
                            className="bg-[#4E3B40] text-white w-full py-2"
                            onClick={handleVerify}
                        >
                            Verify Wallet
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
