import { i18n } from "@/lib/i18n-config";
import { SITE } from "@/lib/site";
import { NAV_ITEMS } from "@/lib/site";

export default function sitemap() {
  const entries = [];
  for (const lang of i18n.locales) {
    for (const item of NAV_ITEMS) {
      entries.push({
        url: `${SITE.url}/${lang}${item.path ? "/" + item.path : ""}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: item.path === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
