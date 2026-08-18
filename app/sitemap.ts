import { MetadataRoute } from 'next';

// Required for `output: export` (static hosting).
export const dynamic = 'force-static';

const siteUrl = 'https://www.aristondevelopers.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/upcoming-project`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
