import Link from "next/link"
import Image from "next/image"
import { Play, Headphones, FileText, CheckCircle } from "lucide-react"

export default function LatestReleases() {
  const latestContent = [
    {
      id: 1,
      type: "video",
      title: "مستقبل الإعلام في ظل الذكاء الاصطناعي",
      excerpt: "حوار حول تأثير تقنيات AI على صناعة الأخبار، أخلاقيات المهنة، ودور الصحفي المتغير",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      category: "بودكاست ترانزيت",
      author: "د. ياسمين محفوظ",
      date: "18 مايو 2025",
      url: "/podcasts/transit/episode-5",
      icon: <Play className="h-4 w-4" />,
      action: "شاهد الحلقة",
    },
    {
      id: 2,
      type: "audio",
      title: "وعد بلفور: الخبر والرؤية بعد قرن ونيف",
      excerpt:
        "قراءة في نص الوعد وسياقاته التاريخية المتعددة، وتحليل لتداعياته المستمرة على القضية الفلسطينية والمنطقة",
      image: "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg",
      category: "بودكاست حدث ومعنى",
      author: "أحمد الشريف",
      date: "15 مايو 2025",
      url: "/podcasts/hadath-wa-maana/episode-10",
      icon: <Headphones className="h-4 w-4" />,
      action: "استمع للحلقة",
    },
    {
      id: 3,
      type: "article",
      title: "مستقبل الدولة الوطنية في ظل العولمة والتكتلات الإقليمية",
      excerpt: "تحليل لتحديات السيادة الوطنية وقدرة الدول على مواجهة القضايا العابرة للحدود",
      image: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg",
      category: "آراء سياسية",
      author: "د. أحمد خليفة",
      date: "12 مايو 2025",
      url: "/opinions/future-of-nation-state",
      icon: <FileText className="h-4 w-4" />,
      action: "اقرأ المقال",
      verified: true,
    },
    {
      id: 4,
      type: "program",
      title: "الويب 3.0 والميتافيرس: هل هو مستقبل الإنترنت أم فقاعة؟",
      excerpt: "شرح مبسط لمفاهيم Web3، البلوك تشين، والـ NFTs، وتطبيقات الميتافيرس المحتملة وتأثيرها الاجتماعي",
      image: "https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg",
      category: "برنامج ترانزستور",
      author: "م. أحمد نبيل",
      date: "10 مايو 2025",
      url: "/programs/transistor/episode-8",
      icon: <Play className="h-4 w-4" />,
      action: "شاهد الحلقة",
    },
  ]

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">أحدث إصداراتنا</h2>
        <Link href="/latest" className="section-link">
          عرض الكل
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestContent.map((item, index) => (
          <div
            key={item.id}
            className="bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={225}
                className="aspect-video w-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded-full">
                {item.category}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.excerpt}</p>

              <div className="flex items-center justify-between mt-auto mb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={`https://images.pexels.com/photos/${1000000 + item.id}/pexels-photo-${1000000 + item.id}.jpeg`}
                    alt={item.author}
                    width={24}
                    height={24}
                    className="rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                    }}
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-xs">{item.author}</span>
                    {item.verified && <CheckCircle className="h-3 w-3 text-primary fill-primary" />}
                  </div>
                </div>

                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>

              <div className="mt-auto pt-4 border-t border-border">
                <Link
                  href={item.url}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {item.icon}
                  <span>{item.action}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
