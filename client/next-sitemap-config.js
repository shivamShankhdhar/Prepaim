export default function sitemap() {
  return {
    routes: [
      {
        path: "/",
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
    ],
  };
}