import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { allMangaData } from "@/lib/manga-data"

const sidebarCategories = [
  "少年マンガ",
  "少女マンガ",
  "青年マンガ",
  "女性マンガ",
  "BL",
  "TL",
  "アクション",
  "バトル",
  "ファンタジー",
  "恋愛",
  "コメディ",
  "ホラー",
]

export default function HomePage() {
  // 100作品を確実に表示するため、最初の100作品を取得
  const displayManga = allMangaData.slice(0, 100)

  return (
    <div className="min-h-screen bg-white">
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-48 bg-gray-50 min-h-screen p-4">
          <nav>
            <ul className="space-y-1">
              {sidebarCategories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="block px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Manga Grid - 5 columns x 20 rows = 100 manga */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            {displayManga.map((manga) => (
              <Link key={manga.id} href={`/manga/${manga.slug}`} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={manga.image || "/placeholder.svg"}
                    alt={manga.title}
                    width={150}
                    height={200}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="mt-2 text-xs text-center text-gray-800 line-clamp-2 leading-tight">{manga.title}</h3>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              1
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              2
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              3
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              4
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              5
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
