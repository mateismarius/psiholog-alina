import type { Metadata } from 'next'
import Link from 'next/link'
import {
    MessageCircle,
    Volume2,
    Clock,
    CheckCircle,
    Users,
    BookOpen,
    Mic,
    Calendar,
    Phone,
    Baby,
    GraduationCap,
    Heart,
    Target,
    Puzzle,
    Headphones,
    Music,
    Smile,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Logopedie',
    description: 'Servicii de logopedie pentru copii și adulți în București. Tratament pentru tulburări de vorbire, limbaj, fluență și deglutiție. Ședințe personalizate pentru fiecare vârstă.',
    keywords: [
        'logopedie bucuresti',
        'logoped copii',
        'terapie vorbire',
        'tulburari limbaj',
        'balbaieli copii',
        'intarzieri vorbire',
        'articulare sunete'
    ],
}

const speechProblems = [
    {
        title: 'Tulburări de Articulare',
        description: 'Dificultăți în pronunțarea corectă a sunetelor și cuvintelor',
        icon: Volume2,
        color: 'therapeutic',
        conditions: ['Dislalie', 'Sigmatism', 'Rotacism', 'Lambdacism'],
        symptoms: [
            'Pronunție incorectă a sunetelor',
            'Înlocuirea sau omiterea sunetelor',
            'Vorbire greu de înțeles',
            'Autocorectare dificilă'
        ]
    },
    {
        title: 'Întârzieri de Limbaj',
        description: 'Dezvoltarea mai lentă a abilităților de vorbire și înțelegere',
        icon: BookOpen,
        color: 'calming',
        conditions: ['Întârziere simplă', 'Tulburare expresivă', 'Tulburare mixtă'],
        symptoms: [
            'Vocabular redus pentru vârstă',
            'Fraze scurte și simple',
            'Dificultăți de înțelegere',
            'Evitarea comunicării'
        ]
    },
    {
        title: 'Tulburări de Fluență',
        description: 'Probleme în ritmul și fluiditatea vorbirii',
        icon: Music,
        color: 'empathy',
        conditions: ['Bâlbâială', 'Tahilalie', 'Tulburări de ritm'],
        symptoms: [
            'Repetarea sunetelor/cuvintelor',
            'Blocaje în vorbire',
            'Tensiune musculară',
            'Anxietate legată de vorbire'
        ]
    },
    {
        title: 'Tulburări de Deglutiție',
        description: 'Dificultăți în procesul de înghițire și funcții orale',
        icon: Heart,
        color: 'warm',
        conditions: ['Disfagie', 'Respirație orală', 'Sucit atipic'],
        symptoms: [
            'Dificultăți la înghițire',
            'Respirație pe gură',
            'Poziție incorectă a limbii',
            'Probleme cu textura alimentelor'
        ]
    }
]

const ageGroups = [
    {
        group: 'Copii Mici (2-4 ani)',
        focus: 'Stimularea dezvoltării primare a limbajului',
        icon: Baby,
        color: 'empathy',
        goals: [
            'Prima vorbire și cuvinte',
            'Înțelegerea instrucțiunilor simple',
            'Dezvoltarea vocabularului de bază',
            'Imitarea sunetelor și gesturilor'
        ],
        methods: ['Joc simbolic', 'Cântece și ritmuri', 'Imitație', 'Stimulare senzorială']
    },
    {
        group: 'Preșcolari (4-6 ani)',
        focus: 'Pregătirea pentru vorbirea corectă și școală',
        icon: Puzzle,
        color: 'calming',
        goals: [
            'Articularea corectă a tuturor sunetelor',
            'Formarea frazelor complete',
            'Dezvoltarea vocabularului',
            'Pregătirea pentru citit-scris'
        ],
        methods: ['Exerciții de articulare', 'Jocuri de cuvinte', 'Povești interactive', 'Breathing exercises']
    },
    {
        group: 'Școlari (6-12 ani)',
        focus: 'Corectarea problemelor și dezvoltarea abilităților avansate',
        icon: GraduationCap,
        color: 'therapeutic',
        goals: [
            'Corectarea dislaliilor',
            'Îmbunătățirea fluenței',
            'Dezvoltarea abilităților narrative',
            'Sprijin pentru performanța școlară'
        ],
        methods: ['Terapie articulatorie', 'Exerciții de fluență', 'Tehnici cognitive', 'Practice homework']
    },
    {
        group: 'Adulți (18+ ani)',
        focus: 'Reabilitarea și îmbunătățirea comunicării',
        icon: Users,
        color: 'warm',
        goals: [
            'Reabilitare post-accident',
            'Îmbunătățirea comunicării profesionale',
            'Gestionarea bâlbâielii',
            'Corectarea accentului'
        ],
        methods: ['Terapie intensivă', 'Tehnici de relaxare', 'Practice conversaționale', 'Exerciții profesionale']
    }
]

