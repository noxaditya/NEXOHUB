import Navbar from "./components/Navbar"
import HeroSlider from "./components/HeroSlider"
import CategorySection from "./components/CategorySection"
import ProductCard from "./components/ProductCard"

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Premium Hero Slider */}
      <HeroSlider />

      {/* Categories Section */}
      <CategorySection />

      {/* Popular Section */}
      <section className="px-6 py-10">
        <h2 className="text-xl md:text-2xl font-bold mb-5">
          Popular
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          <ProductCard
            title="Naruto Shippuden"
            image="https://images.unsplash.com/photo-1616531770192-6eaea74c2456"
          />
          <ProductCard
            title="One Piece"
            image="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
          />
          <ProductCard
            title="Jujutsu Kaisen"
            image="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
          />
        </div>
      </section>

    </main>
  )
}