import Link from "next/link"
import Image from "next/image"
import { Headphones, Play } from "lucide-react"

export default function FeaturedPodcasts() {
  const podcasts = [
    {
      id: 1,
      title: "ترانزيت",
      description: "مساحة حوارية شهرية تستضيف في كل حلقة شخصية بارزة من عالم السياسة، الاقتصاد، الثقافة، أو الفكر",
      image: "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg",
      type: "video",
      url: "/podcasts/transit",
      latestEpisode: {
        title: "مستقبل الإعلام في ظل الذكاء الاصطناعي",
        guest: "د. ياسمين محفوظ",
      },
    },
    {
      id: 2,
      title: "شمال جنوب",
      description: "تحليل أسبوعي للعلاقات الدولية والسياسة الخارجية من منظور يربط بين الشمال العالمي والجنوب العالمي",
      image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
      type: "video",
      url: "/podcasts/north-south",
      latestEpisode: {
        title: "العلاقات الصينية الأفريقية: شراكة أم تبعية جديدة؟",
        guest: "بروفيسور علي زين الدين",
      },
    },
    {
      id: 3,
      title: "حدث ومعنى",
      description: "بودكاست صوتي يتناول أحداثًا تاريخية مفصلية ويحللها من زوايا متعددة، سياسية واجتماعية وثقافية",
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
      type: "audio",
      url: "/podcasts/hadath-wa-maana",
      latestEpisode: {
        title: "وعد بلفور: الخبر والرؤية بعد قرن ونيف",
        guest: "أحمد الشريف",
      },
    },
  ]

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">
          <Headphones className="h-6 w-6 text-primary" />
          <span>بودكاست مميز</span>
        </h2>
        <Link href="/podcasts" className="section-link">
          عرض الكل
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {podcasts.map((podcast, index) => (
          <div
            key={podcast.id}
            className="bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative">
              <Image
                src={podcast.image || "/placeholder.svg"}
                alt={podcast.title}
                width={400}
                height={400}
                className="aspect-square object-cover w-full"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-primary rounded-full p-3">
                  {podcast.type === "video" ? (
                    <Play className="h-6 w-6 text-white" fill="white" />
                  ) : (
                    <Headphones className="h-6 w-6 text-white" />
                  )}
                </div>
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-xl mb-2">{podcast.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{podcast.description}</p>

              <div className="bg-muted/50 dark:bg-muted/20 p-3 rounded-lg mt-auto mb-4">
                <span className="text-xs text-primary font-medium block mb-1">أحدث حلقة</span>
                <p className="font-medium text-sm mb-1">{podcast.latestEpisode.title}</p>
                <p className="text-xs text-muted-foreground">مع {podcast.latestEpisode.guest}</p>
              </div>

              <div className="mt-auto">
                <Link
                  href={podcast.url}
                  className="block w-full py-2 text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-primary rounded-lg hover:bg-primary/5"
                >
                  تصفح الحلقات
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
