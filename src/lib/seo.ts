// src/lib/seo.ts - Utilitare pentru metadata si date structurate (JSON-LD)
import type { Metadata } from 'next'
import { absoluteUrl, services, siteConfig } from '@/lib/site'

type PageMetadata = Metadata & { description: string }

// Imaginea implicita pentru distribuirea pe retele sociale (1200x630)
export const ogImage = {
    url: '/images/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Psiholog Patru Alina – cabinet de psihologie în Sector 2, București',
}

// Titlul simplu al paginii, fara template-ul din layout
function plainTitle(title: Metadata['title']): string {
    if (typeof title === 'string') return title
    if (title && typeof title === 'object' && 'absolute' in title && title.absolute) return title.absolute
    return siteConfig.name
}

// Adauga URL canonic si Open Graph propriu fiecarei pagini.
// Open Graph se suprascrie complet la nivel de pagina, deci repetam campurile comune.
export function withPageMeta(path: string, metadata: PageMetadata): Metadata {
    const title = plainTitle(metadata.title)
    const ogTitle = title === siteConfig.name || title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`

    return {
        ...metadata,
        alternates: { canonical: path },
        openGraph: {
            type: 'website',
            locale: siteConfig.locale,
            siteName: siteConfig.name,
            url: path,
            title: ogTitle,
            description: metadata.description,
            images: [ogImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: ogTitle,
            description: metadata.description,
            images: [ogImage.url],
        },
    }
}

// Datele structurate ale cabinetului (afacere locala)
export function localBusinessJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        '@id': absoluteUrl('/#cabinet'),
        name: siteConfig.name,
        url: siteConfig.url,
        image: absoluteUrl(ogImage.url),
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.locality,
            addressRegion: siteConfig.address.locality,
            postalCode: siteConfig.address.postalCode,
            addressCountry: siteConfig.address.country,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
        },
        hasMap: siteConfig.mapsUrl,
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: siteConfig.openingHours.days,
                opens: siteConfig.openingHours.opens,
                closes: siteConfig.openingHours.closes,
            },
        ],
        areaServed: [
            { '@type': 'City', name: 'București' },
            { '@type': 'AdministrativeArea', name: 'Sectorul 2, București' },
            { '@type': 'AdministrativeArea', name: 'Sectorul 3, București' },
        ],
        currenciesAccepted: 'RON',
        employee: {
            '@type': 'Person',
            name: siteConfig.personName,
            jobTitle: siteConfig.jobTitle,
            url: absoluteUrl('/despre-mine'),
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicii de psihologie și logopedie',
            itemListElement: services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    url: absoluteUrl(service.href),
                },
            })),
        },
    }
}

export interface BreadcrumbItem {
    name: string
    path: string
}

// Fir de navigare pentru motoarele de cautare
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    }
}

// Breadcrumb standard pentru o pagina de serviciu
export function serviceBreadcrumbJsonLd(path: string) {
    const service = services.find((s) => s.href === path)
    return breadcrumbJsonLd([
        { name: 'Acasă', path: '/' },
        { name: 'Servicii', path: '/servicii' },
        { name: service?.name ?? 'Serviciu', path },
    ])
}

export interface FaqEntry {
    question: string
    answer: string
}

// Intrebari frecvente in format schema.org
export function faqJsonLd(faqs: FaqEntry[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}
