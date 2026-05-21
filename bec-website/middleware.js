import { NextResponse } from "next/server";
import { i18n } from "./lib/i18n-config";

// Redirects any URL without a language prefix to the default language.
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
  const hasLocale = i18n.locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Try to honour the visitor's browser language, otherwise use the default
  const accept = request.headers.get("accept-language") || "";
  const preferred = accept.toLowerCase().startsWith("ar")
    ? "ar"
    : i18n.defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
