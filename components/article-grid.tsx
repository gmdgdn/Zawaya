import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ArticleGrid() {
  const articles = [
    {
      id: 1,
      title: "عدد خاص: المقاهي العربية في سان فرانسيسكو 🍵",
      author: "خالد المصطفى",
      date: "متابعة · 14 مايو 2025",
      image: "/images/cafe.jpg",
      color: "bg-purple-200 dark:bg-purple-900",
      excerpt: "رحلة الثقافة العربية",
      isVerified: true,
    },
    {
      id: 2,
      title: "حقائق النساء: زوايا حرجة متشابكة 🧠",
      author: "سارة خالد",
      date: "متابعة · 14 مايو 2025",
      image: "/images/women.jpg",
      color: "bg-red-200 dark:bg-red-900",
      excerpt: "رأي أمينة الزهراء مستشار حقوق المرأة",
    },
    {
      id: 3,
      title: "لماذا تحكمت في عشرة حاجات؟ 🤔",
      author: "إيمان أحمد",
      date: "متابعة · 13 مايو 2025",
      image: "/images/control.jpg",
      color: "bg-blue-200 dark:bg-blue-900",
      excerpt: "رحلة نحو معرفة الحقيقة",
    },
    {
      id: 4,
      title: "ما الذي تكشفه زيارة بايدن عن التفوق السعودي",
      author: "هشام الغانم",
      date: "متابعة · 13 مايو 2025",
      image: "/images/politics.jpg",
      color: "bg-gray-200 dark:bg-gray-800",
      excerpt:
        "وجهة نظر أمريكية وتحليلها لموقف المملكة... وهو ما يشكل تحولاً كبيراً في ما تعتاد عليه أمريكا في تعاملها مع المنطقة",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
      {articles.map((article, index) => (
        <div
          key={article.id}
          className="flex gap-6 items-start group card-hover p-4 rounded-lg animate-slide-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>

            <div className="flex items-center gap-3">
              <Image
                src={`/images/author${index + 1}.jpg`}
                alt={article.author}
                width={32}
                height={32}
                className="rounded-full border border-yellow-400"
              />
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium">{article.author}</span>
                {article.isVerified && <CheckCircle className="h-3 w-3 text-yellow-500 fill-yellow-500" />}
              </div>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </div>
          </div>

          <div
            className={`relative w-28 h-28 rounded-lg ${article.color} flex justify-center items-center overflow-hidden`}
          >
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={112}
              height={112}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
