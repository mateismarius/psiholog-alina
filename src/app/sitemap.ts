// src/app/sitemap.ts - Harta site-ului pentru motoarele de cautare (/sitemap.xml)
import type { MetadataRoute } from 'next'
import { absoluteUrl, services } from '@/lib/site'

// /testimoniale nu este inclus: pagina nu este legata din meniu (ascunsa intentionat)
const staticPages: { path: string, priority: number, changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/servicii', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/despre-mine', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    return [
        ...staticPages.map((page) => ({
            url: absoluteUrl(page.path),
            lastModified,
            changeFrequency: page.changeFrequency,
            priority: page.priority,
        })),
        ...services.map((service) => ({
            url: absoluteUrl(service.href),
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
    ]
}
