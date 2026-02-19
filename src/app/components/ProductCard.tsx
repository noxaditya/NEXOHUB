"use client"

export default function ProductCard({
  title,
  image,
  link,
}: {
  title: string
  image: string
  link?: string
}) {
  const safeLink = link && link.trim() !== "" ? link : "/"

  function handleDownload(e: React.MouseEvent) {
    e.stopPropagation()
    window.open(safeLink, "_blank")
  }

  return (
    <div className="min-w-[160px] md:min-w-[200px]">

      <div className="bg-[#0f0f0f] border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">

        <img
          src={image}
          alt={title}
          className="w-full h-[260px] object-cover"
          loading="lazy"
        />

        <div className="p-3 space-y-2">
          <h3 className="text-sm font-semibold truncate">
            {title}
          </h3>

          {/* 🔥 DOWNLOAD BUTTON BACK */}
          <button
            onClick={handleDownload}
            className="w-full text-sm bg-white text-black py-2 rounded font-semibold hover:bg-neutral-200 transition"
          >
            Download Now
          </button>
        </div>

      </div>

    </div>
  )
}