const therapyMethods = [
    {
        method: 'Terapie prin Joc',
        description: 'Folosirea jocului pentru a face terapia plăcută și eficientă',
        icon: Smile,
        techniques: ['Jocuri role-play', 'Puzzle-uri sonore', 'Activități creative', 'Jocuri interactive']
    },
    {
        method: 'Exerciții de Articulare',
        description: 'Tehnologii specifice pentru corectarea pronunției',
        icon: Mic,
        techniques: ['Poziții articulatorii', 'Exerciții bucale', 'Modelare sonoră', 'Practice repetitive']
    },
    {
        method: 'Stimulare Auditiva',
        description: 'Dezvoltarea discriminării auditive și procesării sunetelor',
        icon: Headphones,
        techniques: ['Jocuri auditive', 'Discriminare fonematică', 'Antrenament ritmic', 'Feedback auditiv']
    },
    {
        method: 'Terapie Respiratorie',
        description: 'Îmbunătățirea tehnicilor de respirație pentru o vorbire mai bună',
        icon: Heart,
        techniques: ['Exerciții diafragmatice', 'Control respiratory', 'Relaxare musculară', 'Coordonare respiratorie']
    }
]

const sessionStructure = [
    {
        phase: 'Încălzire și Activare',
        duration: '10 minute',
        description: 'Pregătirea aparatului fono-articulator și conectarea cu copilul',
        activities: [
            'Exerciții de respirație',
            'Activități de încălzire orală',
            'Jocuri de atenție',
            'Stabilirea obiectivelor ședinței'
        ]
    },
    {
        phase: 'Lucrul Principal',
        duration: '30 minute',
        description: 'Exerciții țintite pe obiectivele terapeutice specifice',
        activities: [
            'Exerciții de articulare',
            'Activități de dezvoltare a vocabularului',
            'Jocuri de fluență',
            'Practice conversaționale'
        ]
    },
    {
        phase: 'Consolidare și Transfer',
        duration: '10 minute',
        description: 'Întărirea abilităților învățate și pregătirea pentru acasă',
        activities: [
            'Recapitularea progresului',
            'Jocuri de consolidare',
            'Stabilirea temelor pentru acasă',
            'Feedback pentru părinți'
        ]
    }
]

const benefits = [
    {
        icon: Target,
        title: 'Evaluare Detaliată',
        description: 'Evaluez toate aspectele vorbirii pentru un plan terapeutic personalizat'
    },
    {
        icon: BookOpen,
        title: 'Metode Interactive',
        description: 'Folosesc jocuri și activități pentru a face terapia plăcută și eficientă'
    },
    {
        icon: Users,
        title: 'Implicarea Familiei',
        description: 'Ghidez părinții să continue exercițiile acasă pentru progres mai rapid'
    },
    {
        icon: CheckCircle,
        title: 'Progres Măsurabil',
        description: 'Monitorizez progresul și adaptez terapia pentru rezultate optime'
    }
]

