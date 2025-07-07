import type { Metadata } from 'next'
import Link from 'next/link'
import {
    ClipboardList,
    Eye,
    Clock,
    CheckCircle,
    Users,
    Brain,
    Heart,
    Calendar,
    Phone,
    Target,
    FileText,
    Award,
    Shield,
    MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Ședințe de Evaluare Psihologică',
    description: 'Evaluare psihologică completă prin observație și chestionare specializate. Ședințe de 50 minute pentru copii și adulți în București. Diagnostic autism, ADHD, anxietate și alte tulburări.',
    keywords: [
        'evaluare psihologica bucuresti',
        'diagnostic autism bucuresti',
        'evaluare adhd copii',
        'testare psihologica',
        'chestionare psihologice',
        'observatie clinica',
        'evaluare tulburari'
    ],
}

const evaluationTypes = [
    {
        title: 'Evaluare Autism (TSA)',
        description: 'Diagnostic complet pentru tulburări din spectrul autist la copii și adulți',
        duration: '50 minute',
        includes: [
            'Observație clinică structurată',
            'Chestionare CARS, M-CHAT, ADI-R',
            'Evaluarea comunicării și interacțiunii sociale',
            'Analiza comportamentelor repetitive',
            'Raport detaliat cu recomandări'
        ],
        icon: Brain,
        color: 'therapeutic'
    },
    {
        title: 'Evaluare ADHD',
        description: 'Testare pentru tulburări de atenție și hiperactivitate',
        duration: '50 minute',
        includes: [
            'Chestionare Conners, ADHD-RS',
            'Teste de atenție și concentrare',
            'Observația comportamentală',
            'Evaluarea funcționalității școlare/profesionale',
            'Plan de intervenție personalizat'
        ],
        icon: Target,
        color: 'calming'
    },
    {
        title: 'Evaluare Anxietate și Depresie',
        description: 'Diagnostic pentru tulburări de dispoziție și anxietate',
        duration: '50 minute',
        includes: [
            'Scalele Beck pentru depresie și anxietate',
            'Chestionarul GAD-7',
            'Evaluarea simptomelor și intensității',
            'Identificarea factorilor declanșatori',
            'Recomandări terapeutice'
        ],
        icon: Heart,
        color: 'warm'
    },
    {
        title: 'Evaluare Dezvoltare Copii',
        description: 'Evaluarea etapelor de dezvoltare la copii și adolescenți',
        duration: '50 minute',
        includes: [
            'Teste de dezvoltare cognitivă',
            'Evaluarea limbajului și comunicării',
            'Analiza dezvoltării sociale și emoționale',
            'Observația jocului și comportamentului',
            'Ghid pentru părinți și educatori'
        ],
        icon: Users,
        color: 'empathy'
    }
]

const evaluationProcess = [
    {
        step: 1,
        title: 'Consultația Inițială',
        description: 'Discuție despre motivele evaluării și istoricul personal/familial',
        duration: '15 minute',
        icon: MessageCircle
    },
    {
        step: 2,
        title: 'Observația Clinică',
        description: 'Observarea structurată a comportamentului și interacțiunilor',
        duration: '20 minute',
        icon: Eye
    },
    {
        step: 3,
        title: 'Aplicarea Testelor',
        description: 'Completarea chestionarelor și testelor psihologice relevante',
        duration: '15 minute',
        icon: ClipboardList
    },
    {
        step: 4,
        title: 'Raportul Final',
        description: 'Prezentarea rezultatelor și recomandărilor de tratament',
        duration: 'Inclus',
        icon: FileText
    }
]

const benefits = [
    {
        icon: Shield,
        title: 'Diagnostic Precis',
        description: 'Utilizez instrumente validate științific pentru diagnostic acurat'
    },
    {
        icon: Award,
        title: 'Experiență Specializată',
        description: 'Peste 10 ani experiență în evaluări psihologice pentru toate vârstele'
    },
    {
        icon: Heart,
        title: 'Abordare Empatică',
        description: 'Mediu sigur și confortabil pentru copii și adulți'
    },
    {
        icon: FileText,
        title: 'Rapoarte Detaliate',
        description: 'Documente complete cu recomandări concrete pentru intervenție'
    }
]

const pricing = {
    standard: 200,
    includes: [
        'Ședința de evaluare (50 minute)',
        'Aplicarea instrumentelor de evaluare',
        'Observația clinică specializată',
        'Raport psihologic detaliat',
        'Recomandări de tratament',
        'Consultație de urmărire (gratuită)'
    ]
}

const faqs = [
    {
        question: 'Cum mă pregătesc pentru o ședință de evaluare?',
        answer: 'Nu este nevoie de pregătiri speciale. Pentru copii, asigurați-vă că sunt odihniti. Aduceți orice documente medicale sau rapoarte anterioare relevante.'
    },
    {
        question: 'Cât durează să primesc rezultatele?',
        answer: 'Raportul de evaluare este pregătit în termen de 5-7 zile lucrătoare și vă va fi prezentat într-o ședință separată sau trimis electronic.'
    },
    {
        question: 'Pot fi prezent la evaluarea copilului meu?',
        answer: 'Da, părinții pot asista la evaluare, iar prezența lor este adesea benefică pentru copii, mai ales cei mici sau cu anxietate.'
    },
    {
        question: 'Evaluarea este recunoscută oficial?',
        answer: 'Da, sunt psiholog clinician acreditat CPR, iar rapoartele mele sunt recunoscute de sistemul medical și educațional din România.'
    }
]

