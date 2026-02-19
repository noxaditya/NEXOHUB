"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../lib/firebase"

type SliderItem = {
  id: string
  imageUrl: string
  link: string
}

export default function HeroSlider() {
  const [sliders, setSliders] = useState<SliderItem[]>([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "sliders"))
      setSliders(
        snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<SliderItem, "id">),
        }))
      )
    }
    load()
  }, [])

  useEffect(() => {
    if (sliders.length === 0) return
    const i = setInterval(() => {
      setCurrent((c) =>
        c === sliders.length - 1 ? 0 : c + 1
      )
    }, 4000)
    return () => clearInterval(i)
  }, [sliders])

  if (sliders.length === 0) return null

  return (
    <section className="relative h-[55vh] w-full overflow-hidden">
      {sliders.map((s, index) => (
        <Link
          key={s.id}
          href={s.link}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.imageUrl}
            alt="slider"
            className="w-full h-full object-cover"
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).src =
                "https://via.placeholder.com/1200x600?text=NEXOHUB"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </Link>
      ))}
    </section>
  )
}