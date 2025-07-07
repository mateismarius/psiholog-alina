import type { Metadata } from 'next'
import Link from 'next/link'
import {
    Gamepad2,
    Brain,
    Clock,
    CheckCircle,
    Users,
    Heart,
    Target,
    Calendar,
    Phone,
    Puzzle,
    Zap,
    Eye,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Ședințe de Intervenție pentru Recuperare',
    description: 'Terapie de recuperare prin joc pentru copii cu autism, ADHD, întârzieri în dezvoltare și probleme de integrare senzorială. Ședințe de 100 minute în București cu participarea părinților.',
    keywords: [
        'terapie recuperare copii bucuresti',
        'terapie prin joc autism',
        'recuperare adhd copii',
        'integrare senzoriala',
        'intarzieri dezvoltare',
        'terapie comportamentala copii',
        'interventie timpurie autism'
    ],
}

const conditions = [
    {
        title: 'Autism (TSA)',
        description: 'Intervenție specializată pentru dezvoltarea abilităților sociale și de comunicare',
        icon: Brain,
        color: 'therapeutic',
        benefits: [
            'Dezvoltarea comunicării verbale și non-verbale',
            'Îmbunătățirea interacțiunii sociale',
            'Reducerea comportamentelor repetitive',
            'Dezvoltarea jocului funcțional',
            'Creșterea autonomiei personale'
        ],
        techniques: ['ABA', 'TEACCH', 'Floor Time', 'Social Stories']
    },
    {
        title: 'ADHD',
        description: 'Terapie pentru îmbunătățirea atenției, concentrării și controlului impulsurilor',
        icon: Target,
        color: 'calming',
        benefits: [
            'Creșterea capacității de atenție',
            'Îmbunătățirea controlului impulsurilor',
            'Dezvoltarea abilităților executive',
            'Reducerea hiperactivității',
            'Îmbunătățirea performanțelor școlare'
        ],
        techniques: ['Cognitive Training', 'Mindfulness', 'Behavioral Interventions', 'Executive Function Training']
    },
    {
        title: 'Probleme de Integrare Senzorială',
        description: 'Terapie pentru procesarea și integrarea corectă a stimulilor senzoriali',
        icon: Zap,
        color: 'warm',
        benefits: [
            'Îmbunătățirea procesării senzoriale',
            'Reducerea hipersensibilității',
            'Dezvoltarea toleranței la stimuli',
            'Îmbunătățirea coordonării motorii',
            'Creșterea confortului în medii diverse'
        ],
        techniques: ['Sensory Integration Therapy', 'Proprioceptive Activities', 'Vestibular Training', 'Tactile Stimulation']
    },
    {
        title: 'Întârzieri în Dezvoltare',
        description: 'Stimularea dezvoltării cognitive, motorii și sociale la copii',
        icon: Puzzle,
        color: 'empathy',
        benefits: [
            'Accelerarea dezvoltării cognitive',
            'Îmbunătățirea abilităților motorii',
            'Dezvoltarea limbajului expresiv',
            'Creșterea independenței',
            'Pregătirea pentru școală'
        ],
        techniques: ['Developmental Play', 'Cognitive Stimulation', 'Motor Skills Training', 'Language Development']
    }
]

const therapyFeatures = [
    {
        icon: Gamepad2,
        title: 'Terapie prin Joc',
        description: 'Folosim jocul ca principal instrument terapeutic pentru a face învățarea plăcută și eficientă'
    },
    {
        icon: Users,
        title: 'Participarea Părinților',
        description: 'Părinții pot asista la ședințe pentru a învăța tehnicile și a le continua acasă'
    },
    {
        icon: Eye,
        title: 'Monitorizare Continuă',
        description: 'Evaluăm progresul constant și adaptăm intervenția în funcție de nevoile copilului'
    },
    {
        icon: Heart,
        title: 'Mediu Sigur și Stimulant',
        description: 'Cabinet amenajat special pentru copii, cu jucării și materiale terapeutice adecvate'
    }
]

const sessionStructure = [
    {
        phase: 'Încălzire',
        duration: '15 minute',
        description: 'Activități de conectare și pregătire pentru sesiune',
        activities: ['Jocuri de salut', 'Activități de reglare senzorială', 'Stabilirea rutinei']
    },
    {
        phase: 'Activități Principale',
        duration: '60 minute',
        description: 'Exerciții terapeutice țintite pe obiectivele specifice',
        activities: ['Jocuri structurate', 'Exerciții cognitive', 'Activități senzoriale', 'Training social']
    },
    {
        phase: 'Consolidare',
        duration: '15 minute',
        description: 'Recapitularea și transferul abilităților învățate',
        activities: ['Jocuri de consolidare', 'Feedback pozitiv', 'Planificarea activităților pentru acasă']
    },
    {
        phase: 'Feedback pentru Părinți',
        duration: '10 minute',
        description: 'Discuții cu părinții despre progresul copilului și recomandări',
        activities: ['Prezentarea progresului', 'Exerciții pentru acasă', 'Răspunsuri la întrebări']
    }
]

