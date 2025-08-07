"use client"

export default function LoginPage() {
  const discordLogin = () => {
    const clientId = "1402931431881314446"
    const redirectUri = encodeURIComponent("http://localhost:3000/api/discord/callback")
    const scope = "identify"
    const responseType = "code"

    const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`

    window.location.href = discordUrl
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#7bc5cd] text-white font-pixel-primary px-4">
      <div className="w-full max-w-[400px] bg-[#DBDA96] border-[3px] border-[#D2AA4F] p-6 shadow-pixel flex flex-col gap-4 items-center">
        <h2 className="text-[#4E3B40] text-[24px]">LOGIN</h2>
        <button
          onClick={discordLogin}
          className="bg-[#4E3B40] hover:opacity-90 transition-all text-white py-2 px-4 w-full"
        >
          Login with Discord
        </button>
      </div>
    </div>
  )
}
