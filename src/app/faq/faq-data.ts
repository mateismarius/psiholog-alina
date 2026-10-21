// src/app/faq/faq-data.ts - Continutul paginii de intrebari frecvente
// Separat de componenta client ca pagina (server) sa poata genera metadata si JSON-LD
import type { LucideIcon } from 'lucide-react'
import {
    HelpCircle,
    Heart,
    Trophy,
    MessageCircle,
    Gamepad2,
    Calendar,
    Phone,
    Clock,
    Users,
    CheckCircle,
} from 'lucide-react'
import type { BrandColor } from '@/lib/colorMap'

export interface FaqCategory {
    title: string
    icon: LucideIcon
    color: BrandColor
    faqs: { question: string; answer: string }[]
}

export interface QuickFact {
    icon: LucideIcon
    title: string
    value: string
    description: string
}

export const faqCategories: FaqCategory[] = [
    {
        title: 'Întrebări Generale',
        icon: HelpCircle,
        color: 'therapeutic',
        faqs: [
            {
                question: 'Cum aleg serviciul potrivit pentru mine sau copilul meu?',
                answer: 'Oferă o consultație telefonică gratuită de 15 minute pentru a discuta nevoile tale și a recomanda cel mai potrivit serviciu. Evaluez situația specifică și recomand cea mai bună abordare terapeutică.'
            },
            {
                question: 'Care este diferența dintre psiholog, psihoterapeut și psihiatru?',
                answer: 'Psihologul oferă consiliere și evaluare psihologică. Psihoterapeutul are pregătire specializată în tehnici terapeutice pentru tratarea tulburărilor psihice. Psihiatrul este medic și poate prescrie medicamente. Eu sunt psiholog clinician și psihoterapeut în supervizare.'
            },
            {
                question: 'Serviciile sunt confidențiale?',
                answer: 'Absolut! Confidențialitatea este esențială în munca mea. Toate informațiile discutate în ședințe sunt strict confidențiale, conform codului deontologic și legislației în vigoare.'
            },
            {
                question: 'Oferă certificat medical sau adeverință?',
                answer: 'Da, pot emite adeverințe psihologice pentru necesități administrative sau medicale, conform competențelor mele ca psiholog clinician autorizat.'
            },
            {
                question: 'Pot combina mai multe servicii simultan?',
                answer: 'Da, adesea o abordare integrată aduce cele mai bune rezultate. De exemplu, un copil poate beneficia simultan de logopedie și ședințe de intervenție pentru dezvoltare globală.'
            }
        ]
    },
    {
        title: 'Psihoterapie',
        icon: Heart,
        color: 'empathy',
        faqs: [
            {
                question: 'Cât durează o psihoterapie?',
                answer: 'Durata variază în funcție de complexitatea problemelor și obiectivele personale. Terapiile scurte pot dura 10-20 ședințe, procesele mai profunde pot dura 6 luni - 2 ani. Evaluez progresul constant și adaptez durata.'
            },
            {
                question: 'Ce abordări terapeutice folosiți?',
                answer: 'Folosesc o abordare integrativă care combină tehnici din CBT (terapia cognitiv-comportamentală), Gestalt, terapia psihodinamică și mindfulness, adaptate nevoilor fiecărui client.'
            },
            {
                question: 'Pot face terapie de cuplu dacă doar unul dintre parteneri este motivat?',
                answer: 'Este important ca ambii parteneri să fie deschis către schimbare. Pot lucra inițial individual cu persoana motivată pentru a-i dezvolta abilități care pot influența pozitiv relația.'
            },
            {
                question: 'Ce probleme tratați în psihoterapie?',
                answer: 'Tratez anxietate, depresie, traume, probleme de relație, stres, burnout, dificultăți de adaptare, dezvoltare personală și multe alte provocări emoționale și psihologice.'
            },
            {
                question: 'Cum știu dacă am nevoie de psihoterapie?',
                answer: 'Dacă simți că problemele emoționale îți afectează viața zilnică, relațiile sau munca, sau dacă te simți blocat în pattern-uri repetitive, psihoterapia te poate ajuta să găsești soluții.'
            }
        ]
    },
    {
        title: 'Psihologie Sportivă',
        icon: Trophy,
        color: 'warm',
        faqs: [
            {
                question: 'Este psihologia sportivă doar pentru sportivi de performanță?',
                answer: 'Nu! Psihologia sportivă este benefică pentru toate nivelurile - de la sport recreational la performanță de elite. Te ajută să te bucuri mai mult de sport și să atingi obiectivele personale.'
            },
            {
                question: 'Cum poate psihologia sportivă să îmi îmbunătățească performanța?',
                answer: 'Dezvolți abilități mentale esențiale: concentrare, gestionarea presiunii, motivație și încredere. Aceste abilități pot face diferența între un sportiv bun și unul excelent.'
            },
            {
                question: 'Lucrați cu echipe întregi sau doar individual?',
                answer: 'Lucrez atât individual cât și cu echipe. Pentru echipe, mă concentrez pe comunicare, coeziune, leadership și dinamica de grup pentru îmbunătățirea performanței colective.'
            },
            {
                question: 'La ce vârstă poate începe un copil psihologia sportivă?',
                answer: 'Pot lucra cu copii de la 8 ani în sus. Pentru copiii mici, folosesc jocuri și exerciții interactive pentru a dezvolta abilități mentale de bază și dragostea pentru sport.'
            },
            {
                question: 'Ședințele online funcționează pentru psihologia sportivă?',
                answer: 'Da! Psihologia sportivă se adaptă perfect formatului online. Mulți sportivi preferă flexibilitatea ședințelor online, mai ales când sunt în deplasare pentru competiții.'
            }
        ]
    },
    {
        title: 'Logopedie',
        icon: MessageCircle,
        color: 'calming',
        faqs: [
            {
                question: 'La ce vârstă poate începe logopegia?',
                answer: 'Logopegia poate începe de la 2 ani pentru stimularea precoce a limbajului. Cu cât intervenția este mai timpurie, cu atât rezultatele sunt mai bune și mai rapide.'
            },
            {
                question: 'Cât durează terapia logopedică?',
                answer: 'Durata variază în funcție de severitatea problemei și vârsta copilului. De obicei, progrese vizibile apar după 3-6 luni de terapie constantă, cu ședințe săptămânale.'
            },
            {
                question: 'Trebuie să particip ca părinte la ședințe?',
                answer: 'Da, implicarea părinților este esențială pentru succesul terapiei. Vă voi învăța exerciții specifice pe care să le faceți acasă pentru a accelera progresul copilului.'
            },
            {
                question: 'Ce echipamente și materiale folosiți?',
                answer: 'Am un cabinet complet echipat cu jucării terapeutice, materiale senzoriale, oglinzi pentru observarea articulației, aplicații interactive și tehnologie adaptată fiecărei vârste.'
            },
            {
                question: 'Pot face logopedie și adulții?',
                answer: 'Absolut! Lucrez cu adulți pentru reabilitare post-accident, îmbunătățirea comunicării profesionale, gestionarea bâlbâielii sau corectarea accentului.'
            },
            {
                question: 'Care sunt semnele că copilul are nevoie de logopedie?',
                answer: 'Întârzieri în dezvoltarea vorbirii față de vârstă, dificultăți de înțelegere a limbajului, pronunție incorectă persistentă după 4 ani, bâlbâială sau evitarea comunicării.'
            }
        ]
    },
    {
        title: 'Ședințe de Intervenție și Recuperare',
        icon: Gamepad2,
        color: 'therapeutic',
        faqs: [
            {
                question: 'De ce durează ședințele 100 de minute?',
                answer: 'Durata extinsă permite copilului să se acomodeze, să participe activ la activități diverse și să consolideze învățarea. Este timpul necesar pentru o intervenție eficientă la copii cu nevoi speciale.'
            },
            {
                question: 'Pentru ce vârste sunt potrivite aceste ședințe?',
                answer: 'Lucrez cu copii de la 2 ani până la 18 ani, adaptând metodele în funcție de vârstă și nivelul de dezvoltare. Fiecare plan este personalizat pentru nevoile specifice.'
            },
            {
                question: 'Ce tipuri de tulburări tratați?',
                answer: 'Autism (TSA), ADHD, întârzieri în dezvoltare, probleme de integrare senzorială, tulburări de comportament și alte nevoi speciale de dezvoltare.'
            },
            {
                question: 'Cum se integrează aceste ședințe cu alte terapii?',
                answer: 'Colaborez strâns cu alți specialiști (kinetic, ocupational, etc.) pentru o abordare holistică. Comunicarea între terapeuți este esențială pentru progresul optim.'
            },
            {
                question: 'Cât timp până să văd progrese?',
                answer: 'Progresele variază în funcție de copil și severitatea condițiilor. În general, primele îmbunătățiri se observă în 4-6 săptămâni de terapie consistentă.'
            },
            {
                question: 'Se pot face aceste ședințe online?',
                answer: 'Din cauza naturii interactive și a necesității manipulării materialelor fizice, aceste ședințe se desfășoară exclusiv la cabinet pentru eficiență maximă.'
            }
        ]
    },
    {
        title: 'Programare și Tarife',
        icon: Calendar,
        color: 'peace',
        faqs: [
            {
                question: 'Cum pot programa o ședință?',
                answer: 'Poți programa prin telefon, WhatsApp sau formularul de contact de pe site. Oferă și o consultație telefonică gratuită de 15 minute pentru a discuta nevoile tale.'
            },
            {
                question: 'Cum se fac plățile?',
                answer: 'Plățile se pot face cash la cabinet, prin transfer bancar sau card. Pentru pachete de ședințe, oferă și opțiunea de plată în rate.'
            },
            {
                question: 'Pot anula sau reprograma o ședință?',
                answer: 'Da, cu condiția să anunți cu cel puțin 24 ore înainte. Anulările târzii pot fi taxate pentru a respecta timpul rezervat în program.'
            },
            {
                question: 'Oferă reduceri pentru pachete de ședințe?',
                answer: 'Da! Pachetele de 5 sau 10 ședințe vin cu reduceri semnificative. De asemenea, am tarife speciale pentru familii cu mai mulți copii în terapie.'
            },
            {
                question: 'Există posibilitatea de ședințe în weekend?',
                answer: 'Da, în funcție de disponibilitate, pot programa ședințe și în weekend pentru a acomoda familiile cu program încărcat în timpul săptămânii.'
            },
            {
                question: 'Se decontează prin asigurări de sănătate?',
                answer: 'În prezent, serviciile nu sunt decontate direct prin Casa de Asigurări, dar poți folosi adeverința pentru deduceri fiscale sau asigurări private.'
            }
        ]
    }
]

export const quickFacts: QuickFact[] = [
    {
        icon: Clock,
        title: 'Primul răspuns',
        value: 'În maxim 24h',
        description: 'Răspund rapid la toate solicitările'
    },
    {
        icon: Phone,
        title: 'Consultație gratuită',
        value: '15 minute',
        description: 'Telefonic pentru a clarifica întrebările'
    },
    {
        icon: Users,
        title: 'Experiență',
        value: '12+ ani',
        description: 'În psihologie și dezvoltare personală'
    },
    {
        icon: CheckCircle,
        title: 'Satisfacție client',
        value: '95%+',
        description: 'Clienți mulțumiți de servicii'
    }
]
