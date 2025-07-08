import type { Metadata } from 'next'
import Link from 'next/link'
import {
    Heart,
    Brain,
    Clock,
    CheckCircle,
    Users,
    Shield,
    Lightbulb,
    Calendar,
    Phone,
    Compass,
    Sparkles,
    Target,
    TreePine,
    Waves,
    Sunrise,
    MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Psihoterapie',
    description: 'Psihoterapie integrativă pentru adulți și adolescenți în București. Tratament pentru anxietate, depresie, traume, probleme de relație și dezvoltare personală. Ședințe de 50 minute.',
    keywords: [
        'psihoterapie bucuresti',
        'psihoterapeut bucuresti',
        'terapie anxietate',
        'terapie depresie',
        'terapie trauma',
        'dezvoltare personala',
        'probleme relatii'
    ],
}

const therapyTypes = [
    {
        title: 'Terapie Integrativă',
        description: 'Combinarea celor mai eficiente tehnici din diverse școli terapeutice',
        icon: Compass,
        color: 'therapeutic',
        approaches: ['CBT', 'Gestalt', 'Psihodinamic', 'Mindfulness', 'EMDR'],
        benefits: [
            'Flexibilitate în abordare',
            'Personalizare maximă',
            'Rezultate mai rapide',
            'Adaptare la nevoi specifice'
        ]
    },
    {
        title: 'Terapie Cognitiv-Comportamentală',
        description: 'Schimbarea gândurilor și comportamentelor disfuncționale',
        icon: Brain,
        color: 'calming',
        approaches: ['Reestructurare cognitivă', 'Tehnici comportamentale', 'Mindfulness CBT'],
        benefits: [
            'Rezultate demonstrabile',
            'Tehnici practice',
            'Durată limitată',
            'Focus pe prezent'
        ]
    },
    {
        title: 'Terapie Gestalt',
        description: 'Explorarea experiențelor prezente și a relațiilor interpersonale',
        icon: Waves,
        color: 'empathy',
        approaches: ['Aici și acum', 'Awareness', 'Contact autentic', 'Experimente'],
        benefits: [
            'Autocunoaștere profundă',
            'Responsabilitate personală',
            'Creativitate și spontaneitate',
            'Relații autentice'
        ]
    },
    {
        title: 'Terapie de Cuplu',
        description: 'Îmbunătățirea comunicării și a relației de cuplu',
        icon: Heart,
        color: 'warm',
        approaches: ['Comunicare assertivă', 'Rezolvarea conflictelor', 'Intimitate emoțională'],
        benefits: [
            'Comunicare îmbunătățită',
            'Rezolvarea conflictelor',
            'Întărirea legăturii',
            'Redescoperirea iubirii'
        ]
    }
]

const conditions = [
    {
        condition: 'Anxietate și Panică',
        description: 'Gestionarea anxietății generalizate, atacurilor de panică și fobiilor',
        symptoms: ['Îngrijorări excesive', 'Atacuri de panică', 'Evitări', 'Tensiune fizică'],
        color: 'calming',
        icon: Shield
    },
    {
        condition: 'Depresie',
        description: 'Tratamentul stărilor depresive și a dispoziției scăzute',
        symptoms: ['Tristețe persistentă', 'Lipsa energiei', 'Pierderea interesului', 'Gânduri negative'],
        color: 'therapeutic',
        icon: Sunrise
    },
    {
        condition: 'Traume și PTSD',
        description: 'Procesarea traumelor și vindecarea rănilor emoționale',
        symptoms: ['Retrăiri', 'Evitări', 'Hipervigilență', 'Amintiri intrusive'],
        color: 'empathy',
        icon: TreePine
    },
    {
        condition: 'Probleme de Relație',
        description: 'Îmbunătățirea relațiilor interpersonale și a comunicării',
        symptoms: ['Conflicte repetate', 'Comunicare deficitară', 'Probleme de încredere', 'Izolarea'],
        color: 'warm',
        icon: Users
    },
    {
        condition: 'Stres și Burnout',
        description: 'Gestionarea stresului cronic și prevenirea epuizării',
        symptoms: ['Oboseală cronică', 'Iritabilitate', 'Probleme de somn', 'Scăderea performanței'],
        color: 'peace',
        icon: Waves
    },
    {
        condition: 'Dezvoltare Personală',
        description: 'Creșterea personală și atingerea potențialului maxim',
        symptoms: ['Dorința de schimbare', 'Căutarea sensului', 'Îmbunătățirea relațiilor', 'Autocunoaștere'],
        color: 'trust',
        icon: Sparkles
    }
]

