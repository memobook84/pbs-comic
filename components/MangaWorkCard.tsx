"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MangaSummary } from "@/lib/types"

interface MangaWorkCardProps {
  work: MangaSummary
}

export default function MangaWorkCard({ work }: MangaWorkCardProps) {
  const [imgSrc, setImgSrc] = useState(work.image)

  return (
    <div key={work.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <Link href={`/manga/${work.slug}`} className="group flex-shrink-0">
          <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Image
              src={imgSrc || "/placeholder.svg"}
              alt={work.title}
              width={100}
              height={150}
              className="object-cover group-hover:scale-105 transition-transform duration-200"
              onError={() => setImgSrc("/placeholder.svg")}
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <Link href={`/manga/${work.slug}`} className="hover:text-blue-600">
            <h4 className="text-lg font-medium mb-1 line-clamp-2">{work.title}</h4>
          </Link>
          <p className="text-sm text-gray-600 mb-2">{work.titleRomaji}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-500">{work.years}</span>
            <span
              className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                work.status === "連載中"
                  ? "bg-green-100 text-green-800"
                  : work.status === "休載中"
                    ? "bg-yellow-100 text-yellow-800"
                    : work.status === "第一部完結"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
              }`}
            >
              {work.status}
            </span>
          </div>
          <p className="text-sm text-gray-700 line-clamp-3">{work.description}</p>
        </div>
      </div>
    </div>
  )
} 