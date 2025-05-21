"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import MegaMenu from "@/components/mega-menu"

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  const toggleMegaMenu = (menu: string) => {
    if (activeMegaMenu === menu) {
      setActiveMegaMenu(null)
    } else {
      setActiveMegaMenu(menu)
    }
  }

  return (
    <header className="border-b sticky top-0 bg-background z-50 animate-fade-in">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/zawayah-logo.png" alt="زوايا" width={40} height={40} />
            <span className="text-2xl font-bold">زوايا</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <button
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
              onClick={() => toggleMegaMenu("podcasts")}
            >
              بودكاست
            </button>
            <button
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
              onClick={() => toggleMegaMenu("programs")}
            >
              برامج
            </button>
            <Link href="/opinions" className="text-sm font-medium hover:text-primary transition-colors">
              آراء سياسية
            </Link>
            <Link href="/articles" className="text-sm font-medium hover:text-primary transition-colors">
              مقالات
            </Link>
            <Link href="/documentaries" className="text-sm font-medium hover:text-primary transition-colors">
              وثائقيات
            </Link>
            <Link href="/civilization" className="text-sm font-medium hover:text-primary transition-colors">
              حضارة الشرق
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="p-2 hover:bg-muted rounded-full transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-5 w-5" />
          </button>
          <ModeToggle />
          <LanguageSwitcher />
          <div className="hidden md:block">
            <Button className="text-sm bg-primary hover:bg-primary/90 text-primary-foreground">اشترك الآن</Button>
          </div>
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-b animate-slide-down bg-background">
          <div className="container mx-auto px-4 py-3">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="ابحث في زوايا..."
                className="w-full py-2 pr-10 pl-4 bg-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b animate-slide-down bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/podcasts"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              بودكاست
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              برامج
            </Link>
            <Link
              href="/opinions"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              آراء سياسية
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              مقالات
            </Link>
            <Link
              href="/documentaries"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              وثائقيات
            </Link>
            <Link
              href="/civilization"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              حضارة الشرق
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              من نحن؟
            </Link>
            <Link
              href="/writers-platform"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              منبر الكُتّاب
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              اتصل بنا
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">اشترك الآن</Button>
            </div>
          </nav>
        </div>
      )}

      {/* Mega Menus */}
      {activeMegaMenu === "podcasts" && <MegaMenu type="podcasts" onClose={() => setActiveMegaMenu(null)} />}
      {activeMegaMenu === "programs" && <MegaMenu type="programs" onClose={() => setActiveMegaMenu(null)} />}
    </header>
  )
}
