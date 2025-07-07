'use client'

import Link from 'next/link'
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Linkedin,
    Instagram,
    Heart,
    Award,
    Shield,
    Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/core/Typography'
import { Container } from '@/components/core/Container'
import { motion } from 'framer-motion'

const footerSections = {
    servicii: [
        { name: 'Terapie Autism', href: '/servicii/terapie-autism' },
        { name: 'Psihoterapie Individuală', href: '/servicii/psihoterapie-individuala' },
        { name: 'Terapie de Cuplu', href: '/servicii/terapie-cuplu' },
        { name: 'Consiliere Familială', href: '/servicii/consiliere-familiala' },
        { name: 'Evaluare Psihologică', href: '/servicii/evaluare-psihologica' },
    ],
    informatii: [
        { name: 'Despre Mine', href: '/despre-mine' },
        { name: 'Blog Psihologie', href: '/blog' },
        { name: 'Întrebări Frecvente', href: '/faq' },
        { name: 'Testimoniale', href: '/testimoniale' },
        { name: 'Resurse Utile', href: '/resurse' },
    ],
    legal: [
        { name: 'Politica de Confidențialitate', href: '/confidentialitate' },
        { name: 'Termeni și Condiții', href: '/termeni' },
        { name: 'Politica Cookies', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Cod Deontologic', href: '/cod-deontologic' },
    ]
}

const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://facebook.com/psiholog-alina-bucuresti',
        icon: Facebook,
        color: 'hover:text-blue-600'
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/psiholog-alina',
        icon: Linkedin,
        color: 'hover:text-blue-700'
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/psiholog.alina',
        icon: Instagram,
        color: 'hover:text-pink-600'
    },
]

const achievements = [
    {
        icon: Award,
        text: 'Membru CPR',
        description: 'Colegiul Psihologilor din România'
    },
    {
        icon: Users,
        text: '500+ Pacienți',
        description: 'Ajutați cu succes'
    },
    {
        icon: Shield,
        text: '10+ Ani',
        description: 'Experiență în autism'
    }
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-therapeutic-900/20 to-calming-900/20" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-therapeutic-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-calming-500/10 rounded-full blur-3xl" />

            <div className="relative">
                {/* Main footer content */}
                <Container>
                    <div className="py-16 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

                            {/* Company info */}
                            <div className="lg:col-span-1">
                                <Link href="/" className="flex items-center space-x-3 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-therapeutic-gradient flex items-center justify-center shadow-therapeutic">
                                        <Heart className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-white">Psiholog Alina</div>
                                        <div className="text-sm text-gray-300">Specialist Terapie Autism</div>
                                    </div>
                                </Link>

                                <Typography variant="body" className="text-gray-300 mb-6 leading-relaxed">
                                    Cabinet de psihologie specializat în terapie autism pentru copii și adulți.
                                    Oferim consiliere profesională într-un mediu sigur și empatic.
                                </Typography>

                                {/* Contact info */}
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-5 w-5 text-therapeutic-400 flex-shrink-0" />
                                        <a
                                            href="tel:+40722123456"
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            +40 722 123 456
                                        </a>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Mail className="h-5 w-5 text-therapeutic-400 flex-shrink-0" />
                                        <a
                                            href="mailto:contact@psiholog-alina.ro"
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            contact@psiholog-alina.ro
                                        </a>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <MapPin className="h-5 w-5 text-therapeutic-400 flex-shrink-0 mt-0.5" />
                                        <div className="text-gray-300">
                                            <div>Strada Exemplu nr. 123</div>
                                            <div>Sector 1, București</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Clock className="h-5 w-5 text-therapeutic-400 flex-shrink-0 mt-0.5" />
                                        <div className="text-gray-300">
                                            <div className="font-medium text-white mb-2">Program Cabinet:</div>
                                            <div className="text-sm space-y-1">
                                                <div>Luni - Vineri: 09:00 - 18:00</div>
                                                <div>Sâmbătă: 09:00 - 14:00</div>
                                                <div>Duminică: Închis</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services */}
                            <div>
                                <Typography variant="h6" className="text-white mb-6">
                                    Servicii Specializate
                                </Typography>
                                <ul className="space-y-3">
                                    {footerSections.servicii.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-300 hover:text-therapeutic-300 transition-colors text-sm block py-1"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Information */}
                            <div>
                                <Typography variant="h6" className="text-white mb-6">
                                    Informații Utile
                                </Typography>
                                <ul className="space-y-3">
                                    {footerSections.informatii.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-300 hover:text-calming-300 transition-colors text-sm block py-1"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter & Social */}
                            <div>
                                <Typography variant="h6" className="text-white mb-6">
                                    Rămâi la Curent
                                </Typography>

                                <div className="mb-6">
                                    <Typography variant="small" className="text-gray-300 mb-4">
                                        Abonează-te pentru articole noi despre psihologie și autism.
                                    </Typography>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <input
                                            type="email"
                                            placeholder="Email-ul tău"
                                            className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-therapeutic-500 focus:border-therapeutic-500"
                                        />
                                        <Button size="sm" className="bg-therapeutic text-white hover:bg-therapeutic/90">
                                            Abonează-te
                                        </Button>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <Typography variant="small" className="text-gray-300 mb-4">
                                        Urmărește-ne pe Social Media
                                    </Typography>
                                    <div className="flex space-x-4">
                                        {socialLinks.map((social) => {
                                            const Icon = social.icon
                                            return (
                                                <motion.a
                                                    key={social.name}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-gray-400 ${social.color} transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700`}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    aria-label={`Urmărește-ne pe ${social.name}`}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </motion.a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Achievements section */}
                        <div className="mt-12 pt-8 border-t border-gray-800">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                {achievements.map((achievement, index) => {
                                    const Icon = achievement.icon
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex items-center space-x-3 text-center md:text-left justify-center md:justify-start"
                                        >
                                            <div className="p-3 bg-therapeutic-500/20 rounded-full">
                                                <Icon className="h-6 w-6 text-therapeutic-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">{achievement.text}</div>
                                                <div className="text-sm text-gray-400">{achievement.description}</div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 bg-gray-950/50">
                    <Container>
                        <div className="py-6">
                            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                <div className="text-gray-400 text-sm text-center md:text-left">
                                    <p>
                                        © {currentYear} Cabinet Individual de Psihologie Alina. Toate drepturile rezervate.
                                    </p>
                                    <p className="mt-1">
                                        Psiholog clinician acreditat - Colegiul Psihologilor din România
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6 text-sm">
                                    {footerSections.legal.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* SEO footer */}
                            <div className="mt-6 pt-6 border-t border-gray-800">
                                <div className="text-xs text-gray-500 leading-relaxed">
                                    <p className="mb-2">
                                        <strong>Servicii psihologie București:</strong> terapie autism copii, psihoterapie individuală adulți,
                                        consiliere psihologică, evaluare psihologică, terapie de cuplu, intervenție timpurie autism,
                                        diagnostic autism, terapie comportamentală, psihoterapie cognitiv-comportamentală.
                                    </p>
                                    <p>
                                        <strong>Zone deservite:</strong> București (toate sectoarele), Ilfov, consultații online în toată România.
                                        Cabinet psihologie acreditat pentru terapie autism, anxietate, depresie, probleme comportamentale copii și adulți.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </footer>
    )
}