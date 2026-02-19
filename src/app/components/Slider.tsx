"use client"

import { useEffect, useState } from "react"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    link: "/anime"
  },
  {
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    link: "/movies"
  }
]

export default function Slider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
      <img
        src={slides[index].image}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  )
}