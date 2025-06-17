"use client"

import { useState } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

interface MangaCoverProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export function MangaCover({ src, alt, width = 150, height = 225, priority = false, className = "" }: MangaCoverProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // 画像読み込みエラー時のフォールバック
  const handleError = () => {
    setError(true)
    setIsLoading(false)
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ width, height }}>
      {isLoading && <Skeleton className="absolute inset-0 z-10" />}

      {error ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-xs">表紙なし</div>
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          priority={priority}
          unoptimized={src.startsWith("http")} // 外部画像の場合は最適化をスキップ
        />
      )}
    </div>
  )
}
