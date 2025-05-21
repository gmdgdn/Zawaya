import Link from "next/link"
import Image from "next/image"
import { Play, Headphones } from "lucide-react"

interface PodcastCardProps {
  podcast: {
    id: number
    title: string
    description: string
    image: string
    type: string
    url: string
    host: string
    episodes: number
    latestEpisode?: {
      title: string
      guest: string
    }
  }
  index: number
}

export default function PodcastCard({ podcast, index }: PodcastCardProps) {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 bg-card rounded-xl overflow-hidden shadow-sm animate-slide-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="md:w-1/3 lg:w-1/4 relative">
        <Image
          src={podcast.image || "/placeholder.svg"}
          alt={podcast.title}
          width={300}
          height={300}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded-full">
          {podcast.type === "video" ? "مرئي" : "صوتي"}
        </div>
      </div>

      <div className="p-6 md:w-2/3 lg:w-3/4 flex flex-col">
        <h2 className="text-2xl font-bold mb-2">{podcast.title}</h2>
        <p className="text-sm text-muted-foreground mb-4">
          تقديم: {podcast.host} • {podcast.episodes} حلقة
        </p>
        <p className="mb-6">{podcast.description}</p>

        {podcast.latestEpisode && (
          <div className="bg-muted/50 dark:bg-muted/20 p-3 rounded-lg mb-4">
            <span className="text-xs text-primary font-medium block mb-1">أحدث حلقة</span>
            <p className="font-medium text-sm mb-1">{podcast.latestEpisode.title}</p>
            <p className="text-xs text-muted-foreground">مع {podcast.latestEpisode.guest}</p>
          </div>
        )}

        <div className="mt-auto">
          <Link
            href={podcast.url}
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            {podcast.type === "video" ? (
              <>
                <Play className="h-4 w-4" />
                <span>تصفح الحلقات</span>
              </>
            ) : (
              <>
                <Headphones className="h-4 w-4" />
                <span>تصفح الحلقات</span>
              </>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}
