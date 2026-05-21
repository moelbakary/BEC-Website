/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Send visitors from the bare paths to the English version.
  // This replaces the old middleware and runs at the framework level,
  // so it can never crash the way middleware did.
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      { source: "/about", destination: "/en/about", permanent: false },
      { source: "/solutions", destination: "/en/solutions", permanent: false },
      { source: "/industries", destination: "/en/industries", permanent: false },
      { source: "/aftersales", destination: "/en/aftersales", permanent: false },
      { source: "/partners", destination: "/en/partners", permanent: false },
      { source: "/contact", destination: "/en/contact", permanent: false },
    ];
  },
};

module.exports = nextConfig;
