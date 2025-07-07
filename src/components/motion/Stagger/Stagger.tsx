// src/components/motion/Stagger/Stagger.tsx
'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface StaggerProps {
    children: ReactNode
    staggerDelay?: number
    delayChildren?: number
    className?: string
    triggerOnce?: boolean
}

export function Stagger({
                            children,
                            staggerDelay = 0.1,
                            delayChildren = 0.2,
                            className = '',
                            triggerOnce = true
                        }: StaggerProps) {
    const { ref, isInView } = useInView<HTMLDivElement>({ triggerOnce })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delayChildren
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    )
}