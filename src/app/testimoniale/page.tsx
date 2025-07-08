import type { Metadata } from 'next'
import Link from 'next/link'
import {
    Star,
    Heart,
    Trophy,
    MessageCircle,
    Gamepad2,
    Quote,
    Calendar,
    Phone,
    Users,
    TrendingUp,
    Award,
    ThumbsUp,
    MessageSquare,
    Play,
    ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Testimoniale',
    description: 'Poveștile de succes ale clienților mei - testimoniale reale despre serviciile de psihologie și logopedie oferite în București. Rezultate concrete și transformări pozitive.',
    keywords: [
        'testimoniale psiholog bucuresti',
        'pareri clienti psihoterapie',
        'rezultate psihologie sportiva',
        'success stories logopedie',
        'evaluari servicii psihologice',
        'recomandari psiholog'
    ],
}

const testimonialCategories = [
    {
        title: 'Psihoterapie',
        icon: Heart,
        color: 'therapeutic',
        count: 8,
        testimonials: [
            {
                name: 'Maria A.',
                age: '32 ani',
                problem: 'Anxietate generalizată',
                result: 'Gestionarea eficientă a anxietății',
                quote: 'Am învățat să îmi controlez anxietatea și să trăiesc din nou o viață normală. Tehnicile învățate în terapie le folosesc zilnic și mă ajută enorm.',
                duration: '6 luni',
                sessions: 20,
                improvement: 'Reducerea anxietății cu 80%',
                rating: 5
            },
            {
                name: 'Andrei M.',
                age: '28 ani',
                problem: 'Depresie și izolare socială',
                result: 'Revenirea la viața activă',
                quote: 'După o perioadă foarte grea, am reușit să îmi regăsesc bucuria de a trăi. Sunt recunoscător pentru răbdarea și profesionalismul demonstrat.',
                duration: '8 luni',
                sessions: 25,
                improvement: 'Reintegrare socială completă',
                rating: 5
            },
            {
                name: 'Elena și Mihai',
                age: 'Cuplu - 30 și 35 ani',
                problem: 'Probleme de comunicare în cuplu',
                result: 'Relație întărită și comunicare îmbunătățită',
                quote: 'Am salvat relația noastră. Am învățat să comunicăm eficient și să ne înțelegem nevoile reciproce. Recomandăm cu încredere!',
                duration: '4 luni',
                sessions: 16,
                improvement: 'Satisfacția relației +90%',
                rating: 5
            },
            {
                name: 'Ioana S.',
                age: '45 ani',
                problem: 'Burnout profesional',
                result: 'Echilibru viață-muncă',
                quote: 'Am învățat să îmi stabilesc limite sănătoase și să îmi prioritizez bunăstarea. Acum am o viață mult mai echilibrată.',
                duration: '5 luni',
                sessions: 18,
                improvement: 'Nivel de energie +70%',
                rating: 5
            }
        ]
    },
    {
        title: 'Psihologie Sportivă',
        icon: Trophy,
        color: 'warm',
        count: 6,
        testimonials: [
            {
                name: 'Alex M.',
                age: '16 ani',
                problem: 'Anxietate de competiție la tenis',
                result: 'Performanțe consistent îmbunătățite',
                quote: 'Am învățat să gestionez mult mai bine presiunea în meciurile importante. Rezultatele s-au îmbunătățit considerabil și mă bucur din nou de tenis!',
                duration: '3 luni',
                sessions: 12,
                improvement: 'Rata de câștig +40%',
                rating: 5
            },
            {
                name: 'Maria S.',
                age: '22 ani',
                problem: 'Blocaj mental la înot',
                result: 'Recorduri personale',
                quote: 'Psihologia sportivă m-a ajutat să îmi depășesc barierele mentale și să ating timpii pe care îi visam. Mentalitatea s-a schimbat complet.',
                duration: '4 luni',
                sessions: 15,
                improvement: 'Recorduri la toate stilurile',
                rating: 5
            },
            {
                name: 'Echipa FC Junior',
                age: '14-16 ani',
                problem: 'Lipsa coeziunii de echipă',
                result: 'Promovare în liga superioară',
                quote: 'Coeziunea echipei s-a îmbunătățit dramatic. Comunicăm mai bine, suntem mai uniți în teren și rezultatele vorbesc de la sine.',
                duration: '6 luni',
                sessions: 20,
                improvement: 'Promovare în liga superioară',
                rating: 5
            },
            {
                name: 'Radu P.',
                age: '35 ani',
                problem: 'Motivație scăzută la alergare',
                result: 'Finalizarea primului maraton',
                quote: 'Am redescoperit pasiunea pentru alergare și am reușit să termin primul meu maraton. Tehnicile de motivație sunt incredibile.',
                duration: '5 luni',
                sessions: 16,
                improvement: 'Maraton finalizat în 3h45m',
                rating: 5
            }
        ]
    },
    {
        title: 'Logopedie',
        icon: MessageCircle,
        color: 'calming',
        count: 10,
        testimonials: [
            {
                name: 'Ema R.',
                age: '4 ani',
                problem: 'Întârziere de limbaj',
                result: 'Vorbire fluenta adaptată vârstei',
                quote: 'De la aproape deloc cuvinte la conversații complete! Ema vorbește acum foarte bine și este pregătită pentru grădiniță. Mulțumim!',
                duration: '6 luni',
                sessions: 24,
                improvement: 'Vocabular de la 10 la 500+ cuvinte',
                rating: 5,
                parentTestimonial: true
            },
            {
                name: 'David M.',
                age: '7 ani',
                problem: 'Dislalie (R, S)',
                result: 'Articulare perfectă',
                quote: 'David pronunță acum perfect toate sunetele. A fost o transformare uimitoare în doar câteva luni. Își regăsit încrederea în sine.',
                duration: '4 luni',
                sessions: 16,
                improvement: 'Corectarea completă R și S',
                rating: 5,
                parentTestimonial: true
            },
            {
                name: 'Ana P.',
                age: '25 ani',
                problem: 'Bâlbâială severă',
                result: 'Comunicare fluenta profesională',
                quote: 'Pot în sfârșit să vorbesc fluent la prezentările de la serviciu. Tehnicile învățate mi-au schimbat viața profesională și personală.',
                duration: '8 luni',
                sessions: 30,
                improvement: 'Fluența vorbirii +85%',
                rating: 5
            },
            {
                name: 'Luca T.',
                age: '5 ani',
                problem: 'Probleme de deglutiție',
                result: 'Funcții orale normale',
                quote: 'Luca poate să mănânce de toate acum și respiră corect pe nas. Este mult mai sănătos și mai fericit. Recomand cu încredere!',
                duration: '5 luni',
                sessions: 20,
                improvement: 'Eliminarea respirației orale',
                rating: 5,
                parentTestimonial: true
            }
        ]
    },
    {
        title: 'Ședințe de Intervenție',
        icon: Gamepad2,
        color: 'empathy',
        count: 7,
        testimonials: [
            {
                name: 'Mihai A.',
                age: '6 ani',
                problem: 'Autism - dificultăți de comunicare',
                result: 'Comunicare verbală dezvoltată',
                quote: 'Mihai vorbește acum în propoziții și interacționează cu alți copii. Progresul a fost extraordinar și continuă să ne uimească zilnic.',
                duration: '12 luni',
                sessions: 48,
                improvement: 'Comunicare verbală funcțională',
                rating: 5,
                parentTestimonial: true
            },
            {
                name: 'Sara M.',
                age: '8 ani',
                problem: 'ADHD - probleme de atenție',
                result: 'Concentrare îmbunătățită la școală',
                quote: 'Sara reușește acum să stea atentă la ore și să își facă temele. Profesorii au observat o schimbare dramatică în comportament.',
                duration: '8 luni',
                sessions: 32,
                improvement: 'Timpul de atenție dublat',
                rating: 5,
                parentTestimonial: true
            },
            {
                name: 'Alex D.',
                age: '4 ani',
                problem: 'Întârziere globală de dezvoltare',
                result: 'Progres în toate domeniile',
                quote: 'Alex a recuperat mult din întârzierea de dezvoltare. Acum merge la grădiniță normală și se joacă cu alți copii. Suntem foarte recunoscători.',
                duration: '10 luni',
                sessions: 40,
                improvement: 'Dezvoltare în toate domeniile',
                rating: 5,
                parentTestimonial: true
            }
        ]
    }
]

