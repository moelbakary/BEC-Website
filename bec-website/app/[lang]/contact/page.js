import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { CONTACTS, PHONES, SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { PageHeader } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.lang);
  return buildMetadata({
    title: dict.contact.seoTitle,
    description: dict.contact.seoDesc,
    lang: params.lang,
    path: "contact",
  });
}

export default function ContactPage({ params }) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const t = dict.contact;
  const address = lang === "ar" ? SITE.addressAr : SITE.addressEn;
  const waText = encodeURIComponent(t.whatsappPrefill);

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <section className="section">
        <div className="container-bec grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-lg border border-steel-200 bg-white p-7 md:p-9">
              <h2 className="font-display text-2xl font-bold text-ink-900">
                {t.formTitle}
              </h2>
              <div className="mt-6">
                <ContactForm dict={dict} lang={lang} />
              </div>
            </div>
          </Reveal>

          {/* Contact cards */}
          <Reveal delay={120} className="space-y-6 lg:col-span-2">
            {/* WhatsApp */}
            <div className="rounded-lg border border-steel-200 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {t.whatsappTitle}
              </h3>
              <div className="mt-4 space-y-2">
                {PHONES.map((p) => (
                  <a
                    key={p.wa}
                    href={`https://wa.me/${p.wa}?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="flex items-center gap-3 rounded-sm border border-steel-200 px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:border-[#25D366] hover:bg-[#25D366]/5"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                      </svg>
                    </span>
                    {p.display}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="rounded-lg border border-steel-200 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {t.emailsTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {CONTACTS.map((c) => (
                  <li key={c.email}>
                    <a
                      href={`mailto:${c.email}`}
                      dir="ltr"
                      className="break-all text-ink-700 transition-colors hover:text-flame"
                    >
                      {c.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div className="rounded-lg border border-steel-200 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {t.addressTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-steel-600">
                {address}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-bec">
          <div className="overflow-hidden rounded-lg border border-steel-200">
            <iframe
              title="BEC office location"
              src={SITE.mapEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
