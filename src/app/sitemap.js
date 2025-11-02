export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.visitkokan.in/";

  // 🔹 Static pages
  const staticPages = [
    "",
    "aboutus",
    "contact",
    "privacy",
    "login",
    "discover",
    "events",
    "experiences",
    "business-listings",
    "plantrip",
    "travel-guides",
    "list-your-business",
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
  }));

  // 🔹 Fetch dynamic pages (optional: replace with real API)
  // Example API routes from your structure
  const [stories, categories, products] = await Promise.all([
    fetch(`${baseUrl}/api/stories`).then((r) => r.json()).catch(() => []),
    fetch(`${baseUrl}/api/categories`).then((r) => r.json()).catch(() => []),
    fetch(`${baseUrl}/api/products`).then((r) => r.json()).catch(() => []),
  ]);

  // 🔹 Dynamic story pages (src/pages/stories/[id].tsx)
  const storyUrls = stories.map((story) => ({
    url: `${baseUrl}/stories/${story.id}`,
    lastModified: story.updatedAt || new Date(),
  }));

  // 🔹 Dynamic category pages (src/pages/categories/[slug].tsx)
  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: cat.updatedAt || new Date(),
  }));

  // 🔹 Dynamic product pages (src/pages/products/[slug].tsx)
  const productUrls = products.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: prod.updatedAt || new Date(),
  }));

  // 🔹 If you have discover pages like src/pages/discover/[discovermore].tsx
  const discoverPages = [
    "konkan",
    "mumbai",
    "goa", // example dynamic names — replace with your real ones
  ].map((d) => ({
    url: `${baseUrl}/discover/${d}`,
    lastModified: new Date(),
  }));

  // Combine everything
  return [
    ...staticPages,
    ...storyUrls,
    ...categoryUrls,
    ...productUrls,
    ...discoverPages,
  ];
}
