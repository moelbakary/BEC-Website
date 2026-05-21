import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { LineArtwork, GridPattern, AccentBar } from "@/components/Artwork";
import { FeatureGrid, CTABand, SectionHeading } from "@/components/Sections";

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.lang);
  return buildMetadata({
    title: dict.home.seoTitle,
    description: dict.home.seoDesc,
    lang: params.lang,
    path: "",
  });
}

export default function HomePage({ params }) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const t = dict.home;
  const link = (p) => `/${lang}/${p}`;

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <GridPattern className="absolute inset-0 h-full w-full text-white/[0.06]" />
        <div
          className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-flame/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-bec relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-8">
          <div>
            <Reveal>
              <span className="eyebrow text-flame-400">
                <AccentBar className="w-8" />
                {t.heroEyebrow}
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                {t.heroTitle}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300">
                {t.heroSub}
              </p>
            </Reveal>
            <Reveal delay={270}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={link("solutions")} className="btn-primary px-8 py-4 text-base">
                  {t.heroPrimary}
                </Link>
                <Link href={link("contact")} className="btn-ghost-light px-8 py-4 text-base">
                  {t.heroSecondary}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <p className="mt-8 text-sm font-medium uppercase tracking-wider text-steel-400">
                {dict.common.backedBy}
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="hidden lg:block">
            <div className="relative rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <LineArtwork className="w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="border-b border-steel-200 bg-white">
        <div className="container-bec grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
          {t.stats.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="px-2 py-10 text-center md:py-12">
              <div className="font-display text-4xl font-extrabold text-ink-900 md:text-5xl">
                {s.value}
              </div>
              <div className="mx-auto mt-2 max-w-[16ch] text-sm text-steel-600">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- REP STATEMENT ---------------- */}
      <section className="section bg-steel-50">
        <div className="container-bec grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">
              <AccentBar className="w-8" />
              {dict.common.backedBy}
            </span>
            <h2 className="mt-4 h-section">{t.repTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              {t.repBody}
            </p>
            <Link
              href={link("partners")}
              className="btn-outline mt-7 px-7 py-3.5"
            >
              {dict.common.learnMore}
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-lg bg-ink-700 p-8">
              <GridPattern className="absolute inset-0 h-full w-full text-white/5" />
              <LineArtwork className="relative w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SOLUTIONS ---------------- */}
      <section className="section">
        <div className="container-bec">
          <SectionHeading
            eyebrow={dict.nav.solutions}
            title={t.solutionsTitle}
            sub={t.solutionsSub}
          />
          <div className="mt-14">
            <FeatureGrid items={dict.solutions.items.slice(0, 6)} columns={3} />
          </div>
          <div className="mt-10 text-center">
            <Link href={link("solutions")} className="btn-dark px-8 py-4">
              {dict.common.exploreSolutions}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <section className="section bg-ink-900 text-white">
        <div className="container-bec">
          <SectionHeading
            eyebrow={dict.nav.industries}
            title={t.industriesTitle}
            sub={t.industriesSub}
            light
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {dict.industries.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 3) * 80}
                className="group bg-ink-800 p-8 transition-colors hover:bg-ink-700"
              >
                <span className="font-display text-sm font-bold text-flame-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY BEC ---------------- */}
      <section className="section bg-steel-50">
        <div className="container-bec">
          <SectionHeading title={t.whyTitle} />
          <div className="mt-14">
            <FeatureGrid items={t.why} columns={4} />
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <CTABand
        title={t.ctaTitle}
        body={t.ctaBody}
        buttonLabel={t.ctaButton}
        href={link("contact")}
      />
    </>
  );
}