const pricing = {
    individual: 180,
    duration: '50 minute',
    packages: [
        {
            name: 'Evaluare inițială',
            price: 200,
            duration: '60 minute',
            description: 'Evaluare completă a tulburărilor de vorbire și stabilirea planului terapeutic'
        },
        {
            name: 'Ședință individuală',
            price: 180,
            duration: '50 minute',
            description: 'Ședință de logopedie personalizată pentru toate vârstele'
        },
        {
            name: 'Pachet 5 ședințe',
            price: 850,
            duration: '5 × 50 minute',
            description: 'Pachet pentru progres constant cu economie de 50 RON',
            savings: 50
        },
        {
            name: 'Pachet 10 ședințe',
            price: 1600,
            duration: '10 × 50 minute',
            description: 'Program complet cu economie de 200 RON',
            savings: 200
        }
    ]
}

const successStories = [
    {
        age: '4 ani',
        problem: 'Întârziere de limbaj',
        result: 'Vorbire fluenta în 6 luni',
        description: 'De la 10 cuvinte la conversații complete și pregătirea pentru grădiniță'
    },
    {
        age: '7 ani',
        problem: 'Dislalie (R, S)',
        result: 'Articulare perfectă',
        description: 'Corectarea sunetelor R și S în 4 luni de terapie constantă'
    },
    {
        age: '25 ani',
        problem: 'Bâlbâială',
        result: 'Comunicare fluenta',
        description: 'Îmbunătățirea significativă a fluenței pentru viața profesională'
    }
]

const faqs = [
    {
        question: 'La ce vârstă poate începe logopegia?',
        answer: 'Logopegia poate începe de la 2 ani pentru stimularea precoce a limbajului. Cu cât intervenția este mai timpurie, cu atât rezultatele sunt mai bune și mai rapide.'
    },
    {
        question: 'Cât durează terapia logopedică?',
        answer: 'Durata variază în funcție de severitatea problemei și vârsta copilului. De obicei, progrese vizibile apar după 3-6 luni de terapie constantă.'
    },
    {
        question: 'Trebuie să particip ca părinte la ședințe?',
        answer: 'Da, implicarea părinților este esențială. Vă voi învăța exerciții pe care să le faceți acasă pentru a accelera progresul copilului.'
    },
    {
        question: 'Pot face logopedie și adulții?',
        answer: 'Absolut! Lucrez cu adulți pentru reabilitare post-accident, îmbunătățirea comunicării profesionale sau gestionarea tulburărilor de fluență.'
    }
]