const pricing = {
    standard: 250,
    duration: '100 minute',
    includes: [
        'Ședința de terapie (100 minute)',
        'Materiale și jucării terapeutice',
        'Participarea părinților la ședință',
        'Plan de exerciții pentru acasă',
        'Monitorizarea progresului',
        'Consultații telefonice între ședințe'
    ]
}

const ageGroups = [
    {
        range: '2-4 ani',
        focus: 'Intervenție timpurie și dezvoltare fundamentală',
        methods: ['Joc simbolic', 'Imitație', 'Rutine zilnice', 'Comunicare preverbală']
    },
    {
        range: '5-8 ani',
        focus: 'Pregătirea pentru școală și abilități sociale',
        methods: ['Jocuri de grup', 'Abilități academice', 'Autocontrol', 'Prietenii']
    },
    {
        range: '9-12 ani',
        focus: 'Autonomie și abilități complexe',
        methods: ['Rezolvarea problemelor', 'Organizare', 'Abilități sociale avansate', 'Gestionarea emoțiilor']
    },
    {
        range: '13+ ani',
        focus: 'Tranziția către independență',
        methods: ['Abilități de viață', 'Planificarea viitorului', 'Relații interpersonale', 'Autodeterminare']
    }
]

const faqs = [
    {
        question: 'De ce durează ședințele 100 de minute?',
        answer: 'Durata extinsă permite copilului să se acomodeze, să participe activ la activități diverse și să consolideze învățarea. Este timpul necesar pentru o intervenție eficientă.'
    },
    {
        question: 'Pot asista la ședința copilului meu?',
        answer: 'Da, încurajez părinții să participe! Prezența voastră ajută la transferul abilităților acasă și vă oferă instrumente pentru a continua terapia în mediul familial.'
    },
    {
        question: 'Cât timp durează să văd progrese?',
        answer: 'Progresele variază în funcție de copil și severitatea condițiilor. În general, primele îmbunătățiri se observă în 4-6 săptămâni de terapie consistentă.'
    },
    {
        question: 'Ce echipamente și materiale folosiți?',
        answer: 'Am un cabinet complet echipat cu jucării terapeutice, materiale senzoriale, echipamente pentru integrare senzorială și tehnologie asistivă adaptată vârstei.'
    }
]

