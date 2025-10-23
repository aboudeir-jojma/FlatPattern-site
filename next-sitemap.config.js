/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sheetmetaldevelopment.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/server-sitemap-index.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://sheetmetaldevelopment.com/sitemap-0.xml',
    ],
  },
};
