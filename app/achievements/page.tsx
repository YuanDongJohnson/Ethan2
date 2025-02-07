import { Carousel } from "@/components/Carousel"
import { BackToHomeButton } from "@/components/BackToHomeButton"
import Image from "next/image"

export default function Achievements() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Carousel />
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">成就</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href={`https://img.picgo.net/2024/08/27/1000013117${i}016742d41b5d8f6.md.jpg`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={`https://img.picgo.net/2024/08/27/1000013117${i}016742d41b5d8f6.md.jpg`}
                  alt={`成就${i}`}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
                <p className="mt-2 text-center text-gray-700 font-medium">成就 {i}</p>
              </a>
            ))}
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              在过去的十年里，Ethan凭借其卓越的专业技能和领导才能，在健身行业中取得了令人瞩目的成就。他成功地将炫功场健身会所打造成业内标杆，不仅提升了会所的知名度，还实现了业绩的稳步增长。作为共享之家智能休闲运动平台的负责人，他引领行业创新，推动了健身与科技的深度融合。如今，Ethan加入炼工场健身会所平台，以其独特的战略眼光和管理能力，必将带领该平台迈向新的高峰。
            </p>
          </div>
        </div>
      </div>
      <BackToHomeButton />
    </div>
  )
}

