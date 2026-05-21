import "../globals.css";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import { i18n, isRtl } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Distinctive, engineering-flavoured type pairing
const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

// Pre-build a static page for each language
export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.companyName} (BEC)`,
    template: `%s`,
  },
  description:
    "BEC is the sales and aftersales representative for Sidel in Iraq and Yemen.",
  icons: { icon: "/favicon.svg" },
};

export default function LangLayout({ children, params }) {
  const lang = i18n.locales.includes(params.lang) ? params.lang : i18n.defaultLocale;
  const dict = getDictionary(lang);
  const dir = isRtl(lang) ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${display.variable} ${body.variable} ${arabic.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white">
        <Navbar lang={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
        <WhatsAppFloat prefill={dict.contact.whatsappPrefill} />
      </body>
    </html>
  );
}
