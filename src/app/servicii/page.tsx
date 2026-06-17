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
    ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Servicii',
    description: 'Servicii complete de psihologie si logopedie in Bucuresti: evaluare psihologica, interventie pentru recuperare, terapie senzoriala, psihologie sportiva, psihoterapie si logopedie. Consultatii la cabinet si online.',
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
}

// ─── Date servicii ──────────────────────────────────────────────────────────

const services = [
    {
        icon: ClipboardList,
        title: 'Sedinte de Evaluare',
        subtitle: 'Diagnostic complet si plan de interventie personalizat',
        description:
            'Evaluare prin metoda observatiei si aplicarea de chestionare potrivite situatiei. Diagnostic complet pentru autism, ADHD, anxietate si alte tulburari, urmat de un raport detaliat cu recomandari.',
        features: [
            'Observatie clinica structurata',
            'Chestionare si teste specializate',
            'Evaluare autism, ADHD, anxietate',
            'Raport psihologic detaliat',
            'Recomandari de tratament',
        ],
        href: '/servicii/evaluare-psihologica',
        color: 'therapeutic',
        price: '350 RON',
        duration: '50 minute',
        audience: 'Copii, adolescenti, adulti',
        sessionTypes: ['Cabinet', 'Online'],
        featured: true,
    },
    {
        icon: SproutIcon,
        title: 'Interventie pentru Recuperare',
        subtitle: 'Terapie specializata prin joc pentru copii cu nevoi speciale',
        description:
            'Terapie de recuperare prin joc pentru copii cu intarzieri in dezvoltare, ADHD, autism si intarzieri in vorbire. Parintii pot asista la sedinte si primesc un plan de exercitii pentru acasa.',
        features: [
            'Terapie prin joc pentru copii',
            'Recuperare autism si ADHD',
            'Probleme de integrare senzoriala',
            'Intarzieri in dezvoltare',
            'Participarea parintilor la sedinte',
            'Plan de exercitii pentru acasa',
        ],
        href: '/servicii/interventie-recuperare',
        color: 'warm',
        price: '250 RON',
        duration: '50 / 100 minute',
        audience: 'Copii cu nevoi speciale (2-18 ani)',
        sessionTypes: ['Cabinet', 'Sedinte extinse'],
    },
    {
        icon: Puzzle,
        title: 'Terapie Senzoriala, Reflexe Primare si Terapie Ocupationala',
        subtitle: 'Integrare senzoriala si maturizarea reflexelor primare',
        description:
            'Programe specializate pentru copii cu dificultati de procesare senzoriala, reflexe primare neintegrate si probleme de coordonare. Terapia ocupationala ajuta la dobandirea autonomiei in activitatile zilnice.',
        features: [
            'Evaluare si terapie de integrare senzoriala',
            'Integrarea reflexelor primare (MORO, Tonic, Palmar)',
            'Terapie ocupationala pentru activitati zilnice',
            'Exercitii de coordonare motorie fina si grosiera',
            'Stimulare vestibulara si proprioceptiva',
            'Ghid de exercitii pentru parinti acasa',
        ],
        href: '/servicii/terapie-senzoriala',
        color: 'peace',
        price: '200 RON',
        duration: '50 minute',
        audience: 'Copii de la 1 an, adolescenti',
        sessionTypes: ['Cabinet', 'Cu parintii'],
    },
    {
        icon: Trophy,
        title: 'Psihologie Sportiva',
        subtitle: 'Performanta mentala pentru sportivi de toate nivelurile',
        description:
            'Dedicata celor care fac sport si isi doresc imbunatatirea atitudinii, rezultatelor si in general a performantei in sportul pe care il practica, indiferent de nivel sau varsta.',
        features: [
            'Imbunatatirea performantei sportive',
            'Gestionarea anxietatii de competitie',
            'Dezvoltarea concentrarii si focusului',
            'Motivatie si stabilirea obiectivelor',
            'Sedinte la cabinet sau online',
            'Pentru adulti, adolescenti si copii',
        ],
        href: '/servicii/psihologie-sportiva',
        color: 'trust',
        price: '250 RON',
        duration: '50 minute',
        audience: 'Copii, adolescenti, adulti sportivi',
        sessionTypes: ['Cabinet', 'Online'],
    },
    {
        icon: Heart,
        title: 'Psihoterapie',
        subtitle: 'Terapie integrativa pentru adulti, adolescenti si copii',
        description:
            'Sedinte de psihoterapie intr-un spatiu sigur si empatic. Tratament pentru anxietate, depresie, trauma si dezvoltare personala, adaptat nevoilor si varstei fiecarui client.',
        features: [
            'Terapie integrativa personalizata',
            'Tratament anxietate si depresie',
            'Procesarea traumelor si PTSD',
            'Dezvoltare personala si crestere',
            'Sedinte la cabinet sau online',
            'Adaptat pentru toate varstele',
        ],
        href: '/servicii/psihoterapie',
        color: 'empathy',
        price: '250 RON',
        duration: '50 minute',
        audience: 'Adulti, adolescenti, copii',
        sessionTypes: ['Cabinet', 'Online'],
    },
    {
        icon: MessageSquare,
        title: 'Logopedie',
        subtitle: 'Terapia vorbirii si limbajului pentru copii',
        description:
            'Sedinte pentru copii in vederea recuperarii in urma intarzierilor in vorbire si corectarea sau insusirea anumitor sunete, cu exercitii continuate si acasa.',
        features: [
            'Recuperarea intarzierilor in vorbire',
            'Corectarea defectelor de pronuntie',
            'Invatarea sunetelor corecte',
            'Dezvoltarea vocabularului',
            'Imbunatatirea fluentei vorbirii',
            'Exercitii pentru acasa cu parintii',
        ],
        href: '/servicii/logopedie',
        color: 'calming',
        price: '200 RON',
        duration: '45 minute',
        audience: 'Copii de la 2 ani',
        sessionTypes: ['Cabinet', 'Cu parintii'],
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
        title: 'Experienta si Specializare',
        description: '12 ani de experienta in psihologie si formare continua in cele mai noi tehnici terapeutice.',
    },
    {
        icon: Heart,
        title: 'Abordare Personalizata',
        description: 'Fiecare client primeste un plan terapeutic personalizat, adaptat nevoilor si obiectivelor sale.',
    },
    {
        icon: Shield,
        title: 'Mediu Sigur si Confidential',
        description: 'Spatiu profesional, non-judgmental, unde poti fi autentic si te poti simti in siguranta.',
    },
    {
        icon: Target,
        title: 'Rezultate Masurabile',
        description: 'Monitorizez progresul constant si adaptez terapia pentru a obtine cele mai bune rezultate.',
    },
]

