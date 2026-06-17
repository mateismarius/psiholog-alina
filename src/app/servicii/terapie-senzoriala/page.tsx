import type { Metadata } from 'next'
import Link from 'next/link'
import {
    Puzzle,
    Clock,
    CheckCircle,
    Users,
    Hand,
    Activity,
    Calendar,
    Phone,
    Baby,
    Sparkles,
    Footprints,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Terapie Senzoriala, Reflexe Primare si Terapie Ocupationala',
    description: 'Terapie de integrare senzoriala, integrarea reflexelor primare si terapie ocupationala pentru copii in Bucuresti. Sedinte de 50 minute pentru coordonare, autonomie si dezvoltare.',
    keywords: [
        'terapie senzoriala bucuresti',
        'integrare senzoriala copii',
        'reflexe primare neintegrate',
        'terapie ocupationala copii',
        'reflexe MORO tonic palmar',
        'coordonare motorie copii',
    ],
}

const areas = [
    {
        title: 'Integrare Senzoriala',
        description: 'Ajuta copilul sa proceseze si sa raspunda corect la stimulii din mediu',
        icon: Sparkles,
        benefits: [
            'Reducerea hipersensibilitatii senzoriale',
            'Imbunatatirea procesarii stimulilor',
            'Toleranta crescuta la texturi si sunete',
            'Reglare emotionala mai buna',
        ],
    },
    {
        title: 'Reflexe Primare',
        description: 'Integrarea reflexelor neonatale care influenteaza dezvoltarea',
        icon: Activity,
        benefits: [
            'Reflexul MORO (de tresarire)',
            'Reflexul Tonic asimetric al gatului',
            'Reflexul Palmar de prindere',
            'Imbunatatirea posturii si echilibrului',
        ],
    },
    {
        title: 'Terapie Ocupationala',
        description: 'Dezvoltarea abilitatilor necesare in activitatile zilnice',
        icon: Hand,
        benefits: [
            'Autonomie in activitati zilnice',
            'Coordonare motorie fina si grosiera',
            'Abilitati de scris si manipulare obiecte',
            'Pregatirea pentru scoala',
        ],
    },
    {
        title: 'Coordonare si Motricitate',
        description: 'Stimulare vestibulara si proprioceptiva pentru control corporal',
        icon: Footprints,
        benefits: [
            'Stimulare vestibulara (echilibru)',
            'Stimulare proprioceptiva',
            'Schema corporala si lateralitate',
            'Planificare motorie',
        ],
    },
]

const pricing = {
    standard: 200,
    duration: '50 minute',
    includes: [
        'Sedinta de terapie (50 minute)',
        'Evaluare initiala a profilului senzorial',
        'Exercitii de integrare a reflexelor primare',
        'Activitati de terapie ocupationala',
        'Ghid de exercitii pentru acasa',
        'Monitorizarea progresului',
    ],
}

const faqs = [
    {
        question: 'De la ce varsta se poate incepe terapia senzoriala?',
        answer: 'Terapia poate incepe de la 1 an. Cu cat interventia este mai timpurie, cu atat reflexele primare se integreaza mai usor si dezvoltarea decurge mai armonios.',
    },
    {
        question: 'Ce sunt reflexele primare neintegrate?',
        answer: 'Sunt reflexe prezente la nastere care ar trebui sa dispara in primii ani de viata. Cand raman active, pot afecta coordonarea, atentia, postura si invatarea.',
    },
    {
        question: 'Cum stiu daca copilul meu are nevoie de aceasta terapie?',
        answer: 'Semnele includ sensibilitate la sunete, texturi sau lumina, dificultati de coordonare, echilibru slab, neindemanare sau dificultati de concentrare. O evaluare initiala clarifica situatia.',
    },
    {
        question: 'Pot participa la sedinte?',
        answer: 'Da, participarea parintilor este incurajata. Veti invata exercitii pe care sa le continuati acasa pentru a accelera progresul.',
    },
]