const therapyProcess = [
    {
        phase: 'Evaluarea Inițială',
        duration: '1-2 ședințe',
        description: 'Înțelegerea problemelor, istoricului și stabilirea obiectivelor',
        activities: [
            'Anamneza detaliată',
            'Evaluarea stării actuale',
            'Stabilirea obiectivelor',
            'Planificarea tratamentului'
        ]
    },
    {
        phase: 'Explorare și Insight',
        duration: '5-10 ședințe',
        description: 'Explorarea rădăcinilor problemelor și dezvoltarea înțelegerii',
        activities: [
            'Explorarea istoricului personal',
            'Identificarea pattern-urilor',
            'Dezvoltarea autocunoașterii',
            'Procesarea emoțiilor'
        ]
    },
    {
        phase: 'Schimbare și Integrare',
        duration: '10-20 ședințe',
        description: 'Implementarea schimbărilor și dezvoltarea de noi abilități',
        activities: [
            'Învățarea tehnicilor noi',
            'Practica în viața reală',
            'Consolidarea progresului',
            'Prevenirea recidivelor'
        ]
    },
    {
        phase: 'Menținere și Finalizare',
        duration: 'Variabil',
        description: 'Consolidarea rezultatelor și pregătirea pentru independență',
        activities: [
            'Evaluarea progresului',
            'Planificarea viitorului',
            'Ședințe de menținere',
            'Încheierea terapiei'
        ]
    }
]

const sessionStructure = [
    {
        moment: 'Check-in',
        duration: '5-10 minute',
        description: 'Conectarea și evaluarea stării actuale'
    },
    {
        moment: 'Lucrul Principal',
        duration: '35-40 minute',
        description: 'Explorare, procesare și lucru terapeutic activ'
    },
    {
        moment: 'Integrare',
        duration: '5-10 minute',
        description: 'Rezumatul ședinței și stabilirea sarcinilor pentru acasă'
    }
]

const pricing = {
    individual: 200,
    couple: 250,
    duration: '50 minute',
    packages: [
        {
            name: 'Sesiune individuală',
            price: 200,
            type: 'individual',
            description: 'Perfect pentru început sau probleme punctuale'
        },
        {
            name: 'Terapie de cuplu',
            price: 250,
            type: 'cuplu',
            description: 'Ședințe pentru îmbunătățirea relației de cuplu'
        }
    ]
}

const benefits = [
    {
        icon: Target,
        title: 'Obiective Clare',
        description: 'Stabilim împreună obiective realiste și măsurabile pentru terapie'
    },
    {
        icon: Lightbulb,
        title: 'Insight și Autocunoaștere',
        description: 'Dezvolți o înțelegere profundă a ta și a pattern-urilor tale'
    },
    {
        icon: Shield,
        title: 'Mediu Sigur',
        description: 'Spațiu confidențial și non-judgmental pentru explorare'
    },
    {
        icon: Sparkles,
        title: 'Transformare Durabilă',
        description: 'Schimbări profunde care durează în timp și îți îmbunătățesc viața'
    }
]

const faqs = [
    {
        question: 'Cât durează o terapie?',
        answer: 'Durata variază în funcție de complexitatea problemelor și obiectivele personale. Terapiile scurte pot dura 10-20 ședințe, în timp ce procesele mai profunde pot dura 6 luni - 2 ani.'
    },
    {
        question: 'Care este diferența dintre psiholog și psihoterapeut?',
        answer: 'Psihologul oferă consiliere și evaluare, în timp ce psihoterapeutul are o pregătire specializată în tehnici terapeutice pentru tratarea tulburărilor psihice mai complexe.'
    },
    {
        question: 'Pot face terapie online?',
        answer: 'Da, ședințele online sunt la fel de eficiente ca cele față în față și oferă mai multă flexibilitate. Folosim platforme sigure pentru confidențialitate maximă.'
    },
    {
        question: 'Cum știu dacă am nevoie de terapie?',
        answer: 'Dacă simți că problemele emoționale îți afectează viața zilnică, relațiile sau munca, sau dacă te simți blocat în pattern-uri repetitive, terapia te poate ajuta.'
    }
]

