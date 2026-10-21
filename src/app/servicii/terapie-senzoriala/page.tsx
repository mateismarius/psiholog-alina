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
import { serviceBreadcrumbJsonLd, withPageMeta } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { RelatedServices } from '@/components/core/RelatedServices'

export const metadata: Metadata = withPageMeta('/servicii/terapie-senzoriala', {
    title: 'Terapie Senzorială, Reflexe Primare și Terapie Ocupațională',
    description: 'Terapie de integrare senzorială, integrarea reflexelor primare și terapie ocupațională pentru copii în București. Ședințe de 50 de minute pentru coordonare, autonomie și dezvoltare.',
    keywords: [
        'terapie senzoriala bucuresti',
        'integrare senzoriala copii',
        'reflexe primare neintegrate',
        'terapie ocupationala copii',
        'reflexe MORO tonic palmar',
        'coordonare motorie copii',
    ],
})

const areas = [
    {
        title: 'Integrare Senzorială',
        description: 'Ajută copilul să proceseze și să răspundă corect la stimulii din mediu',
        icon: Sparkles,
        benefits: [
            'Reducerea hipersensibilității senzoriale',
            'Îmbunătățirea procesării stimulilor',
            'Toleranță crescută la texturi și sunete',
            'Reglare emoțională mai bună',
        ],
    },
    {
        title: 'Reflexe Primare',
        description: 'Integrarea reflexelor neonatale care influențează dezvoltarea',
        icon: Activity,
        benefits: [
            'Reflexul Moro (de tresărire)',
            'Reflexul tonic asimetric al gâtului',
            'Reflexul palmar de prindere',
            'Îmbunătățirea posturii și a echilibrului',
        ],
    },
    {
        title: 'Terapie Ocupațională',
        description: 'Dezvoltarea abilităților necesare în activitățile zilnice',
        icon: Hand,
        benefits: [
            'Autonomie în activitățile zilnice',
            'Coordonare motorie fină și grosieră',
            'Abilități de scris și de manipulare a obiectelor',
            'Pregătirea pentru școală',
        ],
    },
    {
        title: 'Coordonare și Motricitate',
        description: 'Stimulare vestibulară și proprioceptivă pentru controlul corpului',
        icon: Footprints,
        benefits: [
            'Stimulare vestibulară (echilibru)',
            'Stimulare proprioceptivă',
            'Schemă corporală și lateralitate',
            'Planificare motorie',
        ],
    },
]

const pricing = {
    standard: 250,
    duration: '50 minute',
    includes: [
        'Ședința de terapie (50 de minute)',
        'Evaluare inițială a profilului senzorial',
        'Exerciții de integrare a reflexelor primare',
        'Activități de terapie ocupațională',
        'Ghid de exerciții pentru acasă',
        'Monitorizarea progresului',
    ],
}

const faqs = [
    {
        question: 'De la ce vârstă se poate începe terapia senzorială?',
        answer: 'Terapia poate începe de la 1 an. Cu cât intervenția este mai timpurie, cu atât reflexele primare se integrează mai ușor și dezvoltarea decurge mai armonios.',
    },
    {
        question: 'Ce sunt reflexele primare neintegrate?',
        answer: 'Sunt reflexe prezente la naștere, care ar trebui să dispară în primii ani de viață. Când rămân active, pot afecta coordonarea, atenția, postura și învățarea.',
    },
    {
        question: 'Cum știu dacă copilul meu are nevoie de această terapie?',
        answer: 'Semnele includ sensibilitate la sunete, texturi sau lumină, dificultăți de coordonare, echilibru slab, neîndemânare sau dificultăți de concentrare. O evaluare inițială clarifică situația.',
    },
    {
        question: 'Pot participa la ședințe?',
        answer: 'Da, participarea părinților este încurajată. Veți învăța exerciții pe care să le continuați acasă, pentru a accelera progresul.',
    },
]

export default function TerapieSenzorialaPage() {
    return (
        <>
            {/* Fir de navigare pentru motoarele de cautare */}
            <JsonLd data={serviceBreadcrumbJsonLd('/servicii/terapie-senzoriala')} />
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-peace-600 via-peace-500 to-calming-500 text-white relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warm-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection immediate animation="slideUp" className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                                <Puzzle className="w-4 h-4 mr-2 text-warm-300" />
                                Integrare senzorială și dezvoltare
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Terapie Senzorială, Reflexe Primare
                                <span className="block text-warm-200">și Terapie Ocupațională</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90">
                                Programe specializate pentru copii cu dificultăți de procesare senzorială,
                                reflexe primare neintegrate și probleme de coordonare. Sprijinim dezvoltarea
                                autonomiei și a abilităților necesare în viața de zi cu zi.
                            </Typography>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Clock className="w-8 h-8 text-warm-300 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">50 min</div>
                                    <div className="text-white/80 text-sm">Durata ședinței</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Baby className="w-8 h-8 text-calming-300 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">1+ an</div>
                                    <div className="text-white/80 text-sm">De la vârsta</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-warm text-white hover:bg-warm/90">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programează evaluarea
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-peace-600">
                                    <a href="tel:+40724172996">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Discută cu mine
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection immediate animation="slideUp" className="relative">
                            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl text-white">Ce Include Terapia</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[
                                        'Evaluarea profilului senzorial',
                                        'Integrarea reflexelor primare',
                                        'Activități de terapie ocupațională',
                                        'Stimulare vestibulară și proprioceptivă',
                                        'Coordonare motorie fină și grosieră',
                                        'Ghid de exerciții pentru părinți',
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
                            Patru direcții complementare care lucrează împreună pentru dezvoltarea armonioasă a copilului
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
                            Tarif și <span className="text-peace-600">Servicii Incluse</span>
                        </Typography>
                        <Typography variant="lead">
                            Preț transparent, cu toate serviciile incluse
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="slideUp" className="max-w-2xl mx-auto">
                        <Card className="p-8 border-peace-200">
                            <CardHeader className="text-center pb-6">
                                <div className="w-20 h-20 bg-peace-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Puzzle className="w-10 h-10 text-peace-600" />
                                </div>
                                <CardTitle className="text-2xl mb-2">Ședința de Terapie Senzorială</CardTitle>
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
                                            Programează acum
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="flex-1">
                                        <a href="tel:+40724172996">
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
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Întrebări <span className="text-peace-600">Frecvente</span>
                        </Typography>
                        <Typography variant="lead">
                            Răspunsuri la întrebările frecvente despre terapia senzorială
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
                            Sprijină Dezvoltarea Copilului Tău
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Fiecare copil are propriul ritm. Te ajut să îi oferi instrumentele
                            de care are nevoie pentru a se dezvolta armonios.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-white hover:bg-warm/90 text-lg px-8">
                                <Link href="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Programează prima ședință
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-peace-600">
                                <Link href="/servicii">
                                    <Users className="w-5 h-5 mr-2" />
                                    Vezi toate serviciile
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Linkuri interne catre celelalte servicii */}
            <RelatedServices currentPath="/servicii/terapie-senzoriala" />
        </>
    )
}
