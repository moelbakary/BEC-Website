import { SITE } from "@/lib/site";

const KEYWORDS = [
  "Sidel Iraq",
  "Sidel Yemen",
  "beverage engineering Iraq",
  "bottling solutions Iraq",
  "packaging solutions Yemen",
  "PET solutions Iraq",
  "beverage production solutions",
  "filling systems Iraq",
  "BEC",
  "Beverage Engineering Company",
];

// Builds a consistent metadata object for each page.
export function buildMetadata({ title, description, lang, path = "" }) {
  const canonical = `${SITE.url}/${lang}${path ? "/" + path : ""}`;
  return {
    title,
    description,
    keywords: KEYWORDS,
    alternates: {
      canonical,
      languages: {
        en: `${SITE.url}/en${path ? "/" + path : ""}`,
        ar: `${SITE.url}/ar${path ? "/" + path : ""}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.companyName,
      locale: lang === "ar" ? "ar_IQ" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
