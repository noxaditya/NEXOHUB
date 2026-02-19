import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

const series = [
  {
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330",
  },
  {
    title: "Money Heist",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  },
]

export default function WebseriesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10">
        <h1 className="text-2xl font-extrabold mb-6">
          Web Series
        </h1>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {series.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}