const processSteps = [
    { step: '1', title: 'Primul Contact',    description: 'Discutie telefonica gratuita de 15 minute pentru a intelege nevoile tale si a raspunde la intrebari.' },
    { step: '2', title: 'Evaluarea Initiala', description: 'Prima sedinta dedicata evaluarii detaliate si stabilirii obiectivelor terapeutice.' },
    { step: '3', title: 'Planul Terapeutic',  description: 'Elaborarea unui plan personalizat cu tehnicile si metodele cele mai potrivite.' },
    { step: '4', title: 'Terapia Activa',     description: 'Sedinte regulate cu monitorizarea progresului si adaptarea planului dupa nevoie.' },
]

const faqs = [
    {
        question: 'Cum aleg serviciul potrivit pentru mine?',
        answer: 'Ofer o consultatie telefonica gratuita de 15 minute pentru a discuta nevoile tale si a recomanda cel mai potrivit serviciu. Fiecare situatie este unica si merita o abordare personalizata.',
    },
    {
        question: 'Pot combina mai multe servicii?',
        answer: 'Da, adesea o abordare integrata aduce cele mai bune rezultate. De exemplu, un copil poate beneficia atat de logopedie cat si de terapie senzoriala sau sedinte de interventie pentru dezvoltare.',
    },
    {
        question: 'Sedintele online sunt la fel de eficiente?',
        answer: 'Pentru majoritatea serviciilor, sedintele online sunt la fel de eficiente. Logopedia, terapia senzoriala si interventiile pentru copii se desfasoara insa mai bine fata in fata.',
    },
    {
        question: 'Cat dureaza in general o terapie?',
        answer: 'Durata variaza in functie de serviciul ales si obiectivele personale. Unele probleme pot fi rezolvate in 5-10 sedinte, altele pot necesita terapie pe termen mai lung.',
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
                    <AnimatedSection animation="slideUp">
                        <div className="text-center max-w-4xl mx-auto space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm">
                                <Sparkles className="w-4 h-4 mr-2 text-warm-300" />
                                Servicii complete de psihologie si logopedie
                            </div>

                            <Typography variant="h1" className="text-white flex justify-center gap-x-3" family="serif">
                                Servicii
                                <span className="text-warm-200">Specializate</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90 max-w-2xl mx-auto">
                                O gama completa de servicii de psihologie si logopedie pentru copii, adolescenti
                                si adulti, fiecare personalizat pentru a raspunde nevoilor tale specifice.
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
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-base px-8">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programeaza consultatie
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-therapeutic-600">
                                    <a href="tel:+40724172996">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Discuta gratuit
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
                                    Casa de Asigurari de Sanatate a Municipiului Bucuresti
                                </p>
                            </div>
                        </div>
                        <p className="text-therapeutic-100 text-sm text-center lg:text-right max-w-md">
                            Anumite servicii pot fi decontate prin asigurarile de sanatate.
                            Contacteaza-ne pentru detalii despre serviciile acoperite.
                        </p>
                        <Button asChild size="sm" className="flex-shrink-0 bg-white text-therapeutic-700 hover:bg-therapeutic-50">
                            <Link href="/contact">Afla detalii</Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* ─── Banner CASMB detaliat ─── */}
            <section className="py-10 bg-therapeutic-50 border-b border-therapeutic-100">
                <Container>
                    <AnimatedSection animation="fadeIn">
                        <Card className="border-therapeutic-200 bg-white overflow-hidden p-0">
                            <div className="flex flex-col lg:flex-row">
                                {/* Stanga - informatii contract */}
                                <div className="flex-1 p-6 lg:p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-14 h-14 bg-therapeutic-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <BadgeCheck className="w-8 h-8 text-therapeutic-600" />
                                        </div>
                                        <div>
                                            <Typography variant="h4" className="text-therapeutic-700 mb-1">
                                                Servicii decontate prin CASMB
                                            </Typography>
                                            <Typography variant="small" className="text-muted-foreground">
                                                Casa de Asigurari de Sanatate a Municipiului Bucuresti
                                            </Typography>
                                        </div>
                                    </div>

                                    <Typography variant="body" className="text-gray-700 leading-relaxed mb-6">
                                        In urma incheierii contractului cu Casa de Asigurari de Sanatate a Municipiului
                                        Bucuresti (CASMB), o parte din serviciile oferite pot fi decontate integral sau
                                        partial prin asigurarile de sanatate. Aceasta facilitate permite accesul la
                                        servicii psihologice de calitate fara costuri suplimentare pentru pacienti.
                                    </Typography>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-therapeutic-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">
                                                Servicii decontate pentru asiguratii CASMB cu trimitere de la medicul de familie
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-therapeutic-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">
                                                Valabil pentru rezidentii din Municipiul Bucuresti
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-therapeutic-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">
                                                Contacteaza-ne pentru lista completa de servicii decontate si conditii
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Dreapta - CTA */}
                                <div className="lg:w-72 bg-therapeutic-600 p-6 lg:p-8 flex flex-col justify-center items-center text-center text-white">
                                    <BadgeCheck className="w-16 h-16 text-therapeutic-200 mb-4" />
                                    <Typography variant="h6" className="text-white mb-2">
                                        Ai asigurare CASMB?
                                    </Typography>
                                    <Typography variant="small" className="text-therapeutic-100 mb-6 leading-relaxed">
                                        Contacteaza-ne pentru a verifica eligibilitatea si documentele necesare
                                        pentru decontare.
                                    </Typography>
                                    <div className="space-y-3 w-full">
                                        <Button asChild className="w-full bg-white text-therapeutic-600 hover:bg-therapeutic-50">
                                            <Link href="/contact">
                                                <Phone className="w-4 h-4 mr-2" />
                                                Contacteaza-ne
                                            </Link>
                                        </Button>
                                        <Button asChild variant="outline" size="sm" className="w-full border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-therapeutic-600">
                                            <a href="https://www.casmb.ro/casmb_portal" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Site CASMB
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ─── Services Grid ─── */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-14">
                        <Typography variant="h2" className="mb-4" family="serif">
                            Serviciile <span className="text-therapeutic">Mele</span>
                        </Typography>
                        <Typography variant="lead">
                            Fiecare serviciu este conceput pentru a raspunde nevoilor specifice ale fiecarei varste si situatii
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
                            De ce sa <span className="text-therapeutic">Alegi</span> Serviciile Mele?
                        </Typography>
                        <Typography variant="lead">
                            Peste 12 ani de experienta, cu o abordare integrativa si personalizata
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
                            Cum <span className="text-therapeutic">Functioneaza</span>?
                        </Typography>
                        <Typography variant="lead">
                            Procesul simplu si structurat pentru a incepe calatoria ta catre o viata mai buna
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
                            Intrebari <span className="text-therapeutic">Frecvente</span>
                        </Typography>
                        <Typography variant="lead">
                            Raspunsuri la intrebarile comune despre serviciile oferite
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
                                Incepe Calatoria ta de Schimbare Astazi
                            </Typography>
                            <Typography variant="lead" className="text-white/90">
                                Fiecare pas catre o viata mai buna incepe cu o decizie. Sunt aici sa te sprijin
                                in aceasta calatorie, indiferent de provocarile cu care te confrunti.
                            </Typography>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-base px-8">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programeaza consultatie gratuita
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-therapeutic-600">
                                    <Link href="/despre-mine">
                                        <Users className="w-5 h-5 mr-2" />
                                        Afla mai mult despre mine
                                    </Link>
                                </Button>
                            </div>

                            <p className="text-sm text-white/70 pt-2">
                                Consultatie telefonica initiala (15 minute) —{' '}
                                <strong className="text-white">gratuita</strong>
                            </p>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}