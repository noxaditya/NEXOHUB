import { collection, getDocs, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"

export type Product = {
  id: string
  title: string
  image: string
  tags: string
  category: string
  link: string
  isPopular: boolean
}

const productRef = collection(db, "products")

export async function getAllProducts(): Promise<Product[]> {
  const snap = await getDocs(productRef)
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Product, "id">),
  }))
}

export async function getProductById(id: string): Promise<Product | null> {
  const snap = await getDoc(doc(db, "products", id))
  if (!snap.exists()) return null
  return {
    id: snap.id,
    ...(snap.data() as Omit<Product, "id">),
  }
}