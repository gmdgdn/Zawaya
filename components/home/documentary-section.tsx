import Link from "next/link"
import Image from "next/image"
import { Play, Film } from "lucide-react"

export default function DocumentarySection() {
  const documentaries = [
    {
      id: 1,
      title: "الذاكرة المفقودة: أرشيفات عربية تنتظر من ينقذها",
      description:
        "وثائقي استقصائي حول حالة الأرشيفات التاريخية في عدة دول عربية، وأهميتها المهددة بالضياع، وجهود الحفاظ عليها",
      image: "https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg",
      duration: "45:18",
      url: "/documentaries/lost-memory",
    },
    {
      id: 2,
      title: "التحولات المناخية في وادي النيل: تحديات وجودية وفرص للابتكار",
      description:
        "يسلط الضوء على تأثيرات تغير المناخ على مصر والسودان ودول حوض النيل، ويستعرض المشاريع والمبادرات لمواجهة هذه التحديات",
      image: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg",
      duration: "52:34",
      url: "/documentaries/nile-climate-change",
    },
  ]

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">
          <Film className="h-6 w-6 text-primary" />
          <span>زوايا الوثائقية وحضارة الشرق</span>
        </h2>
        <div className="flex gap-4">
          <Link href="/documentaries" className="section-link">
            الوثائقيات
          </Link>
          <Link href="/civilization" className="section-link">
            حضارة الشرق
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {documentaries.map((documentary, index) => (
          <div
            key={documentary.id}
            className="relative overflow-hidden rounded-lg group animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Image
              src={documentary.image || "/placeholder.svg"}
              alt={documentary.title}
              width={640}
              height={360}
              className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-medium py-1 px-2 rounded-full">
              {documentary.duration}
            </div>
            <Link
              href={documentary.url}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/90 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Play className="h-6 w-6" fill="white" />
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-xl font-bold mb-1">{documentary.title}</h3>
              <p className="text-white/80 text-sm line-clamp-2">{documentary.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
