export const i18n = {
  defaultLocale: "ar",
  locales: ["ar", "en"],
} as const

export type Locale = (typeof i18n)["locales"][number]

export const getDictionary = async (locale: Locale) => {
  try {
    // For development, return a simple dictionary structure to avoid errors
    return {
      navigation: {
        home: locale === "ar" ? "الرئيسية" : "Home",
        podcasts: locale === "ar" ? "بودكاست" : "Podcasts",
        programs: locale === "ar" ? "برامج" : "Programs",
        opinions: locale === "ar" ? "آراء سياسية" : "Political Opinions",
        articles: locale === "ar" ? "مقالات" : "Articles",
        documentaries: locale === "ar" ? "وثائقيات" : "Documentaries",
        civilization: locale === "ar" ? "حضارة الشرق" : "Eastern Civilization",
      },
      buttons: {
        subscribe: locale === "ar" ? "اشترك الآن" : "Subscribe Now",
        explore: locale === "ar" ? "استكشف المحتوى" : "Explore Content",
        newsletter: locale === "ar" ? "اشترك في النشرة" : "Subscribe to Newsletter",
        watchNow: locale === "ar" ? "شاهد الآن" : "Watch Now",
      },
      home: {
        hero: {
          title: locale === "ar" ? "القصة من كل زواياها" : "The Story From All Angles",
          subtitle:
            locale === "ar"
              ? "منصة فكرية مستقلة تقدم محتوى متنوع من المقالات والبودكاست والفيديوهات لفهم أعمق لعالم متغير"
              : "An independent intellectual platform offering diverse content including articles, podcasts, and videos for a deeper understanding of a changing world",
        },
        sections: {
          latestReleases: locale === "ar" ? "أحدث إصداراتنا" : "Latest Releases",
          editorsPicks: locale === "ar" ? "مختارات المحرر" : "Editor's Picks",
        },
      },
    }

    // The original implementation - uncomment when dictionary files are properly set up
    // return (await import(`../dictionaries/${locale}.json`)).default
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error)
    // Return a minimal fallback dictionary
    return {
      navigation: {},
      buttons: {},
      home: {
        hero: {},
      },
    }
  }
}
