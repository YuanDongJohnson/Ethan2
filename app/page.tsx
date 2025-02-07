import { Carousel } from "@/components/Carousel"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="block mb-2">专业体态指导</span>
            <span className="block text-3xl md:text-5xl text-yellow-300">个性化训练计划</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 animate-fade-in-up animation-delay-300">
            让 Ethan 带你开启健康生活新篇章
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg animate-fade-in-up animation-delay-600"
          >
            立即联系
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Carousel />

      <section className="container mx-auto my-20 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">体态课堂讲座</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ethan作为一名专业运动讲师，拥有丰富的教学经验和深厚的专业知识。曾参与珠海拱北鱼美人门店工作人员的体态讲座，为众多参与者提供了实用的运动指导和建议。注重培养学员的运动习惯，通过科学的方法帮助他们塑造健康体态。
            热爱运动，善于激发学员的运动热情。在教学过程中，注重个性化指导，根据每位学员的需求制定合适的训练计划。
          </p>
          <Link
            href="/about"
            className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg"
          >
            了解更多
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

