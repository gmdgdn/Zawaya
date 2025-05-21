"use client"

import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 bg-background z-50 animate-fade-in">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold">
            ثمانية
          </Link>
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              المقالات
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              البوابة
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              الفيديوهات
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <ModeToggle />
          <div className="hidden md:flex gap-2">
            <Button variant="outline" className="text-sm">
              الدخول
            </Button>
            <Button className="text-sm bg-yellow-400 hover:bg-yellow-500 text-black">اشترك الآن</Button>
          </div>
          <button
            className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b animate-slide-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#" className="text-sm font-medium py-2 hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="#" className="text-sm font-medium py-2 hover:text-primary transition-colors">
              المقالات
            </Link>
            <Link href="#" className="text-sm font-medium py-2 hover:text-primary transition-colors">
              البوابة
            </Link>
            <Link href="#" className="text-sm font-medium py-2 hover:text-primary transition-colors">
              الفيديوهات
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="text-sm flex-1">
                الدخول
              </Button>
              <Button className="text-sm bg-yellow-400 hover:bg-yellow-500 text-black flex-1">اشترك الآن</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
