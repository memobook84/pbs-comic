import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Circle, ExternalLink, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { getMangaAndVolumeData } from "@/lib/manga-data-fixed"
import { notFound } from "next/navigation"

export default async function VolumeDetailPage({ params }: { params: { slug: string; number: string } }) {
  const { slug, number } = await params
  const volumeNumber = Number.parseInt(number)
  const data = await getMangaAndVolumeData(slug, volumeNumber)

  if (!data) {
    notFound()
  }

  const { manga, volume } = data

  // 前後の巻の情報を取得
  const prevVolume = manga.volumes.find((v) => v?.number === volumeNumber - 1)
  const nextVolume = manga.volumes.find((v) => v?.number === volumeNumber + 1)

  // Amazonリンクを生成する関数
  const generateAmazonUrl = (title: string, volumeNumber: number) => {
    // 実際のAmazonリンクがない場合は検索URLを生成
    const searchQuery = encodeURIComponent(`${title} ${volumeNumber}巻`)
    return `https://www.amazon.co.jp/s?k=${searchQuery}&i=stripbooks`
  }

  const amazonUrl = volume.amazonUrl || generateAmazonUrl(manga.title, volume.number)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-2 py-6 md:px-6 relative">
        {/* Navigation Arrows */}
        {prevVolume && (
          <Link
            href={`/manga/${slug}/volume/${prevVolume.number}`}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-50 bg-gray-200 hover:bg-gray-300 rounded-none py-14 shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="h-8 w-8 text-gray-800" />
          </Link>
        )}
        {nextVolume && (
          <Link
            href={`/manga/${slug}/volume/${nextVolume.number}`}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-gray-200 hover:bg-gray-300 rounded-none py-14 shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="h-8 w-8 text-gray-800" />
          </Link>
        )}

        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              ホーム
            </Link>
            <span className="mx-2">{">"}</span>
            <Link href={`/manga/${slug}`} className="text-blue-600 hover:underline">
              {manga.title}
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-gray-600">巻 {volume.number}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 pt-4 md:pt-0">
          {/* Left: Cover Image with Navigation */}
          <div className="flex justify-center w-full md:w-auto md:justify-start gap-4 relative">
            <div className="relative">
              <Image
                src={volume.image || "/placeholder.svg"}
                alt={`${manga.title} 巻 ${volume.number}`}
                width={220}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-2xl font-bold mb-2">{manga.title} 第{volume.number}巻</h1>
            {volume.title !== manga.title && volume.title !== `巻 ${volume.number}` && (
              <h2 className="text-lg text-gray-600 mb-4">
                {volume.title}
              </h2>
            )}

            <div className="flex items-center gap-2 mb-4">
              <Circle className="h-4 w-4 fill-current text-red-500 stroke-none" />
              <Circle className="h-4 w-4 fill-current text-gray-300 stroke-none" />
            </div>

            <div className="flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700 p-3">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="outline" asChild className="flex items-center gap-2">
                <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Amazonで購入
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          {volume.description || `${manga.title}の第${volume.number}巻です。`}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 md:border md:border-gray-200 md:p-4 rounded-lg">
          <div className="flex flex-col p-2 rounded-lg bg-gray-50 md:bg-transparent md:p-0">
            <p className="text-xs font-semibold text-gray-500">タイトル</p>
            <p className="text-sm">{volume.title}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50 md:bg-transparent md:p-0">
            <p className="text-xs font-semibold text-gray-500">発売日</p>
            <p className="text-sm">{volume.releaseDate}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50 md:bg-transparent md:p-0">
            <p className="text-xs font-semibold text-gray-500">ページ数</p>
            <p className="text-sm">{volume.pages}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50 md:bg-transparent md:p-0">
            <p className="text-xs font-semibold text-gray-500">作者</p>
            <p className="text-sm">
              <Link href={`/author/${volume.authorSlug}`} className="text-blue-600 hover:underline">
                {volume.author}
              </Link>
            </p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50 md:bg-transparent md:p-0">
            <p className="text-xs font-semibold text-gray-500">出版社</p>
            <p className="text-sm">{volume.publisher}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50 md:bg-transparent md:p-0">
            <p className="text-xs font-semibold text-gray-500">評価</p>
            <div className="flex items-center text-sm">
              <span className="mr-1">{volume.rating}</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Other Volumes */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">他の巻</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => {
              const otherVolume = volumeNumber - 3 + i
              if (otherVolume <= 0 || otherVolume === volumeNumber || otherVolume > manga.volumeCount) return null
              return (
                <Link key={i} href={`/manga/${slug}/volume/${otherVolume}`} className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src={manga.volumes[otherVolume - 1]?.image || "/placeholder.svg?height=150&width=100"}
                      alt={`${manga.title} 巻 ${otherVolume}`}
                      width={100}
                      height={150}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center text-gray-800">巻 {otherVolume}</p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Back to All Volumes */}
        <div className="flex justify-center mt-8">
          <Link
            href={`/manga/${slug}`}
            className="inline-block px-6 py-3 text-blue-600 hover:text-blue-800 transition-colors"
          >
            全巻一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
