import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function TrendingTopics() {
  const topics = [
    "السياسة الأمريكية",
    "الذكاء الاصطناعي",
    "الأدب العربي المعاصر",
    "التكنولوجيا في الشرق الأوسط",
    "الفن السعودي",
    "الثقافة العربية",
    "السينما العربية",
    "الاقتصاد السعودي",
    "التغير المناخي",
    "العلاقات الدولية",
  ]

  return (
    <section className="bg-muted/50 dark:bg-muted/20 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">المواضيع الرائجة</h2>
      </div>

      <div className="trending-topics">
        {topics.map((topic, index) => (
          <Link
            key={index}
            href={`/topics/${topic.replace(/\s+/g, "-")}`}
            className="trending-topic animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {topic}
          </Link>
        ))}
      </div>
    </section>
  )
}
