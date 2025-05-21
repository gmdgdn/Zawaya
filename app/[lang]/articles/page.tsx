import { getDictionary } from "@/config/i18n-config"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function ArticlesPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang as any)
  const isArabic = lang === "ar"

  // Sample article categories
  const categories = [
    {
      id: "all",
      name: isArabic ? "جميع المقالات" : "All Articles",
    },
    {
      id: "politics",
      name: isArabic ? "سياسة" : "Politics",
    },
    {
      id: "culture",
      name: isArabic ? "ثقافة" : "Culture",
    },
    {
      id: "technology",
      name: isArabic ? "تكنولوجيا" : "Technology",
    },
    {
      id: "economy",
      name: isArabic ? "اقتصاد" : "Economy",
    },
  ]

  // Sample articles
  const articles = [
    {
      id: 1,
      title: isArabic
        ? "مستقبل الدولة الوطنية في ظل العولمة والتكتلات الإقليمية"
        : "The Future of the Nation-State in Light of Globalization and Regional Blocs",
      excerpt: isArabic
        ? "تحليل لتحديات السيادة الوطنية وقدرة الدول على مواجهة القضايا العابرة للحدود"
        : "An analysis of the challenges to national sovereignty and the ability of states to address transnational issues",
      author: isArabic ? "د. أحمد خليفة" : "Dr. Ahmed Khalifa",
      authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      date: isArabic ? "12 مايو 2025" : "May 12, 2025",
      url: `/${lang}/articles/future-of-nation-state`,
      category: "politics",
      image: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg",
      verified: true,
    },
    {
      id: 2,
      title: isArabic
        ? "الأدب العربي المعاصر: تحديات وآفاق"
        : "Contemporary Arabic Literature: Challenges and Horizons",
      excerpt: isArabic
        ? "نظرة على واقع الأدب العربي المعاصر والتحديات التي تواجهه في ظل المتغيرات الثقافية والتكنولوجية"
        : "A look at the reality of contemporary Arabic literature and the challenges it faces in light of cultural and technological changes",
      author: isArabic ? "سارة المنصور" : "Sarah Al-Mansour",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      date: isArabic ? "10 مايو 2025" : "May 10, 2025",
      url: `/${lang}/articles/contemporary-arabic-literature`,
      category: "culture",
      image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg",
      verified: false,
    },
    {
      id: 3,
      title: isArabic
        ? "الذكاء الاصطناعي وتأثيره على سوق العمل في الشرق الأوسط"
        : "Artificial Intelligence and Its Impact on the Middle East Job Market",
      excerpt: isArabic
        ? "دراسة تحليلية لتأثير تقنيات الذكاء الاصطناعي على مستقبل الوظائف والمهارات المطلوبة في المنطقة"
        : "An analytical study of the impact of AI technologies on the future of jobs and required skills in the region",
      author: isArabic ? "م. فيصل العتيبي" : "Eng. Faisal Al-Otaibi",
      authorImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      date: isArabic ? "8 مايو 2025" : "May 8, 2025",
      url: `/${lang}/articles/ai-impact-job-market`,
      category: "technology",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      verified: true,
    },
    {
      id: 4,
      title: isArabic
        ? "التحول الطاقوي في الشرق الأوسط: الفرص والتحديات الاقتصادية"
        : "Energy Transition in the Middle East: Economic Opportunities and Challenges",
      excerpt: isArabic
        ? "قراءة في استراتيجيات دول المنطقة لتنويع مصادر الطاقة والاستثمار في التكنولوجيا الخضراء"
        : "A reading of regional countries' strategies to diversify energy sources and invest in green technology",
      author: isArabic ? "د. نادية إبراهيم" : "Dr. Nadia Ibrahim",
      authorImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      date: isArabic ? "5 مايو 2025" : "May 5, 2025",
      url: `/${lang}/articles/energy-transition-middle-east`,
      category: "economy",
      image: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
      verified: false,
    },
  ]

  return (
    <div>
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">{isArabic ? "مقالات زوايا" : "Zawaya Articles"}</h1>
          <p className="page-description">
            {isArabic
              ? "مجموعة متنوعة من المقالات التحليلية والرأي في مختلف المجالات السياسية والاقتصادية والثقافية والاجتماعية"
              : "A diverse collection of analytical and opinion articles in various political, economic, cultural, and social fields"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="tab-navigation">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="tab-item">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} lang={lang} />
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles
                  .filter((article) => article.category === category.id)
                  .map((article, index) => (
                    <ArticleCard key={article.id} article={article} index={index} lang={lang} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

// Article Card Component
function ArticleCard({ article, index, lang }: { article: any; index: number; lang: string }) {
  return (
    <Link
      href={article.url}
      className="flex gap-6 items-start group bg-card p-4 rounded-lg animate-slide-up hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-1 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>

        <div className="flex items-center gap-3 mt-auto">
          <Image
            src={article.authorImage || "/placeholder.svg"}
            alt={article.author}
            width={32}
            height={32}
            className="rounded-full border border-primary"
          />
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">{article.author}</span>
            {article.verified && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{article.date}</span>
        </div>
      </div>

      <div className="hidden md:block w-28 h-28 relative">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover rounded-lg" />
      </div>
    </Link>
  )
}
