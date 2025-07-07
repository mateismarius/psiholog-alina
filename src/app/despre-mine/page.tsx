import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
    GraduationCap,
    Award,
    Heart,
    Users,
    Brain,
    Star,
    CheckCircle,
    Calendar,
    Phone,
    Target,
    BookOpen,
    Shield,
    Lightbulb,
    Clock,
    MapPin,
    Quote,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
    title: 'Despre Mine',
    description: 'Psiholog Alina - Specialist în terapie autism cu peste 10 ani experiență în psihologie clinică. Psiholog acreditat CPR, specializat în terapie comportamentală, psihoterapie individuală și de cuplu în București.',
    keywords: [
        'psiholog alina bucuresti',
        'despre psiholog autism',
        'experienta psiholog clinician',
        'certificari psiholog',
        'specialist terapie autism bucuresti',
        'psiholog acreditat cpr'
    ],
}

const personalInfo = {
    name: 'Psiholog Alina Popescu',
    title: 'Psiholog Clinician & Specialist Terapie Autism',
    experience: '10+ ani experiență',
    clients: '500+ pacienți ajutați',
    specialization: 'Terapie Autism, Psihoterapie, Consiliere',
    registration: 'Membru acreditat CPR Nr. 12345',
}

const education = [
    {
        degree: 'Master în Psihologie Clinică',
        institution: 'Universitatea din București',
        year: '2012-2014',
        description: 'Specializare în diagnostic și intervenție psihologică',
        honors: 'Magna Cum Laude'
    },
    {
        degree: 'Licență în Psihologie',
        institution: 'Universitatea din București',
        year: '2009-2012',
        description: 'Psihologie generală cu specializare în psihologia dezvoltării',
        honors: 'Summa Cum Laude'
    },
    {
        degree: 'Formare Continuă în Terapie ABA',
        institution: 'Autism Partnership',
        year: '2015-2016',
        description: 'Programa intensivă de formare în Applied Behavior Analysis'
    }
]

const certifications = [
    {
        title: 'Certificare Terapie Comportamentală Aplicată (ABA)',
        issuer: 'Behavior Analyst Certification Board',
        year: '2016',
        type: 'Certificare Internațională',
        icon: Brain,
        color: 'therapeutic',
        description: 'Certificare specializată pentru terapia copiilor și adulților cu autism',
        skills: ['Evaluare comportamentală', 'Planuri de intervenție', 'Training părinți']
    },
    {
        title: 'Terapie Cognitiv-Comportamentală',
        issuer: 'Asociația Română de Terapie Cognitiv-Comportamentală',
        year: '2018',
        type: 'Certificare Națională',
        icon: Lightbulb,
        color: 'calming',
        description: 'Specializare în TCC pentru anxietate, depresie și tulburări de dispoziție',
        skills: ['Tehnici TCC', 'Reestructurare cognitivă', 'Terapie scurtă']
    },
    {
        title: 'Terapie de Cuplu și Familie',
        issuer: 'European Family Therapy Association',
        year: '2019',
        type: 'Certificare Europeană',
        icon: Heart,
        color: 'warm',
        description: 'Abordare sistemică pentru terapia cuplurilor și familiilor',
        skills: ['Terapie sistemică', 'Medierea conflictelor', 'Comunicare în cuplu']
    },
    {
        title: 'Supervisor în Psihologie Clinică',
        issuer: 'Colegiul Psihologilor din România',
        year: '2020',
        type: 'Acreditare CPR',
        icon: Shield,
        color: 'trust',
        description: 'Autorizare pentru supervizarea stagiarilor și psihologilor juniori',
        skills: ['Supervizare', 'Formare profesională', 'Evaluare competențe']
    },
    {
        title: 'Intervenție în Criză și Traumă',
        issuer: 'International Society for Traumatic Stress Studies',
        year: '2021',
        type: 'Certificare Internațională',
        icon: Shield,
        color: 'empathy',
        description: 'Specializare în tratamentul traumelor și intervențiile de criză',
        skills: ['EMDR', 'Trauma-Focused CBT', 'Intervenție criză']
    },
    {
        title: 'ADHD și Tulburări de Atenție',
        issuer: 'ADHD Europe',
        year: '2022',
        type: 'Certificare Europeană',
        icon: Target,
        color: 'peace',
        description: 'Diagnostic și intervenție pentru ADHD la copii și adulți',
        skills: ['Diagnostic ADHD', 'Terapie comportamentală', 'Coaching ADHD']
    }
]

