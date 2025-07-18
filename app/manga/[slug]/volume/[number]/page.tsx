import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Circle, ExternalLink, ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react"
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
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-transform hover:scale-125"
          >
            <span className="inline-block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" fill="transparent" stroke="#bbb" strokeWidth="2"/>
                <path d="M23 13L16 20L23 27" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        )}
        {nextVolume && (
          <Link
            href={`/manga/${slug}/volume/${nextVolume.number}`}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 transition-transform hover:scale-125"
          >
            <span className="inline-block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" fill="transparent" stroke="#bbb" strokeWidth="2"/>
                <path d="M17 13L24 20L17 27" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
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
                width={275}
                height={375}
                className="rounded-md shadow-md"
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

        {/* Info Grid（PCはテーブル、スマホは従来のグリッド） */}
        {/* スマホ用: 既存のdivグリッド */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:hidden">
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">タイトル</p>
            <p className="text-sm">{volume.title}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">発売日</p>
            <p className="text-sm">{volume.releaseDate}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">ページ数</p>
            <p className="text-sm">{volume.pages}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">作者</p>
            <p className="text-sm">
              <Link href={`/author/${volume.authorSlug}`} className="text-blue-600 hover:underline">
                {volume.author}
              </Link>
            </p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">出版社</p>
            <p className="text-sm">{volume.publisher}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">評価</p>
            <div className="flex items-center text-sm">
              <span className="mr-1">{volume.rating}</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>
        {/* PC用: 作品ページと同じテーブルデザイン（2行4列） */}
        <div className="hidden md:block mb-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 max-w-4xl">
              <tbody>
                <tr>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">タイトル</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">{volume.title}</td>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">発売日</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">{volume.releaseDate}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">ページ数</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">{volume.pages}</td>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">作者</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">
                    <Link href={`/author/${volume.authorSlug}`} className="text-blue-600 hover:underline">
                      {volume.author}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">出版社</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">{volume.publisher}</td>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">評価</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">
                    <span className="mr-1">{volume.rating}</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </td>
                </tr>
              </tbody>
            </table>
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
