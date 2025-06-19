'use client'

import { useBookmark } from '@/lib/contexts/BookmarkContext'
import { Heart } from 'lucide-react'

interface BookmarkButtonProps {
  slug: string
  title: string
  coverImage: string
}

export default function BookmarkButton({ slug, title, coverImage }: BookmarkButtonProps) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmark()
  const bookmarked = isBookmarked(slug)

  const handleClick = () => {
    if (bookmarked) {
      removeBookmark(slug)
    } else {
      addBookmark({ slug, title, coverImage })
    }
  }

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-2 right-2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
      aria-label={bookmarked ? 'ブックマークから削除' : 'ブックマークに追加'}
    >
      <Heart
        className={`w-6 h-6 ${bookmarked ? 'fill-red-500 text-red-500' : 'text-blue-600'}`}
        fill={bookmarked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={2}
      />
    </button>
  )
} 