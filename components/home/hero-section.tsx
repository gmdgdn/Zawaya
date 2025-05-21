import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  lang: string
  dictionary: any
}

export default function HeroSection({ lang, dictionary }: HeroSectionProps) {
  // Add fallback values to prevent errors if dictionary structure is incomplete
  const d = dictionary?.home?.hero || {
    title: lang === "ar" ? "القصة من كل زواياها" : "The Story From All Angles",
    subtitle:
      lang === "ar"
        ? "منصة فكرية مستقلة تقدم محتوى متنوع من المقالات والبودكاست والفيديوهات لفهم أعمق لعالم متغير"
        : "An independent intellectual platform offering diverse content including articles, podcasts, and videos for a deeper understanding of a changing world",
  }

  const buttons = dictionary?.buttons || {
    explore: lang === "ar" ? "استكشف المحتوى" : "Explore Content",
    newsletter: lang === "ar" ? "اشترك في النشرة" : "Subscribe to Newsletter",
    watchNow: lang === "ar" ? "شاهد الآن" : "Watch Now",
  }

  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Image
          src="https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg"
          alt="زوايا"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{d.title}</h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl">{d.subtitle}</p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                {buttons.explore}
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                {buttons.newsletter}
              </Button>
            </div>
          </div>

          <div className="animate-slide-left">
            <div className="relative rounded-xl overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg"
                alt="وثائقي زوايا"
                width={600}
                height={338}
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-medium mb-2">
                  {lang === "ar" ? "وثائقي جديد" : "New Documentary"}
                </span>
                <h2 className="text-white text-2xl font-bold mb-2">
                  {lang === "ar"
                    ? "الذاكرة المفقودة: أرشيفات عربية تنتظر من ينقذها"
                    : "Lost Memory: Arab Archives Waiting to be Saved"}
                </h2>
                <p className="text-white/80 mb-4">
                  {lang === "ar"
                    ? "وثائقي استقصائي حول حالة الأرشيفات التاريخية في عدة دول عربية"
                    : "An investigative documentary about the state of historical archives in several Arab countries"}
                </p>

                <Link href={`/${lang}/documentaries/lost-memory`} className="inline-flex items-center gap-2 text-white">
                  <div className="bg-primary rounded-full p-3">
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </div>
                  <span className="font-medium">{buttons.watchNow}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
