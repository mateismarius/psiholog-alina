import type { Metadata } from 'next'
import Link from 'next/link'
import {
    Heart,
    Trophy,
    MessageCircle,
    Gamepad2,
    Users,
    Target,
    Calendar,
    Phone,
    ArrowRight,
    CheckCircle,
    Star,
    Sparkles,
    Shield,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Servicii',
    description: 'Servicii complete de psihologie și logopedie în București: psihoterapie, psihologie sportivă, logopedie și ședințe de intervenție pentru copii. Consultații la cabinet și online.',
    keywords: [
        'servicii psihologie bucuresti',
        'psihoterapie bucuresti',
        'psihologie sportiva',
        'logopedie copii',
        'terapie recuperare',
        'psiholog clinician',
        'consultatii psihologice'
    ],
}

const services = [
    {
        title: 'Psihoterapie',
        subtitle: 'Terapie integrativă pentru adulți și adolescenți',
        description: 'Un spațiu sigur pentru explorare, vindecare și creștere personală. Abordări integrate din diverse școli terapeutice pentru depășirea dificultăților emoționale.',
        icon: Heart,
        color: 'therapeutic',
        href: '/servicii/psihoterapie',
        duration: '50 minute',
        price: 'de la 200 RON',
        highlights: [
            'Terapie individuală și de cuplu',
            'CBT, Gestalt, tehnici integrative',
            'Anxietate, depresie, traume',
            'Dezvoltare personală',
            'Mediu confidențial și sigur'
        ],
        targetAudience: 'Adulți și adolescenți',
        sessionTypes: ['Cabinet', 'Online']
    },
    {
        title: 'Psihologie Sportivă',
        subtitle: 'Îmbunătățirea performanței mentale în sport',
        description: 'Dezvoltarea abilităților mentale pentru sportivi de toate nivelurile. Concentrare, motivație, gestionarea presiunii și optimizarea performanței sportive.',
        icon: Trophy,
        color: 'warm',
        href: '/servicii/psihologie-sportiva',
        duration: '50 minute',
        price: 'de la 180 RON',
        highlights: [
            'Sporturi individuale și de echipă',
            'Concentrare și focus mental',
            'Gestionarea anxietății de competiție',
            'Motivație și stabilirea obiectivelor',
            'Tehnici de activare optimă'
        ],
        targetAudience: 'Copii, adolescenți, adulți sportivi',
        sessionTypes: ['Cabinet', 'Online']
    },
    {
        title: 'Logopedie',
        subtitle: 'Terapia vorbirii și limbajului',
        description: 'Sprijin specializat pentru dezvoltarea și corectarea tulburărilor de vorbire, limbaj și comunicare pentru toate vârstele.',
        icon: MessageCircle,
        color: 'calming',
        href: '/servicii/logopedie',
        duration: '50 minute',
        price: 'de la 180 RON',
        highlights: [
            'Tulburări de articulare (dislalie)',
            'Întârzieri de limbaj',
            'Tulburări de fluență (bâlbâială)',
            'Probleme de deglutiție',
            'Terapie prin joc pentru copii'
        ],
        targetAudience: 'Copii de la 2 ani și adulți',
        sessionTypes: ['Cabinet', 'Cu participarea părinților']
    },
    {
        title: 'Ședințe de Intervenție și Recuperare',
        subtitle: 'Terapie specializată prin joc pentru copii',
        description: 'Terapie de recuperare pentru copii cu autism, ADHD, întârzieri în dezvoltare și probleme de integrare senzorială.',
        icon: Gamepad2,
        color: 'therapeutic',
        href: '/servicii/interventie-recuperare',
        duration: '100 minute',
        price: 'de la 250 RON',
        highlights: [
            'Autism (TSA) și ADHD',
            'Întârzieri în dezvoltare',
            'Probleme de integrare senzorială',
            'Terapie prin joc structurat',
            'Participarea activă a părinților'
        ],
        targetAudience: 'Copii cu nevoi speciale (2-18 ani)',
        sessionTypes: ['Cabinet', 'Ședințe extinse']
    }
]

