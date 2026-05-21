import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { GridPattern, AccentBar } from "@/components/Artwork";
import { PageHeader } from "@/components/Sections";

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.lang);
  return buildMetadata({
    title: dict.partners.seoTitle,
    description: dict.partners.seoDesc,
    lang: params.lang,
    path: "partners",
  });
}

export default function PartnersPage({ params }) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const t = dict.partners;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      {/* About principal + role */}
      <section className="section">
        <div className="container-bec grid gap-10 lg:grid-cols-2">
          <Reveal className="rounded-lg border border-steel-200 bg-white p-9">
            <AccentBar />
            <h2 className="mt-4 font-display text-2xl font-bold text-ink-900">
              {t.sidelTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-steel-600">{t.sidelBody}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-lg border border-steel-200 bg-white p-9">
            <AccentBar />
            <h2 className="mt-4 font-display text-2xl font-bold text-ink-900">
              {t.roleTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-steel-600">{t.roleBody}</p>
          </Reveal>
        </div>
      </section>

      {/* Value points */}
      <section className="relative overflow-hidden bg-ink-900 py-20 text-white md:py-24">
        <GridPattern className="absolute inset-0 h-full w-full text-white/[0.05]" />
        <div className="container-bec relative">
          <div className="max-w-2xl">
            <span className="eyebrow text-flame-400">
              <AccentBar className="w-8" />
              {t.valueTitle}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              {t.valueTitle}
            </h2>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 sm:grid-cols-2">
            {t.valuePoints.map((point, i) => (
              <Reveal
                key={i}
                delay={(i % 2) * 90}
                as="li"
                className="flex items-start gap-4 bg-ink-800 p-7"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-flame text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-steel-300">{point}</span>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-steel-400">
            {t.note}
          </p>
          <Link href={`/${lang}/contact`} className="btn-primary mt-8 px-8 py-4">
            {dict.common.getInTouch}
          </Link>
        </div>
      </section>
    </>
  );
}
