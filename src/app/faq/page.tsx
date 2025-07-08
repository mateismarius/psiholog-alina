'use client'
import Link from 'next/link'
import {
    HelpCircle,
    Heart,
    Trophy,
    MessageCircle,
    Gamepad2,
    Calendar,
    Phone,
    Clock,
    Users,
    CheckCircle,
    AlertCircle,
    ChevronDown,
    ChevronUp,
    MessageSquare,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useState } from 'react'

// export const metadata: Metadata = {
//     title: 'Întrebări Frecvente',
//     description: 'Răspunsuri la întrebările frecvente despre serviciile de psihologie și logopedie oferite: psihoterapie, psihologie sportivă, logopedie și ședințe de recuperare.',
//     keywords: [
//         'intrebari frecvente psiholog',
//         'faq psihoterapie',
//         'intrebari logopedie',
//         'faq psihologie sportiva',
//         'intrebari terapie copii',
//         'consultatii psihologice bucuresti'
//     ],
// }

const faqCategories = [
    {
        title: 'Întrebări Generale',
        icon: HelpCircle,
        color: 'therapeutic',
        faqs: [
            {
                question: 'Cum aleg serviciul potrivit pentru mine sau copilul meu?',
                answer: 'Oferă o consultație telefonică gratuită de 15 minute pentru a discuta nevoile tale și a recomanda cel mai potrivit serviciu. Evaluez situația specifică și recomand cea mai bună abordare terapeutică.'
            },
            {
                question: 'Care este diferența dintre psiholog, psihoterapeut și psihiatru?',
                answer: 'Psihologul oferă consiliere și evaluare psihologică. Psihoterapeutul are pregătire specializată în tehnici terapeutice pentru tratarea tulburărilor psihice. Psihiatrul este medic și poate prescrie medicamente. Eu sunt psiholog clinician și psihoterapeut în supervizare.'
            },
            {
                question: 'Serviciile sunt confidențiale?',
                answer: 'Absolut! Confidențialitatea este esențială în munca mea. Toate informațiile discutate în ședințe sunt strict confidențiale, conform codului deontologic și legislației în vigoare.'
            },
            {
                question: 'Oferă certificat medical sau adeverință?',
                answer: 'Da, pot emite adeverințe psihologice pentru necesități administrative sau medicale, conform competențelor mele ca psiholog clinician autorizat.'
            },
            {
                question: 'Pot combina mai multe servicii simultan?',
                answer: 'Da, adesea o abordare integrată aduce cele mai bune rezultate. De exemplu, un copil poate beneficia simultan de logopedie și ședințe de intervenție pentru dezvoltare globală.'
            }
        ]
    },
    {
        title: 'Psihoterapie',
        icon: Heart,
        color: 'empathy',
        faqs: [
            {
                question: 'Cât durează o psihoterapie?',
                answer: 'Durata variază în funcție de complexitatea problemelor și obiectivele personale. Terapiile scurte pot dura 10-20 ședințe, procesele mai profunde pot dura 6 luni - 2 ani. Evaluez progresul constant și adaptez durata.'
            },
            {
                question: 'Ce abordări terapeutice folosiți?',
                answer: 'Folosesc o abordare integrativă care combină tehnici din CBT (terapia cognitiv-comportamentală), Gestalt, terapia psihodinamică și mindfulness, adaptate nevoilor fiecărui client.'
            },
            {
                question: 'Pot face terapie de cuplu dacă doar unul dintre parteneri este motivat?',
                answer: 'Este important ca ambii parteneri să fie deschis către schimbare. Pot lucra inițial individual cu persoana motivată pentru a-i dezvolta abilități care pot influența pozitiv relația.'
            },
            {
                question: 'Ce probleme tratați în psihoterapie?',
                answer: 'Tratez anxietate, depresie, traume, probleme de relație, stres, burnout, dificultăți de adaptare, dezvoltare personală și multe alte provocări emoționale și psihologice.'
            },
            {
                question: 'Cum știu dacă am nevoie de psihoterapie?',
                answer: 'Dacă simți că problemele emoționale îți afectează viața zilnică, relațiile sau munca, sau dacă te simți blocat în pattern-uri repetitive, psihoterapia te poate ajuta să găsești soluții.'
            }
        ]
    },
    {
        title: 'Psihologie Sportivă',
        icon: Trophy,
        color: 'warm',
        faqs: [
            {
                question: 'Este psihologia sportivă doar pentru sportivi de performanță?',
                answer: 'Nu! Psihologia sportivă este benefică pentru toate nivelurile - de la sport recreational la performanță de elite. Te ajută să te bucuri mai mult de sport și să atingi obiectivele personale.'
            },
            {
                question: 'Cum poate psihologia sportivă să îmi îmbunătățească performanța?',
                answer: 'Dezvolți abilități mentale esențiale: concentrare, gestionarea presiunii, motivație și încredere. Aceste abilități pot face diferența între un sportiv bun și unul excelent.'
            },
            {
                question: 'Lucrați cu echipe întregi sau doar individual?',
                answer: 'Lucrez atât individual cât și cu echipe. Pentru echipe, mă concentrez pe comunicare, coeziune, leadership și dinamica de grup pentru îmbunătățirea performanței colective.'
            },
            {
                question: 'La ce vârstă poate începe un copil psihologia sportivă?',
                answer: 'Pot lucra cu copii de la 8 ani în sus. Pentru copiii mici, folosesc jocuri și exerciții interactive pentru a dezvolta abilități mentale de bază și dragostea pentru sport.'
            },
            {
                question: 'Ședințele online funcționează pentru psihologia sportivă?',
                answer: 'Da! Psihologia sportivă se adaptă perfect formatului online. Mulți sportivi preferă flexibilitatea ședințelor online, mai ales când sunt în deplasare pentru competiții.'
            }
        ]
    },
    {
        title: 'Logopedie',
        icon: MessageCircle,
        color: 'calming',
        faqs: [
            {
                question: 'La ce vârstă poate începe logopegia?',
                answer: 'Logopegia poate începe de la 2 ani pentru stimularea precoce a limbajului. Cu cât intervenția este mai timpurie, cu atât rezultatele sunt mai bune și mai rapide.'
            },
            {
                question: 'Cât durează terapia logopedică?',
                answer: 'Durata variază în funcție de severitatea problemei și vârsta copilului. De obicei, progrese vizibile apar după 3-6 luni de terapie constantă, cu ședințe săptămânale.'
            },
            {
                question: 'Trebuie să particip ca părinte la ședințe?',
                answer: 'Da, implicarea părinților este esențială pentru succesul terapiei. Vă voi învăța exerciții specifice pe care să le faceți acasă pentru a accelera progresul copilului.'
            },
            {
                question: 'Ce echipamente și materiale folosiți?',
                answer: 'Am un cabinet complet echipat cu jucării terapeutice, materiale senzoriale, oglinzi pentru observarea articulației, aplicații interactive și tehnologie adaptată fiecărei vârste.'
            },
            {
                question: 'Pot face logopedie și adulții?',
                answer: 'Absolut! Lucrez cu adulți pentru reabilitare post-accident, îmbunătățirea comunicării profesionale, gestionarea bâlbâielii sau corectarea accentului.'
            },
            {
                question: 'Care sunt semnele că copilul are nevoie de logopedie?',
                answer: 'Întârzieri în dezvoltarea vorbirii față de vârstă, dificultăți de înțelegere a limbajului, pronunție incorectă persistentă după 4 ani, bâlbâială sau evitarea comunicării.'
            }
        ]
    },
    {
        title: 'Ședințe de Intervenție și Recuperare',
        icon: Gamepad2,
        color: 'therapeutic',
        faqs: [
            {
                question: 'De ce durează ședințele 100 de minute?',
                answer: 'Durata extinsă permite copilului să se acomodeze, să participe activ la activități diverse și să consolideze învățarea. Este timpul necesar pentru o intervenție eficientă la copii cu nevoi speciale.'
            },
            {
                question: 'Pentru ce vârste sunt potrivite aceste ședințe?',
                answer: 'Lucrez cu copii de la 2 ani până la 18 ani, adaptând metodele în funcție de vârstă și nivelul de dezvoltare. Fiecare plan este personalizat pentru nevoile specifice.'
            },
            {
                question: 'Ce tipuri de tulburări tratați?',
                answer: 'Autism (TSA), ADHD, întârzieri în dezvoltare, probleme de integrare senzorială, tulburări de comportament și alte nevoi speciale de dezvoltare.'
            },
            {
                question: 'Cum se integrează aceste ședințe cu alte terapii?',
                answer: 'Colaborez strâns cu alți specialiști (kinetic, ocupational, etc.) pentru o abordare holistică. Comunicarea între terapeuți este esențială pentru progresul optim.'
            },
            {
                question: 'Cât timp până să văd progrese?',
                answer: 'Progresele variază în funcție de copil și severitatea condițiilor. În general, primele îmbunătățiri se observă în 4-6 săptămâni de terapie consistentă.'
            },
            {
                question: 'Se pot face aceste ședințe online?',
                answer: 'Din cauza naturii interactive și a necesității manipulării materialelor fizice, aceste ședințe se desfășoară exclusiv la cabinet pentru eficiență maximă.'
            }
        ]
    },
    {
        title: 'Programare și Tarife',
        icon: Calendar,
        color: 'peace',
        faqs: [
            {
                question: 'Cum pot programa o ședință?',
                answer: 'Poți programa prin telefon, WhatsApp sau formularul de contact de pe site. Oferă și o consultație telefonică gratuită de 15 minute pentru a discuta nevoile tale.'
            },
            {
                question: 'Cum se fac plățile?',
                answer: 'Plățile se pot face cash la cabinet, prin transfer bancar sau card. Pentru pachete de ședințe, oferă și opțiunea de plată în rate.'
            },
            {
                question: 'Pot anula sau reprograma o ședință?',
                answer: 'Da, cu condiția să anunți cu cel puțin 24 ore înainte. Anulările târzii pot fi taxate pentru a respecta timpul rezervat în program.'
            },
            {
                question: 'Oferă reduceri pentru pachete de ședințe?',
                answer: 'Da! Pachetele de 5 sau 10 ședințe vin cu reduceri semnificative. De asemenea, am tarife speciale pentru familii cu mai mulți copii în terapie.'
            },
            {
                question: 'Există posibilitatea de ședințe în weekend?',
                answer: 'Da, în funcție de disponibilitate, pot programa ședințe și în weekend pentru a acomoda familiile cu program încărcat în timpul săptămânii.'
            },
            {
                question: 'Se decontează prin asigurări de sănătate?',
                answer: 'În prezent, serviciile nu sunt decontate direct prin Casa de Asigurări, dar poți folosi adeverința pentru deduceri fiscale sau asigurări private.'
            }
        ]
    }
]