const whyChooseUs = [
    {
        icon: Star,
        title: 'Experiență și Specializare',
        description: '12 ani de experiență în psihologie și formare continuă în cele mai noi tehnici terapeutice'
    },
    {
        icon: Heart,
        title: 'Abordare Personalizată',
        description: 'Fiecare client primește un plan terapeutic personalizat, adaptat nevoilor și obiectivelor sale'
    },
    {
        icon: Shield,
        title: 'Mediu Sigur și Confidențial',
        description: 'Spațiu profesional, non-judgmental, unde poți fi autentic și te poți simți în siguranță'
    },
    {
        icon: Target,
        title: 'Rezultate Măsurabile',
        description: 'Monitorizez progresul constant și adaptez terapia pentru a obține cele mai bune rezultate'
    }
]

const processSteps = [
    {
        step: '1',
        title: 'Primul Contact',
        description: 'Discuție telefonică gratuită pentru a înțelege nevoile tale și a răspunde la întrebări'
    },
    {
        step: '2',
        title: 'Evaluarea Inițială',
        description: 'Prima ședință dedicate evaluării detaliate și stabilirii obiectivelor terapeutice'
    },
    {
        step: '3',
        title: 'Planul Terapeutic',
        description: 'Elaborarea unui plan personalizat cu tehnicile și metodele cele mai potrivite'
    },
    {
        step: '4',
        title: 'Terapia Activă',
        description: 'Ședințe regulate cu monitorizarea progresului și adaptarea planului după nevoie'
    }
]

const faqs = [
    {
        question: 'Cum aleg serviciul potrivit pentru mine?',
        answer: 'Oferă o consultație telefonică gratuită de 15 minute pentru a discuta nevoile tale și a recomanda cel mai potrivit serviciu. Fiecare situație este unică și merită o abordare personalizată.'
    },
    {
        question: 'Pot combina mai multe servicii?',
        answer: 'Da, adesea o abordare integrată aduce cele mai bune rezultate. De exemplu, un copil poate beneficia atât de logopedie cât și de ședințe de intervenție pentru dezvoltare.'
    },
    {
        question: 'Ședințele online sunt la fel de eficiente?',
        answer: 'Pentru majoritatea serviciilor, ședințele online sunt la fel de eficiente. Logopegia și intervențiile pentru copii se desfășoară însă mai bine față în față pentru interacțiunea directă.'
    },
    {
        question: 'Cât durează în general o terapie?',
        answer: 'Durata variază în funcție de serviciul ales și obiectivele personale. Unele probleme pot fi rezolvate în 5-10 ședințe, altele pot necesita terapie pe termen mai lung.'
    }
]

