import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"

export type SliderItem = {
  id: string
  imageUrl: string
  link: string
}

export async function getSliders(): Promise<SliderItem[]> {
  const snapshot = await getDocs(collection(db, "sliders"))
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<SliderItem, "id">),
  }))
}