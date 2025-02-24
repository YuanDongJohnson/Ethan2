"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "首页", path: "/" },
    { name: "关于", path: "/about" },
    { name: "联系我们", path: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1
            className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? "text-gray-800" : "text-white"}`}
          >
            Ethan
          </h1>
          <nav>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`text-lg transition-colors duration-300 ${
                      scrolled
                        ? pathname === item.path
                          ? "text-blue-600 font-medium"
                          : "text-gray-600 hover:text-blue-600"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

