import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-yellow-400/10 to-orange-400/10 dark:from-yellow-900/20 dark:to-orange-900/20 py-16 overflow-hidden animate-fade-in">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 animate-slide-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">اكتشف عالم المحتوى العربي المميز</h1>
            <p className="text-xl text-muted-foreground mb-8">مقالات، بودكاست، وفيديوهات تثري معرفتك وتوسع آفاقك</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6">اشترك الآن</Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                استكشف المحتوى
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-left">
            <div className="relative">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
              <div
                className="absolute -left-4 -bottom-4 w-32 h-32 bg-orange-400 rounded-full opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <Image
                src="/images/hero.jpg"
                alt="ثمانية - منصة محتوى عربية"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-yellow-500"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-orange-500"></div>
      </div>
    </div>
  )
}
