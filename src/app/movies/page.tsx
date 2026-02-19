"use client"

import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../lib/firebase"

type Product = {
  id: string
  title: string
  image: string
  link: string
}

export default function MoviesPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function load() {
      const q = query(
        collection(db, "products"),
        where("category", "==", "movies")
      )
      const snap = await getDocs(q)
      setProducts(
        snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<Product, "id">),
        }))
      )
    }
    load()
  }, [])

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">
          Movies
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              image={p.image}
              link={p.link}
            />
          ))}
        </div>
      </section>
    </main>
  )
}