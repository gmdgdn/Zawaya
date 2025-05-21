import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PodcastCard from "@/components/podcasts/podcast-card"
import { getDictionary } from "@/config/i18n-config"

export default async function PodcastsPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang as any)
  const isArabic = lang === "ar"

  const podcasts = [
    {
      id: 1,
      title: isArabic ? "ترانزيت" : "Transit",
      description: isArabic
        ? "مساحة حوارية شهرية تستضيف في كل حلقة شخصية بارزة من عالم السياسة، الاقتصاد، الثقافة، أو الفكر، لمناقشة قضايا محورية بعمق وشمولية."
        : "A monthly dialogue space that hosts a prominent personality from the world of politics, economics, culture, or thought in each episode, to discuss pivotal issues in depth and comprehensiveness.",
      image: "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg",
      type: "video",
      url: `/${lang}/podcasts/transit`,
      host: isArabic ? "أحمد الشهري" : "Ahmed Al-Shehri",
      episodes: 7,
      latestEpisode: {
        title: isArabic ? "مستقبل الإعلام في ظل الذكاء الاصطناعي" : "The Future of Media in the Age of AI",
        guest: isArabic ? "د. ياسمين محفوظ" : "Dr. Yasmine Mahfouz",
      },
    },
    {
      id: 2,
      title: isArabic ? "شمال جنوب" : "North South",
      description: isArabic
        ? "تحليل أسبوعي للعلاقات الدولية والسياسة الخارجية من منظور يربط بين الشمال العالمي والجنوب العالمي، ويقدم رؤية متوازنة للقضايا الجيوسياسية."
        : "A weekly analysis of international relations and foreign policy from a perspective that links the Global North and the Global South, providing a balanced view of geopolitical issues.",
      image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
      type: "video",
      url: `/${lang}/podcasts/north-south`,
      host: isArabic ? "د. سمير الحسن" : "Dr. Samir Al-Hassan",
      episodes: 4,
      latestEpisode: {
        title: isArabic
          ? "العلاقات الصينية الأفريقية: شراكة أم تبعية جديدة؟"
          : "Chinese-African Relations: Partnership or New Dependency?",
        guest: isArabic ? "بروفيسور علي زين الدين" : "Professor Ali Zain Al-Din",
      },
    },
    {
      id: 3,
      title: isArabic ? "حدث ومعنى" : "Event and Meaning",
      description: isArabic
        ? "بودكاست صوتي يتناول أحداثًا تاريخية مفصلية ويحللها من زوايا متعددة، سياسية واجتماعية وثقافية، ويربطها بالواقع المعاصر وتأثيراتها المستمرة."
        : "An audio podcast that addresses pivotal historical events and analyzes them from multiple angles - political, social, and cultural - linking them to contemporary reality and their ongoing effects.",
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
      type: "audio",
      url: `/${lang}/podcasts/hadath-wa-maana`,
      host: isArabic ? "أحمد الشريف" : "Ahmed Al-Sharif",
      episodes: 12,
      latestEpisode: {
        title: isArabic
          ? "وعد بلفور: الخبر والرؤية بعد قرن ونيف"
          : "The Balfour Declaration: The News and Vision After More Than a Century",
        guest: isArabic ? "أحمد الشريف" : "Ahmed Al-Sharif",
      },
    },
  ]

  return (
    <div>
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">
            {isArabic ? "بودكاست زوايا: أصوات للعقل والروح" : "Zawaya Podcasts: Voices for Mind and Soul"}
          </h1>
          <p className="page-description">
            {isArabic
              ? "انغمس في عالم من الحوارات الثرية والتحليلات المعمقة. تقدم بودكاست زوايا مجموعة متنوعة من البرامج الصوتية والمرئية التي تتناول السياسة، الثقافة، التاريخ، والفكر، مقدمة بأساليب مبتكرة وجودة عالية."
              : "Immerse yourself in a world of rich dialogues and in-depth analyses. Zawaya Podcasts offers a diverse collection of audio and video programs covering politics, culture, history, and thought, presented with innovative approaches and high quality."}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="tab-navigation">
            <TabsTrigger value="all" className="tab-item">
              {isArabic ? "جميع البودكاست" : "All Podcasts"}
            </TabsTrigger>
            <TabsTrigger value="video" className="tab-item">
              {isArabic ? "بودكاست مرئي" : "Video Podcasts"}
            </TabsTrigger>
            <TabsTrigger value="audio" className="tab-item">
              {isArabic ? "بودكاست صوتي" : "Audio Podcasts"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-8">
              {podcasts.map((podcast, index) => (
                <PodcastCard key={podcast.id} podcast={podcast} index={index} lang={lang} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="video" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-8">
              {podcasts
                .filter((podcast) => podcast.type === "video")
                .map((podcast, index) => (
                  <PodcastCard key={podcast.id} podcast={podcast} index={index} lang={lang} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-8">
              {podcasts
                .filter((podcast) => podcast.type === "audio")
                .map((podcast, index) => (
                  <PodcastCard key={podcast.id} podcast={podcast} index={index} lang={lang} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-4">{isArabic ? "استمع أينما كنت" : "Listen Anywhere"}</h2>
          <p className="mb-6">
            {isArabic
              ? "يمكنك الاستماع إلى بودكاست زوايا على منصتك المفضلة:"
              : "You can listen to Zawaya podcasts on your favorite platform:"}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="#" className="bg-card p-3 rounded-lg flex items-center gap-2 hover:bg-muted transition-colors">
              <Image
                src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg"
                alt="Apple Podcasts"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span>Apple Podcasts</span>
            </Link>
            <Link href="#" className="bg-card p-3 rounded-lg flex items-center gap-2 hover:bg-muted transition-colors">
              <Image
                src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg"
                alt="Spotify"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span>Spotify</span>
            </Link>
            <Link href="#" className="bg-card p-3 rounded-lg flex items-center gap-2 hover:bg-muted transition-colors">
              <Image
                src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg"
                alt="Google Podcasts"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span>Google Podcasts</span>
            </Link>
            <Link href="#" className="bg-card p-3 rounded-lg flex items-center gap-2 hover:bg-muted transition-colors">
              <Image
                src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg"
                alt="Anghami"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span>Anghami</span>
            </Link>
            <Link href="#" className="bg-card p-3 rounded-lg flex items-center gap-2 hover:bg-muted transition-colors">
              <Image
                src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg"
                alt="YouTube"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span>YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
