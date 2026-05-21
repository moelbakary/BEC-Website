import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { PageHeader, FeatureGrid, CTABand } from "@/components/Sections";

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.lang);
  return buildMetadata({
    title: dict.industries.seoTitle,
    description: dict.industries.seoDesc,
    lang: params.lang,
    path: "industries",
  });
}

export default function IndustriesPage({ params }) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const t = dict.industries;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <section className="section">
        <div className="container-bec">
          <FeatureGrid items={t.items} columns={3} />
        </div>
      </section>

      <CTABand
        title={dict.home.ctaTitle}
        body={dict.home.ctaBody}
        buttonLabel={dict.home.ctaButton}
        href={`/${lang}/contact`}
      />
    </>
  );
}
