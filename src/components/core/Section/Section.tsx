// src/components/core/Section/Section.tsx
import React, {JSX, ReactNode} from 'react'
import { Container } from '../Container'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const sectionVariants = cva('', {
    variants: {
        spacing: {
            none: 'py-0',
            sm: 'py-8 md:py-12',
            md: 'py-12 md:py-16 lg:py-20',
            lg: 'py-16 md:py-20 lg:py-24',
            xl: 'py-20 md:py-24 lg:py-32',
        },
        background: {
            default: 'bg-background',
            muted: 'bg-muted/30',
            card: 'bg-card',
            primary: 'bg-primary text-primary-foreground',
            secondary: 'bg-secondary text-secondary-foreground',
        },
    },
    defaultVariants: {
        spacing: 'md',
        background: 'default',
    },
})

interface SectionProps extends VariantProps<typeof sectionVariants> {
    children: ReactNode
    className?: string
    containerProps?: React.ComponentProps<typeof Container>
    as?: keyof JSX.IntrinsicElements
}

export function Section({
                            children,
                            spacing,
                            background,
                            className,
                            containerProps,
                            as: Component = 'section',
                            ...props
                        }: SectionProps) {
    return (
        <Component
            className={cn(sectionVariants({ spacing, background }), className)}
            {...props}
        >
            <Container {...containerProps}>{children}</Container>
        </Component>
    )
}