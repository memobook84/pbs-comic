import Link from "next/link"
import { Search, User, Bookmark, Heart, ShoppingCart, Home } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="bg-[#006141] text-white px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-3xl font-bold hidden sm:block">
            PBS COMIC
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input type="search" placeholder="マンガを検索" className="w-64 bg-white text-black" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
              <Link href="/">
                <Home className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700" asChild>
              <Link href="/bookmarks">
                <Heart className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
