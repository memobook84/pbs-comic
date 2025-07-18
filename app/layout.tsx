import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BookmarkProvider } from '@/lib/contexts/BookmarkContext'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moss Comic',
  description: '人気のマンガ作品を紹介するホームページです。',
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <BookmarkProvider>
          <SiteHeader />
          <main>{children}</main>
        </BookmarkProvider>
      </body>
    </html>
  )
}
