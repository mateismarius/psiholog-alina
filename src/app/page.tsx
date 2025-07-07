import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Star,
  Users,
  Calendar,
  Shield,
  Heart,
  Brain,
  CheckCircle,
  Phone,
  Award,
  Smile,
  Target,
  Clock,
  MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { HeroSection, ServicesSection, TestimonialSection, CtaSection, StatsSection } from "@/components/core/SectionComponents"
import { AnimatedSection } from '@/components/AnimatedSection'

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Pacienți Ajutați',
    description: 'Copii și adulți cu autism și alte tulburări'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Rating Pacienți',
    description: 'Peste 150 de recenzii pozitive'
  },
  {
    icon: Award,
    value: '10+',
    label: 'Ani Experiență',
    description: 'În psihologie clinică și terapie autism'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Confidențialitate',
    description: 'Cabinet acreditat CPR - Colegiul Psihologilor'
  }
]

const services = [
  {
    icon: Brain,
    title: 'Terapie Autism',
    description: 'Specializat în terapie pentru copii și adulți cu tulburări din spectrul autist. Intervenție timpurie și dezvoltare abilități sociale folosind metode validate științific.',
    features: [
      'Intervenție timpurie pentru copii 2-6 ani',
      'Terapie comportamentală aplicată (ABA)',
      'Dezvoltare abilități sociale și comunicare',
      'Suport și training pentru părinți și familie',
      'Evaluare și diagnostic autism',
      'Planuri de intervenție personalizate'
    ],
    href: '/servicii/terapie-autism',
    color: 'therapeutic',
    featured: true,
    price: 'de la 200 RON/ședință'
  },
  {
    icon: Heart,
    title: 'Psihoterapie Individuală',
    description: 'Consiliere profesională pentru anxietate, depresie, traumă și dezvoltare personală. Abordare personalizată pentru fiecare pacient în mediu sigur și empatic.',
    features: [
      'Terapie cognitiv-comportamentală (TCC)',
      'Tratament anxietate și tulburări de panică',
      'Terapie pentru depresie și tulburări de dispoziție',
      'Procesarea traumelor și PTSD',
      'Dezvoltare personală și creștere',
      'Gestionarea stresului și burnout'
    ],
    href: '/servicii/psihoterapie-individuala',
    color: 'calming',
    price: 'de la 180 RON/ședință'
  },
  {
    icon: Users,
    title: 'Terapie de Cuplu și Familie',
    description: 'Îmbunătățirea comunicării și rezolvarea conflictelor în relații. Consiliere pentru cupluri și familii pentru construirea unor relații sănătoase și armonioase.',
    features: [
      'Îmbunătățirea comunicării în cuplu',
      'Rezolvarea conflictelor și tensiunilor',
      'Construirea încrederii și intimității',
      'Pregătirea pentru căsătorie',
      'Terapie familială sistemică',
      'Medierea separării și divorțului'
    ],
    href: '/servicii/terapie-cuplu',
    color: 'warm',
    price: 'de la 220 RON/ședință'
  }
]

const testimonials = [
  {
    name: 'Maria Popescu',
    role: 'Mamă copil cu autism',
    content: 'Psiholog Alina ne-a ajutat enorm cu copilul nostru diagnosticat cu autism. Profesionalismul și empatia ei au fost excepționale. În doar câteva luni am văzut progrese uriașe în comunicare și comportament.',
    rating: 5,
    location: 'București, Sector 2'
  },
  {
    name: 'Alexandru Marinescu',
    role: 'Pacient terapie individuală',
    content: 'Am reușit să depășesc anxietatea care mă bloca de ani de zile. Alina mi-a oferit exact instrumentele de care aveam nevoie pentru a-mi recăpăta încrederea și a-mi gestiona stresul zilnic.',
    rating: 5,
    location: 'București, Sector 1'
  },
  {
    name: 'Diana și Cătălin',
    role: 'Cuplu în terapie',
    content: 'Terapia de cuplu ne-a salvat relația. Am învățat să comunicăm mai bine și să ne înțelegem nevoile reciproce. Suntem recunoscători pentru această experiență transformatoare.',
    rating: 5,
    location: 'București, Sector 3'
  }
]

const benefits = [
  'Specialist certificat în terapie autism',
  'Experiență de peste 10 ani în psihologie',
  'Abordare personalizată pentru fiecare caz',
  'Suport continuu pentru familie',
  'Consultații online și la cabinet',
  'Membru acreditat CPR'
]

const expertise = [
  {
    icon: Brain,
    title: 'Autism și Tulburări de Dezvoltare',
    description: 'Specializare în diagnostic și terapie pentru spectrul autist'
  },
  {
    icon: Heart,
    title: 'Anxietate și Depresie',
    description: 'Tratament cognitiv-comportamental pentru adulți'
  },
  {
    icon: Users,
    title: 'Terapie de Familie',
    description: 'Medierea conflictelor și îmbunătățirea comunicării'
  },
  {
    icon: Shield,
    title: 'Psihologie Clinică',
    description: 'Evaluări psihologice complete și planuri de tratament'
  }
]

