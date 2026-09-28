import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing';

const host = "https://connectlatamvt.vercel.app";
const routes = [
  { path: "", priority: 1.0 },
  { path: "tutorials", priority: 0.8 },
  { path: "shows", priority: 0.8 },
  { path: "about", priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, priority }) =>
    routing.locales.map((locale) => ({
      url: `${host}/${locale}/${path}`,
      lastModified: new Date(),
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${host}/${l}${path}`])
        ),
      }
    })))
}