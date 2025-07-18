import Image from "next/image"
import Link from "next/link"
import { Circle } from "lucide-react"
import { getMangaData } from "@/lib/manga-data-fixed"
import { notFound } from "next/navigation"
import BookmarkButton from '@/components/BookmarkButton'
import { IMangaVolume } from '@/lib/types'

export default async function MangaDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const manga = getMangaData(slug)

  if (!manga) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-2 py-6 md:px-6">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Left: Cover Image */}
          <div className="relative">
            <Image
              src={manga.image || "/placeholder.svg"}
              alt={manga.title}
              width={275}
              height={375}
              className="rounded-md shadow-md"
            />
            <BookmarkButton
              slug={manga.slug}
              title={manga.title}
              coverImage={manga.image}
            />
          </div>

          {/* Right: Description */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{manga.title}</h1>
            <h2 className="text-lg text-gray-600 mb-4">{manga.titleRomaji}</h2>

            <div className="flex items-center gap-2 mb-4">
              <Circle className="h-4 w-4 fill-current text-red-500 stroke-none" />
              <Circle className="h-4 w-4 fill-current text-gray-300 stroke-none" />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-700 mb-6 leading-relaxed">{manga.description}</p>

        {/* Info Grid（PCはテーブル、スマホは従来のグリッド） */}
        {/* スマホ用: 既存のdivグリッド */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:hidden">
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">作者</p>
            <p className="text-sm">
              <Link href={`/author/${manga.authorSlug}`} className="text-blue-600 hover:underline">
                {manga.author}
              </Link>
            </p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">連載期間</p>
            <p className="text-sm">{manga.years}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">巻数</p>
            <p className="text-sm">{manga.volumeCount}</p>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-gray-50">
            <p className="text-xs font-semibold text-gray-500">評価</p>
            <div className="flex items-center text-sm">
              <span className="mr-1">{manga.rating}</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>
        {/* PC用: 作者ページと同じテーブルデザイン */}
        <div className="hidden md:block mb-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 max-w-4xl">
              <tbody>
                <tr>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">作者</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">
                    <Link href={`/author/${manga.authorSlug}`} className="text-blue-600 hover:underline">
                      {manga.author}
                    </Link>
                  </td>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">連載期間</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">{manga.years}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">巻数</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">{manga.volumeCount}</td>
                  <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">評価</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">
                    <span className="mr-1">{manga.rating}</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Volumes Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {manga.volumes.filter((vol): vol is IMangaVolume => vol !== null).map((volume) => (
            <Link
              key={volume.number}
              href={`/manga/${manga.slug}/volume/${volume.number}`}
              className="group"
            >
              <div className="relative">
                <Image
                  src={volume.image ? volume.image : "/placeholder.svg"}
                  alt={`${manga.title} ${volume.number}巻`}
                  width={150}
                  height={225}
                  className="rounded-md shadow-md object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
              <div className="mt-px text-center">
                <p className="text-sm font-medium text-gray-900">{volume.number}巻</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
