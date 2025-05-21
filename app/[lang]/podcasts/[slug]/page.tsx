import Image from "next/image"
import Link from "next/link"
import { getDictionary } from "@/config/i18n-config"
import { Play, Headphones, Calendar, Clock } from "lucide-react"

export default async function PodcastPage({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string }
}) {
  const dict = await getDictionary(lang as any)
  const isArabic = lang === "ar"

  // This would normally come from a database or API
  const podcastData = {
    transit: {
      title: isArabic ? "ترانزيت" : "Transit",
      description: isArabic
        ? "مساحة حوارية شهرية تستضيف في كل حلقة شخصية بارزة من عالم السياسة، الاقتصاد، الثقافة، أو الفكر، لمناقشة قضايا محورية بعمق وشمولية."
        : "A monthly dialogue space that hosts a prominent personality from the world of politics, economics, culture, or thought in each episode, to discuss pivotal issues in depth and comprehensiveness.",
      image: "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg",
      host: isArabic ? "أحمد الشهري" : "Ahmed Al-Shehri",
      type: "video",
      episodes: [
        {
          id: 1,
          title: isArabic ? "مستقبل الإعلام في ظل الذكاء الاصطناعي" : "The Future of Media in the Age of AI",
          guest: isArabic ? "د. ياسمين محفوظ" : "Dr. Yasmine Mahfouz",
          date: isArabic ? "18 مايو 2025" : "May 18, 2025",
          duration: "58:24",
          image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
          description: isArabic
            ? "حوار حول تأثير تقنيات الذكاء الاصطناعي على صناعة الأخبار، أخلاقيات المهنة، ودور الصحفي المتغير في عصر الذكاء الاصطناعي."
            : "A dialogue about the impact of AI technologies on the news industry, professional ethics, and the changing role of journalists in the age of artificial intelligence.",
        },
        {
          id: 2,
          title: isArabic ? "تحديات الأمن السيبراني في المنطقة العربية" : "Cybersecurity Challenges in the Arab Region",
          guest: isArabic ? "م. خالد العتيبي" : "Eng. Khalid Al-Otaibi",
          date: isArabic ? "15 أبريل 2025" : "April 15, 2025",
          duration: "62:10",
          image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
          description: isArabic
            ? "نقاش حول التهديدات السيبرانية المتزايدة، استراتيجيات الحماية، وأهمية بناء القدرات الوطنية في مجال الأمن السيبراني."
            : "A discussion about increasing cyber threats, protection strategies, and the importance of building national capabilities in the field of cybersecurity.",
        },
      ],
    },
    "north-south": {
      title: isArabic ? "شمال جنوب" : "North South",
      description: isArabic
        ? "تحليل أسبوعي للعلاقات الدولية والسياسة الخارجية من منظور يربط بين الشمال العالمي والجنوب العالمي، ويقدم رؤية متوازنة للقضايا الجيوسياسية."
        : "A weekly analysis of international relations and foreign policy from a perspective that links the Global North and the Global South, providing a balanced view of geopolitical issues.",
      image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
      host: isArabic ? "د. سمير الحسن" : "Dr. Samir Al-Hassan",
      type: "video",
      episodes: [
        {
          id: 1,
          title: isArabic
            ? "العلاقات الصينية الأفريقية: شراكة أم تبعية جديدة؟"
            : "Chinese-African Relations: Partnership or New Dependency?",
          guest: isArabic ? "بروفيسور علي زين الدين" : "Professor Ali Zain Al-Din",
          date: isArabic ? "14 مايو 2025" : "May 14, 2025",
          duration: "45:30",
          image: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg",
          description: isArabic
            ? "تحليل للاستثمارات الصينية المتزايدة في أفريقيا، وتأثيرها على التنمية الاقتصادية والسياسية في القارة، ومستقبل العلاقات الصينية الأفريقية."
            : "An analysis of increasing Chinese investments in Africa, their impact on economic and political development on the continent, and the future of Chinese-African relations.",
        },
      ],
    },
    "hadath-wa-maana": {
      title: isArabic ? "حدث ومعنى" : "Event and Meaning",
      description: isArabic
        ? "بودكاست صوتي يتناول أحداثًا تاريخية مفصلية ويحللها من زوايا متعددة، سياسية واجتماعية وثقافية، ويربطها بالواقع المعاصر وتأثيراتها المستمرة."
        : "An audio podcast that addresses pivotal historical events and analyzes them from multiple angles - political, social, and cultural - linking them to contemporary reality and their ongoing effects.",
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
      host: isArabic ? "أحمد الشريف" : "Ahmed Al-Sharif",
      type: "audio",
      episodes: [
        {
          id: 1,
          title: isArabic
            ? "وعد بلفور: الخبر والرؤية بعد قرن ونيف"
            : "The Balfour Declaration: The News and Vision After More Than a Century",
          guest: isArabic ? "أحمد الشريف" : "Ahmed Al-Sharif",
          date: isArabic ? "15 مايو 2025" : "May 15, 2025",
          duration: "52:18",
          image: "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg",
          description: isArabic
            ? "قراءة في نص الوعد وسياقاته التاريخية المتعددة، وتحليل لتداعياته المستمرة على القضية الفلسطينية والمنطقة."
            : "A reading of the declaration text and its multiple historical contexts, and an analysis of its continuing repercussions on the Palestinian issue and the region.",
        },
      ],
    },
  }

  // Convert slug to a valid key
  const podcastKey = slug.replace(/-/g, "-") as keyof typeof podcastData
  const podcast = podcastData[podcastKey]

  if (!podcast) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">{isArabic ? "البودكاست غير موجود" : "Podcast Not Found"}</h1>
        <p className="mb-8">
          {isArabic
            ? "عذراً، لم نتمكن من العثور على البودكاست الذي تبحث عنه."
            : "Sorry, we couldn't find the podcast you're looking for."}
        </p>
        <Link
          href={`/${lang}/podcasts`}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          {isArabic ? "العودة إلى صفحة البودكاست" : "Back to Podcasts"}
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/5 dark:to-primary/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <Image
                src={podcast.image || "/placeholder.svg"}
                alt={podcast.title}
                width={400}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{podcast.title}</h1>
              <p className="text-lg mb-6">{podcast.description}</p>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-muted-foreground">{isArabic ? "تقديم:" : "Presented by:"}</span>
                <span className="font-medium">{podcast.host}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  {podcast.type === "video" ? <Play className="h-4 w-4" /> : <Headphones className="h-4 w-4" />}
                  <span>{isArabic ? "اشترك في البودكاست" : "Subscribe to Podcast"}</span>
                </Link>
                <Link
                  href="#"
                  className="bg-muted text-foreground px-4 py-2 rounded-lg hover:bg-muted/80 transition-colors"
                >
                  {isArabic ? "شارك البودكاست" : "Share Podcast"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">{isArabic ? "الحلقات" : "Episodes"}</h2>

        <div className="grid grid-cols-1 gap-6">
          {podcast.episodes.map((episode) => (
            <Link
              key={episode.id}
              href={`/${lang}/podcasts/${slug}/episode-${episode.id}`}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row"
            >
              <div className="md:w-1/4">
                <Image
                  src={episode.image || "/placeholder.svg"}
                  alt={episode.title}
                  width={300}
                  height={200}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/4">
                <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground text-sm">{isArabic ? "مع:" : "With:"}</span>
                    <span className="text-sm font-medium">{episode.guest}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{episode.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{episode.duration}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{episode.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    {podcast.type === "video" ? (
                      <>
                        <Play className="h-4 w-4" />
                        <span>{isArabic ? "شاهد الحلقة" : "Watch Episode"}</span>
                      </>
                    ) : (
                      <>
                        <Headphones className="h-4 w-4" />
                        <span>{isArabic ? "استمع للحلقة" : "Listen to Episode"}</span>
                      </>
                    )}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
