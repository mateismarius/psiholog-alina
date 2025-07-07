// src/components/motion/SlideUp/SlideUp.tsx
'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface SlideUpProps {
    children: ReactNode
    delay?: number
    duration?: number
    distance?: number
    className?: string
    triggerOnce?: boolean
}

export function SlideUp({
                            children,
                            delay = 0,
                            duration = 0.6,
                            distance = 60,
                            className = '',
                            triggerOnce = true
                        }: SlideUpProps) {
    const { ref, isInView } = useInView<HTMLDivElement>({ triggerOnce })

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: distance
        },
        visible: {
            opacity: 1,
            y: 0,
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