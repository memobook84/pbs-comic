'use client'

import { useBookmark } from '@/lib/contexts/BookmarkContext'

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={bookmarked ? 'currentColor' : 'none'}
        stroke="currentColor"
        className="w-6 h-6 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  )
} 