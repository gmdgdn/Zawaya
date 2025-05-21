"use client"

import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"

interface MegaMenuProps {
  type: "podcasts" | "programs"
  onClose: () => void
}

export default function MegaMenu({ type, onClose }: MegaMenuProps) {
  return (
    <div className="border-b animate-slide-down bg-background">
      <div className="container mx-auto px-4 py-6 relative">
        <button className="absolute top-4 left-4 p-2 hover:bg-muted rounded-full transition-colors" onClick={onClose}>
          <X className="h-5 w-5" />
        </button>

        {type === "podcasts" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">بودكاست مرئي</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/podcasts/transit"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Image src="/images/podcast1.png" alt="ترانزيت" width={50} height={50} className="rounded-md" />
                    <div>
                      <span className="font-medium block">ترانزيت</span>
                      <span className="text-xs text-muted-foreground">مساحة حوارية شهرية</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/podcasts/north-south"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Image src="/images/podcast2.png" alt="شمال جنوب" width={50} height={50} className="rounded-md" />
                    <div>
                      <span className="font-medium block">شمال جنوب</span>
                      <span className="text-xs text-muted-foreground">تحليل سياسي دولي</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">بودكاست صوتي</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/podcasts/hadath-wa-maana"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Image src="/images/podcast3.png" alt="حدث ومعنى" width={50} height={50} className="rounded-md" />
                    <div>
                      <span className="font-medium block">حدث ومعنى</span>
                      <span className="text-xs text-muted-foreground">قراءة في أحداث تاريخية</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">استكشف</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/podcasts" className="text-sm hover:text-primary transition-colors">
                    جميع البودكاست
                  </Link>
                </li>
                <li>
                  <Link href="/podcasts/video" className="text-sm hover:text-primary transition-colors">
                    بودكاست مرئي
                  </Link>
                </li>
                <li>
                  <Link href="/podcasts/audio" className="text-sm hover:text-primary transition-colors">
                    بودكاست صوتي
                  </Link>
                </li>
                <li>
                  <Link href="/podcasts/latest" className="text-sm hover:text-primary transition-colors">
                    أحدث الحلقات
                  </Link>
                </li>
                <li>
                  <Link href="/podcasts/popular" className="text-sm hover:text-primary transition-colors">
                    الأكثر استماعًا
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {type === "programs" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">برامج سياسية</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/programs/asl-el-khabar"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Image
                      src="/images/program1.png"
                      alt="أصل الخبر من واشنطن"
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                    <div>
                      <span className="font-medium block">أصل الخبر من واشنطن</span>
                      <span className="text-xs text-muted-foreground">تحليل سياسي أمريكي</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/geopolitica"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Image src="/images/program3.png" alt="جيوبوليتيكا" width={50} height={50} className="rounded-md" />
                    <div>
                      <span className="font-medium block">جيوبوليتيكا</span>
                      <span className="text-xs text-muted-foreground">تحليل جغرافي سياسي</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">برامج تقنية وثقافية</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/programs/transistor"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Image src="/images/program2.png" alt="ترانزستور" width={50} height={50} className="rounded-md" />
                    <div>
                      <span className="font-medium block">ترانزستور</span>
                      <span className="text-xs text-muted-foreground">شرح المفاهيم التقنية</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/lakhsna-lak"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Image src="/images/program4.png" alt="لخصنا لك" width={50} height={50} className="rounded-md" />
                    <div>
                      <span className="font-medium block">لخصنا لك</span>
                      <span className="text-xs text-muted-foreground">ملخصات كتب عالمية</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">استكشف</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/programs" className="text-sm hover:text-primary transition-colors">
                    جميع البرامج
                  </Link>
                </li>
                <li>
                  <Link href="/programs/politics" className="text-sm hover:text-primary transition-colors">
                    برامج سياسية
                  </Link>
                </li>
                <li>
                  <Link href="/programs/tech" className="text-sm hover:text-primary transition-colors">
                    برامج تقنية
                  </Link>
                </li>
                <li>
                  <Link href="/programs/culture" className="text-sm hover:text-primary transition-colors">
                    برامج ثقافية
                  </Link>
                </li>
                <li>
                  <Link href="/programs/latest" className="text-sm hover:text-primary transition-colors">
                    أحدث الحلقات
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
