// src/lib/consent.ts - Starea consimtamantului pentru cookie-urile de analiza
// Salvata in localStorage; componentele o citesc prin useSyncExternalStore.

export type ConsentValue = 'granted' | 'denied'
// 'necunoscut' = randare pe server, inainte sa putem citi preferinta din browser
export type ConsentSnapshot = ConsentValue | 'nesetat' | 'necunoscut'

export const CONSENT_STORAGE_KEY = 'consimtamant-cookie'
// Eveniment declansat de butonul 'Setari cookie' din footer
export const OPEN_CONSENT_EVENT = 'deschide-setari-cookie'

const listeners = new Set<() => void>()

export function readConsent(): ConsentSnapshot {
    try {
        const value = window.localStorage.getItem(CONSENT_STORAGE_KEY)
        return value === 'granted' || value === 'denied' ? value : 'nesetat'
    } catch {
        // Stocare blocata (mod privat, setari browser): tratam ca preferinta nesetata
        return 'nesetat'
    }
}

export function readServerConsent(): ConsentSnapshot {
    return 'necunoscut'
}

export function subscribeConsent(callback: () => void): () => void {
    listeners.add(callback)
    window.addEventListener('storage', callback)
    return () => {
        listeners.delete(callback)
        window.removeEventListener('storage', callback)
    }
}

export function saveConsent(value: ConsentValue): void {
    try {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
    } catch {
        // Fara stocare, alegerea ramane valabila doar pana la reincarcarea paginii
    }
    listeners.forEach((listener) => listener())
}

// Sterge cookie-urile Google Analytics (_ga, _ga_*) dupa retragerea consimtamantului
export function clearAnalyticsCookies(): void {
    const host = window.location.hostname
    const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`]
    document.cookie.split(';').forEach((cookie) => {
        const name = cookie.split('=')[0].trim()
        if (name === '_ga' || name.startsWith('_ga_')) {
            domains.forEach((domain) => {
                document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
            })
        }
    })
}

export function openConsentSettings(): void {
    window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))
}