const quickFacts = [
    {
        icon: Clock,
        title: 'Primul răspuns',
        value: 'În maxim 24h',
        description: 'Răspund rapid la toate solicitările'
    },
    {
        icon: Phone,
        title: 'Consultație gratuită',
        value: '15 minute',
        description: 'Telefonic pentru a clarifica întrebările'
    },
    {
        icon: Users,
        title: 'Experiență',
        value: '12+ ani',
        description: 'În psihologie și dezvoltare personală'
    },
    {
        icon: CheckCircle,
        title: 'Satisfacție client',
        value: '95%+',
        description: 'Clienți mulțumiți de servicii'
    }
]

export default function IntrebariFrecventePage() {
    const [openCategory, setOpenCategory] = useState<number | null>(0)
    const [openFaq, setOpenFaq] = useState<{category: number, faq: number} | null>(null)

    const toggleCategory = (categoryIndex: number) => {
        setOpenCategory(openCategory === categoryIndex ? null : categoryIndex)
    }

    const toggleFaq = (categoryIndex: number, faqIndex: number) => {
        const isOpen = openFaq?.category === categoryIndex && openFaq?.faq === faqIndex
        setOpenFaq(isOpen ? null : { category: categoryIndex, faq: faqIndex })
    }

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
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                    <Link href="/contact">
                                        <MessageSquare className="w-5 h-5 mr-2" />
                                        Pune o întrebare
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                                    <a href="tel:+40722123456">
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

                    <AnimatedSection animation="stagger">
                        <div className="space-y-4 max-w-4xl mx-auto">
                            {faqCategories.map((category, categoryIndex) => {
                                const Icon = category.icon
                                const isOpen = openCategory === categoryIndex

                                return (
                                    <Card key={categoryIndex} className={`border-${category.color}-200 overflow-hidden`}>
                                        <CardHeader
                                            className={`cursor-pointer hover:bg-${category.color}-50 transition-colors`}
                                            onClick={() => toggleCategory(categoryIndex)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                                                        <Icon className={`w-6 h-6 text-${category.color}-600`} />
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-xl">{category.title}</CardTitle>
                                                        <Typography variant="small" className="text-gray-600">
                                                            {category.faqs.length} întrebări
                                                        </Typography>
                                                    </div>
                                                </div>
                                                {isOpen ? (
                                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                                )}
                                            </div>
                                        </CardHeader>

                                        {isOpen && (
                                            <CardContent className="pt-0">
                                                <div className="space-y-3 pl-16">
                                                    {category.faqs.map((faq, faqIndex) => {
                                                        const isFaqOpen = openFaq?.category === categoryIndex && openFaq?.faq === faqIndex

                                                        return (
                                                            <div key={faqIndex} className={`border border-${category.color}-100 rounded-lg overflow-hidden`}>
                                                                <div
                                                                    className={`p-4 cursor-pointer hover:bg-${category.color}-25 transition-colors`}
                                                                    onClick={() => toggleFaq(categoryIndex, faqIndex)}
                                                                >
                                                                    <div className="flex items-center justify-between">
                                                                        <Typography variant="h6" className={`text-${category.color}-700 pr-4`}>
                                                                            {faq.question}
                                                                        </Typography>
                                                                        {isFaqOpen ? (
                                                                            <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                                                        ) : (
                                                                            <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {isFaqOpen && (
                                                                    <div className="px-4 pb-4 border-t border-gray-100">
                                                                        <Typography variant="body" className="text-gray-700 leading-relaxed">
                                                                            {faq.answer}
                                                                        </Typography>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </CardContent>
                                        )}
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
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
                                    <a href="tel:+40722123456">
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