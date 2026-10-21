'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import {
    OPEN_CONSENT_EVENT,
    clearAnalyticsCookies,
    readConsent,
    readServerConsent,
    saveConsent,
    subscribeConsent,
    type ConsentValue,
} from '@/lib/consent'

interface CookieConsentProps {
    gaId: string
}

// Banner de consimtamant: Google Analytics se incarca doar dupa 'Accept'.
// Alegerea poate fi schimbata oricand din butonul 'Setari cookie' din footer.
export function CookieConsent({ gaId }: CookieConsentProps) {
    const consent = useSyncExternalStore(subscribeConsent, readConsent, readServerConsent)
    const [settingsOpen, setSettingsOpen] = useState(false)

    useEffect(() => {
        const open = () => setSettingsOpen(true)
        window.addEventListener(OPEN_CONSENT_EVENT, open)
        return () => window.removeEventListener(OPEN_CONSENT_EVENT, open)
    }, [])

    const choose = (value: ConsentValue) => {
        const previous = consent
        saveConsent(value)
        setSettingsOpen(false)
        // Scripturile deja incarcate nu pot fi oprite: stergem cookie-urile si reincarcam
        if (value === 'denied' && previous === 'granted') {
            clearAnalyticsCookies()
            window.location.reload()
        }
    }

    const showBanner = consent === 'nesetat' || settingsOpen

    return (
        <>
            {consent === 'granted' && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gaId}');
                        `}
                    </Script>
                </>
            )}

            {showBanner && (
                <div
                    role="region"
                    aria-label="Consimțământ pentru cookie-uri"
                    className="fixed inset-x-0 bottom-0 z-[60] p-4 motion-safe:animate-in motion-safe:slide-in-from-bottom-4 motion-safe:fade-in"
                >
                    <div className="mx-auto max-w-3xl rounded-2xl border border-therapeutic-100 bg-background p-5 shadow-2xl sm:flex sm:items-center sm:gap-6">
                        <p className="text-sm leading-relaxed text-gray-700">
                            Folosim cookie-uri de analiză (Google Analytics) doar cu acordul tău, ca să
                            înțelegem cum este folosit site-ul. Detalii în{' '}
                            <Link href="/cookies" className="font-medium text-therapeutic-600 underline underline-offset-2 hover:text-therapeutic-700">
                                Politica de cookie-uri
                            </Link>
                            .
                        </p>
                        {/* Ambele optiuni au aceeasi vizibilitate (cerinta GDPR) */}
                        <div className="mt-4 grid shrink-0 grid-cols-2 gap-3 sm:mt-0">
                            <Button variant="outline" className="min-h-11" onClick={() => choose('denied')}>
                                Refuz
                            </Button>
                            <Button className="min-h-11 bg-therapeutic text-white hover:bg-therapeutic/90" onClick={() => choose('granted')}>
                                Accept
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
