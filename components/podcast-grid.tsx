import Image from "next/image"
import { Play } from "lucide-react"

export default function PodcastGrid() {
  const podcasts = [
    {
      id: 1,
      title: "هل صحيح ابن حنبل الرجم قتلاً؟",
      author: "بودكاست فنجان",
      date: "متابعة · 15 مايو 2025",
      image: "/images/podcast1.jpg",
      color: "bg-yellow-200 dark:bg-yellow-900",
      excerpt: "بلال أبو زيد متحدثًا: «وجدت كتاب الخلال المفقود لسنوات، وفيه أن ابن حنبل أفتى بالرجم حتى الموت»",
    },
    {
      id: 2,
      title: "ما بعد رفع العقوبات عن سوريا مع إبراهيم حميدي",
      author: "بودكاست الشرق",
      date: "متابعة · 14 مايو 2025",
      image: "/images/podcast2.jpg",
      color: "bg-red-200 dark:bg-red-900",
      excerpt:
        "ستستفيد الحكومة السورية ومن ورائها النظام الإيراني والصين من رفع هذه العقوبات. وستظل هذه العقوبات قائمة على سوريا الجديدة والمستقبلية",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {podcasts.map((podcast, index) => (
        <div
          key={podcast.id}
          className="flex gap-6 items-start group card-hover p-4 rounded-lg animate-slide-up"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{podcast.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{podcast.excerpt}</p>

            <div className="flex items-center gap-3">
              <Image
                src="/images/author3.jpg"
                alt={podcast.author}
                width={32}
                height={32}
                className="rounded-full border border-yellow-400"
              />
              <span className="text-xs font-medium">{podcast.author}</span>
              <span className="text-xs text-muted-foreground">{podcast.date}</span>
            </div>
          </div>

          <div
            className={`relative w-28 h-28 rounded-lg ${podcast.color} flex justify-center items-center overflow-hidden group`}
          >
            <Image
              src={podcast.image || "/placeholder.svg"}
              alt={podcast.title}
              width={112}
              height={112}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              <div className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                <Play className="h-4 w-4 text-black" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
