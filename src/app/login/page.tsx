"use client"

import { useState } from "react"
import { api } from "@/lib/api"
import leftclouds from "../../../public/img/left-clouds.png"
import rightclouds from "../../../public/img/right-clouds.png"
import Image from "next/image"
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
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#7bc5cd] text-white font-pixel-primary px-4 py-10 gap-6">
       <div className="flex z-[1] absolute justify-between w-full max-w-[calc(100%+200px)] xxl:px-[150px] lg:top-[100px] md:top-[50px] top-[25px] lg:px-[100px] md:px-[50px]">
                <Image
                    style={{ aspectRatio: "524 / 508" }}
                    src={leftclouds || "/placeholder.svg"}
                    alt="left clouds"
                    className="lg:h-[507px] mdbvp:w-full mds:w-[300px] sml:w-[250px] w-[180px] md:h-[370px] mds:h-[300px] sml:h-[250px] h-[180px] object-contain"
                />
                <Image
                    style={{ aspectRatio: "468 / 491" }}
                    src={rightclouds || "/placeholder.svg"}
                    alt="right clouds"
                    className="lg:h-[507px] mdbvp:w-full mds:w-[300px] sml:w-[250px] w-[180px] md:h-[370px] mds:h-[300px] sml:h-[250px] sm:h-[180px] h-[170px] object-contain"
                />
            </div>
      
      <div className="w-full max-w-[420px] z-30 bg-[#DBDA96] border-[3px] border-[#D2AA4F] p-6 shadow-pixel flex flex-col gap-4 items-center">
        <h2 className="text-[#4E3B40] text-[20px] text-center">Login to Flappy giveaways dashboard</h2>
        {error && <p className="text-red-600 text-sm w-full text-center">{error}</p>}
        <button
          onClick={discordLogin}
          disabled={loading}
          className="bg-[#4E3B40] hover:opacity-90 transition-all text-white py-2 px-4 w-full disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "Login with Discord"}
        </button>
      </div>

      <div className="w-full z-30 max-w-[720px] bg-[#DBDA96] border-[3px] border-[#D2AA4F] p-5 shadow-pixel text-[#4E3B40] leading-relaxed">
        <p className="mb-2">
          Over the past year, FlappyDAO has conducted more than 400 collaborations and sweepstakes.
          We choose only high-quality and honest projects in the first place.
        </p>
        <p>
          The best Collaboration Managers work with us. The best projects choose us.
        </p>
      </div>
    </div>
  )
}
