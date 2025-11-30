"use client"

import { useEffect, useState } from "react"

const backgrounds = [
  "bg-yellow-300"
]

export function RandomBgHero({ children }: { children: React.ReactNode }) {
  const [bg, setBg] = useState("")

  useEffect(() => {
    setBg(backgrounds[Math.floor(Math.random() * backgrounds.length)])
  }, [])

  return (
    <section className={`w-full py-8 md:py-12 lg:py-16 border-b-2 border-black relative overflow-hidden ${bg}`}>
      {children}
    </section>
  )
}
