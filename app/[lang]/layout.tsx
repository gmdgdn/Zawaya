import type React from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { i18n } from "@/config/i18n-config"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  const isRtl = params.lang === "ar"

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        {isRtl ? "تخطي إلى المحتوى" : "Skip to content"}
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
