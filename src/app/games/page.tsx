import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

const games = [
  {
    title: "Call of Duty",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
  },
  {
    title: "PUBG Mobile",
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330",
  },
]

export default function GamesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10">
        <h1 className="text-2xl font-extrabold mb-6">
          Games
        </h1>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {games.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}