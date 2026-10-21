// src/components/core/LegalPage.tsx - Layout comun pentru paginile legale
import type { ReactNode } from 'react'
import { Container } from '@/components/core/Container'
import { Typography } from '@/components/core/Typography'
import { legalInfo } from '@/lib/site'

interface LegalPageProps {
    title: string
    intro: ReactNode
    children: ReactNode
}

export function LegalPage({ title, intro, children }: LegalPageProps) {
    return (
        <article className="py-16 md:py-20">
            <Container size="sm">
                <header className="mb-12 border-b border-gray-200 pb-8">
                    <Typography variant="h1" family="serif" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                        {title}
                    </Typography>
                    <p className="text-sm text-gray-600">Ultima actualizare: {legalInfo.lastUpdated}</p>
                    <div className="mt-6 text-lg leading-relaxed text-gray-700">{intro}</div>
                </header>
                <div className="space-y-10">{children}</div>
            </Container>
        </article>
    )
}

interface LegalSectionProps {
    id?: string
    title: string
    children: ReactNode
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
    return (
        <section id={id} className="scroll-mt-24">
            <Typography variant="h2" family="serif" className="mb-4 text-2xl md:text-3xl lg:text-3xl">
                {title}
            </Typography>
            <div className="space-y-4 leading-relaxed text-gray-700 [&_a]:font-medium [&_a]:text-therapeutic-600 [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
                {children}
            </div>
        </section>
    )
}
