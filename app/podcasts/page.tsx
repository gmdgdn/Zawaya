import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PodcastCard from "@/components/podcasts/podcast-card"

export default function PodcastsPage() {
  const podcasts = [
    {
      id: 1,
      title: "ترانزيت",
      description:
        "مساحة حوارية شهرية تستضيف في كل حلقة شخصية بارزة من عالم السياسة، الاقتصاد، الثقافة، أو الفكر، لمناقشة قضايا محورية بعمق وشمولية.",
      image: "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg",
      type: "video",
      url: "/podcasts/transit",
      host: "أحمد الشهري",
      episodes: 7,
      latestEpisode: {
        title: "مستقبل الإعلام في ظل الذكاء الاصطناعي",
        guest: "د. ياسمين محفوظ",
      },
    },
    {
      id: 2,
      title: "شمال جنوب",
      description:
        "تحليل أسبوعي للعلاقات الدولية والسياسة الخارجية من منظور يربط بين الشمال العالمي والجنوب العالمي، ويقدم رؤية متوازنة للقضايا الجيوسياسية.",
      image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
      type: "video",
      url: "/podcasts/north-south",
      host: "د. سمير الحسن",
      episodes: 4,
      latestEpisode: {
        title: "العلاقات الصينية الأفريقية: شراكة أم تبعية جديدة؟",
        guest: "بروفيسور علي زين الدين",
      },
    },
    {
      id: 3,
      title: "حدث ومعنى",
      description:
        "بودكاست صوتي يتناول أحداثًا تاريخية مفصلية ويحللها من زوايا متعددة، سياسية واجتماعية وثقافية، ويربطها بالواقع المعاصر وتأثيراتها المستمرة.",
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
      type: "audio",
      url: "/podcasts/hadath-wa-maana",
      host: "أحمد الشريف",
      episodes: 12,
      latestEpisode: {
        title: "وعد بلفور: الخبر والرؤية بعد قرن ونيف",
        guest: "أحمد الشريف",
      },
    },
  ]

  return (
    <div>
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">بودكاست زوايا: أصوات للعقل والروح</h1>
          <p className="page-description">
            انغمس في عالم من الحوارات الثرية والتحليلات المعمقة. تقدم بودكاست زوايا مجموعة متنوعة من البرامج الصوتية
            والمرئية التي تتناول السياسة، الثقافة، التاريخ، والفكر، مقدمة بأساليب مبتكرة وجودة عالية.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="tab-navigation">
            <TabsTrigger value="all" className="tab-item">
              جميع البودكاست
            </TabsTrigger>
            <TabsTrigger value="video" className="tab-item">
              بودكاست مرئي
            </TabsTrigger>
            <TabsTrigger value="audio" className="tab-item">
              بودكاست صوتي
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-8">
              {podcasts.map((podcast, index) => (
                <PodcastCard key={podcast.id} podcast={podcast} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="video" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-8">
              {podcasts
                .filter((podcast) => podcast.type === "video")
                .map((podcast, index) => (
                  <PodcastCard key={podcast.id} podcast={podcast} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-8">
              {podcasts
                .filter((podcast) => podcast.type === "audio")
                .map((podcast, index) => (
                  <PodcastCard key={podcast.id} podcast={podcast} index={index} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-4">استمع أينما كنت</h2>
          <p className="mb-6">يمكنك الاستماع إلى بودكاست زوايا على منصتك المفضلة:</p>

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
