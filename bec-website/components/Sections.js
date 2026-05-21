import Link from "next/link";
import Reveal from "@/components/Reveal";
import { GridPattern, AccentBar } from "@/components/Artwork";

// ---------- Inner page header ----------
export function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <GridPattern className="absolute inset-0 h-full w-full text-white/[0.06]" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-flame/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-bec relative py-20 md:py-28">
        <Reveal>
          <span className="eyebrow text-flame-400">
            <AccentBar className="w-8" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300">
              {intro}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

// ---------- Feature / solution card grid ----------
export function FeatureGrid({ items, columns = 3 }) {
  const colClass =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${colClass}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 3) * 90}>
          <article className="card h-full">
            <span
              className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rotate-45 bg-flame/10 transition-all duration-300 group-hover:bg-flame/20"
              aria-hidden="true"
            />
            <span className="font-display text-sm font-bold text-flame">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-steel-600">
              {item.body}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

// ---------- CTA band ----------
export function CTABand({ title, body, buttonLabel, href }) {
  return (
    <section className="relative overflow-hidden bg-ink-700">
      <div
        className="absolute inset-y-0 left-0 w-2 bg-flame"
        aria-hidden="true"
      />
      <GridPattern className="absolute inset-0 h-full w-full text-white/[0.05]" />
      <div className="container-bec relative flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-steel-300">{body}</p>
        </div>
        <Link href={href} className="btn-primary shrink-0 px-8 py-4 text-base">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

// ---------- Section heading ----------
export function SectionHeading({ eyebrow, title, sub, light = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <span className="eyebrow justify-center">{eyebrow}</span>
      ) : null}
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-steel-300" : "text-steel-600"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
