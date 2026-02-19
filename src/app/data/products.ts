export type Product = {
  id: number
  title: string
  image: string
  link: string
  category: string
  isPopular: boolean
}

export const products: Product[] = [
  {
    id: 1,
    title: "Naruto Shippuden",
    image: "https://images.unsplash.com/photo-1616531770192-6eaea74c2456",
    link: "/anime/naruto",
    category: "anime",
    isPopular: true,
  },
  {
    id: 2,
    title: "Avengers Endgame",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    link: "/movies",
    category: "movies",
    isPopular: true,
  },
  {
    id: 3,
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    link: "/anime/one-piece",
    category: "anime",
    isPopular: false,
  },
]