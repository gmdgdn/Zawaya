import Link from "next/link"
import { BookOpen, Palette, History, Library } from "lucide-react"

export default function ExploreArticles() {
  const categories = [
    {
      id: 1,
      title: "فن",
      description: "استكشف عالم الفنون البصرية، السينما، والموسيقى",
      icon: <Palette className="h-8 w-8" />,
      url: "/articles/art",
      color: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
    },
    {
      id: 2,
      title: "أدب",
      description: "مقالات في الأدب العربي والعالمي، الشعر، والنقد الأدبي",
      icon: <BookOpen className="h-8 w-8" />,
      url: "/articles/literature",
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    },
    {
      id: 3,
      title: "ثقافة",
      description: "تحليلات في الظواهر الثقافية والاجتماعية المعاصرة",
      icon: <Library className="h-8 w-8" />,
      url: "/articles/culture",
      color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    },
    {
      id: 4,
      title: "تاريخ",
      description: "قراءات في محطات تاريخية فارقة وشخصيات مؤثرة",
      icon: <History className="h-8 w-8" />,
      url: "/articles/history",
      color: "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    },
  ]

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">استكشف مقالاتنا</h2>
        <Link href="/articles" className="section-link">
          عرض الكل
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            href={category.url}
            className="p-6 rounded-xl card-hover animate-slide-up"
            style={{
              animationDelay: `${index * 100}ms`,
              backgroundColor: `var(--${category.color.split(" ")[0].substring(3)})`,
            }}
          >
            <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 ${category.color}`}>
              {category.icon}
            </div>

            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
