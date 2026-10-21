import type { Metadata } from 'next'
import Link from 'next/link'
import {
    Heart,
    Trophy,
    ClipboardList,
    Users,
    Target,
    Calendar,
    Phone,
    ArrowRight,
    CheckCircle,
    Star,
    Sparkles,
    Shield,
    SproutIcon,
    MessageSquare,
    Puzzle,
    BadgeCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'
import { withPageMeta } from '@/lib/seo'

export const metadata: Metadata = withPageMeta('/servicii', {
    title: 'Servicii',
    description: 'Servicii complete de psihologie și logopedie în București: evaluare psihologică, intervenție pentru recuperare, terapie senzorială, psihologie sportivă, psihoterapie și logopedie. Consultații la cabinet și online.',
    keywords: [
        'servicii psihologie bucuresti',
        'evaluare psihologica autism',
        'interventie recuperare copii',
        'terapie senzoriala bucuresti',
        'reflexe primare terapie',
        'terapie ocupationala copii',
        'psihoterapie bucuresti',
        'psihologie sportiva',
        'logopedie copii',
        'psiholog clinician',
    ],
})

// ─── Date servicii ──────────────────────────────────────────────────────────

const services = [
    {
        icon: ClipboardList,
        title: 'Ședințe de Evaluare',
        subtitle: 'Evaluare și plan de intervenție personalizat',
        description:
            'Evaluare prin metoda observației, interviul cu părinții/aparținătorii și cu beneficiarul, precum și prin aplicarea chestionarelor potrivite fiecărei situații.',
        features: [
            'Observație clinică structurată',
            'Chestionare și teste specializate',
            'Evaluare autism, ADHD, anxietate',
            'Raport psihologic detaliat',
            'Recomandări de tratament',
        ],
        href: '/servicii/evaluare-psihologica',
        color: 'therapeutic',
        price: '350 RON',
        duration: '50 minute',
        audience: 'Copii, adolescenți, adulți',
        sessionTypes: ['Cabinet', 'Online'],
        featured: true,
    },
    {
        icon: SproutIcon,
        title: 'Intervenție pentru Recuperare',
        subtitle: 'Terapie specializată prin joc pentru copii cu nevoi speciale',
        description:
            'Terapie de recuperare prin joc pentru copii cu întârzieri în dezvoltare, ADHD, autism și întârzieri în vorbire. Părinții pot asista la ședințe și primesc un plan de exerciții pentru acasă.',
        features: [
            'Terapie prin joc pentru copii',
            'Recuperare autism și ADHD',
            'Probleme de integrare senzorială',
            'Întârzieri în dezvoltare',
            'Participarea părinților la ședințe',
            'Plan de exerciții pentru acasă',
        ],
        href: '/servicii/interventie-recuperare',
        color: 'warm',
        price: '260 RON',
        duration: '100 minute',
        audience: 'Copii cu nevoi speciale (2-18 ani)',
        sessionTypes: ['Cabinet', 'Ședințe extinse'],
    },
    {
        icon: Puzzle,
        title: 'Terapie Senzorială, Reflexe Primare și Terapie Ocupațională',
        subtitle: 'Integrare senzorială și maturizarea reflexelor primare',
        description:
            'Programe specializate pentru copii cu dificultăți de procesare senzorială, reflexe primare neintegrate și probleme de coordonare. Terapia ocupațională ajută la dobândirea autonomiei în activitățile zilnice.',
        features: [
            'Evaluare și terapie de integrare senzorială',
            'Integrarea reflexelor primare (Moro, tonic, palmar)',
            'Terapie ocupațională pentru activitățile zilnice',
            'Exerciții de coordonare motorie fină și grosieră',
            'Stimulare vestibulară și proprioceptivă',
            'Ghid de exerciții pentru părinți, acasă',
        ],
        href: '/servicii/terapie-senzoriala',
        color: 'peace',
        price: '250 RON',
        duration: '50 minute',
        audience: 'Copii de la 1 an, adolescenți',
        sessionTypes: ['Cabinet', 'Cu părinții'],
    },
    {
        icon: Trophy,
        title: 'Psihologie Sportivă',
        subtitle: 'Performanță mentală pentru sportivi de toate nivelurile',
        description:
            'Dedicată celor care fac sport și își doresc îmbunătățirea atitudinii, a rezultatelor și, în general, a performanței în sportul pe care îl practică, indiferent de nivel sau vârstă.',
        features: [
            'Îmbunătățirea performanței sportive',
            'Gestionarea anxietății de competiție',
            'Dezvoltarea concentrării și a focusului',
            'Motivație și stabilirea obiectivelor',
            'Ședințe la cabinet sau online',
            'Pentru adulți, adolescenți și copii',
        ],
        href: '/servicii/psihologie-sportiva',
        color: 'trust',
        price: '250 RON',
        duration: '50 minute',
        audience: 'Copii, adolescenți, adulți sportivi',
        sessionTypes: ['Cabinet', 'Online'],
    },
    {
        icon: Heart,
        title: 'Psihoterapie',
        subtitle: 'Terapie integrativă pentru adulți, adolescenți și copii',
        description:
            'Ședințe de psihoterapie într-un spațiu sigur și empatic. Tratament pentru anxietate, depresie, traumă și dezvoltare personală, adaptat nevoilor și vârstei fiecărui client.',
        features: [
            'Terapie integrativă personalizată',
            'Tratament pentru anxietate și depresie',
            'Procesarea traumelor și PTSD',
            'Dezvoltare și creștere personală',
            'Ședințe la cabinet sau online',
            'Adaptat pentru toate vârstele',
        ],
        href: '/servicii/psihoterapie',
        color: 'empathy',
        price: '250 RON',
        duration: '50 minute',
        audience: 'Adulți, adolescenți, copii',
        sessionTypes: ['Cabinet', 'Online'],
    },
    {
        icon: MessageSquare,
        title: 'Logopedie',
        subtitle: 'Terapia vorbirii și a limbajului pentru copii',
        description:
            'Ședințe pentru copii, în vederea recuperării întârzierilor în vorbire și a corectării sau însușirii anumitor sunete, cu exerciții continuate și acasă.',
        features: [
            'Recuperarea întârzierilor în vorbire',
            'Corectarea defectelor de pronunție',
            'Învățarea sunetelor corecte',
            'Dezvoltarea vocabularului',
            'Îmbunătățirea fluenței vorbirii',
            'Exerciții pentru acasă, cu părinții',
        ],
        href: '/servicii/logopedie',
        color: 'calming',
        price: '200 RON',
        duration: '45 minute',
        audience: 'Copii de la 2 ani',
        sessionTypes: ['Cabinet', 'Cu părinții'],
    },
]

// Clase Tailwind complet scrise (fara interpolari) pentru ca build-ul sa le detecteze
const colorMap: Record<string, Record<string, string>> = {
    therapeutic: {
        strip:        'bg-therapeutic-400',
        iconBg:       'bg-therapeutic-100',
        iconText:     'text-therapeutic-600',
        badgeBg:      'bg-therapeutic-100',
        badgeText:    'text-therapeutic-700',
        border:       'border-therapeutic-200',
        featureText:  'text-therapeutic-500',
        btnBg:        'bg-therapeutic-500 hover:bg-therapeutic-600',
        subtitleText: 'text-therapeutic-600',
    },
    warm: {
        strip:        'bg-warm-400',
        iconBg:       'bg-warm-100',
        iconText:     'text-warm-600',
        badgeBg:      'bg-warm-100',
        badgeText:    'text-warm-700',
        border:       'border-warm-200',
        featureText:  'text-warm-500',
        btnBg:        'bg-warm-500 hover:bg-warm-600',
        subtitleText: 'text-warm-600',
    },
    peace: {
        strip:        'bg-peace-400',
        iconBg:       'bg-peace-100',
        iconText:     'text-peace-600',
        badgeBg:      'bg-peace-100',
        badgeText:    'text-peace-700',
        border:       'border-peace-200',
        featureText:  'text-peace-500',
        btnBg:        'bg-peace-500 hover:bg-peace-600',
        subtitleText: 'text-peace-600',
    },
    trust: {
        strip:        'bg-trust-400',
        iconBg:       'bg-trust-100',
        iconText:     'text-trust-600',
        badgeBg:      'bg-trust-100',
        badgeText:    'text-trust-700',
        border:       'border-trust-200',
        featureText:  'text-trust-500',
        btnBg:        'bg-trust-500 hover:bg-trust-600',
        subtitleText: 'text-trust-600',
    },
    empathy: {
        strip:        'bg-empathy-400',
        iconBg:       'bg-empathy-100',
        iconText:     'text-empathy-600',
        badgeBg:      'bg-empathy-100',
        badgeText:    'text-empathy-700',
        border:       'border-empathy-200',
        featureText:  'text-empathy-500',
        btnBg:        'bg-empathy-500 hover:bg-empathy-600',
        subtitleText: 'text-empathy-600',
    },
    calming: {
        strip:        'bg-calming-400',
        iconBg:       'bg-calming-100',
        iconText:     'text-calming-600',
        badgeBg:      'bg-calming-100',
        badgeText:    'text-calming-700',
        border:       'border-calming-200',
        featureText:  'text-calming-500',
        btnBg:        'bg-calming-500 hover:bg-calming-600',
        subtitleText: 'text-calming-600',
    },
}

const whyChooseUs = [
    {
        icon: Star,
        title: 'Experiență și Specializare',
        description: '12 ani de experiență în psihologie și formare continuă în cele mai noi tehnici terapeutice.',
    },
    {
        icon: Heart,
        title: 'Abordare Personalizată',
        description: 'Fiecare client primește un plan terapeutic personalizat, adaptat nevoilor și obiectivelor sale.',
    },
    {
        icon: Shield,
        title: 'Mediu Sigur și Confidențial',
        description: 'Spațiu profesional, fără judecăți, unde poți fi autentic și te poți simți în siguranță.',
    },
    {
        icon: Target,
        title: 'Rezultate Măsurabile',
        description: 'Monitorizez constant progresul și adaptez terapia pentru a obține cele mai bune rezultate.',
    },
]

const processSteps = [
    { step: '1', title: 'Primul Contact',    description: 'O scurtă discuție telefonică, pentru a înțelege nevoile tale și a răspunde la întrebări.' },
    { step: '2', title: 'Evaluarea Inițială', description: 'Prima ședință, dedicată evaluării detaliate și stabilirii obiectivelor terapeutice.' },
    { step: '3', title: 'Planul Terapeutic',  description: 'Elaborarea unui plan personalizat, cu tehnicile și metodele cele mai potrivite.' },
    { step: '4', title: 'Terapia Activă',     description: 'Ședințe regulate, cu monitorizarea progresului și adaptarea planului după nevoie.' },
]

const faqs = [
    {
        question: 'Cum aleg serviciul potrivit pentru mine?',
        answer: 'Sună-mă și discutăm despre nevoile tale, ca să îți pot recomanda cel mai potrivit serviciu. Fiecare situație este unică și merită o abordare personalizată.',
    },
    {
        question: 'Pot combina mai multe servicii?',
        answer: 'Da, adesea o abordare integrată aduce cele mai bune rezultate. De exemplu, un copil poate beneficia atât de logopedie, cât și de terapie senzorială sau de ședințe de intervenție pentru dezvoltare.',
    },
    {
        question: 'Ședințele online sunt la fel de eficiente?',
        answer: 'Pentru majoritatea serviciilor, ședințele online sunt la fel de eficiente. Logopedia, terapia senzorială și intervențiile pentru copii se desfășoară însă mai bine față în față.',
    },
    {
        question: 'Cât durează, în general, o terapie?',
        answer: 'Durata variază în funcție de serviciul ales și de obiectivele personale. Unele probleme pot fi rezolvate în 5–10 ședințe, altele pot necesita terapie pe termen mai lung.',
    },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServiciiPage() {
    return (
        <>
            {/* ─── Hero ─── */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-therapeutic-600 via-calming-500 to-empathy-500 text-white relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-warm-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <AnimatedSection immediate animation="slideUp">
                        <div className="text-center max-w-4xl mx-auto space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm">
                                <Sparkles className="w-4 h-4 mr-2 text-warm-300" />
                                Servicii complete de psihologie și logopedie
                            </div>

                            <Typography variant="h1" className="text-white flex justify-center gap-x-3" family="serif">
                                Servicii
                                <span className="text-warm-200">Specializate</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90 max-w-2xl mx-auto">
                                O gamă completă de servicii de psihologie și logopedie pentru copii, adolescenți
                                și adulți, fiecare personalizat pentru a răspunde nevoilor tale specifice.
                            </Typography>

                            {/* Servicii quick icons */}
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto pt-2">
                                {[
                                    { icon: ClipboardList, label: 'Evaluare',   color: 'text-therapeutic-200' },
                                    { icon: SproutIcon,    label: 'Recuperare', color: 'text-warm-200'         },
                                    { icon: Puzzle,        label: 'Senzorial',  color: 'text-peace-200'        },
                                    { icon: Trophy,        label: 'Sport',      color: 'text-trust-200'        },
                                    { icon: Heart,         label: 'Terapie',    color: 'text-empathy-200'      },
                                    { icon: MessageSquare, label: 'Logopedie',  color: 'text-calming-200'      },
                                ].map(({ icon: Icon, label, color }) => (
                                    <div key={label} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-colors">
                                        <Icon className={`w-6 h-6 mx-auto mb-1 ${color}`} />
                                        <div className="text-xs font-semibold text-white">{label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                                <Button asChild size="lg" className="bg-warm text-white hover:bg-warm/90 text-base px-8">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programează consultație
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-therapeutic-600">
                                    <a href="tel:+40724172996">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Discută cu mine
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ─── Banner CASMB ─── */}
            <section className="py-6 bg-therapeutic-600 text-white">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <BadgeCheck className="w-7 h-7 text-therapeutic-600" />
                            </div>
                            <div>
                                <p className="font-bold text-lg leading-tight">Contract cu CASMB</p>
                                <p className="text-therapeutic-100 text-sm">
                                    Casa de Asigurări de Sănătate a Municipiului București
                                </p>
                            </div>
                        </div>
                        <p className="text-therapeutic-100 text-sm text-center lg:text-left max-w-md">
                            Pentru diagnosticul TSA (F84.0), ședințele sunt decontate prin CASMB, în limita locurilor disponibile.
                            <br/>Contactează-ne pentru detalii despre serviciile acoperite.
                        </p>
                        <Button asChild size="sm" className="flex-shrink-0 bg-white text-therapeutic-700 hover:bg-therapeutic-50">
                            <Link href="/contact">Află detalii</Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/*/!* ─── Banner CASMB detaliat ─── *!/*/}
            {/*<section className="py-10 bg-therapeutic-50 border-b border-therapeutic-100">*/}
            {/*    <Container>*/}
            {/*        <AnimatedSection animation="fadeIn">*/}
            {/*            <Card className="border-therapeutic-200 bg-white overflow-hidden p-0">*/}
            {/*                <div className="flex flex-col lg:flex-row">*/}
            {/*                    /!* Stanga - informatii contract *!/*/}
            {/*                    <div className="flex-1 p-6 lg:p-8">*/}
            {/*                        <div className="flex items-start gap-4 mb-6">*/}
            {/*                            <div className="w-14 h-14 bg-therapeutic-100 rounded-xl flex items-center justify-center flex-shrink-0">*/}
            {/*                                <BadgeCheck className="w-8 h-8 text-therapeutic-600" />*/}
            {/*                            </div>*/}
            {/*                            <div>*/}
            {/*                                <Typography variant="h4" className="text-therapeutic-700 mb-1">*/}
            {/*                                    Servicii decontate prin CASMB*/}
            {/*                                </Typography>*/}
            {/*                                <Typography variant="small" className="text-muted-foreground">*/}
            {/*                                    Casa de Asigurări de Sănătate a Municipiului București*/}
            {/*                                </Typography>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        <Typography variant="body" className="text-gray-700 leading-relaxed mb-6">*/}
            {/*                            In urma incheierii contractului cu Casa de Asigurari de Sanatate a Municipiului*/}
            {/*                            Bucuresti (CASMB), o parte din serviciile oferite pot fi decontate integral sau*/}
            {/*                            partial prin asigurarile de sanatate. Aceasta facilitate permite accesul la*/}
            {/*                            servicii psihologice de calitate fara costuri suplimentare pentru pacienti.*/}
            {/*                        </Typography>*/}

            {/*                        <div className="space-y-3">*/}
            {/*                            <div className="flex items-start gap-2">*/}
            {/*                                <CheckCircle className="w-5 h-5 text-therapeutic-500 mt-0.5 flex-shrink-0" />*/}
            {/*                                <span className="text-sm text-gray-700">*/}
            {/*                                    Servicii decontate pentru asiguratii CASMB cu trimitere de la medicul de familie*/}
            {/*                                </span>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex items-start gap-2">*/}
            {/*                                <CheckCircle className="w-5 h-5 text-therapeutic-500 mt-0.5 flex-shrink-0" />*/}
            {/*                                <span className="text-sm text-gray-700">*/}
            {/*                                    Valabil pentru rezidentii din Municipiul Bucuresti*/}
            {/*                                </span>*/}
            {/*                            </div>*/}
            {/*                            <div className="flex items-start gap-2">*/}
            {/*                                <CheckCircle className="w-5 h-5 text-therapeutic-500 mt-0.5 flex-shrink-0" />*/}
            {/*                                <span className="text-sm text-gray-700">*/}
            {/*                                    Contacteaza-ne pentru lista completa de servicii decontate si conditii*/}
            {/*                                </span>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    /!* Dreapta - CTA *!/*/}
            {/*                    <div className="lg:w-72 bg-therapeutic-600 p-6 lg:p-8 flex flex-col justify-center items-center text-center text-white">*/}
            {/*                        <BadgeCheck className="w-16 h-16 text-therapeutic-200 mb-4" />*/}
            {/*                        <Typography variant="h6" className="text-white mb-2">*/}
            {/*                            Ai asigurare CASMB?*/}
            {/*                        </Typography>*/}
            {/*                        <Typography variant="small" className="text-therapeutic-100 mb-6 leading-relaxed">*/}
            {/*                            Contacteaza-ne pentru a verifica eligibilitatea si documentele necesare*/}
            {/*                            pentru decontare.*/}
            {/*                        </Typography>*/}
            {/*                        <div className="space-y-3 w-full">*/}
            {/*                            <Button asChild className="w-full bg-white text-therapeutic-600 hover:bg-therapeutic-50">*/}
            {/*                                <Link href="/contact">*/}
            {/*                                    <Phone className="w-4 h-4 mr-2" />*/}
            {/*                                    Contacteaza-ne*/}
            {/*                                </Link>*/}
            {/*                            </Button>*/}
            {/*                            <Button asChild variant="outline" size="sm" className="w-full border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-therapeutic-600">*/}
            {/*                                <a href="https://www.casmb.ro/casmb_portal" target="_blank" rel="noopener noreferrer">*/}
            {/*                                    <ExternalLink className="w-4 h-4 mr-2" />*/}
            {/*                                    Site CASMB*/}
            {/*                                </a>*/}
            {/*                            </Button>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </Card>*/}
            {/*        </AnimatedSection>*/}
            {/*    </Container>*/}
            {/*</section>*/}

            {/* ─── Services Grid ─── */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-14">
                        <Typography variant="h2" className="mb-4" family="serif">
                            Serviciile <span className="text-therapeutic">Mele</span>
                        </Typography>
                        <Typography variant="lead">
                            Fiecare serviciu este conceput pentru a răspunde nevoilor specifice fiecărei vârste și situații
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                            {services.map((service) => {
                                const Icon = service.icon
                                const c = colorMap[service.color]
                                return (
                                    <Card
                                        key={service.title}
                                        className={`relative flex flex-col h-full border ${c.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden p-0`}
                                    >
                                        {service.featured && (
                                            <div className="absolute top-4 right-4 z-10 bg-therapeutic-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                Cel mai solicitat
                                            </div>
                                        )}

                                        {/* banda colorata sus */}
                                        <div className={`h-1.5 w-full ${c.strip}`} />

                                        <CardHeader className="pt-6 px-6 pb-2">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${c.iconBg} ${c.iconText} group-hover:scale-110 transition-transform`}>
                                                    <Icon className="w-7 h-7" />
                                                </div>
                                                <div className="text-right">
                                                    <div className={`text-xl font-bold ${c.subtitleText}`}>{service.price}</div>
                                                    <div className="text-sm text-muted-foreground mt-0.5">{service.duration}</div>
                                                </div>
                                            </div>
                                            <CardTitle className="text-xl mb-1">{service.title}</CardTitle>
                                            <Typography variant="small" className={`${c.subtitleText} font-medium`}>
                                                {service.subtitle}
                                            </Typography>
                                        </CardHeader>

                                        <CardContent className="flex flex-col flex-1 gap-5 px-6 pb-6">
                                            <Typography variant="body" className="text-muted-foreground leading-relaxed">
                                                {service.description}
                                            </Typography>

                                            {/* Features 2-col */}
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                                {service.features.map((f) => (
                                                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                                                        <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.featureText}`} />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Meta row */}
                                            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border mt-auto">
                                                <div className="text-sm text-muted-foreground">
                                                    <span className="font-medium">Pentru: </span>
                                                    {service.audience}
                                                </div>
                                                <div className="flex flex-wrap gap-1.5 ml-auto">
                                                    {service.sessionTypes.map((t) => (
                                                        <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium ${c.badgeBg} ${c.badgeText}`}>
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <Button asChild className={`w-full text-white ${c.btnBg} transition-all group-hover:shadow-md`}>
                                                <Link href={service.href}>
                                                    Detalii complete
                                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ─── Why Choose Us ─── */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-14">
                        <Typography variant="h2" className="mb-4" family="serif">
                            De ce să <span className="text-therapeutic">Alegi</span> Serviciile Mele?
                        </Typography>
                        <Typography variant="lead">
                            Peste 12 ani de experiență, cu o abordare integrativă și personalizată
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {whyChooseUs.map((reason) => {
                                const Icon = reason.icon
                                return (
                                    <Card key={reason.title} className="p-6 hover:shadow-lg transition-shadow">
                                        <CardContent className="flex items-start gap-5 p-0">
                                            <div className="w-14 h-14 bg-therapeutic-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-7 h-7 text-therapeutic-600" />
                                            </div>
                                            <div>
                                                <Typography variant="h6" className="mb-2 text-therapeutic-700">
                                                    {reason.title}
                                                </Typography>
                                                <Typography variant="body" className="text-muted-foreground leading-relaxed">
                                                    {reason.description}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ─── Process Steps ─── */}
            <section className="py-20 bg-therapeutic-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-14">
                        <Typography variant="h2" className="mb-4" family="serif">
                            Cum <span className="text-therapeutic">Funcționează</span>?
                        </Typography>
                        <Typography variant="lead">
                            Un proces simplu și structurat, pentru a începe călătoria ta către o viață mai bună
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {processSteps.map((step, index) => (
                                <Card key={step.step} className="p-6 bg-white text-center hover:shadow-lg transition-shadow relative">
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-therapeutic-200 z-10" />
                                    )}
                                    <CardContent className="space-y-4 p-0">
                                        <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto">
                                            <span className="text-2xl font-bold text-therapeutic-600">{step.step}</span>
                                        </div>
                                        <Typography variant="h6" className="font-semibold text-therapeutic-700">
                                            {step.title}
                                        </Typography>
                                        <Typography variant="small" className="text-muted-foreground leading-relaxed block">
                                            {step.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-20 bg-white">
                <Container size="md">
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-14">
                        <Typography variant="h2" className="mb-4" family="serif">
                            Întrebări <span className="text-therapeutic">Frecvente</span>
                        </Typography>
                        <Typography variant="lead">
                            Răspunsuri la întrebările frecvente despre serviciile oferite
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="space-y-5">
                            {faqs.map((faq) => (
                                <Card key={faq.question} className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-therapeutic-300">
                                    <CardContent className="p-0">
                                        <Typography variant="h6" className="mb-2 text-therapeutic-700">
                                            {faq.question}
                                        </Typography>
                                        <Typography variant="body" className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-20 bg-gradient-to-r from-therapeutic-600 via-calming-500 to-warm-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeIn">
                        <div className="text-center max-w-3xl mx-auto space-y-6">
                            <Typography variant="h2" className="text-white" family="serif">
                                Începe Călătoria ta de Schimbare Astăzi
                            </Typography>
                            <Typography variant="lead" className="text-white/90">
                                Fiecare pas către o viață mai bună începe cu o decizie. Sunt aici să te sprijin
                                în această călătorie, indiferent de provocările cu care te confrunți.
                            </Typography>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                                <Button asChild size="lg" className="bg-warm text-white hover:bg-warm/90 text-base px-8">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programează o consultație
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-therapeutic-600">
                                    <Link href="/despre-mine">
                                        <Users className="w-5 h-5 mr-2" />
                                        Află mai mult despre mine
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}
