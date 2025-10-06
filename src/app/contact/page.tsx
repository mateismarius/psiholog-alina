import type { Metadata } from 'next'
import Link from 'next/link'
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Calendar,
    MessageCircle,
    CheckCircle,
    Heart,
    Navigation,
    Car,
    Bus,
    Train,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contactează Psiholog Alina pentru programări și informații. Cabinet de psihologie în București, specialist în terapie autism, psihoterapie individuală și de cuplu. Programări online și la cabinet.',
    keywords: [
        'contact psiholog bucuresti',
        'programare psiholog autism',
        'cabinet psihologie bucuresti contact',
        'psiholog alina contact',
        'programare terapie autism',
        'contact psihoterapie bucuresti'
    ],
}

const contactInfo = [
    {
        icon: Phone,
        title: 'Telefon',
        info: '+40 724 172 996',
        link: 'tel:+40724172996',
        description: 'Răspund personal la apeluri Lun-Vin 9:00-18:00',
        color: 'therapeutic'
    },
    {
        icon: Mail,
        title: 'Email',
        info: 'psiholog.alina.patru@gmail.com',
        link: 'mailto:psiholog.alina.patru@gmail.com',
        description: 'Răspund în maxim 24 de ore Lun-Vin 9:00-18:00',
        color: 'calming'
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        info: '+40 724 172 996',
        link: 'https://wa.me/40724172996',
        description: 'Pentru programări rapide și întrebări urgente',
        color: 'warm'
    }
]

const officeInfo = {
    address: 'Strada Lunei nr. 7, Sector 2, București',
    nearbyLandmarks: [
        'Lângă metrou Aviatorilor (3 min pe jos)',
        'Aproape de Piața Victoriei',
        'În zona Herastrau Park'
    ],
    parkingInfo: 'Parcare gratuită disponibilă în zona',
    publicTransport: [
        { icon: Train, text: 'Metro: Aviatorilor (Linia M2)' },
        { icon: Bus, text: 'Autobuze: 131, 301, 331' },
        { icon: Car, text: 'Parcare: Strada laterală gratuită' }
    ]
}

const schedule = [
    { day: 'Luni - Vineri', hours: '09:00 - 18:00', available: true },
    { day: 'Sâmbătă', hours: '09:00 - 14:00', available: true },
    { day: 'Duminică', hours: 'Închis', available: false, note: 'Urgențe la telefon' }
]


