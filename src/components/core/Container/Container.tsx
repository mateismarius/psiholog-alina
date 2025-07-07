// src/components/core/Container/Container.tsx
import {JSX, ReactNode} from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const containerVariants = cva(
    'mx-auto w-full',
    {
        variants: {
            size: {
                sm: 'max-w-3xl',
                md: 'max-w-5xl',
                lg: 'max-w-7xl',
                xl: 'max-w-screen-xl',
                full: 'max-w-none',
            },
            padding: {
                none: 'px-0',
                sm: 'px-4 sm:px-6',
                md: 'px-4 sm:px-6 lg:px-8',
                lg: 'px-6 sm:px-8 lg:px-12',
            },
        },
        defaultVariants: {
            size: 'lg',
            padding: 'md',
        },
    }
)

interface ContainerProps extends VariantProps<typeof containerVariants> {
    children: ReactNode
    className?: string
    as?: keyof JSX.IntrinsicElements
}

export function Container({
                              children,
                              size,
                              padding,
                              className,
                              as: Component = 'div',
                              ...props
                          }: ContainerProps) {
    return (
        <Component
            className={cn(containerVariants({ size, padding }), className)}
            {...props}
        >
            {children}
        </Component>
    )
}