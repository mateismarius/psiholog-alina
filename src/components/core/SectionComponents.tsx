import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SectionProps {
    children: ReactNode
    className?: string
    containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    containerPadding?: 'none' | 'sm' | 'md' | 'lg'
    withContainer?: boolean
}

export function HeroSection({
                                children,
                                className,
                                containerSize = 'xl',
                                containerPadding = 'lg',
                                withContainer = true
                            }: SectionProps) {
    const content = withContainer ? (
        <Container size={containerSize} padding={containerPadding}>
            {children}
        </Container>
    ) : children

    return (
        <section
            className={cn(
                "min-h-screen flex items-center bg-therapeutic-gradient text-white relative overflow-hidden",
                className
            )}
        >
            {content}
        </section>
    )
}

export function ServicesSection({
                                    children,
                                    className,
                                    containerSize = 'lg',
                                    containerPadding = 'md',
                                    withContainer = true
                                }: SectionProps) {
    const content = withContainer ? (
        <Container size={containerSize} padding={containerPadding}>
            {children}
        </Container>
    ) : children

    return (
        <section
            className={cn(
                "py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden",
                className
            )}
        >
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-therapeutic-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-calming-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
                {content}
            </div>
        </section>
    )
}

export function TestimonialSection({
                                       children,
                                       className,
                                       containerSize = 'lg',
                                       containerPadding = 'md',
                                       withContainer = true
                                   }: SectionProps) {
    const content = withContainer ? (
        <Container size={containerSize} padding={containerPadding}>
            {children}
        </Container>
    ) : children

    return (
        <section
            className={cn(
                "py-20 bg-therapeutic-gradient text-white relative overflow-hidden",
                className
            )}
        >
            {/* Background decorations */}
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10">
                {content}
            </div>
        </section>
    )
}

// Additional specialized sections for psychology website

export function ContentSection({
                                   children,
                                   className,
                                   variant = 'default',
                                   containerSize = 'md',
                                   containerPadding = 'md'
                               }: SectionProps & { variant?: 'default' | 'alternate' | 'dark' }) {
    const variantClasses = {
        default: 'bg-white',
        alternate: 'bg-gray-50',
        dark: 'bg-gray-900 text-white'
    }

    return (
        <section className={cn("py-16 lg:py-20", variantClasses[variant], className)}>
            <Container size={containerSize} padding={containerPadding}>
                {children}
            </Container>
        </section>
    )
}

export function CtaSection({
                               children,
                               className,
                               containerSize = 'lg',
                               containerPadding = 'md'
                           }: SectionProps) {
    return (
        <section className={cn(
            "py-20 bg-calming-gradient text-white relative overflow-hidden",
            className
        )}>
            <div className="absolute inset-0 bg-black/10" />
            <Container size={containerSize} padding={containerPadding} className="relative z-10">
                {children}
            </Container>
        </section>
    )
}

export function StatsSection({
                                 children,
                                 className,
                                 containerSize = 'lg',
                                 containerPadding = 'md'
                             }: SectionProps) {
    return (
        <section className={cn("py-16 bg-white relative", className)}>
            <Container size={containerSize} padding={containerPadding}>
                {children}
            </Container>
        </section>
    )
}