export default function TerapieSenzorialaPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-peace-600 via-peace-500 to-calming-500 text-white relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warm-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="slideUp" className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                                <Puzzle className="w-4 h-4 mr-2 text-warm-300" />
                                Integrare senzoriala si dezvoltare
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Terapie Senzoriala, Reflexe Primare
                                <span className="block text-warm-200">si Terapie Ocupationala</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90">
                                Programe specializate pentru copii cu dificultati de procesare senzoriala,
                                reflexe primare neintegrate si probleme de coordonare. Sprijinim dezvoltarea
                                autonomiei si a abilitatilor necesare in viata de zi cu zi.
                            </Typography>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Clock className="w-8 h-8 text-warm-300 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">50 min</div>
                                    <div className="text-white/80 text-sm">Durata sedinta</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Baby className="w-8 h-8 text-calming-300 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">1+ an</div>
                                    <div className="text-white/80 text-sm">De la varsta</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programeaza evaluarea
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-peace-600">
                                    <a href="tel:+40724172996">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Discuta cu mine
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="slideUp" className="relative">
                            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl text-white">Ce Include Terapia</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[
                                        'Evaluarea profilului senzorial',
                                        'Integrarea reflexelor primare',
                                        'Activitati de terapie ocupationala',
                                        'Stimulare vestibulara si proprioceptiva',
                                        'Coordonare motorie fina si grosiera',
                                        'Ghid de exercitii pentru parinti',
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-warm-300 flex-shrink-0" />
                                            <span className="text-white/90">{feature}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Areas */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Ce <span className="text-peace-600">Acoperim</span>
                        </Typography>
                        <Typography variant="lead">
                            Trei directii complementare care lucreaza impreuna pentru dezvoltarea armonioasa a copilului
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8">
                            {areas.map((area) => {
                                const Icon = area.icon
                                return (
                                    <Card key={area.title} className="p-6 border-peace-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <CardHeader className="pb-4">
                                            <div className="w-14 h-14 bg-peace-100 rounded-xl flex items-center justify-center mb-4">
                                                <Icon className="w-7 h-7 text-peace-600" />
                                            </div>
                                            <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                                            <Typography variant="body" className="text-gray-600 mb-4">
                                                {area.description}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {area.benefits.map((b) => (
                                                    <li key={b} className="flex items-start space-x-2 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-peace-500 mt-0.5 flex-shrink-0" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Tarif si <span className="text-peace-600">Servicii Incluse</span>
                        </Typography>
                        <Typography variant="lead">
                            Pret transparent, cu toate serviciile incluse
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="slideUp" className="max-w-2xl mx-auto">
                        <Card className="p-8 border-peace-200">
                            <CardHeader className="text-center pb-6">
                                <div className="w-20 h-20 bg-peace-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Puzzle className="w-10 h-10 text-peace-600" />
                                </div>
                                <CardTitle className="text-2xl mb-2">Sedinta de Terapie Senzoriala</CardTitle>
                                <div className="text-4xl font-bold text-peace-600 mb-2">{pricing.standard} RON</div>
                                <Typography variant="body" className="text-gray-600">
                                    Sesiune de {pricing.duration}
                                </Typography>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-8">
                                    {pricing.includes.map((item) => (
                                        <div key={item} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-peace-500 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button asChild className="flex-1 bg-peace-500 text-white hover:bg-peace-600">
                                        <Link href="/contact">
                                            <Calendar className="w-5 h-5 mr-2" />
                                            Programeaza acum
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="flex-1">
                                        <a href="tel:+40724172996">
                                            <Phone className="w-5 h-5 mr-2" />
                                            Intreaba detalii
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Intrebari <span className="text-peace-600">Frecvente</span>
                        </Typography>
                        <Typography variant="lead">
                            Raspunsuri la intrebarile comune despre terapia senzoriala
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger" className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {faqs.map((faq) => (
                                <Card key={faq.question} className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-peace-300">
                                    <CardContent>
                                        <Typography variant="h6" className="mb-3 text-peace-700">
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

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-peace-600 via-calming-500 to-warm-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-peace-500/20 rounded-full blur-3xl" />

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeIn" className="text-center max-w-4xl mx-auto">
                        <Typography variant="h2" className="text-white mb-6" family="serif">
                            Sprijina Dezvoltarea Copilului Tau
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Fiecare copil are propriul ritm. Te ajut sa ii oferi instrumentele
                            de care are nevoie pentru a se dezvolta armonios.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                                <Link href="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Programeaza prima sedinta
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-peace-600">
                                <Link href="/servicii">
                                    <Users className="w-5 h-5 mr-2" />
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