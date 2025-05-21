import HeroSection from "@/components/home/hero-section"
import LatestReleases from "@/components/home/latest-releases"
import EditorsPicks from "@/components/home/editors-picks"
import FeaturedPodcasts from "@/components/home/featured-podcasts"
import ExclusivePrograms from "@/components/home/exclusive-programs"
import OpinionSection from "@/components/home/opinion-section"
import ExploreArticles from "@/components/home/explore-articles"
import DocumentarySection from "@/components/home/documentary-section"
import JoinCommunity from "@/components/home/join-community"
import TrendingTopics from "@/components/home/trending-topics"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <LatestReleases />

        <div className="my-16">
          <EditorsPicks />
        </div>

        <div className="my-16">
          <FeaturedPodcasts />
        </div>

        <div className="my-16">
          <ExclusivePrograms />
        </div>

        <div className="my-16">
          <OpinionSection />
        </div>

        <div className="my-16">
          <ExploreArticles />
        </div>

        <div className="my-16">
          <DocumentarySection />
        </div>

        <div className="my-16">
          <TrendingTopics />
        </div>

        <div className="my-16">
          <JoinCommunity />
        </div>
      </div>
    </div>
  )
}
