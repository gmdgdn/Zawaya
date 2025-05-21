import { getDictionary } from "@/config/i18n-config"
import HeroSection from "@/components/home/hero-section"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  // Add error handling for dictionary loading
  let dict
  try {
    dict = await getDictionary(lang as any)
  } catch (error) {
    console.error("Error loading dictionary:", error)
    dict = {} // Provide an empty fallback
  }

  return (
    <div className="min-h-screen">
      <HeroSection lang={lang} dictionary={dict} />

      <div className="container mx-auto px-4 py-12">
        {/* Temporarily comment out other components until they're updated with proper error handling */}
        {/* <LatestReleases lang={lang} dictionary={dict} />

        <div className="my-16">
          <EditorsPicks lang={lang} dictionary={dict} />
        </div>

        <div className="my-16">
          <FeaturedPodcasts lang={lang} dictionary={dict} />
        </div>

        <div className="my-16">
          <ExclusivePrograms lang={lang} dictionary={dict} />
        </div>

        <div className="my-16">
          <OpinionSection lang={lang} dictionary={dict} />
        </div>

        <div className="my-16">
          <ExploreArticles lang={lang} dictionary={dict} />
        </div>

        <div className="my-16">
          <DocumentarySection lang={lang} dictionary={dict} />
        </div>

        <div className="my-16">
          <TrendingTopics lang={lang} dictionary={dict} />
        </div>

        <div className="my-16">
          <JoinCommunity lang={lang} dictionary={dict} />
        </div> */}
      </div>
    </div>
  )
}
