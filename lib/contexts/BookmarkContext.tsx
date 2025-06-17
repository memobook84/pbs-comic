'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Bookmark {
  slug: string
  title: string
  coverImage: string
}

interface BookmarkContextType {
  bookmarks: Bookmark[]
  addBookmark: (manga: Bookmark) => void
  removeBookmark: (slug: string) => void
  isBookmarked: (slug: string) => boolean
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined)

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks')
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const addBookmark = (manga: Bookmark) => {
    setBookmarks(prev => [...prev, manga])
  }

  const removeBookmark = (slug: string) => {
    setBookmarks(prev => prev.filter(bookmark => bookmark.slug !== slug))
  }

  const isBookmarked = (slug: string) => {
    return bookmarks.some(bookmark => bookmark.slug === slug)
  }

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export function useBookmark() {
  const context = useContext(BookmarkContext)
  if (context === undefined) {
    throw new Error('useBookmark must be used within a BookmarkProvider')
  }
  return context
} 