const expertise = [
    {
        area: 'Terapie Autism',
        experience: '8 ani',
        patients: '200+',
        description: 'Specializat în diagnostic, evaluare și terapie pentru copii și adulți cu TSA',
        techniques: ['ABA', 'TEACCH', 'Floor Time', 'Social Stories']
    },
    {
        area: 'Psihoterapie Individuală',
        experience: '10 ani',
        patients: '250+',
        description: 'Anxietate, depresie, traumă, dezvoltare personală',
        techniques: ['TCC', 'EMDR', 'Mindfulness', 'Terapie Humanistă']
    },
    {
        area: 'Terapie de Cuplu',
        experience: '6 ani',
        patients: '100+',
        description: 'Îmbunătățirea comunicării și rezolvarea conflictelor în relații',
        techniques: ['Terapie Sistemică', 'Gottman Method', 'EFT', 'Comunicare Nonviolentă']
    }
]

const values = [
    {
        icon: Heart,
        title: 'Empatie și Înțelegere',
        description: 'Fiecare persoană este unică și merită să fie înțeleasă și respectată în parcursul său de vindecare.'
    },
    {
        icon: Shield,
        title: 'Confidențialitate Totală',
        description: 'Toate informațiile personale sunt protejate strict conform eticii profesionale și GDPR.'
    },
    {
        icon: Target,
        title: 'Abordare Personalizată',
        description: 'Fiecare plan de terapie este adaptat nevoilor specifice și obiectivelor individuale ale pacientului.'
    },
    {
        icon: Users,
        title: 'Suport pentru Familie',
        description: 'Includ familia în procesul terapeutic și ofer training și suport pentru toți membrii familiei.'
    }
]

const achievements = [
    {
        year: '2023',
        title: 'Premiul "Psiholog al Anului"',
        organization: 'Asociația Psihologilor din București',
        description: 'Pentru contribuția excepțională în domeniul terapiei autism'
    },
    {
        year: '2022',
        title: 'Trainer Certificat ABA',
        organization: 'Behavior Analyst Certification Board',
        description: 'Autorizare pentru formarea altor specialiști în terapie comportamentală'
    },
    {
        year: '2021',
        title: 'Cercetare Publicată',
        organization: 'Journal of Autism Research',
        description: 'Studiu despre eficacitatea intervenției timpurii în autism'
    },
    {
        year: '2020',
        title: 'Membru în Comisia de Etică',
        organization: 'Colegiul Psihologilor din România',
        description: 'Contribuție la standardele etice în psihologie'
    }
]

const personalStory = {
    motivation: "Pasiunea mea pentru psihologie și în special pentru lucrul cu persoanele cu autism a început încă din timpul facultății, când am avut primul contact cu un copil diagnosticat cu TSA. Am fost fascinată de complexitatea și frumusețea minții umane, și de puterea extraordinară a intervenției timpurii și a terapiei specializate.",
    mission: "Misiunea mea este să ofer fiecărei persoane instrumentele necesare pentru a-și atinge potențialul maxim și a trăi o viață împlinită. Cred că fiecare dintre noi are dreptul la fericire și la relații sănătoase, indiferent de provocările cu care se confruntă.",
    approach: "Abordarea mea este holistică, centrată pe persoană și bazată pe evidențe științifice. Combin tehnicile validate științific cu o abordare caldă și empatică, pentru a crea un mediu sigur în care vindecarea poate avea loc în mod natural."
}

