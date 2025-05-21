import { TrendingUp } from "lucide-react"

export default function TrendingTopics() {
  const topics = [
    "الأدب العربي المعاصر",
    "التكنولوجيا في الشرق الأوسط",
    "الفن السعودي",
    "الثقافة العربية",
    "السينما العربية",
    "الاقتصاد السعودي",
  ]

  return (
    <div className="bg-muted/50 dark:bg-muted/20 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-red-500" />
        <h2 className="text-xl font-bold">المواضيع الرائجة</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {topics.map((topic, index) => (
          <a
            key={index}
            href="#"
            className="bg-background dark:bg-muted px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {topic}
          </a>
        ))}
      </div>
    </div>
  )
}
