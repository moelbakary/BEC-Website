import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, CONTACTS, PHONES, SITE } from "@/lib/site";

export default function Footer({ lang, dict }) {
  const linkBase = (path) => `/${lang}${path ? "/" + path : ""}`;
  const address = lang === "ar" ? SITE.addressAr : SITE.addressEn;

  return (
    <footer className="bg-ink-900 text-steel-300">
      <div className="container-bec grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-md bg-white p-3">
            <Image
              src="/BEC_Logo.png"
              alt="Beverage Engineering Company logo"
              width={140}
              height={70}
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {dict.footer.tagline}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={linkBase(item.path)}
                  className="transition-colors hover:text-flame"
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {dict.footer.contactTitle}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {PHONES.map((p) => (
              <li key={p.wa}>
                <a
                  href={`tel:+${p.wa}`}
                  dir="ltr"
                  className="transition-colors hover:text-flame"
                >
                  {p.display}
                </a>
              </li>
            ))}
            {CONTACTS.map((c) => (
              <li key={c.email}>
                <a
                  href={`mailto:${c.email}`}
                  dir="ltr"
                  className="break-all transition-colors hover:text-flame"
                >
                  {c.email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {dict.contact.addressTitle}
          </h3>
          <p className="mt-5 text-sm leading-relaxed">{address}</p>
          <p className="mt-3 text-sm">
            <a
              href={`https://${SITE.domain}`}
              className="text-flame transition-colors hover:text-flame-400"
            >
              {SITE.domain}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-bec flex flex-col gap-4 py-6 text-xs text-steel-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.companyName} (BEC).{" "}
            {dict.footer.rights}
          </p>
          <p className="max-w-2xl leading-relaxed">{dict.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
