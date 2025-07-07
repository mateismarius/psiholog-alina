import type { Metadata } from 'next'
import Link from 'next/link'
import {
    Trophy,
    Target,
    Clock,
    CheckCircle,
    Users,
    Heart,
    Calendar,
    Phone,
    Zap,
    Award,
    Shield,
    Star,
    Monitor,
    MapPin,
    TrendingUp,
    Focus,
    Flame,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Psihologie Sportivă',
    description: 'Psihologie sportivă pentru adulți, adolescenți și copii în București. Îmbunătățirea performanței, atitudinii și rezultatelor sportive. Ședințe de 50 minute la cabinet sau online.',
    keywords: [
        'psihologie sportiva bucuresti',
        'performanta sportiva',
        'psiholog sport',
        'mental coach sport',
        'anxietate competitie',
        'motivatie sportiva',
        'concentrare sport'
    ],
}

const sportsAreas = [
    {
        title: 'Sporturi Individuale',
        sports: ['Tenis', 'Golf', 'Atletism', 'Înot', 'Ciclism', 'Arte marțiale', 'Gimnastică'],
        icon: Target,
        color: 'therapeutic',
        focus: 'Concentrare, autocontrol și gestionarea presiunii individuale'
    },
    {
        title: 'Sporturi de Echipă',
        sports: ['Fotbal', 'Baschet', 'Volei', 'Handbal', 'Rugby', 'Hockey'],
        icon: Users,
        color: 'calming',
        focus: 'Comunicare, coeziune de echipă și leadership'
    },
    {
        title: 'Sporturi de Performanță',
        sports: ['Competiții naționale', 'Sporturi olimpice', 'Sporturi profesionale'],
        icon: Trophy,
        color: 'warm',
        focus: 'Gestionarea presiunii extreme și optimizarea performanței'
    },
    {
        title: 'Sport Recreational',
        sports: ['Fitness', 'Alergare', 'Dans sportiv', 'Sporturi de agrement'],
        icon: Heart,
        color: 'empathy',
        focus: 'Motivație, consistență și bucuria de a face sport'
    }
]

const mentalSkills = [
    {
        skill: 'Concentrare și Focus',
        description: 'Dezvoltarea capacității de menținere a atenției în timpul competițiilor',
        techniques: ['Mindfulness sportiv', 'Tehnici de focalizare', 'Eliminarea distractorilor'],
        icon: Focus,
        color: 'therapeutic'
    },
    {
        skill: 'Gestionarea Anxietății',
        description: 'Controlul nervilor și anxietății de competiție pentru performanță optimă',
        techniques: ['Tehnici de relaxare', 'Respirație controlată', 'Reevaluare cognitivă'],
        icon: Shield,
        color: 'calming'
    },
    {
        skill: 'Motivație și Obiective',
        description: 'Stabilirea și atingerea obiectivelor sportive pe termen scurt și lung',
        techniques: ['Goal setting', 'Visualizare', 'Auto-motivare'],
        icon: Target,
        color: 'warm'
    },
    {
        skill: 'Încredere în Sine',
        description: 'Construirea și menținerea încrederii în abilitățile sportive',
        techniques: ['Autoafirmații pozitive', 'Analiza succeselor', 'Gestionarea eșecurilor'],
        icon: TrendingUp,
        color: 'trust'
    },
    {
        skill: 'Reziliență Mentală',
        description: 'Capacitatea de a reveni după eșecuri și de a face față adversităților',
        techniques: ['Coping strategies', 'Mindset de creștere', 'Procesarea eșecurilor'],
        icon: Flame,
        color: 'empathy'
    },
    {
        skill: 'Activare Optimă',
        description: 'Atingerea stării mentale perfecte pentru performanță maximă',
        techniques: ['Zone performance', 'Ritual pre-competiție', 'Controlul arousal-ului'],
        icon: Zap,
        color: 'peace'
    }
]

