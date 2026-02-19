import Navbar from "../components/Navbar"
import Link from "next/link"

const animeList = [
  {
    name: "Naruto Shippuden",
    slug: "naruto",
    image:
      "https://images.unsplash.com/photo-1616531770192-6eaea74c2456",
  },
  {
    name: "One Piece",
    slug: "one-piece",
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
  },
]

export default function AnimePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6">
          Anime
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {animeList.map((anime) => (
            <Link
              key={anime.slug}
              href={`/anime/${anime.slug}`}
              className="group"
            >
              <div className="bg-[#111] border border-neutral-800 rounded-xl overflow-hidden hover:scale-105 transition">
                <img
                  src={anime.image}
                  className="w-full h-[260px] object-cover"
                />
                <div className="p-3">
                  <h2 className="text-sm font-semibold">
                    {anime.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}