import Image from "next/image"
import { BookOpen } from "lucide-react"

export default function EditorsPicks() {
  const articles = [
    {
      id: 1,
      title: "الأدب العربي المعاصر: تحديات وآفاق",
      image: "/images/literature.jpg",
      category: "ثقافة",
    },
    {
      id: 2,
      title: "الفن السعودي: رؤية مستقبلية",
      image: "/images/art.jpg",
      category: "فن",
    },
    {
      id: 3,
      title: "التكنولوجيا في الشرق الأوسط",
      image: "/images/tech.jpg",
      category: "تكنولوجيا",
    },
  ]

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="h-5 w-5 text-yellow-500" />
        <h2 className="text-2xl font-bold">اختيارات المحررين</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="group relative overflow-hidden rounded-xl card-hover animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <span className="text-xs font-medium text-yellow-400 mb-2">{article.category}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