const ageGroups = [
    {
        group: 'Copii (8-12 ani)',
        focus: 'Dezvoltarea dragostei pentru sport și abilități mentale de bază',
        goals: [
            'Construirea încrederii în sine',
            'Învățarea fair-play-ului',
            'Gestionarea emoțiilor în competiție',
            'Dezvoltarea concentrării',
            'Motivația pentru antrenament'
        ],
        approach: 'Joc și exerciții interactive adaptate vârstei'
    },
    {
        group: 'Adolescenți (13-18 ani)',
        focus: 'Performanță competitivă și dezvoltarea identității sportive',
        goals: [
            'Gestionarea presiunii de performanță',
            'Dezvoltarea leadershipului',
            'Echilibrarea sport-școală-viață socială',
            'Pregătirea pentru sport de performanță',
            'Gestionarea eșecurilor și succeselor'
        ],
        approach: 'Tehnici cognitive avansate și antrenament mental'
    },
    {
        group: 'Adulți (18+ ani)',
        focus: 'Optimizarea performanței și cariera sportivă',
        goals: [
            'Performanță în competițiile majore',
            'Gestionarea carierei sportive',
            'Echilibrarea sport-muncă-familie',
            'Prevenirea burnout-ului',
            'Tranziția după încetarea carierei'
        ],
        approach: 'Psihologie aplicată și strategii de performanță'
    }
]

const sessionTypes = [
    {
        type: 'La Cabinet',
        description: 'Ședințe față în față în mediul controlat al cabinetului',
        benefits: [
            'Interacțiune directă cu psihologul',
            'Utilizarea materialelor vizuale și exercițiilor practice',
            'Mediu profesional și confidențial',
            'Posibilitatea de a simula situații de stres'
        ],
        icon: MapPin
    },
    {
        type: 'Online',
        description: 'Ședințe prin video call, perfecte pentru programul încărcat al sportivilor',
        benefits: [
            'Flexibilitate maximă de program',
            'Ideal pentru sportivi în deplasare',
            'Acces din orice locație',
            'Posibilitatea de a face ședința înainte/după antrenament'
        ],
        icon: Monitor
    }
]

const pricing = {
    standard: 180,
    duration: '50 minute',
    packages: [
        {
            name: 'Sesiune individuală',
            price: 180,
            sessions: 1,
            description: 'Perfect pentru evaluare inițială sau probleme punctuale'
        },
        {
            name: 'Pachet performanță',
            price: 800,
            sessions: 5,
            description: 'Dezvoltarea abilităților mentale pe termen mediu',
            savings: 100
        },
        {
            name: 'Program complet',
            price: 1500,
            sessions: 10,
            description: 'Transformare completă a performanței mentale',
            savings: 300
        }
    ]
}

const testimonials = [
    {
        name: 'Alex M.',
        sport: 'Tenis',
        age: '16 ani',
        quote: 'Am învățat să gestionez mult mai bine presiunea în meciurile importante. Rezultatele s-au îmbunătățit considerabil!',
        improvement: 'Creștere cu 40% a ratei de câștig în turnee'
    },
    {
        name: 'Maria S.',
        sport: 'Înot',
        age: '22 ani',
        quote: 'Psihologia sportivă m-a ajutat să îmi depășesc barierele mentale și să ating timpii pe care îi visam.',
        improvement: 'Recorduri personale la toate stilurile'
    },
    {
        name: 'Echipa FC Junior',
        sport: 'Fotbal',
        age: '14-16 ani',
        quote: 'Coeziunea echipei s-a îmbunătățit dramatic. Comunicăm mai bine și suntem mai uniți în teren.',
        improvement: 'Promovare în liga superioară'
    }
]

const faqs = [
    {
        question: 'Cum poate psihologia sportivă să îmi îmbunătățească performanța?',
        answer: 'Psihologia sportivă te ajută să dezvolți abilități mentale esențiale: concentrare, gestionarea presiunii, motivație și încredere. Aceste abilități pot face diferența între un sportiv bun și unul excelent.'
    },
    {
        question: 'Este eficientă și pentru sport recreational, nu doar de performanță?',
        answer: 'Absolut! Psihologia sportivă te ajută să te bucuri mai mult de sport, să rămâi motivat pentru antrenamente și să atingi obiectivele personale, indiferent de nivelul tău.'
    },
    {
        question: 'Cât timp durează să văd rezultate?',
        answer: 'Multe tehnici pot fi aplicate imediat, dar pentru schimbări durabile recomand 5-10 ședințe. Rezultatele variază în funcție de sportiv și obiectivele stabilite.'
    },
    {
        question: 'Ședințele online sunt la fel de eficiente ca cele față în față?',
        answer: 'Da! Psihologia sportivă se adaptă perfect formatului online. Mulți sportivi preferă ședințele online pentru flexibilitatea oferită în programul lor încărcat.'
    }
]

