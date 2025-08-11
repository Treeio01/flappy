"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export const JoinBtn = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("auth_token")
    setIsAuth(!!token)
  }, [])

  return (
    <Link href={isAuth ? "/dashboard" : "/login"}>
      <button
        className="sml:px-7 px-4 shadow-join cursor-pointer sml:py-3 py-1 bg-[#E06119] border-[4px] font-pixel-secondary border-white text-white"
      >
        {isAuth ? "DASHBOARD" : "JOIN"}
      </button>
    </Link>
  )
}
