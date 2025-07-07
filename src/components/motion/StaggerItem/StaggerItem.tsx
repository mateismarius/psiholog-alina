// src/components/motion/StaggerItem/StaggerItem.tsx
'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerItemProps {
    children: ReactNode
    className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            variants={itemVariants}
            className={className}
        >
            {children}
        </motion.div>
    )
}