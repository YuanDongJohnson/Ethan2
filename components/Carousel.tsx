"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const images = [
  "https://img.picgo.net/2024/08/26/10000130739f0e00d2d187c2e4.md.jpg",
  "https://img.picgo.net/2024/08/26/10000130720ac0e0119076405c.md.jpg",
  "https://img.picgo.net/2024/08/26/1000013071b32014cd239d2162.md.jpg",
  "https://img.picgo.net/2024/08/26/1000013070f21d9a5fada3e56f.md.jpg",
  "https://img.picgo.net/2024/08/26/1000013074a1d79d0add056720.md.jpg",
  "https://img.picgo.net/2024/08/26/100001308034c456c1974c5577.md.jpg",
  "https://img.picgo.net/2024/08/26/1000013084dca8366ea72cb533.jpg",
]

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative h-[400px] md:h-[500px] w-full max-w-[1400px] mx-auto overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 1400px"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority={index === 0}
          />
        </div>
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition-colors duration-300"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition-colors duration-300"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  )
}

