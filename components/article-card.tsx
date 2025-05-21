import Image from "next/image"
import { CheckCircle } from "lucide-react"

interface ArticleCardProps {
  title: string
  excerpt: string
  author: string
  authorImage: string
  date: string
  image: string
  imageStyle?: string
  icon?: string
  isVerified?: boolean
}

export default function ArticleCard({
  title,
  excerpt,
  author,
  authorImage,
  date,
  image,
  imageStyle = "bg-gray-100 dark:bg-gray-800",
  icon,
  isVerified = false,
}: ArticleCardProps) {
  return (
    <div className="flex gap-6 items-start group card-hover p-4 rounded-lg">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h2>
        <p className="text-muted-foreground text-sm mb-4">{excerpt}</p>

        <div className="flex items-center gap-3">
          <Image
            src={authorImage || "/placeholder.svg"}
            alt={author}
            width={32}
            height={32}
            className="rounded-full border border-yellow-400"
          />
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">{author}</span>
            {isVerified && <CheckCircle className="h-3 w-3 text-yellow-500 fill-yellow-500" />}
          </div>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
      </div>

      <div className={`w-28 h-28 rounded-lg ${imageStyle} flex justify-center items-center overflow-hidden`}>
        {icon ? (
          <span className="text-4xl">{icon}</span>
        ) : (
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={112}
            height={112}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
    </div>
  )
}
