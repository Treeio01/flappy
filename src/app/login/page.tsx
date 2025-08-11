"use client"

import { useState } from "react"
import { api } from "@/lib/api"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const discordLogin = async () => {
    try {
      setLoading(true)
      setError("")

      const { url } = await api.auth.discordUrl()

      if (!url) throw new Error("No Discord URL received from API")

      window.location.href = url
    } catch (e: any) {
      setError(e.message || "Unexpected error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-[#7bc5cd] text-white font-pixel-primary px-4">
      <div className="w-full max-w-[400px] bg-[#DBDA96] border-[3px] border-[#D2AA4F] p-6 shadow-pixel flex flex-col gap-4 items-center">
        <h2 className="text-[#4E3B40] text-[24px]">LOGIN</h2>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          onClick={discordLogin}
          disabled={loading}
          className="bg-[#4E3B40] hover:opacity-90 transition-all text-white py-2 px-4 w-full disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "Login with Discord"}
        </button>
      </div>
    </div>
  )
}
