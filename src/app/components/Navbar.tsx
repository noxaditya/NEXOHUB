"use client"

import Link from "next/link"
import { Home, Search } from "lucide-react"
import { useState } from "react"
import SearchModal from "./SearchModal"

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-black border-b border-neutral-800">
        <div className="flex items-center justify-between px-4 md:px-6 py-4">
          
          {/* LEFT */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <Home size={20} />
            <span className="text-sm hidden sm:block">Home</span>
          </Link>

          {/* CENTER */}
          <h1 className="text-xl md:text-3xl font-extrabold tracking-widest text-white">
            NEXOHUB
          </h1>

          {/* RIGHT */}
          <button
            onClick={() => setOpenSearch(true)}
            className="text-white"
            aria-label="Search"
          >
            <Search size={22} />
          </button>
        </div>
      </header>

      {/* SEARCH MODAL */}
      <SearchModal
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      />
    </>
  )
}