// src/components/core/RelatedServices.tsx - Linkuri interne catre celelalte servicii
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/core/Container'
import { Typography } from '@/components/core/Typography'
import { services } from '@/lib/site'

interface RelatedServicesProps {
    // Calea serviciului curent, exclusa din lista
    currentPath: string
}

export function RelatedServices({ currentPath }: RelatedServicesProps) {
    const others = services.filter((service) => service.href !== currentPath)

    return (
        <section aria-labelledby="alte-servicii" className="py-16 bg-gray-50">
            <Container>
                <Typography id="alte-servicii" variant="h3" className="mb-8 text-center" family="serif">
                    Alte servicii
                </Typography>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {others.map((service) => (
                        <li key={service.href}>
                            <Link
                                href={service.href}
                                className="group flex h-full min-h-11 items-center justify-between gap-3 rounded-xl border border-therapeutic-100 bg-white px-5 py-4 font-medium text-therapeutic-700 shadow-sm transition-colors hover:border-therapeutic-300 hover:bg-therapeutic-50"
                            >
                                <span>{service.name}</span>
                                <ArrowRight
                                    className="h-4 w-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
