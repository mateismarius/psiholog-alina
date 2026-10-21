import type { Metadata } from 'next'
import Link from 'next/link'
import {
    HelpCircle,
    Heart,
    Trophy,
    MessageCircle,
    Gamepad2,
    Calendar,
    Phone,
    AlertCircle,
    MessageSquare,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'
import { faqJsonLd, withPageMeta } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { FaqAccordion } from './FaqAccordion'
import { faqCategories, quickFacts } from './faq-data'

export const metadata: Metadata = withPageMeta('/faq', {
    title: 'Întrebări Frecvente',
    description: 'Răspunsuri la întrebările frecvente despre serviciile de psihologie și logopedie oferite: psihoterapie, psihologie sportivă, logopedie și ședințe de recuperare.',
    keywords: [
        'intrebari frecvente psiholog',
        'faq psihoterapie',
        'intrebari logopedie',
        'faq psihologie sportiva',
        'intrebari terapie copii',
        'consultatii psihologice bucuresti'
    ],
})


export default function IntrebariFrecventePage() {
    return (
        <>
            {/* Intrebarile frecvente ca date structurate */}
            <JsonLd data={faqJsonLd(faqCategories.flatMap((category) => category.faqs))} />
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-therapeutic-600 via-calming-500 to-empathy-500 text-white relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warm-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <AnimatedSection animation="slideUp" className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                                <HelpCircle className="w-4 h-4 mr-2 text-warm-300" />
                                Răspunsuri la toate întrebările tale
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Întrebări
                                <span className="block text-warm-200">Frecvente</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90 max-w-3xl mx-auto">
                                Găsește răspunsuri la întrebările cele mai comune despre serviciile de psihologie
                                și logopedie. Dacă nu găsești ce cauți, nu ezita să mă contactezi direct.
                            </Typography>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-warm text-white hover:bg-warm/90">
                                    <Link href="/contact">
                                        <MessageSquare className="w-5 h-5 mr-2" />
                                        Pune o întrebare
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-therapeutic-600">
                                    <a href="tel:+40724172996">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Discută direct
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Quick Facts */}
            <section className="py-12 bg-white border-b">
                <Container>
                    <AnimatedSection animation="stagger">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {quickFacts.map((fact, index) => {
                                const Icon = fact.icon
                                return (
                                    <div key={index} className="text-center">
                                        <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Icon className="w-8 h-8 text-therapeutic-600" />
                                        </div>
                                        <div className="text-2xl font-bold text-therapeutic-600 mb-1">{fact.value}</div>
                                        <Typography variant="h6" className="mb-1">{fact.title}</Typography>
                                        <Typography variant="small" className="text-gray-600">{fact.description}</Typography>
                                    </div>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* FAQ Categories */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Categorii de <span className="text-therapeutic">Întrebări</span>
                        </Typography>
                        <Typography variant="lead">
                            Organizate pe servicii pentru a găsi mai ușor informațiile de care ai nevoie
                        </Typography>
                    </AnimatedSection>

                    <FaqAccordion />
                </Container>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto">
                        <div className="bg-therapeutic-50 rounded-2xl p-8">
                            <AlertCircle className="w-16 h-16 text-therapeutic-600 mx-auto mb-6" />

                            <Typography variant="h3" className="mb-4" family="serif">
                                Nu ai găsit răspunsul?
                            </Typography>

                            <Typography variant="lead" className="text-gray-600 mb-8">
                                Sunt aici să răspund la toate întrebările tale. Contactează-mă prin telefon,
                                WhatsApp sau email și îți voi răspunde în maxim 24 de ore.
                            </Typography>

                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                <Card className="p-4 border-therapeutic-200 text-center">
                                    <Phone className="w-8 h-8 text-therapeutic-600 mx-auto mb-2" />
                                    <Typography variant="h6" className="mb-1">Telefon</Typography>
                                    <Typography variant="small" className="text-gray-600">
                                        Răspuns imediat în orele de program
                                    </Typography>
                                </Card>

                                <Card className="p-4 border-calming-200 text-center">
                                    <MessageSquare className="w-8 h-8 text-calming-600 mx-auto mb-2" />
                                    <Typography variant="h6" className="mb-1">WhatsApp</Typography>
                                    <Typography variant="small" className="text-gray-600">
                                        Mesaje rapide oricând
                                    </Typography>
                                </Card>

                                <Card className="p-4 border-empathy-200 text-center">
                                    <Calendar className="w-8 h-8 text-empathy-600 mx-auto mb-2" />
                                    <Typography variant="h6" className="mb-1">Consultație</Typography>
                                    <Typography variant="small" className="text-gray-600">
                                        15 min gratuit la telefon
                                    </Typography>
                                </Card>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-therapeutic text-white hover:bg-therapeutic/90">
                                    <Link href="/contact">
                                        <MessageSquare className="w-5 h-5 mr-2" />
                                        Contactează-mă acum
                                    </Link>
                                </Button>

                                <Button asChild size="lg" variant="outline" className="border-therapeutic-300 text-therapeutic-600 hover:bg-therapeutic-50">
                                    <a href="tel:+40724172996">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Sună direct
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Service Links */}
            <section className="py-20 bg-therapeutic-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Explorează <span className="text-therapeutic">Serviciile</span>
                        </Typography>
                        <Typography variant="lead">
                            Află mai multe despre fiecare serviciu în parte
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-therapeutic-200">
                                <Heart className="w-12 h-12 text-therapeutic-600 mx-auto mb-4" />
                                <Typography variant="h6" className="mb-3">Psihoterapie</Typography>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/servicii/psihoterapie">Detalii</Link>
                                </Button>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-warm-200">
                                <Trophy className="w-12 h-12 text-warm-600 mx-auto mb-4" />
                                <Typography variant="h6" className="mb-3">Psihologie Sportivă</Typography>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/servicii/psihologie-sportiva">Detalii</Link>
                                </Button>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-calming-200">
                                <MessageCircle className="w-12 h-12 text-calming-600 mx-auto mb-4" />
                                <Typography variant="h6" className="mb-3">Logopedie</Typography>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/servicii/logopedie">Detalii</Link>
                                </Button>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-empathy-200">
                                <Gamepad2 className="w-12 h-12 text-empathy-600 mx-auto mb-4" />
                                <Typography variant="h6" className="mb-3">Intervenții</Typography>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/servicii/interventie-recuperare">Detalii</Link>
                                </Button>
                            </Card>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}