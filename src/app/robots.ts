// src/app/robots.ts - Reguli pentru crawlere (/robots.txt)
// Domeniul de preview *.vercel.app primeste oricum noindex din vercel.json
import type { MetadataRoute } from 'next'
import { absoluteUrl, siteConfig } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: absoluteUrl('/sitemap.xml'),
        host: siteConfig.url,
    }
}
