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
              width={220}
              height={300}
              className="rounded-lg shadow-md"
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

        {/* Info Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 bg-gray-100 px-4 py-2 w-24 text-sm">作者</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">
                  <Link href={`/author/${manga.authorSlug}`} className="text-blue-600 hover:underline">
                    {manga.author}
                  </Link>
                </td>
                <td className="border border-gray-300 bg-gray-100 px-4 py-2 w-24 text-sm">連載期間</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{manga.years}</td>
                <td className="border border-gray-300 bg-gray-100 px-4 py-2 w-24 text-sm">巻数</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{manga.volumeCount}</td>
                <td className="border border-gray-300 bg-gray-100 px-4 py-2 w-24 text-sm">評価</td>
                <td className="border border-gray-300 px-4 py-2 text-sm flex items-center">
                  <span className="mr-1">{manga.rating}</span>
                  <span className="text-yellow-500">★★★★★</span>
                </td>
              </tr>
            </tbody>
          </table>
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
                  className="rounded-lg shadow-md object-cover transition-transform group-hover:scale-105"
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
