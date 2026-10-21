'use client'

import { Button } from '@/components/ui/button'
import { openConsentSettings } from '@/lib/consent'
import { cn } from '@/lib/utils'

interface CookieSettingsButtonProps {
    // 'link' pentru subsol, 'button' pentru pagina de cookie-uri
    variant?: 'link' | 'button'
    className?: string
}

// Redeschide bannerul de consimtamant; afisat doar daca Google Analytics este configurat
export function CookieSettingsButton({ variant = 'button', className }: CookieSettingsButtonProps) {
    if (!process.env.NEXT_PUBLIC_GA_ID) return null

    if (variant === 'link') {
        return (
            <button
                type="button"
                onClick={openConsentSettings}
                className={cn('inline-flex min-h-11 items-center transition-colors', className)}
            >
                Setări cookie
            </button>
        )
    }

    return (
        <Button type="button" variant="outline" className={cn('min-h-11', className)} onClick={openConsentSettings}>
            Schimbă preferințele pentru cookie-uri
        </Button>
    )
}
