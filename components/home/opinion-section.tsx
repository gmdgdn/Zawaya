import Link from "next/link"
import Image from "next/image"
import { FileText, CheckCircle } from "lucide-react"

export default function OpinionSection() {
  const opinions = [
    {
      id: 1,
      title: "مستقبل الدولة الوطنية في ظل العولمة والتكتلات الإقليمية",
      excerpt: "تحليل لتحديات السيادة الوطنية وقدرة الدول على مواجهة القضايا العابرة للحدود",
      author: "د. أحمد خليفة",
      authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      date: "12 مايو 2025",
      url: "/opinions/future-of-nation-state",
      verified: true,
    },
    {
      id: 2,
      title: "التحول الطاقوي في الشرق الأوسط: الفرص والتحديات الاقتصادية والبيئية",
      excerpt: "قراءة في استراتيجيات دول المنطقة لتنويع مصادر الطاقة والاستثمار في التكنولوجيا الخضراء",
      author: "م. سارة عبد الرحمن",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      date: "10 مايو 2025",
      url: "/opinions/energy-transition-middle-east",
      verified: false,
    },
    {
      id: 3,
      title: "الديمقراطية في العالم العربي: عشر سنوات بعد الربيع - أين نحن الآن؟",
      excerpt: "تقييم نقدي لمسارات التحول الديمقراطي، المعوقات، والآفاق المستقبلية",
      author: "أ. حسن الجميل",
      authorImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      date: "8 مايو 2025",
      url: "/opinions/democracy-arab-world",
      verified: true,
    },
    {
      id: 4,
      title: "صعود اليمين الشعبوي في الغرب وتأثيره على العلاقات مع العالم الإسلامي",
      excerpt: "دراسة لأسباب صعود الشعبوية وانعكاساتها على السياسات الخارجية تجاه الدول الإسلامية",
      author: "د. نادية إبراهيم",
      authorImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      date: "5 مايو 2025",
      url: "/opinions/populist-right-islamic-world",
      verified: false,
    },
  ]

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">
          <FileText className="h-6 w-6 text-primary" />
          <span>من آراء زوايا</span>
        </h2>
        <Link href="/opinions" className="section-link">
          عرض الكل
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {opinions.map((opinion, index) => (
          <div
            key={opinion.id}
            className="flex gap-6 items-start group bg-card p-4 rounded-lg animate-slide-up hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex-1 flex flex-col h-full">
              <Link href={opinion.url}>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{opinion.title}</h3>
              </Link>
              <p className="text-muted-foreground text-sm mb-4">{opinion.excerpt}</p>

              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={opinion.authorImage || "/placeholder.svg"}
                  alt={opinion.author}
                  width={32}
                  height={32}
                  className="rounded-full border border-primary"
                />
                <div className="flex items-center gap-1">
                  <span className="text-xs font-medium">{opinion.author}</span>
                  {opinion.verified && <CheckCircle className="h-3 w-3 text-primary fill-primary" />}
                </div>
                <span className="text-xs text-muted-foreground">{opinion.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
