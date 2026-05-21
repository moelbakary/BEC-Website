"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/site";

export default function Navbar({ lang, dict }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const otherLang = lang === "ar" ? "en" : "ar";
  // Swap the language segment in the current URL
  const segments = (pathname || `/${lang}`).split("/");
  segments[1] = otherLang;
  const switchHref = segments.join("/") || `/${otherLang}`;

  const linkBase = (path) => `/${lang}${path ? "/" + path : ""}`;
  const isActive = (path) => {
    const href = linkBase(path);
    if (path === "") return pathname === `/${lang}` || pathname === `/${lang}/`;
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-steel-200 bg-white/90 backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <nav className="container-bec flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center" aria-label="BEC home">
          <Image
            src="/BEC_Logo.png"
            alt="Beverage Engineering Company logo"
            width={150}
            height={75}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                href={linkBase(item.path)}
                className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-flame"
                    : "text-ink-700 hover:text-flame"
                }`}
              >
                {dict.nav[item.key]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: language + CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={switchHref}
            className="rounded-sm border border-steel-300 px-3 py-1.5 text-sm font-semibold text-ink-700 transition-colors hover:border-ink-700"
          >
            {dict.nav.langSwitch}
          </Link>
          <Link href={linkBase("contact")} className="btn-primary px-5 py-2.5">
            {dict.nav.cta}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-sm text-ink-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-steel-200 bg-white lg:hidden transition-[max-height] duration-300 ${
          open ? "max-h-[640px]" : "max-h-0"
        }`}
      >
        <ul className="container-bec flex flex-col py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                href={linkBase(item.path)}
                className={`block border-b border-steel-100 py-3 text-base font-medium ${
                  isActive(item.path) ? "text-flame" : "text-ink-700"
                }`}
              >
                {dict.nav[item.key]}
              </Link>
            </li>
          ))}
          <li className="mt-4 flex items-center gap-3">
            <Link href={switchHref} className="btn-outline flex-1 py-3">
              {dict.nav.langSwitch}
            </Link>
            <Link href={linkBase("contact")} className="btn-primary flex-1 py-3">
              {dict.nav.cta}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