export default function InterventiePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-therapeutic-600 via-therapeutic-500 to-calming-500 text-white relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warm-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Content */}
                        <AnimatedSection animation="slideUp" className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                                <Gamepad2 className="w-4 h-4 mr-2 text-warm-300" />
                                Terapie specializată prin joc
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Ședințe de Intervenție
                                <span className="block text-warm-200">pentru Recuperare</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90">
                                Terapie de recuperare prin joc pentru copii cu autism, ADHD, întârzieri în dezvoltare
                                și probleme de integrare senzorială. Părinții pot asista la ședințe pentru a învăța
                                tehnicile și a le continua acasă.
                            </Typography>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Clock className="w-8 h-8 text-warm-300 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">100 min</div>
                                    <div className="text-white/80 text-sm">Durată ședință</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Users className="w-8 h-8 text-calming-300 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">Părinți</div>
                                    <div className="text-white/80 text-sm">Pot participa</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programează terapia
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                                    <a href="tel:+40722123456">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Discută cu mine
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>

                        {/* Features */}
                        <AnimatedSection animation="slideUp" className="space-y-6">
                            {therapyFeatures.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-warm-300" />
                                        </div>
                                        <div>
                                            <Typography variant="h6" className="text-white mb-2">
                                                {feature.title}
                                            </Typography>
                                            <Typography variant="body" className="text-white/80 text-sm">
                                                {feature.description}
                                            </Typography>
                                        </div>
                                    </div>
                                )
                            })}
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Conditions Treated */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Condiții <span className="text-therapeutic">Tratate</span>
                        </Typography>
                        <Typography variant="lead">
                            Ofer intervenții specializate pentru diverse tulburări de dezvoltare,
                            adaptate vârstei și nevoilor specifice ale fiecărui copil.
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8">
                            {conditions.map((condition, index) => {
                                const Icon = condition.icon
                                return (
                                    <Card key={index} className={`p-6 border-${condition.color}-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-14 h-14 bg-${condition.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                                                <Icon className={`w-7 h-7 text-${condition.color}-600`} />
                                            </div>
                                            <CardTitle className="text-xl mb-2">{condition.title}</CardTitle>
                                            <Typography variant="body" className="text-gray-600 mb-4">
                                                {condition.description}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-3">
                                                    Beneficii:
                                                </Typography>
                                                <ul className="space-y-2">
                                                    {condition.benefits.map((benefit, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2 text-sm">
                                                            <CheckCircle className={`w-4 h-4 text-${condition.color}-500 mt-0.5 flex-shrink-0`} />
                                                            <span>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                    Tehnici utilizate:
                                                </Typography>
                                                <div className="flex flex-wrap gap-1">
                                                    {condition.techniques.map((technique, idx) => (
                                                        <span key={idx} className={`text-xs px-2 py-1 bg-${condition.color}-100 text-${condition.color}-700 rounded`}>
                              {technique}
                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Session Structure */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Structura unei <span className="text-therapeutic">Ședințe</span>
                        </Typography>
                        <Typography variant="lead">
                            Fiecare ședință de 100 minute este atent planificată pentru a maximiza progresul copilului
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-4 gap-6">
                            {sessionStructure.map((phase, index) => (
                                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="space-y-4">
                                        <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto">
                                            <Clock className="w-8 h-8 text-therapeutic-600" />
                                        </div>
                                        <Typography variant="h6" className="font-semibold">
                                            {phase.phase}
                                        </Typography>
                                        <div className="text-therapeutic-600 font-bold text-lg">
                                            {phase.duration}
                                        </div>
                                        <Typography variant="body" className="text-gray-600 text-sm leading-relaxed">
                                            {phase.description}
                                        </Typography>
                                        <div className="space-y-1">
                                            {phase.activities.map((activity, idx) => (
                                                <div key={idx} className="text-xs text-gray-500">
                                                    • {activity}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Age Groups */}
            <section className="py-20 bg-therapeutic-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Adaptare după <span className="text-therapeutic">Vârstă</span>
                        </Typography>
                        <Typography variant="lead">
                            Terapia este personalizată în funcție de vârsta și nivelul de dezvoltare al copilului
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-4 gap-6">
                            {ageGroups.map((group, index) => (
                                <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow">
                                    <CardContent className="space-y-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-therapeutic-600 mb-2">
                                                {group.range}
                                            </div>
                                            <Typography variant="h6" className="font-semibold mb-3">
                                                {group.focus}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                Metode principale:
                                            </Typography>
                                            <div className="space-y-1">
                                                {group.methods.map((method, idx) => (
                                                    <div key={idx} className="text-xs text-gray-600">
                                                        • {method}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Tarif și <span className="text-therapeutic">Servicii Incluse</span>
                        </Typography>
                        <Typography variant="lead">
                            Investiție în dezvoltarea copilului tău cu servicii complete incluse
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="slideUp" className="max-w-2xl mx-auto">
                        <Card className="p-8 border-therapeutic-200 shadow-therapeutic">
                            <CardHeader className="text-center pb-6">
                                <div className="w-20 h-20 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Gamepad2 className="w-10 h-10 text-therapeutic-600" />
                                </div>
                                <CardTitle className="text-3xl mb-2">Ședință de Intervenție și Recuperare</CardTitle>
                                <div className="text-4xl font-bold text-therapeutic-600 mb-2">{pricing.standard} RON</div>
                                <Typography variant="body" className="text-gray-600">
                                    Sesiune de {pricing.duration} cu participarea părinților
                                </Typography>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-8">
                                    {pricing.includes.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-therapeutic-500 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button asChild className="flex-1 bg-therapeutic text-white hover:bg-therapeutic/90">
                                        <Link href="/contact">
                                            <Calendar className="w-5 h-5 mr-2" />
                                            Programează acum
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="flex-1">
                                        <a href="tel:+40722123456">
                                            <Phone className="w-5 h-5 mr-2" />
                                            Întreabă detalii
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Întrebări <span className="text-therapeutic">Frecvente</span>
                        </Typography>
                        <Typography variant="lead">
                            Răspunsuri la întrebările comune despre terapia de recuperare
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
            <section className="py-20 bg-gradient-to-r from-calming-600 via-calming-500 to-warm-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-therapeutic-500/20 rounded-full blur-3xl" />

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeIn" className="text-center max-w-4xl mx-auto">
                        <Typography variant="h2" className="text-white mb-6" family="serif">
                            Investește în Viitorul Copilului Tău
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Fiecare ședință de terapie este un pas important către dezvoltarea optimă a copilului.
                            Începe astăzi călătoria de recuperare și progres!
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                                <Link href="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Programează prima ședință
                                </Link>
                            </Button>

                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-calming-600">
                                <Link href="/servicii">
                                    Vezi toate serviciile
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}