"use client"

import { useState, useRef, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import { i18n } from "@/config/i18n-config"

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Determine current language from URL
  const currentLang = pathname.startsWith("/en") ? "en" : "ar"
  const isArabic = currentLang === "ar"

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle language change
  const switchLanguage = (lang: string) => {
    if (lang === currentLang) return

    // Save preference to localStorage
    localStorage.setItem("preferredLanguage", lang)

    // Redirect to the equivalent page in the other language
    const newPathname = redirectToLanguage(pathname, lang)
    router.push(newPathname)
    setIsOpen(false)
  }

  // Function to redirect to the equivalent page in the target language
  const redirectToLanguage = (path: string, lang: string) => {
    // If current path is root
    if (path === "/") {
      return `/${lang}`
    }

    // If current path already has a language prefix
    if (i18n.locales.some((locale) => path.startsWith(`/${locale}`))) {
      const pathWithoutLang = path.substring(3) // Remove the first 3 characters (e.g., '/ar' or '/en')
      return `/${lang}${pathWithoutLang}`
    }

    // If no language prefix, add it
    return `/${lang}${path}`
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors p-2 rounded-full hover:bg-muted"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="h-5 w-5" />
        <span className="hidden md:inline">{isArabic ? "العربية" : "English"}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-background border border-border shadow-lg rounded-md overflow-hidden min-w-[120px] z-50">
          <button
            className={`block w-full text-right px-4 py-2 text-sm hover:bg-muted transition-colors ${isArabic ? "bg-muted/50" : ""}`}
            onClick={() => switchLanguage("ar")}
          >
            العربية
          </button>
          <button
            className={`block w-full text-right px-4 py-2 text-sm hover:bg-muted transition-colors ${!isArabic ? "bg-muted/50" : ""}`}
            onClick={() => switchLanguage("en")}
          >
            English
          </button>
        </div>
      )}
    </div>
  )
}
