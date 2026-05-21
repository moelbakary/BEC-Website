import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { PageHeader, FeatureGrid, CTABand } from "@/components/Sections";

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.lang);
  return buildMetadata({
    title: dict.aftersales.seoTitle,
    description: dict.aftersales.seoDesc,
    lang: params.lang,
    path: "aftersales",
  });
}

export default function AftersalesPage({ params }) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const t = dict.aftersales;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <section className="section">
        <div className="container-bec">
          <FeatureGrid items={t.items} columns={3} />
        </div>
      </section>

      <CTABand
        title={t.ctaTitle}
        body={t.ctaBody}
        buttonLabel={dict.common.getInTouch}
        href={`/${lang}/contact`}
      />
    </>
  );
}
