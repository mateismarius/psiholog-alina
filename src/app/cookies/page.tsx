import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, LegalSection } from '@/components/core/LegalPage'
import { CookieSettingsButton } from '@/components/layout/CookieSettingsButton'
import { CONSENT_STORAGE_KEY } from '@/lib/consent'
import { withPageMeta } from '@/lib/seo'

export const metadata: Metadata = withPageMeta('/cookies', {
    title: 'Politica de cookie-uri',
    description: 'Ce cookie-uri folosește site-ul cabinetului de psihologie, în ce scop și cum îți poți schimba oricând preferințele.',
})

const cookies = [
    {
        name: CONSENT_STORAGE_KEY,
        provider: 'Acest site',
        purpose: 'Reține dacă ai acceptat sau refuzat cookie-urile de analiză (stocare locală în browser).',
        duration: 'Până o ștergi din browser',
        type: 'Strict necesar',
    },
    {
        name: '_ga',
        provider: 'Google Analytics',
        purpose: 'Distinge vizitatorii, pentru statistici anonimizate de utilizare.',
        duration: '2 ani',
        type: 'Analiză (doar cu acord)',
    },
    {
        name: '_ga_<ID>',
        provider: 'Google Analytics',
        purpose: 'Păstrează starea sesiunii pentru statisticile de utilizare.',
        duration: '2 ani',
        type: 'Analiză (doar cu acord)',
    },
]

export default function CookiesPage() {
    return (
        <LegalPage
            title="Politica de cookie-uri"
            intro={
                <p>
                    Site-ul folosește un număr minim de cookie-uri. Cele de analiză sunt activate{' '}
                    <strong>numai dacă îți dai acordul</strong>, din bannerul afișat la prima vizită.
                </p>
            }
        >
            <LegalSection id="ce-sunt" title="1. Ce sunt cookie-urile">
                <p>
                    Cookie-urile sunt fișiere text de mici dimensiuni pe care un site le salvează în browserul tău.
                    Ele permit, de exemplu, păstrarea preferințelor sau măsurarea numărului de vizitatori.
                </p>
            </LegalSection>

            <LegalSection id="lista" title="2. Ce cookie-uri folosim">
                {/* Tabel cu scroll orizontal pe ecrane inguste, fara a lati pagina */}
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full min-w-[640px] text-left text-sm">
                        <thead className="bg-gray-50 text-gray-900">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-semibold">Nume</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Furnizor</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Scop</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Durată</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Tip</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {cookies.map((cookie) => (
                                <tr key={cookie.name}>
                                    <td className="px-4 py-3 font-mono text-xs">{cookie.name}</td>
                                    <td className="px-4 py-3">{cookie.provider}</td>
                                    <td className="px-4 py-3">{cookie.purpose}</td>
                                    <td className="px-4 py-3">{cookie.duration}</td>
                                    <td className="px-4 py-3">{cookie.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p>
                    Datele colectate de Google Analytics sunt prelucrate de Google Ireland Limited. Detalii despre
                    modul în care Google folosește datele găsești la{' '}
                    <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
                        policies.google.com
                    </a>.
                </p>
            </LegalSection>

            <LegalSection id="preferinte" title="3. Cum îți schimbi preferințele">
                <p>
                    Îți poți retrage sau acorda consimțământul oricând, din butonul de mai jos sau din linkul
                    „Setări cookie” aflat în subsolul fiecărei pagini.
                </p>
                <CookieSettingsButton />
                <p>
                    De asemenea, poți șterge sau bloca cookie-urile din setările browserului. Blocarea
                    cookie-urilor de analiză nu afectează funcționarea site-ului.
                </p>
            </LegalSection>

            <LegalSection id="date-personale" title="4. Date personale">
                <p>
                    Pentru informații despre modul în care prelucrăm datele personale, consultă{' '}
                    <Link href="/confidentialitate">Politica de confidențialitate</Link>.
                </p>
            </LegalSection>
        </LegalPage>
    )
}
