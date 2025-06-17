// "use client"

import Image from "next/image"
import Link from "next/link"
import { getAuthorData } from "@/lib/author-data"
import { notFound } from "next/navigation"
import { Award, BookOpen, Calendar, MapPin, Medal, Newspaper, Book } from "lucide-react"
import AuthorWorkCard from "@/components/AuthorWorkCard"

export default async function AuthorDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const author = getAuthorData(slug)

  if (!author) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Author Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
          <h2 className="text-base text-gray-600 mb-4">{author.nameRomaji}</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">{author.description}</p>
        </div>

        {/* Author Info Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 max-w-4xl">
            <tbody>
              <tr>
                <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">生年</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">{author.birthYear || "非公開"}</td>
                <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">デビュー</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">{author.debut}</td>
                <td className="border border-gray-300 bg-gray-100 px-4 py-3 w-32 text-sm font-medium">性別</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">{author.gender}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-gray-100 px-4 py-3 text-sm font-medium">出身地</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">{author.birthPlace}</td>
                <td className="border border-gray-300 bg-gray-100 px-4 py-3 text-sm font-medium">活動状況</td>
                <td className="border border-gray-300 px-4 py-3 text-sm" colSpan={3}>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      author.status === "活動中"
                        ? "bg-green-100 text-green-800"
                        : author.status === "休載中"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {author.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 受賞歴セクション */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Medal className="h-5 w-5 mr-2 text-yellow-500" />
            <h3 className="text-xl">受賞歴</h3>
          </div>
          {author.awards && author.awards.length > 0 ? (
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-3">
                {author.awards.map((award, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{award.name}</span>
                      <span className="text-gray-600 mx-2">（{award.year}）</span>
                      {award.work && <span className="text-gray-700">『{award.work}』</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500 italic">受賞歴はありません</p>
          )}
        </div>

        {/* 掲載雑誌セクション */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Newspaper className="h-5 w-5 mr-2 text-blue-500" />
            <h3 className="text-xl">掲載雑誌</h3>
          </div>
          {author.magazines && author.magazines.length > 0 ? (
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-3">
                {author.magazines.map((magazine, index) => (
                  <li key={index} className="flex items-start">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{magazine.name}</span>
                      <span className="text-gray-600 mx-2">（{magazine.publisher}）</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500 italic">掲載雑誌情報はありません</p>
          )}
        </div>

        {/* Works Section */}
        <div>
          <h3 className="text-2xl mb-6">作品一覧</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {author.works.map((work) => (
              <AuthorWorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-blue-600 hover:underline"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