export default function PsihoterapiePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-therapeutic-600 via-therapeutic-500 to-empathy-500 text-white relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warm-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Content */}
                        <AnimatedSection animation="slideUp" className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                                <Heart className="w-4 h-4 mr-2 text-warm-300" />
                                Terapie integrativă personalizată
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Psihoterapie
                                <span className="block text-warm-200">Integrativă</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90">
                                Un spațiu sigur pentru explorare, vindecare și creștere personală.
                                Lucrez cu adulți și adolescenți pentru depășirea dificultăților emoționale
                                și dezvoltarea unei vieți mai împlinite.
                            </Typography>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Clock className="w-6 h-6 text-warm-300 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">50 min</div>
                                    <div className="text-white/80 text-xs">Ședință</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Users className="w-6 h-6 text-empathy-300 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">Individual</div>
                                    <div className="text-white/80 text-xs">sau Cuplu</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Shield className="w-6 h-6 text-calming-300 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">Confidential</div>
                                    <div className="text-white/80 text-xs">100% Sigur</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programează ședința
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                                    <a href="tel:+40722123456">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Discută confidențial
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>

                        {/* Benefits Cards */}
                        <AnimatedSection animation="slideUp" className="space-y-4">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                return (
                                    <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-warm-300" />
                                        </div>
                                        <div>
                                            <Typography variant="h6" className="text-white mb-2">
                                                {benefit.title}
                                            </Typography>
                                            <Typography variant="body" className="text-white/80 text-sm">
                                                {benefit.description}
                                            </Typography>
                                        </div>
                                    </div>
                                )
                            })}
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Therapy Types */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Abordări <span className="text-therapeutic">Terapeutice</span>
                        </Typography>
                        <Typography variant="lead">
                            Folosesc tehnici integrate din diverse școli terapeutice, adaptate nevoilor tale specifice
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8">
                            {therapyTypes.map((type, index) => {
                                const Icon = type.icon
                                return (
                                    <Card key={index} className={`p-6 border-${type.color}-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-14 h-14 bg-${type.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                                                <Icon className={`w-7 h-7 text-${type.color}-600`} />
                                            </div>
                                            <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                                            <Typography variant="body" className="text-gray-600 mb-4">
                                                {type.description}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                    Tehnici folosite:
                                                </Typography>
                                                <div className="flex flex-wrap gap-1 mb-4">
                                                    {type.approaches.map((approach, idx) => (
                                                        <span key={idx} className={`text-xs px-2 py-1 bg-${type.color}-100 text-${type.color}-700 rounded`}>
                              {approach}
                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-3">
                                                    Beneficii:
                                                </Typography>
                                                <ul className="space-y-2">
                                                    {type.benefits.map((benefit, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2 text-sm">
                                                            <CheckCircle className={`w-4 h-4 text-${type.color}-500 mt-0.5 flex-shrink-0`} />
                                                            <span>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Conditions Treated */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Condiții <span className="text-therapeutic">Tratate</span>
                        </Typography>
                        <Typography variant="lead">
                            Ofer sprijin specializat pentru o gamă largă de dificultăți emoționale și psihologice
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {conditions.map((condition, index) => {
                                const Icon = condition.icon
                                return (
                                    <Card key={index} className={`p-6 border-${condition.color}-200 hover:shadow-lg transition-shadow`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-12 h-12 bg-${condition.color}-100 rounded-xl flex items-center justify-center mb-3`}>
                                                <Icon className={`w-6 h-6 text-${condition.color}-600`} />
                                            </div>
                                            <CardTitle className="text-lg mb-2">{condition.condition}</CardTitle>
                                            <Typography variant="body" className="text-gray-600 text-sm mb-3">
                                                {condition.description}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent>
                                            <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                Simptome comune:
                                            </Typography>
                                            <div className="space-y-1">
                                                {condition.symptoms.map((symptom, idx) => (
                                                    <div key={idx} className="text-xs text-gray-600">
                                                        • {symptom}
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Therapy Process */}
            <section className="py-20 bg-therapeutic-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Procesul <span className="text-therapeutic">Terapeutic</span>
                        </Typography>
                        <Typography variant="lead">
                            Călătoria ta de vindecare urmează un proces structurat, adaptat ritmului tău personal
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-4 gap-6">
                            {therapyProcess.map((phase, index) => (
                                <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow text-center">
                                    <CardContent className="space-y-4">
                                        <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto">
                                            <span className="text-2xl font-bold text-therapeutic-600">{index + 1}</span>
                                        </div>
                                        <Typography variant="h6" className="font-semibold text-therapeutic-700">
                                            {phase.phase}
                                        </Typography>
                                        <div className="text-therapeutic-600 font-medium text-sm">
                                            {phase.duration}
                                        </div>
                                        <Typography variant="body" className="text-gray-600 text-sm leading-relaxed">
                                            {phase.description}
                                        </Typography>
                                        <div className="space-y-1 pt-2 border-t border-gray-100">
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

            {/* Session Structure */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Structura unei <span className="text-therapeutic">Ședințe</span>
                        </Typography>
                        <Typography variant="lead">
                            Fiecare ședință de 50 minute este structurată pentru a maximiza beneficiile terapeutice
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {sessionStructure.map((moment, index) => (
                                <Card key={index} className="p-6 text-center border-therapeutic-200 hover:shadow-lg transition-shadow">
                                    <CardContent className="space-y-4">
                                        <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto">
                                            <Clock className="w-8 h-8 text-therapeutic-600" />
                                        </div>
                                        <Typography variant="h6" className="font-semibold">
                                            {moment.moment}
                                        </Typography>
                                        <div className="text-therapeutic-600 font-bold">
                                            {moment.duration}
                                        </div>
                                        <Typography variant="body" className="text-gray-600 text-sm">
                                            {moment.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Tarife <span className="text-therapeutic">Terapie</span>
                        </Typography>
                        <Typography variant="lead">
                            Investiție în sănătatea ta mentală și calitatea vieții
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {pricing.packages.map((package_, index) => (
                                <Card key={index} className="p-8 text-center border-therapeutic-200 hover:shadow-lg transition-shadow">
                                    <CardHeader className="pb-6">
                                        <div className="w-20 h-20 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            {package_.type === 'individual' ? (
                                                <Brain className="w-10 h-10 text-therapeutic-600" />
                                            ) : (
                                                <Heart className="w-10 h-10 text-therapeutic-600" />
                                            )}
                                        </div>
                                        <CardTitle className="text-2xl mb-2">{package_.name}</CardTitle>
                                        <div className="text-4xl font-bold text-therapeutic-600 mb-2">{package_.price} RON</div>
                                        <Typography variant="body" className="text-gray-600">
                                            Sesiune de {pricing.duration}
                                        </Typography>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <Typography variant="body" className="text-gray-600">
                                            {package_.description}
                                        </Typography>
                                        <Button className="w-full bg-therapeutic text-white hover:bg-therapeutic/90">
                                            <Calendar className="w-5 h-5 mr-2" />
                                            Programează {package_.type === 'individual' ? 'ședința' : 'terapia'}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeIn" className="text-center mt-12">
                        <div className="bg-therapeutic-50 rounded-2xl p-8 max-w-2xl mx-auto">
                            <Typography variant="h6" className="mb-4">
                                Prima ședință - consultație inițială
                            </Typography>
                            <Typography variant="body" className="text-gray-600 mb-6">
                                În prima ședință evaluez nevoile tale și stabilim împreună obiectivele terapiei.
                                Este o oportunitate de a te familiariza cu procesul terapeutic.
                            </Typography>
                            <Button asChild className="bg-therapeutic text-white hover:bg-therapeutic/90">
                                <Link href="/contact">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Programează prima ședință
                                </Link>
                            </Button>
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
                            Răspunsuri la întrebările comune despre psihoterapie
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
            <section className="py-20 bg-gradient-to-r from-therapeutic-600 via-empathy-500 to-warm-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-therapeutic-500/20 rounded-full blur-3xl" />

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeIn" className="text-center max-w-4xl mx-auto">
                        <Typography variant="h2" className="text-white mb-6" family="serif">
                            Primul Pas către Vindecarea Ta
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Să facem împreună primul pas către o viață mai împlinită și echilibrată.
                            Fiecare călătorie de vindecare începe cu o singură decizie curajoasă.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                                <Link href="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Programează prima ședință
                                </Link>
                            </Button>

                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
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