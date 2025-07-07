'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, MapPin, Calendar, Heart, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/core'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'


const navigationItems = [
    {
        name: 'Acasă',
        href: '/',
    },
    {
        name: 'Despre Mine',
        href: '/despre-mine',
    },
    {
        name: 'Servicii',
        href: '/servicii',
        submenu: [
            {
                name: 'Ședințe de Evaluare',
                href: '/servicii/evaluare-psihologica',
                description: 'Evaluare prin observație și chestionare specializate - 50 min'
            },
            {
                name: 'Intervenție pentru Recuperare',
                href: '/servicii/interventie-recuperare',
                description: 'Terapie prin joc pentru copii cu autism, ADHD - 100 min'
            },
            {
                name: 'Psihologie Sportivă',
                href: '/servicii/psihologie-sportiva',
                description: 'Îmbunătățirea performanței sportive - cabinet/online - 50 min'
            },
            {
                name: 'Psihoterapie',
                href: '/servicii/psihoterapie',
                description: 'Pentru adulți, adolescenți și copii - cabinet/online - 50 min'
            },
            {
                name: 'Logopedie',
                href: '/servicii/logopedie',
                description: 'Recuperarea vorbirii la copii - 45 min'
            }
        ]
    },
    {
        name: 'Contact',
        href: '/contact',
    }
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <>
            {/* Top contact bar */}
            <div className="bg-therapeutic-600 text-white py-2 hidden lg:block">
                <Container>
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <a
                                    href="tel:+40722123456"
                                    className="hover:text-therapeutic-200 transition-colors"
                                >
                                    +40 722 123 456
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <a
                                    href="mailto:contact@psiholog-alina.ro"
                                    className="hover:text-therapeutic-200 transition-colors"
                                >
                                    contact@psiholog-alina.ro
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>București, Sector 1</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-therapeutic-200">Program: Lun-Vin 9:00-18:00</span>
                            <Link
                                href="/programare"
                                className="hover:text-therapeutic-200 transition-colors font-medium"
                            >
                                Programare Online
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main header */}
            <header
                className={cn(
                    "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
                    isScrolled && "shadow-lg bg-background/98"
                )}
            >
                <Container>
                    <div className="flex h-16 lg:h-20 items-center justify-between">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-3 group"
                        >
                            <motion.div
                                className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-therapeutic-gradient flex items-center justify-center text-white font-bold text-xl shadow-therapeutic"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Heart className="h-6 w-6 lg:h-7 lg:w-7" />
                            </motion.div>
                            <div className="hidden sm:block">
                                <div className="font-bold text-xl lg:text-2xl text-therapeutic-700">
                                    Psiholog Alina
                                </div>
                                <div className="text-sm lg:text-base text-muted-foreground">
                                    Specialist Terapie Autism
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-base font-medium transition-colors hover:text-therapeutic-600 focus-ring py-2 px-1",
                                            pathname === item.href
                                                ? "text-therapeutic-600 border-b-2 border-therapeutic-600"
                                                : "text-foreground"
                                        )}
                                    >
                                        {item.name}
                                        {item.submenu && <ChevronDown className="inline h-4 w-4 ml-1" />}
                                    </Link>

                                    {/* Submenu */}
                                    {item.submenu && (
                                        <AnimatePresence>
                                            {hoveredItem === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute left-0 top-full mt-2 w-80 bg-white border border-border shadow-xl rounded-lg p-4 z-50"
                                                >
                                                    <div className="space-y-3">
                                                        {item.submenu.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block p-3 rounded-md hover:bg-therapeutic-50 transition-colors group/sub"
                                                            >
                                                                <div className="font-medium text-therapeutic-800 group-hover/sub:text-therapeutic-600 transition-colors">
                                                                    {subItem.name}
                                                                </div>
                                                                <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                                                    {subItem.description}
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* CTA Button Desktop */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Button asChild variant="outline" size="sm">
                                <Link href="/contact">
                                    <Phone className="h-4 w-4 mr-2" />
                                    Contact
                                </Link>
                            </Button>
                            <Button asChild className="bg-therapeutic text-white hover:bg-therapeutic/90">
                                <Link href="/programare">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Programare
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="lg:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </Container>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden border-t bg-background/98 backdrop-blur"
                        >
                            <Container>
                                <div className="py-4 space-y-4">
                                    {navigationItems.map((item) => (
                                        <div key={item.name} className="space-y-2">
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "block py-2 text-base font-medium transition-colors",
                                                    pathname === item.href
                                                        ? "text-therapeutic-600"
                                                        : "text-foreground hover:text-therapeutic-600"
                                                )}
                                            >
                                                {item.name}
                                            </Link>

                                            {/* Mobile submenu */}
                                            {item.submenu && (
                                                <div className="pl-4 space-y-2 border-l-2 border-therapeutic-200">
                                                    {item.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block py-2 text-sm text-muted-foreground hover:text-therapeutic-600 transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Mobile contact info */}
                                    <div className="pt-4 border-t space-y-3">
                                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                            <Phone className="h-4 w-4" />
                                            <a href="tel:+40722123456">+40 722 123 456</a>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                            <Mail className="h-4 w-4" />
                                            <a href="mailto:contact@psiholog-alina.ro">contact@psiholog-alina.ro</a>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2 pt-2">
                                            <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                                                <Link href="/contact">Contact</Link>
                                            </Button>
                                            <Button asChild className="bg-therapeutic text-white hover:bg-therapeutic/90 w-full sm:w-auto">
                                                <Link href="/programare">Programare</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}