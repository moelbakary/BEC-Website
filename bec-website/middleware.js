import { NextResponse } from "next/server";

// Supported languages (kept here directly so this file has no imports to resolve).
const LOCALES = ["en", "ar"];
const DEFAULT_LOCALE = "en";

// Redirects any URL without a language prefix to a language.
// e.g.  /about  ->  /en/about      /  ->  /en
export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip Next internals, the API, and files with an extension (images, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Does the path already start with a supported language?
  const hasLocale = LOCALES.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Honour the visitor's browser language if it's Arabic, otherwise default.
  const accept = request.headers.get("accept-language") || "";
  const preferred = accept.toLowerCase().startsWith("ar") ? "ar" : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
