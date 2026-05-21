import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { PageHeader, FeatureGrid, CTABand } from "@/components/Sections";

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.lang);
  return buildMetadata({
    title: dict.solutions.seoTitle,
    description: dict.solutions.seoDesc,
    lang: params.lang,
    path: "solutions",
  });
}

export default function SolutionsPage({ params }) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const t = dict.solutions;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <section className="section">
        <div className="container-bec">
          <FeatureGrid items={t.items} columns={4} />
        </div>
      </section>

      <CTABand
        title={t.ctaTitle}
        body={t.ctaBody}
        buttonLabel={dict.common.talkToEngineer}
        href={`/${lang}/contact`}
      />
    </>
  );
}