export default function AboutPage() {
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
                                <Award className="w-4 h-4 mr-2 text-warm-300" />
                                {personalInfo.registration}
                            </div>

                            <Typography variant="h1" className="text-white leading-tight" family="serif">
                                Sunt <span className="text-warm-200">Alina</span>,
                                <span className="block">Psihologul Tău</span>
                            </Typography>

                            <Typography variant="lead" className="text-white/90">
                                Cu peste {personalInfo.experience.split('+')[0]} ani de experiență în psihologie clinică și
                                terapie autism, am ajutat {personalInfo.clients.split('+')[0]} de familii și persoane
                                să își depășească provocările și să își atingă potențialul.
                            </Typography>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-warm-200 mb-2">{personalInfo.clients}</div>
                                    <div className="text-white/80 text-sm">Pacienți ajutați</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-calming-200 mb-2">{personalInfo.experience}</div>
                                    <div className="text-white/80 text-sm">Experiență</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90">
                                    <Link href="/contact">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Programează o întâlnire
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                                    <Link href="/servicii">
                                        Serviciile mele
                                    </Link>
                                </Button>
                            </div>
                        </AnimatedSection>

                        {/* Photo */}
                        <AnimatedSection animation="slideUp" className="relative">
                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/psiholog-alina-about.jpg"
                                        alt="Psiholog Alina Popescu - Specialist terapie autism București"
                                        width={500}
                                        height={600}
                                        className="w-full h-auto"
                                        priority
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                    />
                                </div>

                                {/* Floating credentials */}
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm animate-breathe">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-therapeutic-100 rounded-full flex items-center justify-center">
                                            <GraduationCap className="w-5 h-5 text-therapeutic-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-therapeutic-600">Psiholog Clinician</div>
                                            <div className="text-xs text-gray-600">Acreditat CPR</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Personal Story */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <Typography variant="h2" className="mb-6" family="serif">
                                Povestea <span className="text-therapeutic">Mea</span>
                            </Typography>
                            <Typography variant="lead">
                                Cum am devenit psiholog și de ce am ales să mă specializez în terapia autism
                            </Typography>
                        </div>

                        <div className="space-y-8">
                            <Card className="p-8 border-l-4 border-therapeutic-500">
                                <Typography variant="body" className="text-gray-700 leading-relaxed mb-4">
                                    <Quote className="w-6 h-6 text-therapeutic-400 inline mr-2" />
                                    {personalStory.motivation}
                                </Typography>
                            </Card>

                            <div className="grid md:grid-cols-2 gap-8">
                                <Card className="p-6">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="flex items-center space-x-2">
                                            <Target className="w-5 h-5 text-calming-600" />
                                            <span>Misiunea Mea</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Typography variant="body" className="text-gray-700 leading-relaxed">
                                            {personalStory.mission}
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Card className="p-6">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="flex items-center space-x-2">
                                            <Heart className="w-5 h-5 text-warm-600" />
                                            <span>Abordarea Mea</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Typography variant="body" className="text-gray-700 leading-relaxed">
                                            {personalStory.approach}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Education */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Educație și <span className="text-therapeutic">Formare</span>
                        </Typography>
                        <Typography variant="lead">
                            Fundația academică solidă și formarea continuă în psihologie clinică
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {education.map((edu, index) => (
                                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-therapeutic-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <GraduationCap className="w-6 h-6 text-therapeutic-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                                <Typography variant="h5" className="font-semibold text-therapeutic-700">
                                                    {edu.degree}
                                                </Typography>
                                                <span className="text-sm text-gray-500 font-medium">{edu.year}</span>
                                            </div>
                                            <Typography variant="body" className="text-calming-600 font-medium mb-2">
                                                {edu.institution}
                                            </Typography>
                                            <Typography variant="body" className="text-gray-600 mb-2">
                                                {edu.description}
                                            </Typography>
                                            {edu.honors && (
                                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-warm-100 text-warm-700 text-sm font-medium">
                                                    <Star className="w-4 h-4 mr-1" />
                                                    {edu.honors}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Certifications & Specializations */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Certificări și <span className="text-therapeutic">Specializări</span>
                        </Typography>
                        <Typography variant="lead">
                            Acreditări profesionale și specializări continue pentru a oferi cele mai bune servicii
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => {
                                const Icon = cert.icon
                                return (
                                    <Card key={index} className={`p-6 border-${cert.color}-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-14 h-14 bg-${cert.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                                                <Icon className={`w-7 h-7 text-${cert.color}-600`} />
                                            </div>
                                            <CardTitle className="text-lg leading-tight mb-2">
                                                {cert.title}
                                            </CardTitle>
                                            <div className="flex items-center justify-between text-sm">
                        <span className={`px-2 py-1 rounded bg-${cert.color}-100 text-${cert.color}-700 font-medium`}>
                          {cert.type}
                        </span>
                                                <span className="text-gray-500 font-medium">{cert.year}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <Typography variant="body" className="text-gray-600 text-sm">
                                                <strong className={`text-${cert.color}-700`}>{cert.issuer}</strong>
                                            </Typography>
                                            <Typography variant="body" className="text-gray-700 leading-relaxed">
                                                {cert.description}
                                            </Typography>
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                    Competențe dobândite:
                                                </Typography>
                                                <div className="flex flex-wrap gap-1">
                                                    {cert.skills.map((skill, idx) => (
                                                        <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                              {skill}
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

            {/* Expertise Areas */}
            <section className="py-20 bg-therapeutic-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Domenii de <span className="text-therapeutic">Expertiza</span>
                        </Typography>
                        <Typography variant="lead">
                            Specializările mele principale și experiența acumulată în fiecare domeniu
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="space-y-8 max-w-5xl mx-auto">
                            {expertise.map((area, index) => (
                                <Card key={index} className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="grid md:grid-cols-3 gap-6 items-center">
                                        <div className="text-center md:text-left">
                                            <Typography variant="h4" className="text-therapeutic-700 mb-2">
                                                {area.area}
                                            </Typography>
                                            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-1 md:space-y-0">
                                                <div className="flex items-center justify-center md:justify-start space-x-1">
                                                    <Clock className="w-4 h-4 text-calming-600" />
                                                    <span className="text-sm text-gray-600">{area.experience}</span>
                                                </div>
                                                <div className="flex items-center justify-center md:justify-start space-x-1">
                                                    <Users className="w-4 h-4 text-warm-600" />
                                                    <span className="text-sm text-gray-600">{area.patients} pacienți</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 space-y-4">
                                            <Typography variant="body" className="text-gray-700 leading-relaxed">
                                                {area.description}
                                            </Typography>
                                            <div>
                                                <Typography variant="small" className="font-medium text-gray-700 mb-2">
                                                    Tehnici și metode utilizate:
                                                </Typography>
                                                <div className="flex flex-wrap gap-2">
                                                    {area.techniques.map((technique, idx) => (
                                                        <span key={idx} className="px-3 py-1 bg-therapeutic-100 text-therapeutic-700 rounded-full text-sm font-medium">
                              {technique}
                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Professional Values */}
            <section className="py-20 bg-white">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Valorile Mele <span className="text-therapeutic">Profesionale</span>
                        </Typography>
                        <Typography variant="lead">
                            Principiile care ghidează activitatea mea și relația cu pacienții
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon
                                return (
                                    <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                        <CardContent className="space-y-4">
                                            <div className="w-16 h-16 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto">
                                                <Icon className="w-8 h-8 text-therapeutic-600" />
                                            </div>
                                            <Typography variant="h5" className="font-semibold">
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body" className="text-gray-600 leading-relaxed">
                                                {value.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Achievements & Recognition */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
                        <Typography variant="h2" className="mb-6" family="serif">
                            Realizări și <span className="text-therapeutic">Recunoaștere</span>
                        </Typography>
                        <Typography variant="lead">
                            Premii, publicații și contribuții la dezvoltarea domeniului psihologiei
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection animation="stagger">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {achievements.map((achievement, index) => (
                                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-warm-700 font-bold text-sm">{achievement.year}</span>
                                        </div>
                                        <div className="flex-1">
                                            <Typography variant="h5" className="font-semibold text-therapeutic-700 mb-1">
                                                {achievement.title}
                                            </Typography>
                                            <Typography variant="body" className="text-calming-600 font-medium mb-2">
                                                {achievement.organization}
                                            </Typography>
                                            <Typography variant="body" className="text-gray-600 leading-relaxed">
                                                {achievement.description}
                                            </Typography>
                                        </div>
                                    </div>
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
                            Să Începem Împreună Această Călătorie
                        </Typography>
                        <Typography variant="lead" className="text-white/90 mb-8">
                            Cu experiența mea de peste 10 ani și specializările în terapie autism,
                            psihoterapie și consiliere, sunt aici să te ghidez către o viață mai bună.
                            Primul pas este să ne cunoaștem.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                                <Link href="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Programează consultația gratuită
                                </Link>
                            </Button>

                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-calming-600">
                                <a href="tel:+40722123456">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Sună pentru informații
                                </a>
                            </Button>
                        </div>

                        <div className="mt-8 text-sm text-white/70">
                            <Heart className="w-4 h-4 inline mr-2" />
                            Confidențialitate garantată • Acreditat CPR • Membru în bună regulă
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    )
}