const faqs = [
    {
        question: 'Cum pot programa o consultație?',
        answer: 'Poți suna direct la +40 722 123 456, să trimiți un email sau să folosești formularul de contact. Răspund personal în maxim 24h.'
    },
    {
        question: 'Care sunt tarifele pentru consultații?',
        answer: 'Terapie autism: 200 RON/ședință, Psihoterapie individuală: 180 RON/ședință, Terapie de cuplu: 220 RON/ședință. Prima consultație este gratuită.'
    },
    {
        question: 'Oferiți consultații online?',
        answer: 'Da, ofer consultații online prin platforme securizate pentru cei care nu pot ajunge la cabinet sau preferă această modalitate.'
    },
    {
        question: 'Cât durează o ședință de terapie?',
        answer: 'O ședință standard durează 50 de minute. Pentru evaluări inițiale, durata poate fi de 90 de minute.'
    }
]

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-therapeutic-600 via-therapeutic-500 to-calming-500 text-white relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warm-500/20 rounded-full blur-3xl animate-blob" />

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeIn" className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                            <Heart className="w-4 h-4 mr-2 text-warm-300" />
                            Hai să vorbim - primul pas către vindecarea ta
                        </div>

                        <Typography variant="h1" className="text-white mb-6 text-center" family="serif">
                            Contactează-mă pentru o
                            <span className="block text-warm-200 text-center">Consultație Gratuită</span>
                        </Typography>

                        <Typography variant="lead" className="text-white/90 mb-8 max-w-2xl mx-auto text-center">
                            Sunt aici să te ajut. Indiferent de provocarea pe care o întâmpini,
                            primul pas este să vorbim. Programează o consultație gratuită și
                            să vedem împreună cum te pot sprijini.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                                <a href="tel:+40722123456">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Sună acum: +40 722 123 456
                                </a>
                            </Button>

                            <Button asChild size="lg" variant="outline" className="border-white text-therapeutic-600 hover:bg-therapeutic-100 hover:text-therapeutic-700">
                                <a href="mailto:contact@psiholog-alina.ro">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Trimite un email
                                </a>
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6 text-center" family="serif">
                            Modalități de <span className="text-therapeutic">Contact</span>
                        </Typography>
                        <Typography variant="lead" className="text-center">
                            Alege modalitatea care ți se potrivește cel mai bine.
                            Sunt disponibilă pentru a răspunde la întrebările tale și a programa o consultație.
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-3 gap-8">
                            {contactInfo.map((contact, index) => {
                                const Icon = contact.icon
                                return (
                                    <Card key={index} className={`text-center p-6 border-${contact.color}-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                        <CardContent className="space-y-4 flex flex-col items-center">
                                            <div className={`w-16 h-16 bg-${contact.color}-100 rounded-full flex items-center justify-center mx-auto`}>
                                                <Icon className={`w-8 h-8 text-${contact.color}-600`} />
                                            </div>
                                            <Typography variant="h5" className="font-semibold items-center">
                                                {contact.title}
                                            </Typography>
                                            <a
                                                href={contact.link}
                                                className={`block text-lg font-medium text-${contact.color}-600 hover:text-${contact.color}-700 transition-colors`}
                                            >
                                                {contact.info}
                                            </a>
                                            <Typography variant="small" className="text-gray-600">
                                                {contact.description}
                                            </Typography>
                                            <div className="">
                                                <Button asChild className={`bg-${contact.color} text-white hover:bg-${contact.color}/90`}>
                                                    <a href={contact.link}>
                                                        Contactează acum
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Contact Form & Office Info */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/*/!* Contact Form *!/*/}
                        {/*<AnimatedSection animation="slideUp">*/}
                        {/*    <Card className="p-8">*/}
                        {/*        <CardHeader className="text-center mb-6">*/}
                        {/*            <CardTitle className="text-2xl mb-2">Trimite-mi un mesaj</CardTitle>*/}
                        {/*            <Typography variant="body" className="text-gray-600">*/}
                        {/*                Completează formularul și îți voi răspunde în maxim 24 de ore*/}
                        {/*            </Typography>*/}
                        {/*        </CardHeader>*/}

                        {/*        <CardContent>*/}
                        {/*            <form className="space-y-6">*/}
                        {/*                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">*/}
                        {/*                    <div>*/}
                        {/*                        <label className="block text-sm font-medium text-gray-700 mb-2">*/}
                        {/*                            Nume **/}
                        {/*                        </label>*/}
                        {/*                        <Input placeholder="Numele tău" required />*/}
                        {/*                    </div>*/}
                        {/*                    <div>*/}
                        {/*                        <label className="block text-sm font-medium text-gray-700 mb-2">*/}
                        {/*                            Prenume **/}
                        {/*                        </label>*/}
                        {/*                        <Input placeholder="Prenumele tău" required />*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <div>*/}
                        {/*                    <label className="block text-sm font-medium text-gray-700 mb-2">*/}
                        {/*                        Email **/}
                        {/*                    </label>*/}
                        {/*                    <Input type="email" placeholder="email@exemplu.ro" required />*/}
                        {/*                </div>*/}

                        {/*                <div>*/}
                        {/*                    <label className="block text-sm font-medium text-gray-700 mb-2">*/}
                        {/*                        Telefon*/}
                        {/*                    </label>*/}
                        {/*                    <Input placeholder="+40 722 123 456" />*/}
                        {/*                </div>*/}

                        {/*                <div>*/}
                        {/*                    <label className="block text-sm font-medium text-gray-700 mb-2">*/}
                        {/*                        Tipul consultației*/}
                        {/*                    </label>*/}
                        {/*                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapeutic-500">*/}
                        {/*                        <option value="">Selectează tipul consultației</option>*/}
                        {/*                        <option value="terapie-autism">Terapie Autism</option>*/}
                        {/*                        <option value="psihoterapie-individuala">Psihoterapie Individuală</option>*/}
                        {/*                        <option value="terapie-cuplu">Terapie de Cuplu</option>*/}
                        {/*                        <option value="evaluare">Evaluare Psihologică</option>*/}
                        {/*                        <option value="alta">Altă problemă</option>*/}
                        {/*                    </select>*/}
                        {/*                </div>*/}

                        {/*                <div>*/}
                        {/*                    <label className="block text-sm font-medium text-gray-700 mb-2">*/}
                        {/*                        Mesajul tău **/}
                        {/*                    </label>*/}
                        {/*                    <textarea*/}
                        {/*                        rows={5}*/}
                        {/*                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapeutic-500"*/}
                        {/*                        placeholder="Descrie pe scurt motivul pentru care ai nevoie de ajutor sau întrebările pe care le ai..."*/}
                        {/*                        required*/}
                        {/*                    />*/}
                        {/*                </div>*/}

                        {/*                <div className="flex items-start space-x-2">*/}
                        {/*                    <input type="checkbox" id="privacy" className="mt-1" required />*/}
                        {/*                    <label htmlFor="privacy" className="text-sm text-gray-600">*/}
                        {/*                        Sunt de acord cu <Link href="/confidentialitate" className="text-therapeutic-600 hover:underline">politica de confidențialitate</Link> și procesarea datelor personale **/}
                        {/*                    </label>*/}
                        {/*                </div>*/}

                        {/*                <Button type="submit" className="w-full bg-therapeutic text-white hover:bg-therapeutic/90 text-lg py-3">*/}
                        {/*                    <Send className="w-5 h-5 mr-2" />*/}
                        {/*                    Trimite mesajul*/}
                        {/*                </Button>*/}

                        {/*                <div className="text-center text-sm text-gray-500">*/}
                        {/*                    <Shield className="w-4 h-4 inline mr-1" />*/}
                        {/*                    Toate datele sunt protejate conform GDPR*/}
                        {/*                </div>*/}
                        {/*            </form>*/}
                        {/*        </CardContent>*/}
                        {/*    </Card>*/}
                        {/*</AnimatedSection>*/}

                        {/* Office Information */}
                        <AnimatedSection animation="slideUp" className="space-y-8">

                            {/* Address & Location */}
                            <Card className="p-6">
                                <CardHeader className="flex flex-row items-center space-x-3 mb-4">
                                    <MapPin className="w-6 h-6 text-therapeutic-600" />
                                    <CardTitle>Locația Cabinetului</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Typography variant="body" className="font-medium">
                                        {officeInfo.address}
                                    </Typography>

                                    <div>
                                        <Typography variant="h6" className="mb-2">Puncte de reper:</Typography>
                                        <ul className="space-y-1">
                                            {officeInfo.nearbyLandmarks.map((landmark, index) => (
                                                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-therapeutic-500 flex-shrink-0" />
                                                    <span>{landmark}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <Typography variant="h6" className="mb-2">Transport:</Typography>
                                        <div className="space-y-2">
                                            {officeInfo.publicTransport.map((transport, index) => {
                                                const Icon = transport.icon
                                                return (
                                                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                                        <Icon className="w-4 h-4 text-calming-500" />
                                                        <span>{transport.text}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <Button asChild variant="outline" className="w-full">
                                        <a href="https://www.google.com/maps/place/Strada+Lunei+7,+Bucure%C8%99ti+023995/@44.4374357,26.1129644,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1ff30f2715e81:0x343b04de5b5be9bf!8m2!3d44.4374319!4d26.1155393!16s%2Fg%2F11s17sm8wy?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                                           target="_blank" rel="noopener noreferrer">
                                            <Navigation className="w-4 h-4 mr-2" />
                                            Deschide în Google Maps
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>



                            {/* Social Media */}
                            {/*<Card className="p-6">*/}
                            {/*    <CardHeader className="mb-4">*/}
                            {/*        <CardTitle>Urmărește-mă pe Social Media</CardTitle>*/}
                            {/*        <Typography variant="small" className="text-gray-600">*/}
                            {/*            Articole utile despre psihologie și sfaturi pentru sănătatea mentală*/}
                            {/*        </Typography>*/}
                            {/*    </CardHeader>*/}
                            {/*    <CardContent>*/}
                            {/*        <div className="flex space-x-4">*/}
                            {/*            {socialLinks.map((social) => {*/}
                            {/*                const Icon = social.icon*/}
                            {/*                return (*/}
                            {/*                    <a*/}
                            {/*                        key={social.name}*/}
                            {/*                        href={social.href}*/}
                            {/*                        target="_blank"*/}
                            {/*                        rel="noopener noreferrer"*/}
                            {/*                        className={`p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${social.color}`}*/}
                            {/*                        aria-label={`Urmărește pe ${social.name}`}*/}
                            {/*                    >*/}
                            {/*                        <Icon className="w-6 h-6" />*/}
                            {/*                    </a>*/}
                            {/*                )*/}
                            {/*            })}*/}
                            {/*        </div>*/}
                            {/*    </CardContent>*/}
                            {/*</Card>*/}
                        </AnimatedSection>

                        {/* Schedule */}
                        <AnimatedSection animation="slideUp" className="space-y-8">
                            <Card className="p-6">
                                <CardHeader className="flex flex-row items-center space-x-3 mb-4">
                                    <Clock className="w-6 h-6 text-calming-600" />
                                    <CardTitle>Program de Lucru</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {schedule.map((day, index) => (
                                            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                                <span className="font-medium">{day.day}</span>
                                                <div className="text-right">
                          <span className={day.available ? 'text-calming-600' : 'text-gray-500'}>
                            {day.hours}
                          </span>
                                                    {day.note && (
                                                        <div className="text-xs text-gray-500">{day.note}</div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 p-3 bg-therapeutic-50 rounded-lg">
                                        <Typography variant="small" className="text-therapeutic-700">
                                            <Calendar className="w-4 h-4 inline mr-1" />
                                            Programări disponibile și în afara programului, la cerere
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6 text-center" family="serif">
                            Întrebări <span className="text-therapeutic">Frecvente</span>
                        </Typography>
                        <Typography variant="lead" className="text-center">
                            Răspunsuri la cele mai comune întrebări despre serviciile mele și modalitatea de lucru
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

                    <AnimatedSection animation="fadeIn" className="grid grid-rows-1 grid-cols-2 text-center mt-12">
                        <Typography variant="body" className="text-gray-600 mb-4">
                            Nu găsești răspunsul la întrebarea ta?
                        </Typography>
                        <Button asChild className="bg-therapeutic text-white hover:bg-therapeutic/90">
                            <a href="tel:+40724172996">
                                <Phone className="w-4 h-4 mr-2" />
                                Sună și întreabă direct
                            </a>
                        </Button>
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
                        <Typography variant="h2" className="text-white mb-6 text-center" family="serif">
                            Primul Pas Este Cel Mai Important
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Nu mai aștepta. Fiecare zi în care amâni să ceri ajutorul poate fi o zi pierdută din procesul tău de vindecare.
                            Contactează-mă astăzi pentru o consultație gratuită.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                                <a href="tel:+40722123456">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Programează acum
                                </a>
                            </Button>

                            <Button asChild size="lg" variant="outline" className="border-white text-calming-600 hover:bg-calming-50 hover:text-calming-600">
                                <Link href="/servicii">
                                    Explorează serviciile
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}