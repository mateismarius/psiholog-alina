import './globals.css'
import { Inter, Merriweather } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { ScrollToTopWrapper } from '@/components/ui/ScrollToTop'
import { CookieConsent } from '@/components/layout/CookieConsent'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site'
import { localBusinessJsonLd, ogImage } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'

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
        { media: '(prefers-color-scheme: light)', color: '#6B46C1' }, // Mov profund profesional
        { media: '(prefers-color-scheme: dark)', color: '#8B5CF6' },   // Mov mai deschis pentru dark
    ],
}

export const metadata: Metadata = {
    title: {
        // Sablon scurt, ca titlurile sa nu fie trunchiate in rezultatele de cautare
        template: '%s | Psiholog Patru Alina',
        default: 'Psiholog Patru Alina – Cabinet de psihologie în București',
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
    authors: [{ name: siteConfig.name, url: '/despre-mine' }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    // Domeniul de productie; canonical-ul se seteaza per pagina (vezi withPageMeta)
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: 'website',
        locale: siteConfig.locale,
        url: '/',
        title: 'Psiholog Alina - Specialist Terapie Autism și Psihoterapie București',
        description: 'Cabinet de psihologie specializat în terapie autism pentru copii și adulți. Servicii de psihoterapie, consiliere psihologică și evaluare autism în București.',
        siteName: siteConfig.name,
        images: [ogImage],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Psiholog Alina - Terapie Autism București',
        description: 'Specialist în terapie autism, psihoterapie și consiliere psihologică în București. Cabinet acreditat pentru copii și adulți.',
        images: [ogImage.url],
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

const gaId = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ro" className={cn(inter.variable, merriweather.variable)}>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            "selection:bg-therapeutic-200 selection:text-therapeutic-900"
        )}>
        {/* Date structurate pentru SEO local */}
        <JsonLd data={localBusinessJsonLd()} />
        {/* Link de salt pentru navigarea de la tastatura */}
        <a
            href="#continut"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-3 focus:text-foreground focus:shadow-lg"
        >
            Sari la conținut
        </a>
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main id="continut" className="flex-1">
                {children}
            </main>
            <Footer />
        </div>

        {/* Scroll to top button */}
        <ScrollToTopWrapper />

        {/* Google Analytics doar in productie, daca ID-ul e configurat si doar cu consimtamant */}
        {process.env.NODE_ENV === 'production' && gaId && <CookieConsent gaId={gaId} />}
        </body>
        </html>
    )
}