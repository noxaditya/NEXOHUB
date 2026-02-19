"use client"

import Link from "next/link"
import {
  Film,
  Tv,
  Sparkles,
  Wallet,
  Gamepad2,
  Laptop,
} from "lucide-react"

const categories = [
  {
    name: "Movies",
    slug: "movies",
    icon: Film,
  },
  {
    name: "Web Series",
    slug: "webseries",
    icon: Tv,
  },
  {
    name: "Anime",
    slug: "anime",
    icon: Sparkles,
  },
  {
    name: "Earning Apps",
    slug: "earning-apps",
    icon: Wallet,
  },
  {
    name: "Games",
    slug: "games",
    icon: Gamepad2,
  },
  {
    name: "Software",
    slug: "software",
    icon: Laptop,
  },
]

export default function CategorySection() {
  return (
    <section className="px-6 py-8">
      <h2 className="text-xl font-bold mb-5">Categories</h2>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon

          return (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 rounded-full bg-[#111] border border-neutral-800 flex items-center justify-center hover:border-white transition">
                <Icon className="text-white" size={22} />
              </div>
              <span className="text-xs text-center">
                {cat.name}
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}