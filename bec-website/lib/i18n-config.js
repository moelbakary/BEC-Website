// Central configuration for languages.
// To add a language later, add its code here and create a matching
// dictionary file in /lib/dictionaries.
export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ar"],
};

export const isRtl = (locale) => locale === "ar";
