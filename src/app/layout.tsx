import './globals.css'
import { Inter, Merriweather } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { ScrollToTopWrapper } from '@/components/ui/ScrollToTop'
import { cn } from '@/lib/utils'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
})

const merriweather = Merriweather({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
        { media: '(prefers-color-scheme: dark)', color: '#0284c7' },
    ],
}

export const metadata: Metadata = {
    title: {
        template: '%s | Psiholog Alina - Specialist Terapie Autism București',
        default: 'Psiholog Alina - Specialist Terapie Autism și Psihoterapie București',
    },
    description: 'Cabinet de psihologie specializat în terapie autism pentru copii și adulți în București. Psiholog clinician cu experiență în intervenție timpurie, evaluare autism, psihoterapie individuală și de cuplu. Programări online și la cabinet.',
    keywords: [
        'psiholog bucuresti',
        'terapie autism bucuresti',
        'psiholog autism copii',
        'psihoterapie bucuresti',
        'cabinet psihologie bucuresti',
        'psiholog clinician bucuresti',
        'terapie copii autism',
        'diagnostic autism bucuresti',
        'consiliere psihologica bucuresti',
        'psiholog sector 1',
        'psiholog sector 2',
        'psiholog sector 3',
        'terapie ABA bucuresti',
        'intervenie timpurie autism',
        'evaluare psihologica autism',
        'psihoterapie copii bucuresti',
        'terapie de cuplu bucuresti',
        'consiliere familiala bucuresti'
    ],
    authors: [{ name: 'Psiholog Alina' }],
    creator: 'Psiholog Alina',
    publisher: 'Cabinet Individual de Psihologie Alina',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://psiholog-alina.vercel.app'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'ro_RO',
        url: '/',
        title: 'Psiholog Alina - Specialist Terapie Autism și Psihoterapie București',
        description: 'Cabinet de psihologie specializat în terapie autism pentru copii și adulți. Servicii de psihoterapie, consiliere psihologică și evaluare autism în București.',
        siteName: 'Psiholog Alina București',
        images: [
            {
                url: '/images/psiholog-alina-cabinet.jpg',
                width: 1200,
                height: 630,
                alt: 'Cabinet Psihologie Alina - Specialist Terapie Autism București',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Psiholog Alina - Terapie Autism București',
        description: 'Specialist în terapie autism, psihoterapie și consiliere psihologică în București. Cabinet acreditat pentru copii și adulți.',
        images: ['/images/psiholog-alina-cabinet.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: process.env.GOOGLE_VERIFICATION,
    },
}

// Schema.org JSON-LD pentru SEO local
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Cabinet Individual de Psihologie Alina',
    description: 'Cabinet de psihologie specializat în terapie autism pentru copii și adulți, psihoterapie individuală și de cuplu în București',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://psiholog-alina.vercel.app',
    telephone: '+40722123456',
    email: 'contact@psiholog-alina.ro',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Strada Exemplu nr. 123',
        addressLocality: 'București',
        addressRegion: 'București',
        postalCode: '010101',
        addressCountry: 'RO'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 44.4268,
        longitude: 26.1025
    },
    openingHours: [
        'Mo-Fr 09:00-18:00',
        'Sa 09:00-14:00'
    ],
    paymentAccepted: ['Cash', 'Card'],
    currenciesAccepted: 'RON',
    areaServed: [
        {
            '@type': 'City',
            name: 'București'
        },
        {
            '@type': 'State',
            name: 'Ilfov'
        }
    ],
    medicalSpecialty: [
        'Psihologie Clinică',
        'Terapie Autism',
        'Psihoterapie',
        'Consiliere Psihologică'
    ],
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '147'
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicii Psihologie',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalTherapy',
                    name: 'Terapie Autism',
                    description: 'Terapie specializată pentru copii și adulți cu tulburări din spectrul autist'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalTherapy',
                    name: 'Psihoterapie Individuală',
                    description: 'Terapie individuală pentru anxietate, depresie, traumă și dezvoltare personală'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalTherapy',
                    name: 'Terapie de Cuplu',
                    description: 'Consiliere și terapie pentru cupluri, îmbunătățirea comunicării și relațiilor'
                }
            }
        ]
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ro" className={cn(inter.variable, merriweather.variable)}>
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            "selection:bg-therapeutic-200 selection:text-therapeutic-900"
        )}>
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>

        {/* Scroll to top button */}
        <ScrollToTopWrapper />

        {/* Analytics scripts */}
        {process.env.NODE_ENV === 'production' && (
            <>
                {/* Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                                `,
                    }}
                />
            </>
        )}
        </body>
        </html>
    )
}