export default function HomePage() {
  return (
      <>
        {/* Hero Section */}
        <HeroSection className="relative overflow-hidden" withContainer={false}>
          {/* Background decorations */}
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob" />

          <Container size="xl" className="relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Content */}
              <AnimatedSection animation="stagger" className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
                  <Star className="w-4 h-4 mr-2 text-warm-300" />
                  Psiholog specialist autism acreditat CPR
                </div>

                <div className="space-y-6">
                  <Typography
                      variant="h1"
                      className="text-white leading-tight"
                      family="serif"
                  >
                    Specialist în
                    <span className="block text-warm-200">Terapie Autism</span>
                    <span className="block text-calming-200">și Psihoterapie</span>
                  </Typography>

                  <Typography variant="lead" className="text-white/90 max-w-2xl">
                    Cabinet de psihologie specializat în <strong>terapie autism</strong> pentru copii și adulți în București.
                    Oferim intervenție timpurie, evaluare profesională și suport pentru familii într-un mediu sigur și empatic.
                  </Typography>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.slice(0, 4).map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-calming-300 flex-shrink-0" />
                        <span className="text-white/90 text-sm">{benefit}</span>
                      </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                    <Link href="/programare">
                      <Calendar className="w-5 h-5 mr-2" />
                      Programare Gratuită
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-600">
                    <Link href="/servicii/terapie-autism">
                      Despre Terapie Autism
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-sm">Disponibil pentru consultații</span>
                  </div>
                  <a
                      href="tel:+40722123456"
                      className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">+40 722 123 456</span>
                  </a>
                </div>
              </AnimatedSection>

              {/* Image */}
              <AnimatedSection animation="slideUp" className="relative">
                <div className="relative z-10">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/psiholog-alina-hero.jpg"
                        alt="Psiholog Alina în cabinet - Specialist terapie autism București"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm animate-breathe">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-therapeutic-100 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-therapeutic-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-therapeutic-600">500+</div>
                        <div className="text-sm text-gray-600">Familii ajutate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </HeroSection>

        {/* Stats Section */}
        <StatsSection>
          <AnimatedSection animation="stagger">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-therapeutic-100 rounded-xl mb-4 mx-auto">
                        <Icon className="w-8 h-8 text-therapeutic-600" />
                      </div>
                      <div className="text-3xl font-bold text-therapeutic-600 mb-2">{stat.value}</div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500">{stat.description}</div>
                    </div>
                )
              })}
            </div>
          </AnimatedSection>
        </StatsSection>

        {/* Services Section */}
        <ServicesSection>
          <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
            <Typography variant="h2" className="mb-6" family="serif">
              Servicii Specializate de
              <span className="text-therapeutic"> Psihologie Clinică</span>
            </Typography>
            <Typography variant="lead">
              Oferim terapie profesională adaptată nevoilor fiecărui pacient,
              cu focus pe rezultate măsurabile și îmbunătățirea calității vieții.
            </Typography>
          </AnimatedSection>

          <AnimatedSection animation="stagger">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                    <div key={index} className="group">
                      <Card className={`h-full ${service.featured ? 'ring-2 ring-therapeutic-200 shadow-therapeutic' : ''} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                        <CardHeader className="relative">
                          {service.featured && (
                              <div className="absolute -top-3 left-6 bg-therapeutic-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                Cel mai solicitat
                              </div>
                          )}
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-${service.color}-100`}>
                            <Icon className={`w-7 h-7 text-${service.color}-600`} />
                          </div>
                          <CardTitle className="text-xl group-hover:text-therapeutic-600 transition-colors">
                            {service.title}
                          </CardTitle>
                          <div className="text-sm font-medium text-therapeutic-600">
                            {service.price}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <Typography variant="body" className="text-muted-foreground">
                            {service.description}
                          </Typography>

                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-sm">
                                  <CheckCircle className={`w-4 h-4 text-${service.color}-500 mt-0.5 flex-shrink-0`} />
                                  <span>{feature}</span>
                                </li>
                            ))}
                          </ul>

                          <Button asChild className={`w-full bg-${service.color} text-white hover:bg-${service.color}/90`}>
                            <Link href={service.href}>
                              Află mai mult
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                )
              })}
            </div>
          </AnimatedSection>
        </ServicesSection>

        {/* Expertise Section */}
        <section className="py-20 bg-therapeutic-50">
          <Container>
            <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
              <Typography variant="h2" className="mb-6" family="serif">
                Domenii de <span className="text-therapeutic">Expertiza</span>
              </Typography>
              <Typography variant="lead">
                Cu peste 10 ani de experiență, ofer servicii specializate în multiple
                domenii ale psihologiei clinice și terapeutice.
              </Typography>
            </AnimatedSection>

            <AnimatedSection animation="stagger">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertise.map((item, index) => {
                  const Icon = item.icon
                  return (
                      <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-therapeutic-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-therapeutic-600" />
                        </div>
                        <Typography variant="h6" className="mb-2">{item.title}</Typography>
                        <Typography variant="small" className="text-gray-600">
                          {item.description}
                        </Typography>
                      </div>
                  )
                })}
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Testimonials Section */}
        <TestimonialSection>
          <AnimatedSection animation="fadeIn" className="text-center max-w-3xl mx-auto mb-16">
            <Typography variant="h2" className="text-white mb-6" family="serif">
              Mărturii de la Pacienții Noștri
            </Typography>
            <Typography variant="lead" className="text-white/90">
              Feedback-ul real de la familiile și persoanele pe care le-am ajutat
              să își depășească provocările și să își atingă potențialul.
            </Typography>
          </AnimatedSection>

          <AnimatedSection animation="stagger">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-warm-300 fill-current" />
                        ))}
                      </div>
                      <Typography variant="body" className="text-white/90 mb-6 italic">
                        "{testimonial.content}"
                      </Typography>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Smile className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-white/70">{testimonial.role}</div>
                          <div className="text-xs text-white/60">{testimonial.location}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </AnimatedSection>
        </TestimonialSection>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <AnimatedSection animation="fadeIn" className="text-center mb-12">
              <Typography variant="h2" className="mb-4" family="serif">
                Informații <span className="text-therapeutic">Cabinet</span>
              </Typography>
              <Typography variant="lead">
                Cabinetul este situat central în București, cu acces facil la transport public
              </Typography>
            </AnimatedSection>

            <AnimatedSection animation="stagger">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-6 border-therapeutic-200">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-therapeutic-100 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="w-6 h-6 text-therapeutic-600" />
                    </div>
                    <div>
                      <Typography variant="h6" className="mb-2">Locație</Typography>
                      <Typography variant="body" className="text-gray-600">
                        Strada Exemplu nr. 123<br />
                        Sector 1, București<br />
                        <span className="text-sm text-therapeutic-600">Lângă metrou Aviatorilor</span>
                      </Typography>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-calming-200">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-calming-100 rounded-full flex items-center justify-center mx-auto">
                      <Clock className="w-6 h-6 text-calming-600" />
                    </div>
                    <div>
                      <Typography variant="h6" className="mb-2">Program</Typography>
                      <Typography variant="body" className="text-gray-600">
                        Luni - Vineri: 09:00 - 18:00<br />
                        Sâmbătă: 09:00 - 14:00<br />
                        <span className="text-sm text-calming-600">Programări și în weekend</span>
                      </Typography>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-warm-200">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center mx-auto">
                      <Phone className="w-6 h-6 text-warm-600" />
                    </div>
                    <div>
                      <Typography variant="h6" className="mb-2">Contact</Typography>
                      <Typography variant="body" className="text-gray-600">
                        <a href="tel:+40722123456" className="block hover:text-warm-600 transition-colors">
                          +40 722 123 456
                        </a>
                        <a href="mailto:contact@psiholog-alina.ro" className="block hover:text-warm-600 transition-colors">
                          contact@psiholog-alina.ro
                        </a>
                        <span className="text-sm text-warm-600">Răspuns în 24h</span>
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA Section */}
        <CtaSection>
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeIn">
              <Typography variant="h2" className="text-white mb-6" family="serif">
                Începe Călătoria de Vindecare Astăzi
              </Typography>
              <Typography variant="lead" className="text-white/90 mb-8 max-w-2xl mx-auto">
                Nu aștepta să treacă de la sine. Fiecare zi de întârziere poate însemna progres pierdut.
                Programează o consultație gratuită și să vedem împreună cum te pot ajuta.
              </Typography>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-warm text-warm-900 hover:bg-warm/90 text-lg px-8">
                  <Link href="/programare">
                    <Calendar className="w-5 h-5 mr-2" />
                    Programare Gratuită
                  </Link>
                </Button>

                <span className="text-white/70">sau</span>

                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-calming-600">
                  <a href="tel:+40722123456">
                    <Phone className="w-5 h-5 mr-2" />
                    Sună acum: +40 722 123 456
                  </a>
                </Button>
              </div>

              <div className="mt-8 text-sm text-white/70">
                <Target className="w-4 h-4 inline mr-2" />
                Primul pas către o viață mai bună începe cu o conversație
              </div>
            </AnimatedSection>
          </div>
        </CtaSection>
      </>
  )
}