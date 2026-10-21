import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, LegalSection } from '@/components/core/LegalPage'
import { withPageMeta } from '@/lib/seo'
import { legalInfo, siteConfig } from '@/lib/site'

export const metadata: Metadata = withPageMeta('/confidentialitate', {
    title: 'Politica de confidențialitate',
    description: 'Cum prelucrează cabinetul de psihologie datele personale ale clienților și ale vizitatorilor site-ului, conform GDPR: ce date, în ce scop, cât timp și ce drepturi ai.',
})

// Text generic; datele juridice complete se completeaza in lib/site.ts (legalInfo)
export default function ConfidentialitatePage() {
    return (
        <LegalPage
            title="Politica de confidențialitate"
            intro={
                <p>
                    Confidențialitatea este esențială în munca unui psiholog. Această pagină explică ce date
                    personale prelucrăm atunci când ne contactezi, când beneficiezi de serviciile cabinetului
                    sau când vizitezi site-ul, precum și drepturile pe care le ai conform Regulamentului (UE)
                    2016/679 (GDPR) și Legii nr. 190/2018.
                </p>
            }
        >
            <LegalSection id="operator" title="1. Cine este operatorul datelor">
                <p>
                    Operatorul datelor cu caracter personal este <strong>{legalInfo.entityName}</strong>, cu sediul
                    profesional în {legalInfo.registeredOffice}.
                </p>
                <ul>
                    {legalInfo.fiscalCode && <li>Cod de identificare fiscală: {legalInfo.fiscalCode}</li>}
                    {legalInfo.cprCode && <li>Cod de înregistrare în Registrul unic al psihologilor: {legalInfo.cprCode}</li>}
                    <li>
                        E-mail: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                    </li>
                    <li>
                        Telefon: <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
                    </li>
                </ul>
            </LegalSection>

            <LegalSection id="date" title="2. Ce date prelucrăm">
                <ul>
                    <li>
                        <strong>Date de contact</strong> – nume, număr de telefon, adresă de e-mail și conținutul
                        mesajului, atunci când ne contactezi telefonic, prin e-mail sau prin WhatsApp.
                    </li>
                    <li>
                        <strong>Date legate de serviciile psihologice</strong> – informațiile discutate în ședințe,
                        rezultatele evaluărilor și notițele de lucru. Acestea pot include date privind sănătatea,
                        care fac parte din categoriile speciale de date (art. 9 GDPR).
                    </li>
                    <li>
                        <strong>Date despre copii</strong> – pentru serviciile adresate copiilor, datele sunt
                        furnizate de părinți sau de reprezentanții legali, cu acordul acestora.
                    </li>
                    <li>
                        <strong>Date de facturare</strong> – datele necesare emiterii documentelor fiscale.
                    </li>
                    <li>
                        <strong>Date de navigare</strong> – statistici anonimizate despre utilizarea site-ului,
                        colectate prin Google Analytics <strong>doar dacă îți dai acordul</strong> (vezi{' '}
                        <Link href="/cookies">Politica de cookie-uri</Link>).
                    </li>
                </ul>
            </LegalSection>

            <LegalSection id="scopuri" title="3. De ce prelucrăm datele și pe ce temei legal">
                <ul>
                    <li>
                        <strong>Răspunsul la solicitări și programări</strong> – demersuri înainte de încheierea
                        unui contract, la cererea ta (art. 6 alin. (1) lit. b GDPR).
                    </li>
                    <li>
                        <strong>Furnizarea serviciilor psihologice</strong> – executarea contractului (art. 6 alin. (1)
                        lit. b) și, pentru datele privind sănătatea, prestarea de servicii de sănătate de către un
                        profesionist supus obligației de secret profesional (art. 9 alin. (2) lit. h GDPR).
                    </li>
                    <li>
                        <strong>Obligații legale</strong> – evidențe financiar-contabile și obligațiile profesionale
                        ale psihologului (art. 6 alin. (1) lit. c GDPR).
                    </li>
                    <li>
                        <strong>Statistici despre utilizarea site-ului</strong> – pe baza consimțământului tău
                        (art. 6 alin. (1) lit. a GDPR), pe care îl poți retrage oricând.
                    </li>
                </ul>
            </LegalSection>

            <LegalSection id="secret-profesional" title="4. Secretul profesional">
                <p>
                    Informațiile obținute în cadrul ședințelor sunt confidențiale și protejate de secretul
                    profesional, conform Legii nr. 213/2004 privind exercitarea profesiei de psiholog și Codului
                    deontologic al profesiei de psiholog. Ele pot fi dezvăluite doar cu acordul tău sau în
                    situațiile expres prevăzute de lege.
                </p>
            </LegalSection>

            <LegalSection id="durata" title="5. Cât timp păstrăm datele">
                <ul>
                    <li>Mesajele și datele de contact: pe durata necesară pentru a răspunde solicitării și a stabili programarea.</li>
                    <li>Documentația psihologică: pe durata prevăzută de reglementările profesionale aplicabile psihologilor.</li>
                    <li>Documentele financiar-contabile: pe durata prevăzută de legislația financiar-contabilă.</li>
                    <li>Datele statistice de navigare: conform setărilor Google Analytics, cel mult 14 luni.</li>
                </ul>
            </LegalSection>

            <LegalSection id="destinatari" title="6. Cui transmitem datele">
                <p>Nu vindem și nu închiriem date personale. Datele pot ajunge, strict în măsura necesară, la:</p>
                <ul>
                    <li>furnizori de servicii tehnice: e-mail (Google), găzduirea site-ului (Vercel), mesagerie (WhatsApp), dacă alegi acest canal;</li>
                    <li>Google Analytics, doar dacă ți-ai dat acordul;</li>
                    <li>autorități publice, doar atunci când legea ne obligă.</li>
                </ul>
                <p>
                    Unii dintre acești furnizori pot prelucra date în afara Spațiului Economic European (de exemplu
                    în SUA). În aceste cazuri, transferul se face pe baza garanțiilor prevăzute de GDPR, precum
                    decizia de adecvare EU–US Data Privacy Framework sau clauzele contractuale standard.
                </p>
            </LegalSection>

            <LegalSection id="drepturi" title="7. Drepturile tale">
                <p>Conform GDPR, ai dreptul:</p>
                <ul>
                    <li>să afli ce date prelucrăm despre tine și să primești o copie a lor (dreptul de acces);</li>
                    <li>să ceri corectarea datelor inexacte (dreptul la rectificare);</li>
                    <li>să ceri ștergerea datelor, în limitele obligațiilor legale de păstrare (dreptul la ștergere);</li>
                    <li>să ceri restricționarea prelucrării și să te opui prelucrării;</li>
                    <li>să primești datele într-un format structurat (dreptul la portabilitate);</li>
                    <li>să îți retragi oricând consimțământul, fără a afecta prelucrarea anterioară retragerii.</li>
                </ul>
                <p>
                    Pentru exercitarea acestor drepturi, scrie-ne la{' '}
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Îți răspundem în cel mult
                    o lună. Dacă vei considera că drepturile tale au fost încălcate, poți depune o plângere la
                    Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (
                    <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>).
                </p>
            </LegalSection>

            <LegalSection id="securitate" title="8. Securitatea datelor">
                <p>
                    Aplicăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor împotriva accesului
                    neautorizat, pierderii sau divulgării. Documentația psihologică este păstrată astfel încât să
                    fie accesibilă doar psihologului.
                </p>
            </LegalSection>

            <LegalSection id="modificari" title="9. Modificări ale acestei politici">
                <p>
                    Putem actualiza această politică atunci când se schimbă serviciile sau legislația. Versiunea
                    în vigoare este cea publicată pe această pagină, cu data ultimei actualizări de mai sus.
                </p>
            </LegalSection>
        </LegalPage>
    )
}
