import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6 flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-4xl font-bold mb-4">404 - ページが見つかりません</h1>
        <p className="text-lg text-gray-600 mb-8">お探しのページは存在しないか、移動した可能性があります。</p>
        <Link href="/">
          <Button>ホームに戻る</Button>
        </Link>
      </div>
    </div>
  )
}
