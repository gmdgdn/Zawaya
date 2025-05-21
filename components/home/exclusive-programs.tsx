import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"

export default function ExclusivePrograms() {
  const programs = [
    {
      id: 1,
      title: "أصل الخبر من واشنطن",
      description: "قراءة تحليلية للسياسة الأمريكية وتأثيرها على المنطقة العربية والعالم",
      image: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg",
      host: "البروفيسور فرانك مسمار",
      url: "/programs/asl-el-khabar",
      schedule: "كل إثنين وجمعة",
      latestEpisode: "انتخابات التجديد النصفي: توقعات وتحليلات أولية",
    },
    {
      id: 2,
      title: "ترانزستور",
      description: "برنامج يشرح المفاهيم التقنية والرقمية الحديثة بأسلوب مبسط وعملي",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      host: "المهندس أحمد نبيل",
      url: "/programs/transistor",
      schedule: "كل أربعاء",
      latestEpisode: "الويب 3.0 والميتافيرس: هل هو مستقبل الإنترنت أم فقاعة؟",
    },
  ]

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">برامج حصرية</h2>
        <Link href="/programs" className="section-link">
          عرض الكل
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <div
            key={program.id}
            className="flex flex-col md:flex-row gap-6 bg-card rounded-lg p-4 animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative md:w-1/3">
              <Image
                src={program.image || "/placeholder.svg"}
                alt={program.title}
                width={300}
                height={300}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <Link
                href={program.url}
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"
              >
                <div className="bg-primary rounded-full p-3">
                  <Play className="h-6 w-6 text-white" fill="white" />
                </div>
              </Link>
            </div>

            <div className="md:w-2/3 flex flex-col">
              <h3 className="font-bold text-xl mb-2">{program.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">تقديم: {program.host}</p>
              <p className="text-sm mb-4">{program.description}</p>

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 text-primary text-xs font-medium py-1 px-2 rounded-full">
                  {program.schedule}
                </div>
              </div>

              <div className="bg-muted/50 dark:bg-muted/20 p-3 rounded-lg mb-4">
                <span className="text-xs text-primary font-medium block mb-1">أحدث حلقة</span>
                <p className="font-medium text-sm">{program.latestEpisode}</p>
              </div>

              <div className="mt-auto">
                <Link
                  href={program.url}
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
