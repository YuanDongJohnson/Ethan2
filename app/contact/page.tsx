import { Carousel } from "@/components/Carousel"
import { BackToHomeButton } from "@/components/BackToHomeButton"
import Image from "next/image"

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Carousel />
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">联系我们</h2>
          <p className="text-xl mb-8 text-gray-600">与Ethan连线</p>
          <div className="flex justify-center">
            <Image
              src="https://img.picgo.net/2024/08/27/100001313119c28e42cb00a71b.md.jpg"
              alt="联系二维码"
              width={280}
              height={280}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
      <BackToHomeButton />
    </div>
  )
}

