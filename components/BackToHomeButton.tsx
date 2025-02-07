import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/outline"

export function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
    >
      <HomeIcon className="h-6 w-6" />
    </Link>
  )
}