export default function ServiciiPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-therapeutic-600 via-calming-500 to-empathy-500 text-white relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warm-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <AnimatedSection animation="slideUp" className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                                <Sparkles className="w-4 h-4 mr-2 text-warm-300" />
                                Servicii complete de psihologie și logopedie
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Servicii
                                <span className="block text-warm-200">Specializate</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90 max-w-3xl mx-auto">
                                Oferă o gamă completă de servicii de psihologie și logopedie pentru copii, adolescenți și adulți.
                                Fiecare serviciu este personalizat pentru a răspunde nevoilor tale specifice.
                            </Typography>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Heart className="w-8 h-8 text-warm-300 mx-auto mb-2" />
                                    <div className="text-sm font-bold text-white">Psihoterapie</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Trophy className="w-8 h-8 text-empathy-300 mx-auto mb-2" />
                                    <div className="text-sm font-bold text-white">Sport</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <MessageCircle className="w-8 h-8 text-calming-300 mx-auto mb-2" />
                                    <div className="text-sm font-bold text-white">Logopedie</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Gamepad2 className="w-8 h-8 text-therapeutic-300 mx-auto mb-2" />
                                    <div className="text-sm font-bold text-white">Recuperare</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programează consultația
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                                    <a href="tel:+40722123456">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Discută gratuit
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Serviciile <span className="text-therapeutic">Mele</span>
                        </Typography>
                        <Typography variant="lead">
                            Fiecare serviciu este conceput pentru a răspunde nevoilor specifice ale fiecărei vârste și situații
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid lg:grid-cols-2 gap-8">
                            {services.map((service, index) => {
                                const Icon = service.icon
                                return (
                                    <Card key={index} className={`p-6 border-${service.color}-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
                                        <CardHeader className="pb-4">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                    <Icon className={`w-8 h-8 text-${service.color}-600`} />
                                                </div>
                                                <div className="text-right">
                                                    <div className={`text-lg font-bold text-${service.color}-600`}>{service.price}</div>
                                                    <div className="text-sm text-gray-500">{service.duration}</div>
                                                </div>
                                            </div>

                                            <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                            <Typography variant="body" className={`text-${service.color}-600 font-medium mb-3`}>
                                                {service.subtitle}
                                            </Typography>
                                            <Typography variant="body" className="text-gray-600 leading-relaxed">
                                                {service.description}
                                            </Typography>
                                        </CardHeader>

                                        <CardContent className="space-y-6">
                                            {/* Highlights */}
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-3">
                                                    Principalele beneficii:
                                                </Typography>
                                                <ul className="space-y-2">
                                                    {service.highlights.map((highlight, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2 text-sm">
                                                            <CheckCircle className={`w-4 h-4 text-${service.color}-500 mt-0.5 flex-shrink-0`} />
                                                            <span className="text-gray-700">{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Target Audience & Session Types */}
                                            <div className="grid grid-cols-1 gap-4 pt-4 border-t border-gray-100">
                                                <div>
                                                    <Typography variant="small" className="font-medium text-gray-700 mb-1">
                                                        Pentru:
                                                    </Typography>
                                                    <Typography variant="small" className="text-gray-600">
                                                        {service.targetAudience}
                                                    </Typography>
                                                </div>
                                                <div>
                                                    <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                        Modalități:
                                                    </Typography>
                                                    <div className="flex flex-wrap gap-1">
                                                        {service.sessionTypes.map((type, idx) => (
                                                            <span key={idx} className={`text-xs px-2 py-1 bg-${service.color}-100 text-${service.color}-700 rounded`}>
                                {type}
                              </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <Button asChild className={`w-full bg-${service.color} text-white hover:bg-${service.color}/90 group-hover:shadow-lg transition-all`}>
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

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            De ce să <span className="text-therapeutic">Alegi</span> Serviciile Mele?
                        </Typography>
                        <Typography variant="lead">
                            Peste 12 ani de experiență în psihologie, cu o abordare integrativă și personalizată
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8">
                            {whyChooseUs.map((reason, index) => {
                                const Icon = reason.icon
                                return (
                                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                        <CardContent className="flex items-start space-x-4">
                                            <div className="w-14 h-14 bg-therapeutic-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-7 h-7 text-therapeutic-600" />
                                            </div>
                                            <div>
                                                <Typography variant="h6" className="mb-3 text-therapeutic-700">
                                                    {reason.title}
                                                </Typography>
                                                <Typography variant="body" className="text-gray-600 leading-relaxed">
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

            {/* Process Steps */}
            <section className="py-20 bg-therapeutic-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Cum <span className="text-therapeutic">Funcționează</span>?
                        </Typography>
                        <Typography variant="lead">
                            Procesul simplu și structurat pentru a începe călătoria ta către o viață mai bună
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-4 gap-6">
                            {processSteps.map((step, index) => (
                                <Card key={index} className="p-6 bg-white text-center hover:shadow-lg transition-shadow relative">
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-therapeutic-200 z-10" />
                                    )}
                                    <CardContent className="space-y-4">
                                        <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto relative z-20">
                                            <span className="text-2xl font-bold text-therapeutic-600">{step.step}</span>
                                        </div>
                                        <Typography variant="h6" className="font-semibold text-therapeutic-700">
                                            {step.title}
                                        </Typography>
                                        <Typography variant="body" className="text-gray-600 text-sm leading-relaxed">
                                            {step.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Întrebări <span className="text-therapeutic">Frecvente</span>
                        </Typography>
                        <Typography variant="lead">
                            Răspunsuri la întrebările comune despre serviciile oferite
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger" className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                                    <CardContent>
                                        <Typography variant="h6" className="mb-3 text-therapeutic-700">
                                            {faq.question}
                                        </Typography>
                                        <Typography variant="body" className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-therapeutic-600 via-calming-500 to-warm-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-therapeutic-500/20 rounded-full blur-3xl" />

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeIn" className="text-center max-w-4xl mx-auto">
                        <Typography variant="h2" className="text-white mb-6" family="serif">
                            Începe Călătoria ta de Schimbare Astăzi
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Fiecare pas către o viață mai bună începe cu o decizie. Sunt aici să te sprijin
                            în această călătorie, indiferent de provocările cu care te confrunți.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                                <Link href="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Programează consultația gratuită
                                </Link>
                            </Button>

                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                                <Link href="/despre-mine">
                                    <Users className="w-5 h-5 mr-2" />
                                    Află mai multe despre mine
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/20">
                            <Typography variant="small" className="text-white/80">
                                💬 Consultația telefonică inițială (15 minute) este <strong>gratuită</strong>
                            </Typography>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}