export default function EvaluarePage() {
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
                                <ClipboardList className="w-4 h-4 mr-2 text-warm-300" />
                                Evaluare psihologică profesională
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Ședințe de
                                <span className="block text-warm-200">Evaluare Psihologică</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90">
                                Evaluare completă prin observație clinică și aplicarea de chestionare
                                specializate. Diagnostic precis pentru autism, ADHD, anxietate și alte tulburări
                                psihologice la copii și adulți.
                            </Typography>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Clock className="w-8 h-8 text-warm-300 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">50 min</div>
                                    <div className="text-white/80 text-sm">Durată ședință</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <Award className="w-8 h-8 text-calming-300 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">CPR</div>
                                    <div className="text-white/80 text-sm">Acreditat oficial</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programează evaluarea
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                                    <a href="tel:+40722123456">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Sună pentru detalii
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>

                        {/* Features */}
                        <AnimatedSection animation="slideUp" className="relative">
                            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl text-white">Ce Include Evaluarea</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[
                                        'Observație clinică structurată',
                                        'Chestionare și teste specializate',
                                        'Evaluarea comportamentală',
                                        'Raport psihologic detaliat',
                                        'Recomandări de tratament',
                                        'Consultație de urmărire gratuită'
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3">
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

            {/* Evaluation Types */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Tipuri de <span className="text-therapeutic">Evaluări</span>
                        </Typography>
                        <Typography variant="lead">
                            Ofer evaluări specializate pentru diverse tulburări și condiții,
                            adaptate vârstei și nevoilor specifice ale fiecărui pacient.
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8">
                            {evaluationTypes.map((evaluation, index) => {
                                const Icon = evaluation.icon
                                return (
                                    <Card key={index} className={`p-6 border-${evaluation.color}-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-14 h-14 bg-${evaluation.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                                                <Icon className={`w-7 h-7 text-${evaluation.color}-600`} />
                                            </div>
                                            <CardTitle className="text-xl mb-2">{evaluation.title}</CardTitle>
                                            <Typography variant="body" className="text-gray-600 mb-4">
                                                {evaluation.description}
                                            </Typography>
                                            <div className="flex items-center space-x-2 mb-4">
                                                <Clock className="w-4 h-4 text-gray-500" />
                                                <span className="text-sm text-gray-500">Durată: {evaluation.duration}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <Typography variant="small" className="font-medium text-gray-700 mb-3">
                                                Include:
                                            </Typography>
                                            <ul className="space-y-2">
                                                {evaluation.includes.map((item, idx) => (
                                                    <li key={idx} className="flex items-start space-x-2 text-sm">
                                                        <CheckCircle className={`w-4 h-4 text-${evaluation.color}-500 mt-0.5 flex-shrink-0`} />
                                                        <span>{item}</span>
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

            {/* Process */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Procesul de <span className="text-therapeutic">Evaluare</span>
                        </Typography>
                        <Typography variant="lead">
                            Fiecare evaluare urmează un protocol structurat pentru a asigura
                            acuratețea și completitudinea diagnosticului.
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-4 gap-6">
                            {evaluationProcess.map((step, index) => {
                                const Icon = step.icon
                                return (
                                    <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                        <CardContent className="space-y-4">
                                            <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto relative">
                                                <Icon className="w-8 h-8 text-therapeutic-600" />
                                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-therapeutic-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                                    {step.step}
                                                </div>
                                            </div>
                                            <Typography variant="h6" className="font-semibold">
                                                {step.title}
                                            </Typography>
                                            <Typography variant="body" className="text-gray-600 text-sm leading-relaxed">
                                                {step.description}
                                            </Typography>
                                            <div className="text-xs text-therapeutic-600 font-medium">
                                                {step.duration}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-therapeutic-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            De Ce să Alegi <span className="text-therapeutic">Evaluarea Mea</span>
                        </Typography>
                        <Typography variant="lead">
                            Experiență, profesionalisme și abordare personalizată pentru fiecare pacient
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                return (
                                    <Card key={index} className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
                                        <CardContent className="space-y-4">
                                            <div className="w-14 h-14 bg-therapeutic-100 rounded-xl flex items-center justify-center mx-auto">
                                                <Icon className="w-7 h-7 text-therapeutic-600" />
                                            </div>
                                            <Typography variant="h6" className="font-semibold">
                                                {benefit.title}
                                            </Typography>
                                            <Typography variant="body" className="text-gray-600 text-sm">
                                                {benefit.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                )
                            })}
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
                            Preț transparent, fără costuri ascunse, cu toate serviciile incluse
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="slideUp" className="max-w-2xl mx-auto">
                        <Card className="p-8 border-therapeutic-200 shadow-therapeutic">
                            <CardHeader className="text-center pb-6">
                                <div className="w-20 h-20 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ClipboardList className="w-10 h-10 text-therapeutic-600" />
                                </div>
                                <CardTitle className="text-3xl mb-2">Evaluare Psihologică Completă</CardTitle>
                                <div className="text-4xl font-bold text-therapeutic-600 mb-2">{pricing.standard} RON</div>
                                <Typography variant="body" className="text-gray-600">
                                    Sesiune de 50 minute cu raport inclus
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
                            Răspunsuri la cele mai comune întrebări despre evaluările psihologice
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
                            Începe cu o Evaluare Completă
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Primul pas către înțelegerea și rezolvarea provocărilor tale este
                            o evaluare psihologică profesională. Programează astăzi!
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
                                    Explorează alte servicii
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}