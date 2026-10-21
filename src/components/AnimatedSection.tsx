'use client'

import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface AnimatedSectionProps {
    children: ReactNode
    animation?: 'fadeIn' | 'slideUp' | 'stagger'
    className?: string
    delay?: number
    // Pentru continutul vizibil la incarcare (hero): animatie doar CSS, fara a astepta JS,
    // ca textul si imaginea principala sa nu fie ascunse pana la hidratare (LCP)
    immediate?: boolean
}

export function AnimatedSection({
                                    children,
                                    animation = 'fadeIn',
                                    className = '',
                                    delay = 0,
                                    immediate = false
                                }: AnimatedSectionProps) {
    const { ref, isInView } = useInView({ triggerOnce: true })

    if (immediate) {
        return (
            <div
                className={`motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 ${className}`}
                style={{ animationDelay: `${delay}ms` }}
            >
                {children}
            </div>
        )
    }

    // Folosim CSS classes în loc de framer-motion pentru a evita eroarea
    const getAnimationClass = () => {
        // Cu miscare redusa continutul ramane vizibil, fara ascundere initiala
        if (!isInView) return 'motion-safe:opacity-0'

        switch (animation) {
            case 'fadeIn':
                return 'animate-fade-in'
            case 'slideUp':
                return 'animate-slide-up'
            case 'stagger':
                return 'animate-stagger'
            default:
                return 'animate-fade-in'
        }
    }

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 motion-reduce:transition-none ${getAnimationClass()} ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                animationDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    )
}