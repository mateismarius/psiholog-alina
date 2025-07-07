'use client'

import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface AnimatedSectionProps {
    children: ReactNode
    animation?: 'fadeIn' | 'slideUp' | 'stagger'
    className?: string
    delay?: number
}

export function AnimatedSection({
                                    children,
                                    animation = 'fadeIn',
                                    className = '',
                                    delay = 0
                                }: AnimatedSectionProps) {
    const { ref, isInView } = useInView({ triggerOnce: true })

    // Folosim CSS classes în loc de framer-motion pentru a evita eroarea
    const getAnimationClass = () => {
        if (!isInView) return 'opacity-0'

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
            className={`transition-all duration-700 ${getAnimationClass()} ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                animationDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    )
}