export default function PsihologieSportivaPage() {
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
                                <Trophy className="w-4 h-4 mr-2 text-warm-300" />
                                Psihologie pentru toate nivelurile sportive
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Psihologie
                                <span className="block text-warm-200">Sportivă</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90">
                                Dedicată celor care fac sport și își doresc îmbunătățirea atitudinii,
                                rezultatelor și per total performanței în sportul pe care îl practică.
                                Pentru adulți, adolescenți și copii.
                            </Typography>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Clock className="w-6 h-6 text-warm-300 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">50 min</div>
                                    <div className="text-white/80 text-xs">Ședință</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <MapPin className="w-6 h-6 text-calming-300 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">Cabinet</div>
                                    <div className="text-white/80 text-xs">Față în față</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Monitor className="w-6 h-6 text-empathy-300 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">Online</div>
                                    <div className="text-white/80 text-xs">Video call</div>
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
                                        Discută gratuit
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>

                        {/* Sports Icons */}
                        <AnimatedSection animation="slideUp" className="relative">
                            <div className="grid grid-cols-3 gap-6">
                                {[Trophy, Target, TrendingUp, Focus, Zap, Star].map((Icon, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                                        <Icon className="w-8 h-8 text-warm-300 mx-auto mb-2" />
                                    </div>
                                ))}
                            </div>

                            {/* Floating achievement */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm animate-breathe">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-warm-100 rounded-full flex items-center justify-center">
                                        <Award className="w-5 h-5 text-warm-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-warm-600">Performanță +40%</div>
                                        <div className="text-xs text-gray-600">Rezultate medii</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Sports Areas */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Sporturi și <span className="text-therapeutic">Domenii</span>
                        </Typography>
                        <Typography variant="lead">
                            Lucrez cu sportivi din toate domeniile, adaptând tehnicile la specificul fiecărui sport
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8">
                            {sportsAreas.map((area, index) => {
                                const Icon = area.icon
                                return (
                                    <Card key={index} className={`p-6 border-${area.color}-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-14 h-14 bg-${area.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                                                <Icon className={`w-7 h-7 text-${area.color}-600`} />
                                            </div>
                                            <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                                            <Typography variant="body" className="text-gray-600 mb-4">
                                                {area.focus}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {area.sports.map((sport, idx) => (
                                                    <span key={idx} className={`text-xs px-3 py-1 bg-${area.color}-100 text-${area.color}-700 rounded-full`}>
                            {sport}
                          </span>
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

            {/* Mental Skills */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Abilități <span className="text-therapeutic">Mentale</span>
                        </Typography>
                        <Typography variant="lead">
                            Dezvoltăm împreună competențele psihice esențiale pentru performanța sportivă
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mentalSkills.map((skill, index) => {
                                const Icon = skill.icon
                                return (
                                    <Card key={index} className={`p-6 border-${skill.color}-200 hover:shadow-lg transition-shadow`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-12 h-12 bg-${skill.color}-100 rounded-xl flex items-center justify-center mb-3`}>
                                                <Icon className={`w-6 h-6 text-${skill.color}-600`} />
                                            </div>
                                            <CardTitle className="text-lg mb-2">{skill.skill}</CardTitle>
                                            <Typography variant="body" className="text-gray-600 text-sm mb-3">
                                                {skill.description}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent>
                                            <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                Tehnici folosite:
                                            </Typography>
                                            <div className="space-y-1">
                                                {skill.techniques.map((technique, idx) => (
                                                    <div key={idx} className="text-xs text-gray-600">
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

            {/* Age Groups */}
            <section className="py-20 bg-therapeutic-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Adaptare după <span className="text-therapeutic">Vârstă</span>
                        </Typography>
                        <Typography variant="lead">
                            Metodele și obiectivele sunt personalizate în funcție de vârstă și nivelul sportiv
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="space-y-8 max-w-5xl mx-auto">
                            {ageGroups.map((group, index) => (
                                <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="text-center md:text-left">
                                            <Typography variant="h4" className="text-therapeutic-700 mb-2">
                                                {group.group}
                                            </Typography>
                                            <Typography variant="body" className="text-gray-600 leading-relaxed">
                                                {group.focus}
                                            </Typography>
                                            <div className="mt-4 p-3 bg-therapeutic-100 rounded-lg">
                                                <Typography variant="small" className="text-therapeutic-700 font-medium">
                                                    {group.approach}
                                                </Typography>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <Typography variant="small" className="font-medium text-gray-700 mb-3">
                                                Obiective principale:
                                            </Typography>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {group.goals.map((goal, idx) => (
                                                    <div key={idx} className="flex items-start space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-therapeutic-500 mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm text-gray-700">{goal}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Session Types */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Modalități de <span className="text-therapeutic">Lucru</span>
                        </Typography>
                        <Typography variant="lead">
                            Flexibilitate maximă pentru a se adapta programului tău sportiv
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {sessionTypes.map((type, index) => {
                                const Icon = type.icon
                                return (
                                    <Card key={index} className="p-8 text-center border-therapeutic-200 hover:shadow-lg transition-shadow">
                                        <CardHeader className="pb-6">
                                            <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="w-8 h-8 text-therapeutic-600" />
                                            </div>
                                            <CardTitle className="text-2xl mb-3">{type.type}</CardTitle>
                                            <Typography variant="body" className="text-gray-600">
                                                {type.description}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                {type.benefits.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-start space-x-2 text-left">
                                                        <CheckCircle className="w-4 h-4 text-therapeutic-500 mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm text-gray-700">{benefit}</span>
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

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Rezultate <span className="text-therapeutic">Reale</span>
                        </Typography>
                        <Typography variant="lead">
                            Sportivi care și-au îmbunătățit performanța prin psihologie sportivă
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center space-x-2 mb-3">
                                            <Trophy className="w-5 h-5 text-warm-500" />
                                            <span className="font-medium text-therapeutic-700">{testimonial.sport}</span>
                                            <span className="text-sm text-gray-500">• {testimonial.age}</span>
                                        </div>
                                        <Typography variant="body" className="text-gray-700 italic leading-relaxed">
                                            "{testimonial.quote}"
                                        </Typography>
                                        <div className="border-t pt-3">
                                            <Typography variant="small" className="font-medium text-gray-900">
                                                {testimonial.name}
                                            </Typography>
                                            <div className="text-xs text-therapeutic-600 font-medium mt-1">
                                                ✓ {testimonial.improvement}
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
                            Tarife și <span className="text-therapeutic">Pachete</span>
                        </Typography>
                        <Typography variant="lead">
                            Opțiuni flexibile pentru toate nevoile și bugetele
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {pricing.packages.map((package_, index) => (
                                <Card key={index} className={`p-6 text-center ${index === 1 ? 'border-therapeutic-300 shadow-therapeutic ring-2 ring-therapeutic-200' : 'border-gray-200'} hover:shadow-lg transition-shadow relative`}>
                                    <CardHeader className="pb-4">
                                        {index === 1 && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-therapeutic-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                                                Cel mai popular
                                            </div>
                                        )}
                                        <CardTitle className="text-xl mb-2">{package_.name}</CardTitle>
                                        <div className="text-3xl font-bold text-therapeutic-600 mb-1">
                                            {package_.price} RON
                                        </div>
                                        <Typography variant="small" className="text-gray-600">
                                            {package_.sessions} {package_.sessions === 1 ? 'ședință' : 'ședințe'} × 50 minute
                                        </Typography>
                                        {package_.savings && (
                                            <div className="text-sm text-green-600 font-medium mt-2">
                                                Economisești {package_.savings} RON
                                            </div>
                                        )}
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <Typography variant="body" className="text-gray-600 text-sm">
                                            {package_.description}
                                        </Typography>
                                        <Button className={`w-full ${index === 1 ? 'bg-therapeutic text-white hover:bg-therapeutic/90' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Alege acest pachet
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeIn" className="text-center mt-12">
                        <div className="bg-therapeutic-50 rounded-2xl p-8 max-w-2xl mx-auto">
                            <Typography variant="h6" className="mb-4">
                                Nu ești sigur ce pachet să alegi?
                            </Typography>
                            <Typography variant="body" className="text-gray-600 mb-6">
                                Programează o consultație gratuită de 15 minute pentru a discuta obiectivele tale
                            </Typography>
                            <Button asChild className="bg-therapeutic text-white hover:bg-therapeutic/90">
                                <Link href="/contact">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Consultație gratuită
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
                            Întrebări <span className="text-therapeutic">Frecvente</span>
                        </Typography>
                        <Typography variant="lead">
                            Răspunsuri la întrebările cele mai comune despre psihologia sportivă
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg text-therapeutic-700">
                                            {faq.question}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Typography variant="body" className="text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-therapeutic-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-500/20 rounded-full blur-3xl" />

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto">
                        <Typography variant="h2" className="text-white mb-6" family="serif">
                            Gata să îți <span className="text-warm-200">Îmbunătățești</span> Performanța?
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Primul pas către o performanță sportivă îmbunătățită începe cu o conversație.
                            Programează o ședință sau discută gratuit despre obiectivele tale.
                        </Typography>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                <Link href="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Programează acum
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                                <a href="tel:+40722123456">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Sună pentru informații
                                </a>
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}