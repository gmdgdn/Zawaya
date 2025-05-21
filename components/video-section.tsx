import Image from "next/image"
import { Play } from "lucide-react"

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      title: "لماذا أراد العالم منع لغة الإشارة؟",
      author: "في سطور",
      date: "13 مايو 2025 · متابعة",
      image: "/images/video1.jpg",
      color: "bg-green-200",
    },
    {
      id: 2,
      title: "ثمانية أسئلة مع مريض جلد الفراشة",
      author: "في أسئلة ثمانية",
      date: "7 مايو 2025 · متابعة",
      image: "/images/video2.jpg",
      color: "bg-yellow-200",
    },
    {
      id: 3,
      title: "ليش قصة مفاتيح المتاحف الدولية",
      author: "في سطور",
      date: "29 يونيو 2025 · متابعة",
      image: "/images/video3.jpg",
      color: "bg-blue-200",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="flex flex-col group card-hover animate-slide-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={video.image || "/placeholder.svg"}
              alt={video.title}
              width={400}
              height={225}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                <Play className="h-5 w-5 text-black" fill="black" />
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-4 group-hover:text-primary transition-colors">{video.title}</h3>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-xs">{video.author}</span>
            <span className="text-xs text-muted-foreground">· {video.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
