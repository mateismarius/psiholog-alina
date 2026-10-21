// src/lib/colorMap.ts - Clase Tailwind literale pentru culorile de brand
// Tailwind genereaza doar clasele scrise complet in cod, deci nu construim
// niciodata nume de clase la runtime (ex: `bg-${color}-100`).

export type BrandColor = 'therapeutic' | 'calming' | 'warm' | 'empathy' | 'peace' | 'trust'

export interface ColorClasses {
    bg: string
    bg50: string
    bg100: string
    border100: string
    border200: string
    text200: string
    text400: string
    text500: string
    text600: string
    text700: string
    fill400: string
    hoverBg50: string
    hoverBg90: string
    hoverText700: string
}

export const colorMap: Record<BrandColor, ColorClasses> = {
    therapeutic: {
        bg: 'bg-therapeutic',
        bg50: 'bg-therapeutic-50',
        bg100: 'bg-therapeutic-100',
        border100: 'border-therapeutic-100',
        border200: 'border-therapeutic-200',
        text200: 'text-therapeutic-200',
        text400: 'text-therapeutic-400',
        text500: 'text-therapeutic-500',
        text600: 'text-therapeutic-600',
        text700: 'text-therapeutic-700',
        fill400: 'fill-therapeutic-400',
        hoverBg50: 'hover:bg-therapeutic-50',
        hoverBg90: 'hover:bg-therapeutic/90',
        hoverText700: 'hover:text-therapeutic-700',
    },
    calming: {
        bg: 'bg-calming',
        bg50: 'bg-calming-50',
        bg100: 'bg-calming-100',
        border100: 'border-calming-100',
        border200: 'border-calming-200',
        text200: 'text-calming-200',
        text400: 'text-calming-400',
        text500: 'text-calming-500',
        text600: 'text-calming-600',
        text700: 'text-calming-700',
        fill400: 'fill-calming-400',
        hoverBg50: 'hover:bg-calming-50',
        hoverBg90: 'hover:bg-calming/90',
        hoverText700: 'hover:text-calming-700',
    },
    warm: {
        bg: 'bg-warm',
        bg50: 'bg-warm-50',
        bg100: 'bg-warm-100',
        border100: 'border-warm-100',
        border200: 'border-warm-200',
        text200: 'text-warm-200',
        text400: 'text-warm-400',
        text500: 'text-warm-500',
        text600: 'text-warm-600',
        text700: 'text-warm-700',
        fill400: 'fill-warm-400',
        hoverBg50: 'hover:bg-warm-50',
        hoverBg90: 'hover:bg-warm/90',
        hoverText700: 'hover:text-warm-700',
    },
    empathy: {
        bg: 'bg-empathy',
        bg50: 'bg-empathy-50',
        bg100: 'bg-empathy-100',
        border100: 'border-empathy-100',
        border200: 'border-empathy-200',
        text200: 'text-empathy-200',
        text400: 'text-empathy-400',
        text500: 'text-empathy-500',
        text600: 'text-empathy-600',
        text700: 'text-empathy-700',
        fill400: 'fill-empathy-400',
        hoverBg50: 'hover:bg-empathy-50',
        hoverBg90: 'hover:bg-empathy/90',
        hoverText700: 'hover:text-empathy-700',
    },
    peace: {
        bg: 'bg-peace',
        bg50: 'bg-peace-50',
        bg100: 'bg-peace-100',
        border100: 'border-peace-100',
        border200: 'border-peace-200',
        text200: 'text-peace-200',
        text400: 'text-peace-400',
        text500: 'text-peace-500',
        text600: 'text-peace-600',
        text700: 'text-peace-700',
        fill400: 'fill-peace-400',
        hoverBg50: 'hover:bg-peace-50',
        hoverBg90: 'hover:bg-peace/90',
        hoverText700: 'hover:text-peace-700',
    },
    trust: {
        bg: 'bg-trust',
        bg50: 'bg-trust-50',
        bg100: 'bg-trust-100',
        border100: 'border-trust-100',
        border200: 'border-trust-200',
        text200: 'text-trust-200',
        text400: 'text-trust-400',
        text500: 'text-trust-500',
        text600: 'text-trust-600',
        text700: 'text-trust-700',
        fill400: 'fill-trust-400',
        hoverBg50: 'hover:bg-trust-50',
        hoverBg90: 'hover:bg-trust/90',
        hoverText700: 'hover:text-trust-700',
    },
}

// Mapare clasa de fundal -> clasa de hover (pentru datele care stocheaza direct `bg-*`)
export const hoverBgMap: Record<string, string> = {
    'bg-therapeutic': 'hover:bg-therapeutic/90',
    'bg-calming': 'hover:bg-calming/90',
    'bg-warm': 'hover:bg-warm/90',
    'bg-empathy': 'hover:bg-empathy/90',
    'bg-peace': 'hover:bg-peace/90',
    'bg-trust': 'hover:bg-trust/90',
}

// Returneaza clasele pentru o culoare; fallback pe therapeutic daca valoarea e necunoscuta
export function colorClasses(color: string): ColorClasses {
    return colorMap[color as BrandColor] ?? colorMap.therapeutic
}
