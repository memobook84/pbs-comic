'use client'

import { useBookmark } from '@/lib/contexts/BookmarkContext'
import Link from 'next/link'
import Image from 'next/image'

export default function BookmarksPage() {
  const { bookmarks } = useBookmark()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ブックマーク</h1>
      {bookmarks.length === 0 ? (
        <p className="text-gray-500">ブックマークはまだありません。</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {bookmarks.map((bookmark) => (
            <Link
              key={bookmark.slug}
              href={`/manga/${bookmark.slug}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={bookmark.coverImage}
                  alt={bookmark.title}
                  width={200}
                  height={300}
                  className="w-full h-auto object-cover aspect-[2/3]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-white text-lg font-semibold line-clamp-2">
                    {bookmark.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 