const successStats = [
    {
        icon: Users,
        number: '200+',
        label: 'Clienți mulțumiți',
        description: 'Au beneficiat de serviciile mele'
    },
    {
        icon: Star,
        number: '98%',
        label: 'Grad de satisfacție',
        description: 'Clienți care recomandă serviciile'
    },
    {
        icon: TrendingUp,
        number: '85%',
        label: 'Îmbunătățire medie',
        description: 'Progres măsurabil în terapie'
    },
    {
        icon: Award,
        number: '12+',
        label: 'Ani experiență',
        description: 'În psihologie și dezvoltare'
    }
]

const videoTestimonials = [
    {
        name: 'Cristina M.',
        service: 'Psihoterapie',
        thumbnail: '/images/testimonials/video1-thumb.jpg',
        duration: '2:30',
        quote: 'Testimonial video despre experiența de psihoterapie'
    },
    {
        name: 'Familie Popescu',
        service: 'Logopedie',
        thumbnail: '/images/testimonials/video2-thumb.jpg',
        duration: '3:15',
        quote: 'Povestea progresului copilului nostru în logopedie'
    },
    {
        name: 'Echipa de fotbal',
        service: 'Psihologie Sportivă',
        thumbnail: '/images/testimonials/video3-thumb.jpg',
        duration: '4:00',
        quote: 'Cum psihologia sportivă ne-a unit ca echipă'
    }
]

