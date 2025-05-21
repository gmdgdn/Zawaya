import Link from "next/link"
import Image from "next/image"
import { BookOpen } from "lucide-react"

export default function EditorsPicks() {
  const editorsPicks = [
    {
      id: 1,
      title: "الأدب العربي المعاصر: تحديات وآفاق",
      image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg",
      category: "ثقافة",
      url: "/articles/contemporary-arabic-literature",
    },
    {
      id: 2,
      title: "التحولات المناخية في وادي النيل: تحديات وجودية وفرص للابتكار",
      image: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg",
      category: "وثائقيات",
      url: "/documentaries/nile-climate-change",
    },
    {
      id: 3,
      title: "طريق الحرير القديم: أكثر من مجرد تجارة - تبادل حضاري غيّر العالم",
      image: "https://images.pexels.com/photos/5825576/pexels-photo-5825576.jpeg",
      category: "حضارة الشرق",
      url: "/civilization/silk-road",
    },
  ]

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">
          <BookOpen className="h-6 w-6 text-primary" />
          <span>مختارات المحرر</span>
        </h2>
        <Link href="/editors-picks" className="section-link">
          عرض الكل
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {editorsPicks.map((item, index) => (
          <Link
            key={item.id}
            href={item.url}
            className="group relative overflow-hidden rounded-xl card-hover animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <span className="text-xs font-medium text-primary mb-2">{item.category}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
