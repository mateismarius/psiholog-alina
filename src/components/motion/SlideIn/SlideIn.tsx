// src/components/motion/SlideIn/SlideIn.tsx
'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface SlideInProps {
    children: ReactNode
    direction?: 'left' | 'right' | 'top' | 'bottom'
    delay?: number
    duration?: number
    distance?: number
    className?: string
    triggerOnce?: boolean
}

export function SlideIn({
                            children,
                            direction = 'left',
                            delay = 0,
                            duration = 0.6,
                            distance = 60,
                            className = '',
                            triggerOnce = true
                        }: SlideInProps) {
    const { ref, isInView } = useInView<HTMLDivElement>({ triggerOnce })

    const getVariants = ():Variants => {
        const directionMap = {
            left: { x: -distance, y: 0 },
            right: { x: distance, y: 0 },
            top: { x: 0, y: -distance },
            bottom: { x: 0, y: distance }
        }

        return {
            hidden: {
                opacity: 0,
                ...directionMap[direction]
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration,
                    delay,
                    ease: "easeOut"
                }
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={className}
        >
            {children}
        </motion.div>
    )
}