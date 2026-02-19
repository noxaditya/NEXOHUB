"use client"

import { useEffect, useState } from "react"
import { X, Search } from "lucide-react"
import Link from "next/link"

const MOCK_DATA = [
  { title: "Naruto Shippuden", link: "/anime/naruto" },
  { title: "One Piece", link: "/anime/one-piece" },
  { title: "Avengers Endgame", link: "/movies" },
  { title: "Money Heist", link: "/webseries" },
  { title: "Cash Earning App", link: "/earning-apps" },
  { title: "PUBG Mobile", link: "/games" },
  { title: "Adobe Photoshop", link: "/software" },
]

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (open) setQuery("")
  }, [open])

  if (!open) return null

  const results = MOCK_DATA.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white">
      {/* HEADER */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-neutral-800">
        <Search className="text-white" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies, anime, apps..."
          className="flex-1 bg-transparent outline-none text-white text-lg placeholder:text-white/60"
        />
        <button onClick={onClose}>
          <X className="text-white" />
        </button>
      </div>

      {/* RESULTS */}
      <div className="px-4 py-4 space-y-3 overflow-y-auto">
        {query === "" && (
          <p className="text-white/70 text-sm">
            Start typing to search…
          </p>
        )}

        {results.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            onClick={onClose}
            className="
              block
              p-4
              rounded-xl
              bg-[#111]
              border
              border-neutral-800
              text-white
              hover:border-white/40
              transition
            "
          >
            {item.title}
          </Link>
        ))}

        {query !== "" && results.length === 0 && (
          <p className="text-white/70 text-sm">
            No results found
          </p>
        )}
      </div>
    </div>
  )
}