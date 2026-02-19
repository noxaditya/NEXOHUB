import Navbar from "../../components/Navbar"

const animeData: any = {
  naruto: {
    title: "Naruto Shippuden",
    banner:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe",
    episodes: [
      { ep: 1, link: "#" },
      { ep: 2, link: "#" },
      { ep: 3, link: "#" },
      { ep: 4, link: "#" },
    ],
  },
  "one-piece": {
    title: "One Piece",
    banner:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    episodes: [
      { ep: 1, link: "#" },
      { ep: 2, link: "#" },
      { ep: 3, link: "#" },
    ],
  },
}

export default function AnimeDetail({
  params,
}: {
  params: { slug: string }
}) {
  const anime = animeData[params.slug]

  if (!anime) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        Anime Not Found
      </main>
    )
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[40vh]">
        <img
          src={anime.banner}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end px-6 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {anime.title}
          </h1>
        </div>
      </div>

      {/* Episodes */}
      <section className="px-6 py-10">
        <h2 className="text-xl font-bold mb-4">
          Episodes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {anime.episodes.map((ep: any) => (
            <a
              key={ep.ep}
              href={ep.link}
              className="bg-[#111] border border-neutral-800 rounded-xl p-4 flex flex-col items-center hover:border-white/40 transition"
            >
              <span className="text-lg font-bold">
                EP {ep.ep}
              </span>
              <button className="mt-3 bg-white text-black text-sm px-4 py-1 rounded-md">
                Download
              </button>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}