export default function LogopediePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-calming-600 via-calming-500 to-empathy-500 text-white relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warm-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Content */}
                        <AnimatedSection animation="slideUp" className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                                <MessageCircle className="w-4 h-4 mr-2 text-warm-300" />
                                Terapie specialized pentru vorbire și limbaj
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Logopedie
                                <span className="block text-warm-200">și Terapia Vorbirii</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90">
                                Sprijin specializat pentru dezvoltarea și corectarea tulburărilor de vorbire,
                                limbaj și comunicare. Lucrez cu copii și adulți pentru a dezvolta
                                abilități de comunicare clare și eficiente.
                            </Typography>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Clock className="w-6 h-6 text-warm-300 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">50 min</div>
                                    <div className="text-white/80 text-xs">Ședință</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Baby className="w-6 h-6 text-empathy-300 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">2+ ani</div>
                                    <div className="text-white/80 text-xs">Toate vârstele</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Users className="w-6 h-6 text-calming-300 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">Cu părinții</div>
                                    <div className="text-white/80 text-xs">Implicare</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programează evaluarea
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-calming-600">
                                    <a href="tel:+40722123456">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Discută cu logoped
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

            {/* Speech Problems */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Tulburări <span className="text-calming">Tratate</span>
                        </Typography>
                        <Typography variant="lead">
                            Ofer servicii specializate pentru o gamă largă de tulburări de vorbire și limbaj
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8">
                            {speechProblems.map((problem, index) => {
                                const Icon = problem.icon
                                return (
                                    <Card key={index} className={`p-6 border-${problem.color}-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-14 h-14 bg-${problem.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                                                <Icon className={`w-7 h-7 text-${problem.color}-600`} />
                                            </div>
                                            <CardTitle className="text-xl mb-2">{problem.title}</CardTitle>
                                            <Typography variant="body" className="text-gray-600 mb-4">
                                                {problem.description}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                    Tipuri de tulburări:
                                                </Typography>
                                                <div className="flex flex-wrap gap-1 mb-4">
                                                    {problem.conditions.map((condition, idx) => (
                                                        <span key={idx} className={`text-xs px-2 py-1 bg-${problem.color}-100 text-${problem.color}-700 rounded`}>
                              {condition}
                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-3">
                                                    Simptome comune:
                                                </Typography>
                                                <ul className="space-y-2">
                                                    {problem.symptoms.map((symptom, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2 text-sm">
                                                            <CheckCircle className={`w-4 h-4 text-${problem.color}-500 mt-0.5 flex-shrink-0`} />
                                                            <span>{symptom}</span>
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

            {/* Age Groups */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Terapie după <span className="text-calming">Vârstă</span>
                        </Typography>
                        <Typography variant="lead">
                            Abordare personalizată în funcție de vârstă și nivelul de dezvoltare
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8">
                            {ageGroups.map((group, index) => {
                                const Icon = group.icon
                                return (
                                    <Card key={index} className={`p-6 border-${group.color}-200 hover:shadow-lg transition-shadow`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-14 h-14 bg-${group.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                                                <Icon className={`w-7 h-7 text-${group.color}-600`} />
                                            </div>
                                            <CardTitle className="text-xl mb-2">{group.group}</CardTitle>
                                            <Typography variant="body" className="text-gray-600 mb-4">
                                                {group.focus}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-3">
                                                    Obiective principale:
                                                </Typography>
                                                <ul className="space-y-2 mb-4">
                                                    {group.goals.map((goal, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2 text-sm">
                                                            <CheckCircle className={`w-4 h-4 text-${group.color}-500 mt-0.5 flex-shrink-0`} />
                                                            <span>{goal}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                    Metode utilizate:
                                                </Typography>
                                                <div className="flex flex-wrap gap-1">
                                                    {group.methods.map((method, idx) => (
                                                        <span key={idx} className={`text-xs px-2 py-1 bg-${group.color}-100 text-${group.color}-700 rounded`}>
                              {method}
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

            {/* Therapy Methods */}
            <section className="py-20 bg-calming-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Metode <span className="text-calming">Terapeutice</span>
                        </Typography>
                        <Typography variant="lead">
                            Tehnici moderne și interactive pentru terapia vorbirii și limbajului
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {therapyMethods.map((method, index) => {
                                const Icon = method.icon
                                return (
                                    <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow text-center">
                                        <CardContent className="space-y-4">
                                            <div className="w-16 h-16 bg-calming-100 rounded-full flex items-center justify-center mx-auto">
                                                <Icon className="w-8 h-8 text-calming-600" />
                                            </div>
                                            <Typography variant="h6" className="font-semibold text-calming-700">
                                                {method.method}
                                            </Typography>
                                            <Typography variant="body" className="text-gray-600 text-sm leading-relaxed">
                                                {method.description}
                                            </Typography>
                                            <div className="space-y-1 pt-2 border-t border-gray-100">
                                                {method.techniques.map((technique, idx) => (
                                                    <div key={idx} className="text-xs text-gray-500">
                                                        • {technique}
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

            {/* Session Structure */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Structura unei <span className="text-calming">Ședințe</span>
                        </Typography>
                        <Typography variant="lead">
                            Fiecare ședință de 50 minute este structurată pentru rezultate optime
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {sessionStructure.map((phase, index) => (
                                <Card key={index} className="p-6 text-center border-calming-200 hover:shadow-lg transition-shadow">
                                    <CardContent className="space-y-4">
                                        <div className="w-16 h-16 bg-calming-100 rounded-full flex items-center justify-center mx-auto">
                                            <span className="text-2xl font-bold text-calming-600">{index + 1}</span>
                                        </div>
                                        <Typography variant="h6" className="font-semibold text-calming-700">
                                            {phase.phase}
                                        </Typography>
                                        <div className="text-calming-600 font-bold">
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

            {/* Success Stories */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Povești de <span className="text-calming">Succes</span>
                        </Typography>
                        <Typography variant="lead">
                            Rezultate reale ale terapiei logopedice
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-3 gap-6">
                            {successStories.map((story, index) => (
                                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-bold text-calming-600">{story.age}</span>
                                            <Volume2 className="w-5 h-5 text-warm-500" />
                                        </div>
                                        <Typography variant="h6" className="text-calming-700">
                                            {story.problem}
                                        </Typography>
                                        <div className="bg-warm-50 rounded-lg p-3">
                                            <Typography variant="small" className="font-bold text-warm-700">
                                                Rezultat: {story.result}
                                            </Typography>
                                        </div>
                                        <Typography variant="body" className="text-gray-600 text-sm leading-relaxed">
                                            {story.description}
                                        </Typography>
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
                            Tarife <span className="text-calming">Logopedie</span>
                        </Typography>
                        <Typography variant="lead">
                            Investiție în dezvoltarea comunicării și vorbirii
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {pricing.packages.map((package_, index) => (
                                <Card key={index} className={`p-6 text-center ${index === 2 ? 'border-calming-300 shadow-calming ring-2 ring-calming-200' : 'border-gray-200'} hover:shadow-lg transition-shadow relative`}>
                                    <CardHeader className="pb-4">
                                        {index === 2 && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-calming-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                Recomandat
                                            </div>
                                        )}
                                        <div className="w-16 h-16 bg-calming-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MessageCircle className="w-8 h-8 text-calming-600" />
                                        </div>
                                        <CardTitle className="text-lg mb-2">{package_.name}</CardTitle>
                                        <div className="text-3xl font-bold text-calming-600 mb-1">{package_.price} RON</div>
                                        <Typography variant="small" className="text-gray-600">
                                            {package_.duration}
                                        </Typography>
                                        {package_.savings && (
                                            <div className="text-sm text-green-600 font-medium mt-2">
                                                Economii {package_.savings} RON
                                            </div>
                                        )}
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <Typography variant="body" className="text-gray-600 text-sm">
                                            {package_.description}
                                        </Typography>
                                        <Button className={`w-full ${index === 2 ? 'bg-calming text-white hover:bg-calming/90' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Programează
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeIn" className="text-center mt-12">
                        <div className="bg-calming-50 rounded-2xl p-8 max-w-2xl mx-auto">
                            <Typography variant="h6" className="mb-4">
                                Evaluare gratuită de 15 minute
                            </Typography>
                            <Typography variant="body" className="text-gray-600 mb-6">
                                Oferă o scurtă evaluare telefonică pentru a înțelege nevoile copilului
                                și a stabili cel mai potrivit plan terapeutic.
                            </Typography>
                            <Button asChild className="bg-calming text-white hover:bg-calming/90">
                                <Link href="/contact">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Evaluare gratuită
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Întrebări <span className="text-calming">Frecvente</span>
                        </Typography>
                        <Typography variant="lead">
                            Răspunsuri la întrebările comune despre logopedie
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger" className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                                    <CardContent>
                                        <Typography variant="h6" className="mb-3 text-calming-700">
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
            <section className="py-20 bg-gradient-to-r from-calming-600 via-empathy-500 to-warm-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-calming-500/20 rounded-full blur-3xl" />

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeIn" className="text-center max-w-4xl mx-auto">
                        <Typography variant="h2" className="text-white mb-6" family="serif">
                            Fiecare Cuvânt Contează
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Să construim împreună fundația unei comunicări clare și încrezătoare.
                            Fiecare progres în vorbire deschide noi oportunități în viață.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                                <Link href="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Programează evaluarea
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