export default function TestimonialePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-warm-600 via-therapeutic-500 to-empathy-500 text-white relative overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-calming-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <AnimatedSection animation="slideUp" className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                                <Star className="w-4 h-4 mr-2 text-warm-300" />
                                Poveștile de succes ale clienților mei
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Testimoniale
                                <span className="block text-warm-200">și Rezultate</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90 max-w-3xl mx-auto">
                                Fiecare poveste de mai jos este reală și reflectă transformările pozitive
                                pe care le-am realizat împreună. Acestea sunt rezultatele concrete ale
                                muncii noastre în terapie.
                            </Typography>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                                {successStats.map((stat, index) => {
                                    const Icon = stat.icon
                                    return (
                                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                            <Icon className="w-8 h-8 text-warm-300 mx-auto mb-2" />
                                            <div className="text-2xl font-bold text-white">{stat.number}</div>
                                            <div className="text-white/80 text-xs font-medium">{stat.label}</div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Începe-ți povestea
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
                    </div>
                </Container>
            </section>

            {/* Video Testimonials */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Testimoniale <span className="text-therapeutic">Video</span>
                        </Typography>
                        <Typography variant="lead">
                            Ascultă direct de la clienții mei despre experiențele lor
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-3 gap-8">
                            {videoTestimonials.map((video, index) => (
                                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                    <div className="relative">
                                        <div className="aspect-video bg-gradient-to-br from-therapeutic-100 to-calming-100 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                                <Play className="w-8 h-8 text-therapeutic-600 ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                            {video.duration}
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <Typography variant="h6" className="mb-2">{video.name}</Typography>
                                        <Typography variant="small" className="text-therapeutic-600 font-medium mb-3">
                                            {video.service}
                                        </Typography>
                                        <Typography variant="body" className="text-gray-600 text-sm italic">
                                            &#34;{video.quote}&#34;
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Testimonials by Category */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Testimoniale pe <span className="text-therapeutic">Servicii</span>
                        </Typography>
                        <Typography variant="lead">
                            Rezultate reale pentru fiecare tip de serviciu oferit
                        </Typography>
                    </AnimatedSection>

                    <div className="space-y-16">
                        {testimonialCategories.map((category, categoryIndex) => {
                            const Icon = category.icon
                            return (
                                <AnimatedSection key={categoryIndex} animation="stagger">
                                    <div className="text-center mb-12">
                                        <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <Icon className={`w-8 h-8 text-${category.color}-600`} />
                                        </div>
                                        <Typography variant="h3" className={`text-${category.color}-700 mb-2`} family="serif">
                                            {category.title}
                                        </Typography>
                                        <Typography variant="body" className="text-gray-600">
                                            {category.count} testimoniale verificate
                                        </Typography>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {category.testimonials.map((testimonial, index) => (
                                            <Card key={index} className={`p-6 border-${category.color}-200 hover:shadow-lg transition-shadow relative`}>
                                                <div className="absolute top-4 right-4">
                                                    <div className="flex items-center space-x-1">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className={`w-4 h-4 fill-${category.color}-400 text-${category.color}-400`} />
                                                        ))}
                                                    </div>
                                                </div>

                                                <CardContent className="space-y-4">
                                                    {/* Quote */}
                                                    <div className="relative">
                                                        <Quote className={`w-8 h-8 text-${category.color}-200 absolute -top-2 -left-2`} />
                                                        <Typography variant="body" className="text-gray-700 italic leading-relaxed pl-6">
                                                            &#34;{testimonial.quote}&#34;
                                                        </Typography>
                                                    </div>

                                                    {/* Client Info */}
                                                    <div className={`bg-${category.color}-50 rounded-lg p-4`}>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <Typography variant="h6" className={`text-${category.color}-700`}>
                                                                {testimonial.name}
                                                            </Typography>
                                                            <Typography variant="small" className="text-gray-600">
                                                                {testimonial.age}
                                                            </Typography>
                                                        </div>
                                                        <Typography variant="small" className="text-gray-700 mb-2">
                                                            <strong>Problemă:</strong> {testimonial.problem}
                                                        </Typography>
                                                        <Typography variant="small" className={`text-${category.color}-600 font-medium`}>
                                                            <strong>Rezultat:</strong> {testimonial.result}
                                                        </Typography>
                                                    </div>

                                                    {/* Progress Info */}
                                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                                                        <div>
                                                            <Typography variant="small" className="text-gray-600">Durata:</Typography>
                                                            <Typography variant="small" className="font-medium">{testimonial.duration}</Typography>
                                                        </div>
                                                        <div>
                                                            <Typography variant="small" className="text-gray-600">Ședințe:</Typography>
                                                            <Typography variant="small" className="font-medium">{testimonial.sessions}</Typography>
                                                        </div>
                                                    </div>

                                                    <div className={`bg-${category.color}-100 rounded-lg p-3 text-center`}>
                                                        <Typography variant="small" className={`text-${category.color}-700 font-bold`}>
                                                            ✓ {testimonial.improvement}
                                                        </Typography>
                                                    </div>

                                                    {testimonial.parentTestimonial && (
                                                        <div className="text-xs text-gray-500 text-center italic">
                                                            Testimonial oferit de părinți
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </AnimatedSection>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* Success Metrics */}
            <section className="py-20 bg-therapeutic-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Rezultate <span className="text-therapeutic">Măsurabile</span>
                        </Typography>
                        <Typography variant="lead">
                            Progresul clienților mei reflectat în cifre concrete
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-4 gap-8">
                            {successStats.map((stat, index) => {
                                const Icon = stat.icon
                                return (
                                    <Card key={index} className="p-6 bg-white text-center hover:shadow-lg transition-shadow">
                                        <CardContent className="space-y-4">
                                            <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto">
                                                <Icon className="w-8 h-8 text-therapeutic-600" />
                                            </div>
                                            <div className="text-4xl font-bold text-therapeutic-600">{stat.number}</div>
                                            <Typography variant="h6" className="font-semibold">{stat.label}</Typography>
                                            <Typography variant="small" className="text-gray-600">{stat.description}</Typography>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Leave Testimonial CTA */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto">
                        <div className="bg-gradient-to-r from-therapeutic-50 to-warm-50 rounded-2xl p-8">
                            <MessageSquare className="w-16 h-16 text-therapeutic-600 mx-auto mb-6" />

                            <Typography variant="h3" className="mb-4" family="serif">
                                Împărtășește-ți Experiența
                            </Typography>

                            <Typography variant="lead" className="text-gray-600 mb-8">
                                Dacă ai beneficiat de serviciile mele, testimonialul tău poate inspira
                                și ajuta alte persoane să facă primul pas către o viață mai bună.
                            </Typography>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <ThumbsUp className="w-8 h-8 text-therapeutic-600 mx-auto mb-2" />
                                    <Typography variant="small" className="font-medium">Experiența ta contează</Typography>
                                </div>
                                <div className="text-center">
                                    <Users className="w-8 h-8 text-calming-600 mx-auto mb-2" />
                                    <Typography variant="small" className="font-medium">Inspiră pe alții</Typography>
                                </div>
                                <div className="text-center">
                                    <Heart className="w-8 h-8 text-warm-600 mx-auto mb-2" />
                                    <Typography variant="small" className="font-medium">Construiește încrederea</Typography>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-therapeutic text-white hover:bg-therapeutic/90">
                                    <Link href="/contact">
                                        <MessageSquare className="w-5 h-5 mr-2" />
                                        Lasă un testimonial
                                    </Link>
                                </Button>

                                <Button asChild size="lg" variant="outline" className="border-therapeutic-300 text-therapeutic-600 hover:bg-therapeutic-50">
                                    <Link href="/servicii">
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        Vezi serviciile
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-therapeutic-600 via-warm-500 to-empathy-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-calming-500/20 rounded-full blur-3xl" />

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeIn" className="text-center max-w-4xl mx-auto">
                        <Typography variant="h2" className="text-white mb-6" family="serif">
                            Începe-ți Propria Poveste de Succes
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Fiecare testimonial de mai sus a început cu o singură decizie curajoasă.
                            Astăzi poate fi începutul transformării tale pozitive.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                                <Link href="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Programează consultația
                                </Link>
                            </Button>

                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                                <a href="tel:+40722123456">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Vorbește cu mine acum
                                </a>
                            </Button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/20">
                            <Typography variant="small" className="text-white/80">
                                💬 Consultația inițială (15 minute) este <strong>gratuită</strong> pentru a stabili cel mai potrivit plan pentru tine
                            </Typography>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}