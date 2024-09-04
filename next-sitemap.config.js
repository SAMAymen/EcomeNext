/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://nextliteonline.com/en",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "https://nextliteonline.com/fr",
      hreflang: "fr",
    },
    {
      href: "https://nextliteonline.com/en",
      hreflang: "en",
    },
    {
      href: "https://nextliteonline.com/ar",
      hreflang: "ar",
    },
  ],
  transform: async (config, path) => {
    const alternateRefs = [
      {
        href: `https://nextliteonline.com/fr${path}`,
        hreflang: "fr",
      },
      {
        href: `https://nextliteonline.com/en${path}`,
        hreflang: "en",
      },
      {
        href: `https://nextliteonline.com/ar${path}`,
        hreflang: "ar",
      },
    ];

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs,
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Add main pages
    result.push(await config.transform(config, "/"));
    result.push(await config.transform(config, "/products"));
    result.push(await config.transform(config, "/about"));

    // Add specific product page
    result.push(await config.transform(config, "/products/66bf50da62ddae25eb3ff664"));

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
