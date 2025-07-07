// src/components/motion/Scale/Scale.tsx
'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface ScaleProps {
    children: ReactNode
    delay?: number
    duration?: number
    initialScale?: number
    className?: string
    triggerOnce?: boolean
}

export function Scale({
                          children,
                          delay = 0,
                          duration = 0.5,
                          initialScale = 0.8,
                          className = '',
                          triggerOnce = true
                      }: ScaleProps) {
    const { ref, isInView } = useInView<HTMLDivElement>({ triggerOnce })

    const variants: Variants = {
        hidden: {
            opacity: 0,
            scale: initialScale
        },
        visible: {
            opacity: 1,
            scale: 1,
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