export interface IMangaVolume {
  number: number
  image: string | null
  title?: string
  titleRomaji?: string
  releaseDate?: string
  pages?: number
  amazonUrl?: string
  description?: string
  author?: string
  authorSlug?: string
  publisher?: string
  rating?: number
}

export type MangaVolume = IMangaVolume | null;

export interface MangaSummary {
  id: number;
  title: string;
  titleRomaji?: string;
  slug: string;
  image: string;
  description?: string;
  author: string;
  authorSlug: string;
  publisher?: string;
  serialization?: string;
  years?: string;
  status?: string;
  volumeCount: number;
  rating?: number;
  genres?: string[];
}

export interface Manga {
  id: number
  title: string
  titleRomaji?: string
  slug: string
  image: string
  description?: string
  author: string
  authorSlug: string
  publisher?: string
  serialization?: string
  years?: string
  status?: string
  volumeCount: number
  rating?: number
  genres?: string[]
  volumes: MangaVolume[]
}