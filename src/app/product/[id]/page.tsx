import { getProductById } from "../../../lib/products"
import Navbar from "../../components/Navbar"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}) {
  const product = await getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found | NEXOHUB",
    }
  }

  return {
    title: product.title + " | NEXOHUB",
    description: product.tags,
    keywords: product.tags,
    openGraph: {
      title: product.title,
      description: product.tags,
      images: [product.image],
    },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await getProductById(params.id)

  if (!product) return notFound()

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10 max-w-4xl mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-h-[70vh] object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-extrabold mb-3">
          {product.title}
        </h1>

        <p className="text-sm text-neutral-400 mb-4">
          Category: {product.category}
        </p>

        <p className="text-sm text-neutral-300 mb-6">
          {product.tags}
        </p>

        <a
          href={product.link}
          target="_blank"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold"
        >
          Download Now
        </a>
      </section>
    </main>
  )
}