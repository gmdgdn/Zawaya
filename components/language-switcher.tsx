"use client"

import { useState, useRef, useEffect } from "react"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors p-2 rounded-full hover:bg-muted"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-5 w-5" />
        <span className="hidden md:inline">العربية</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-background border border-border shadow-lg rounded-md overflow-hidden min-w-[120px] z-50">
          <a href="#" className="block w-full text-right px-4 py-2 text-sm hover:bg-muted transition-colors">
            العربية
          </a>
          <a href="#" className="block w-full text-right px-4 py-2 text-sm hover:bg-muted transition-colors">
            English
          </a>
        </div>
      )}
    </div>
  )
}
