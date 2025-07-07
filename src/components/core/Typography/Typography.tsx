// components/core/Typography/Typography.tsx
import { JSX, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const typographyVariants = cva('', {
    variants: {
        variant: {
            h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight',
            h2: 'text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight',
            h3: 'text-2xl md:text-3xl font-semibold tracking-tight leading-snug',
            h4: 'text-xl md:text-2xl font-semibold tracking-tight leading-snug',
            h5: 'text-lg md:text-xl font-medium tracking-tight leading-snug',
            h6: 'text-base md:text-lg font-medium tracking-tight leading-snug',
            subtitle: 'text-lg md:text-xl text-muted-foreground leading-relaxed',
            body: 'text-base leading-relaxed',
            'body-large': 'text-lg leading-relaxed',
            small: 'text-sm text-muted-foreground leading-normal',
            lead: 'text-xl text-muted-foreground leading-relaxed font-light',
            muted: 'text-sm text-muted-foreground leading-normal',
            quote: 'text-lg md:text-xl italic leading-relaxed font-light',
            caption: 'text-xs text-muted-foreground leading-tight',
        },
        color: {
            default: 'text-foreground',
            muted: 'text-muted-foreground',
            therapeutic: 'text-therapeutic-600',
            calming: 'text-calming-600',
            warm: 'text-warm-600',
            empathy: 'text-empathy-600',
            trust: 'text-trust-600',
            peace: 'text-peace-600',
            destructive: 'text-destructive',
            white: 'text-white',
            gradient: 'bg-gradient-to-r from-therapeutic-600 to-calming-600 bg-clip-text text-transparent',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
            justify: 'text-justify',
        },
        weight: {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
        family: {
            sans: 'font-sans',
            serif: 'font-serif',
        }
    },
    defaultVariants: {
        variant: 'body',
        color: 'default',
        align: 'left',
        weight: 'normal',
        family: 'sans',
    },
})

interface TypographyProps extends VariantProps<typeof typographyVariants> {
    children: ReactNode
    className?: string
    as?: keyof JSX.IntrinsicElements
}

export function Typography({
                               children,
                               variant,
                               color,
                               align,
                               weight,
                               family,
                               className,
                               as,
                               ...props
                           }: TypographyProps) {
    const Component = as || getDefaultElement(variant || 'body')

    return (
        <Component
            className={cn(typographyVariants({ variant, color, align, weight, family }), className)}
            {...props}
        >
            {children}
        </Component>
    )
}

function getDefaultElement(variant: string): keyof JSX.IntrinsicElements {
    const elementMap: Record<string, keyof JSX.IntrinsicElements> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle: 'p',
        body: 'p',
        'body-large': 'p',
        small: 'small',
        lead: 'p',
        muted: 'p',
        quote: 'blockquote',
        caption: 'caption',
    }
    return elementMap[variant] || 'p'
}