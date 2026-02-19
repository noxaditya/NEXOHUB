"use client"

import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../lib/firebase"

type Product = {
  id: string
  title: string
  image: string
  link: string
  isPopular: boolean
}

export default function PopularSection() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function load() {
      const q = query(
        collection(db, "products"),
        where("isPopular", "==", true)
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

  if (products.length === 0) return null

  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold mb-4">Popular</h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
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
  )
}