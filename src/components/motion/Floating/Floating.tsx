// src/components/motion/Floating/Floating.tsx
'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingProps {
    children?: ReactNode
    distance?: number
    duration?: number
    className?: string
}

export function Floating({
                             children,
                             distance = 10,
                             duration = 3,
                             className = ''
                         }: FloatingProps) {
    return (
        <motion.div
            animate={{
                y: [-distance, distance, -distance],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}