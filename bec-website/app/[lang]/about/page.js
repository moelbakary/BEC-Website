import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { LineArtwork, GridPattern, AccentBar } from "@/components/Artwork";
import { PageHeader, FeatureGrid } from "@/components/Sections";

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.lang);
  return buildMetadata({
    title: dict.about.seoTitle,
    description: dict.about.seoDesc,
    lang: params.lang,
    path: "about",
  });
}

export default function AboutPage({ params }) {
  const dict = getDictionary(params.lang);
  const t = dict.about;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      {/* History */}
      <section className="section">
        <div className="container-bec grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">
              <AccentBar className="w-8" />
              {t.historyTitle}
            </span>
            <h2 className="mt-4 h-section">{t.historyTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              {t.historyBody}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-lg bg-ink-700 p-8">
              <GridPattern className="absolute inset-0 h-full w-full text-white/5" />
              <LineArtwork className="relative w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-steel-50">
        <div className="container-bec">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <AccentBar className="w-8" />
              {t.valuesTitle}
            </span>
            <h2 className="mt-3 h-section">{t.valuesTitle}</h2>
          </div>
          <div className="mt-12">
            <FeatureGrid items={t.values} columns={3} />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-ink-900 py-20 text-white md:py-24">
        <GridPattern className="absolute inset-0 h-full w-full text-white/[0.05]" />
        <div className="container-bec relative max-w-3xl text-center">
          <span className="eyebrow justify-center text-flame-400">
            {t.missionTitle}
          </span>
          <p className="mt-5 font-display text-2xl font-semibold leading-snug md:text-3xl">
            {t.missionBody}
          </p>
        </div>
      </section>
    </>
  );
}
