import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SiteFooter() {
  return (
    <footer className="bg-muted/30 dark:bg-muted/10 py-12 mt-16 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/zawayah-logo.png" alt="زوايا" width={40} height={40} />
              <span className="text-2xl font-bold">زوايا</span>
            </div>
            <p className="text-muted-foreground mb-4">زوايا: القصة من كل زواياها - فهم أعمق لعالم متغير.</p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-muted-foreground hover:text-primary transition-colors">
                  بودكاست
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  برامج
                </Link>
              </li>
              <li>
                <Link href="/opinions" className="text-muted-foreground hover:text-primary transition-colors">
                  آراء سياسية
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  مقالات
                </Link>
              </li>
              <li>
                <Link href="/documentaries" className="text-muted-foreground hover:text-primary transition-colors">
                  وثائقيات
                </Link>
              </li>
              <li>
                <Link href="/civilization" className="text-muted-foreground hover:text-primary transition-colors">
                  حضارة الشرق
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">عن زوايا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  من نحن؟
                </Link>
              </li>
              <li>
                <Link href="/writers-platform" className="text-muted-foreground hover:text-primary transition-colors">
                  منبر الكُتّاب
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">النشرة البريدية</h3>
            <p className="text-muted-foreground mb-4">
              اشترك في نشرتنا البريدية للحصول على آخر المقالات والبودكاست والفيديوهات.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-background border-0 focus-visible:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">اشترك الآن</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>جميع الحقوق محفوظة © 2025 زوايا</p>
        </div>
      </div>
    </footer>
  )
}
