// 漫画APIからデータを取得する関数

import { cache } from "react"
import { mangaData } from "../manga-data"
import type { Manga, MangaVolume } from "../types"

export type MangaVolume = {
  id: number
  number: number
  title: string
  image: string
  releaseDate: string
  pages: number
}

export type Manga = {
  id: number
  title: string
  titleRomaji: string
  image: string
  description: string
  author: string
  authorSlug: string
  publisher: string
  serialization: string
  years: string
  status: string
  volumeCount: number
  rating: number
  genres: string[]
  volumes: MangaVolume[]
}

// キャッシュされた漫画データ取得関数
export const getManga = cache(async (slug: string): Promise<Manga | null> => {
  try {
    // 実際のAPIエンドポイントに置き換えてください
    // 例: const response = await fetch(`https://api.mangadb.org/manga/${slug}`)

    // デモ用のモックデータ
    const mangaDatabase: Record<string, Manga> = {
      "kimetsu-no-yaiba": {
        id: 2,
        title: "鬼滅の刃",
        titleRomaji: "Kimetsu no Yaiba",
        image: "https://covers.openlibrary.org/b/id/12860750-L.jpg", // 例として使用
        description:
          "大正時代、家族を鬼に殺された少年・炭治郎は、唯一生き残った妹の禰豆子が鬼になってしまったことを知る。妹を人間に戻し、家族を殺した鬼を討つため、炭治郎は「鬼殺隊」と呼ばれる組織に入り、剣術の修行に励む。",
        author: "吾峠呼世晴",
        authorSlug: "gotouge-koyoharu",
        publisher: "集英社",
        serialization: "週刊少年ジャンプ",
        years: "2016-2020",
        status: "完結",
        volumeCount: 23,
        rating: 4.9,
        genres: ["少年", "アクション", "ファンタジー", "歴史"],
        volumes: [
          {
            id: 1,
            number: 1,
            title: "残酷な世界",
            image: "https://m.media-amazon.com/images/I/51j8kVTXQoL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
            releaseDate: "2016-06-03",
            pages: 192,
          },
          {
            id: 2,
            number: 2,
            title: "それぞれの鬼退治",
            image: "https://m.media-amazon.com/images/I/51ryMZsRKqL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
            releaseDate: "2016-08-04",
            pages: 196,
          },
        ],
      },
      "one-piece": {
        id: 1,
        title: "ONE PIECE",
        titleRomaji: "One Piece",
        image: "https://covers.openlibrary.org/b/id/12645114-L.jpg", // 例として使用
        description:
          "海賊王を夢見る少年モンキー・D・ルフィを主人公とする、「ひとつなぎの大秘宝（ワンピース）」を巡る海洋冒険ロマン。",
        author: "尾田栄一郎",
        authorSlug: "oda-eiichiro",
        publisher: "集英社",
        serialization: "週刊少年ジャンプ",
        years: "1997-",
        status: "連載中",
        volumeCount: 107,
        rating: 4.8,
        genres: ["少年", "アクション", "冒険", "コメディ"],
        volumes: Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          number: i + 1,
          title: `Volume ${i + 1}`,
          image: `https://covers.openlibrary.org/b/id/${12645114 + i}-L.jpg`, // 例として使用
          releaseDate: `199${7 + i}-12-24`,
          pages: 200 + i,
        })),
      },
    }

    return mangaDatabase[slug] || null
  } catch (error) {
    console.error("Failed to fetch manga:", error)
    return null
  }
})

// 全ての漫画リストを取得
export const getAllManga = cache(async (): Promise<Manga[]> => {
  try {
    // 実際のAPIエンドポイントに置き換えてください
    // 例: const response = await fetch('https://api.mangadb.org/manga')

    // デモ用のモックデータ
    return [
      {
        id: 1,
        title: "ONE PIECE",
        titleRomaji: "One Piece",
        image: "https://covers.openlibrary.org/b/id/12645114-L.jpg",
        description: "海賊王を夢見る少年モンキー・D・ルフィの冒険物語。",
        author: "尾田栄一郎",
        authorSlug: "oda-eiichiro",
        publisher: "集英社",
        serialization: "週刊少年ジャンプ",
        years: "1997-",
        status: "連載中",
        volumeCount: 107,
        rating: 4.8,
        genres: ["少年", "アクション", "冒険"],
        volumes: [],
      },
      {
        id: 2,
        title: "鬼滅の刃",
        titleRomaji: "Kimetsu no Yaiba",
        image: "https://covers.openlibrary.org/b/id/12860750-L.jpg",
        description: "鬼と戦う少年の物語。",
        author: "吾峠呼世晴",
        authorSlug: "gotouge-koyoharu",
        publisher: "集英社",
        serialization: "週刊少年ジャンプ",
        years: "2016-2020",
        status: "完結",
        volumeCount: 23,
        rating: 4.9,
        genres: ["少年", "アクション", "ファンタジー"],
        volumes: [],
      },
      {
        id: 3,
        title: "呪術廻戦",
        titleRomaji: "Jujutsu Kaisen",
        image: "https://covers.openlibrary.org/b/id/12860751-L.jpg",
        description: "呪いと戦う少年の物語。",
        author: "芥見下々",
        authorSlug: "akutami-gege",
        publisher: "集英社",
        serialization: "週刊少年ジャンプ",
        years: "2018-",
        status: "連載中",
        volumeCount: 24,
        rating: 4.7,
        genres: ["少年", "アクション", "ホラー"],
        volumes: [],
      },
    ]
  } catch (error) {
    console.error("Failed to fetch manga list:", error)
    return []
  }
})

export function getMangaData(slug: string): Manga | null {
  const manga = mangaData[slug]
  if (!manga) return null

  return {
    ...manga,
    volumes: manga.volumes.map((volume: MangaVolume) => ({
      ...volume,
      image: volume.image || "/placeholder.svg?height=150&width=100"
    }))
  }
}

export function getVolumeData(slug: string, number: number): MangaVolume | null {
  const manga = mangaData[slug]
  if (!manga) return null

  const volume = manga.volumes.find((v: MangaVolume) => v.number === number)
  if (!volume) return null

  return {
    ...volume,
    image: volume.image || "/placeholder.svg?height=150&width=100"
  }
}
