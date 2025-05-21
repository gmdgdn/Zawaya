import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans_Arabic, Noto_Sans_Arabic, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { i18n } from "@/config/i18n-config"
import { redirect } from "next/navigation"

// Arabic fonts
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
})

// English font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "زوايا - القصة من كل زواياها",
  description: "منصة فكرية مستقلة تقدم محتوى متنوع من المقالات والبودكاست والفيديوهات",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Redirect root to default locale
  if (typeof window === "undefined") {
    redirect(`/${i18n.defaultLocale}`)
  }

  return (
    <html
      lang={i18n.defaultLocale}
      dir={i18n.defaultLocale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={`${ibmPlexArabic.variable} ${notoSansArabic.variable} ${inter.variable}`}
    >
      <body className={i18n.defaultLocale === "ar" ? "font-ibm-plex" : "font-inter"}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
