"use client"

import { useEffect, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function AuthCallbackPage() {
  const router = useRouter()
  const params = useSearchParams()
  const token = useMemo(() => params.get("token"), [params])

  useEffect(() => {
    if (!token) {
      // нет токена — кидаем на /login
      router.replace("/login?e=missing_token")
      return
    }

    // 1) кладём в localStorage (удобно для fetch)
    localStorage.setItem("auth_token", token)

    // 2) дублируем в cookie (чтобы middleware мог читать)
    // cookie на 7 дней
    document.cookie = `auth_token=${encodeURIComponent(token)}; Max-Age=${60*60*24*7}; Path=/; SameSite=Lax; Secure`

    // 3) редирект
    router.replace("/dashboard")
  }, [token, router])

  return (
    <div className="flex items-center justify-center h-screen bg-[#7bc5cd] text-white font-pixel-primary">
      <div className="bg-[#DBDA96] border-[3px] border-[#D2AA4F] text-[#4E3B40] p-6 shadow-pixel">
        Processing login…
      </div>
    </div>
  )
}
