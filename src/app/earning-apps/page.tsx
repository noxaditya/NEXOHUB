import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

const apps = [
  {
    title: "Cash Rewards App",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    title: "Task Earning App",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
]

export default function EarningAppsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10">
        <h1 className="text-2xl font-extrabold mb-6">
          Earning Apps
        </h1>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {apps.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}