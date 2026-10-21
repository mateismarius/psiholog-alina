// src/lib/site.ts - Date centrale ale cabinetului (NAP: nume, adresa, telefon)
// Orice modificare de contact se face doar aici, ca site-ul si datele structurate sa ramana consistente.

export const siteConfig = {
    // Domeniul de productie; canonical, Open Graph si sitemap folosesc mereu acest URL
    url: 'https://psiholog-alina.ro',
    name: 'Psiholog Patru Alina',
    personName: 'Alina Patru',
    jobTitle: 'Psiholog clinician',
    phone: '+40724172996',
    phoneDisplay: '+40 724 172 996',
    email: 'psiholog.alina.patru@gmail.com',
    address: {
        street: 'Strada Lunei nr. 7',
        sector: 'Sector 2',
        locality: 'București',
        postalCode: '023995',
        country: 'RO',
    },
    addressDisplay: 'Strada Lunei nr. 7, Sector 2, București',
    geo: {
        latitude: 44.4374319,
        longitude: 26.1155393,
    },
    mapsUrl: 'https://www.google.com/maps/place/Strada+Lunei+7,+Bucure%C8%99ti+023995/@44.4374357,26.1129644,17z',
    openingHours: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
    },
    // Programul afisat pe site (Home, Footer, Contact)
    openingDaysDisplay: 'Luni - Vineri',
    openingHoursDisplay: '09:00 - 18:00',
    locale: 'ro_RO',
} as const

// Date juridice folosite in paginile legale si in footer.
// TODO: de completat cu datele oficiale; campurile null nu sunt afisate pe site.
export const legalInfo: {
    entityName: string
    fiscalCode: string | null
    cprCode: string | null
    registeredOffice: string
    lastUpdated: string
} = {
    entityName: 'Cabinet Individual de Psihologie Patru Alina',
    fiscalCode: null, // cod de identificare fiscala (CIF)
    cprCode: null, // cod de inregistrare in Registrul unic al psihologilor (CPR)
    registeredOffice: siteConfig.addressDisplay,
    lastUpdated: '21 octombrie 2026',
}

export interface ServiceLink {
    name: string
    href: string
}

// Paginile de servicii existente, folosite in footer, sitemap, date structurate si linkuri interne
export const services: ServiceLink[] = [
    { name: 'Evaluare psihologică', href: '/servicii/evaluare-psihologica' },
    { name: 'Intervenție pentru recuperare', href: '/servicii/interventie-recuperare' },
    { name: 'Terapie senzorială', href: '/servicii/terapie-senzoriala' },
    { name: 'Logopedie', href: '/servicii/logopedie' },
    { name: 'Psihoterapie', href: '/servicii/psihoterapie' },
    { name: 'Psihologie sportivă', href: '/servicii/psihologie-sportiva' },
]

// Construieste URL absolut pentru o cale relativa
export function absoluteUrl(path: string): string {
    return new URL(path, siteConfig.url).toString()
}
