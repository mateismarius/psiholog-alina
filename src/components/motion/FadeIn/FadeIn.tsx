// src/components/motion/FadeIn/FadeIn.tsx
'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface FadeInProps {
    children: ReactNode
    delay?: number
    duration?: number
    className?: string
    triggerOnce?: boolean
}

export function FadeIn({
                           children,
                           delay = 0,
                           duration = 0.6,
                           className = '',
                           triggerOnce = true
                       }: FadeInProps) {
    const { ref, isInView } = useInView({ triggerOnce })

    const variants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration,
                delay,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}