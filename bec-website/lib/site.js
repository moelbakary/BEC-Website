// ============================================================
//  SITE-WIDE CONSTANTS  —  edit company facts here in ONE place
// ============================================================
export const SITE = {
  domain: "bec-me.com",
  url: "https://bec-me.com",
  companyName: "Beverage Engineering Company",
  shortName: "BEC",
  addressEn: "12 Port Said St, Maadi, Cairo, Egypt",
  addressAr: "12 شارع بورسعيد، المعادي، القاهرة، مصر",
  // Google Maps embed for the office (no API key required)
  mapEmbed:
    "https://www.google.com/maps?q=Port+Said+St+Maadi+Cairo+Egypt&output=embed",
};

// Contact people — edit names / emails here
export const CONTACTS = [
  { name: "H. El Reedy", email: "h.elreedy@bec-me.com" },
  { name: "W. Abdelrahman", email: "w.abdelrahman@bec-me.com" },
  { name: "S. Bakary", email: "s.bakary@bec-me.com" },
];

// Phone / WhatsApp numbers — keep international format (no spaces) for wa.me links
export const PHONES = [
  { display: "+20 122 220 2422", wa: "201222202422" },
  { display: "+20 100 177 2422", wa: "201001772422" },
  { display: "+20 100 109 4335", wa: "201001094335" },
];

// Navigation — labels live in the dictionaries; here we only map keys -> routes
export const NAV_ITEMS = [
  { key: "home", path: "" },
  { key: "about", path: "about" },
  { key: "solutions", path: "solutions" },
  { key: "industries", path: "industries" },
  { key: "aftersales", path: "aftersales" },
  { key: "partners", path: "partners" },
  { key: "contact", path: "contact" },
];

// ====== PASTE YOUR FORMSPREE FORM ID BELOW (see README, step 9) ======
// Until you do this, the contact form will gracefully fall back to email.
export const FORMSPREE_ID = ""; // e.g. "xayzwkqp"
