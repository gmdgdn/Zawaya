import Image from "next/image"
import { CheckCircle } from "lucide-react"

interface FeaturedArticleProps {
  title: string
  excerpt: string
  author: string
  authorImage: string
  date: string
  image: string
  isVerified?: boolean
}

export default function FeaturedArticle({
  title,
  excerpt,
  author,
  authorImage,
  date,
  image,
  isVerified = false,
}: FeaturedArticleProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 animate-slide-right">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground mb-6 text-lg">{excerpt}</p>

        <div className="flex items-center gap-3">
          <Image
            src={authorImage || "/placeholder.svg"}
            alt={author}
            width={48}
            height={48}
            className="rounded-full border-2 border-yellow-400"
          />
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{author}</span>
            {isVerified && <CheckCircle className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
          </div>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
      </div>

      <div className="w-full md:w-2/5 animate-slide-left">
        <div className="bg-purple-200 dark:bg-purple-900 rounded-lg p-6 flex justify-center overflow-hidden card-hover">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={400}
            className="object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}
