'use client'

import React, { useState } from 'react'
import { colors } from '@/lib/colors'
import { typography } from '@/lib/typography'

// Componenta pentru preview culori
export function ColorPalette() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Paleta de Culori</h2>

            {/* Culori principale */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Therapeutic (Principal)</h3>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                    {Object.entries(colors.therapeutic).map(([scale, color]) => (
                        <div key={scale} className="text-center">
                            <div
                                className="w-16 h-16 rounded-lg shadow-sm border border-gray-200 mb-2"
                                style={{ backgroundColor: color }}
                            />
                            <div className="text-xs font-medium text-gray-600">{scale}</div>
                            <div className="text-xs text-gray-500 font-mono">{color}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Culori secundare */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Calming (Secundar)</h3>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                    {Object.entries(colors.calming).map(([scale, color]) => (
                        <div key={scale} className="text-center">
                            <div
                                className="w-16 h-16 rounded-lg shadow-sm border border-gray-200 mb-2"
                                style={{ backgroundColor: color }}
                            />
                            <div className="text-xs font-medium text-gray-600">{scale}</div>
                            <div className="text-xs text-gray-500 font-mono">{color}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Culori accent */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Warm (Accent)</h3>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                    {Object.entries(colors.warm).map(([scale, color]) => (
                        <div key={scale} className="text-center">
                            <div
                                className="w-16 h-16 rounded-lg shadow-sm border border-gray-200 mb-2"
                                style={{ backgroundColor: color }}
                            />
                            <div className="text-xs font-medium text-gray-600">{scale}</div>
                            <div className="text-xs text-gray-500 font-mono">{color}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradiente */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Gradiente</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(colors.gradients).map(([name, gradient]) => (
                        <div key={name} className="text-center">
                            <div
                                className="w-full h-20 rounded-lg shadow-sm border border-gray-200 mb-2"
                                style={{ background: gradient }}
                            />
                            <div className="text-sm font-medium text-gray-700 capitalize">{name}</div>
                            <div className="text-xs text-gray-500 font-mono truncate">{gradient}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Culori psihologie */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Psychology Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(colors.psychology).map(([name, color]) => (
                        <div key={name} className="text-center">
                            <div
                                className="w-20 h-20 rounded-full shadow-sm border border-gray-200 mb-2 mx-auto"
                                style={{ backgroundColor: color }}
                            />
                            <div className="text-sm font-medium text-gray-700 capitalize">{name}</div>
                            <div className="text-xs text-gray-500 font-mono">{color}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Componenta pentru preview tipografie
export function TypographyShowcase() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Sistem Tipografic</h2>

            {/* Titluri */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold">Ierarhia Titlurilor</h3>
                <div className="space-y-4">
                    <div>
                        <h1 className="typography-h1">H1 - Titlu Principal</h1>
                        <p className="text-sm text-gray-500 mt-1">Merriweather, 48px, Bold</p>
                    </div>
                    <div>
                        <h2 className="typography-h2">H2 - Titlu Secundar</h2>
                        <p className="text-sm text-gray-500 mt-1">Merriweather, 36px, Semibold</p>
                    </div>
                    <div>
                        <h3 style={typography.styles.h3}>H3 - Subtitlu</h3>
                        <p className="text-sm text-gray-500 mt-1">Inter, 30px, Semibold</p>
                    </div>
                    <div>
                        <h4 style={typography.styles.h4}>H4 - Titlu Sectiune</h4>
                        <p className="text-sm text-gray-500 mt-1">Inter, 24px, Semibold</p>
                    </div>
                </div>
            </div>

            {/* Text body */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold">Text pentru Continut</h3>
                <div className="space-y-4">
                    <div>
                        <p style={typography.styles['body-large']}>
                            Body Large - Text pentru introduceri si paragrafe importante.
                            Folosit pentru a atrage atentia asupra informatiilor cheie.
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Inter, 18px, Regular</p>
                    </div>
                    <div>
                        <p style={typography.styles.body}>
                            Body Regular - Text standard pentru continut. Acesta este textul principal
                            folosit pentru majoritatea continutului de pe site. Oferă o experienta de
                            citire confortabila si accesibila.
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Inter, 16px, Regular</p>
                    </div>
                    <div>
                        <p style={typography.styles['body-small']}>
                            Body Small - Text pentru detalii secundare, caption-uri si informatii suplimentare.
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Inter, 14px, Regular</p>
                    </div>
                </div>
            </div>

            {/* Quote */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Quote si Testimoniale</h3>
                <blockquote style={typography.styles.quote} className="border-l-4 border-blue-500 pl-6">
                    &quot;Psihologul Alina mi-a oferit exact suportul de care aveam nevoie.
                    Profesionalismul si empatia ei au facut diferenta in parcursul meu de recuperare.&quot;
                </blockquote>
                <p className="text-sm text-gray-500">Merriweather, 20px, Italic</p>
            </div>

            {/* Font families */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Font Families</h3>
                <div className="space-y-3">
                    <div>
                        <p className="font-sans text-lg">Inter - Font principal pentru UI si body text</p>
                        <p className="text-sm text-gray-500">abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</p>
                    </div>
                    <div>
                        <p className="font-serif text-lg">Merriweather - Font pentru titluri si quote-uri</p>
                        <p className="text-sm text-gray-500">abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Componenta pentru preview animatii
export function AnimationShowcase() {
    const [activeAnimation, setActiveAnimation] = useState<string | null>(null)

    const triggerAnimation = (animationName: string) => {
        setActiveAnimation(animationName)
        setTimeout(() => setActiveAnimation(null), 1000)
    }

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Sistem de Animatii</h2>

            {/* Animatii de baza */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold">Animatii de Baza</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                        onClick={() => triggerAnimation('fadeIn')}
                        className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    >
                        <div
                            className={`w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-3 ${
                                activeAnimation === 'fadeIn' ? 'animate-fade-in' : ''
                            }`}
                        />
                        <p className="text-sm font-medium">Fade In</p>
                    </button>

                    <button
                        onClick={() => triggerAnimation('scaleIn')}
                        className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-green-300 transition-colors"
                    >
                        <div
                            className={`w-16 h-16 bg-green-500 rounded-lg mx-auto mb-3 ${
                                activeAnimation === 'scaleIn' ? 'animate-scale-in' : ''
                            }`}
                        />
                        <p className="text-sm font-medium">Scale In</p>
                    </button>

                    <button
                        onClick={() => triggerAnimation('fadeInUp')}
                        className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                    >
                        <div
                            className={`w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-3 ${
                                activeAnimation === 'fadeInUp' ? 'animate-fade-in-up' : ''
                            }`}
                        />
                        <p className="text-sm font-medium">Fade In Up</p>
                    </button>

                    <button
                        onClick={() => triggerAnimation('bounce')}
                        className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
                    >
                        <div
                            className={`w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-3 ${
                                activeAnimation === 'bounce' ? 'animate-bounce' : ''
                            }`}
                        />
                        <p className="text-sm font-medium">Bounce</p>
                    </button>
                </div>
            </div>

            {/* Animatii continue */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold">Animatii Continue</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-3 animate-float" />
                        <p className="text-sm font-medium">Float</p>
                    </div>

                    <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-3 animate-breathe" />
                        <p className="text-sm font-medium">Breathe</p>
                    </div>

                    <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-3 animate-pulse" />
                        <p className="text-sm font-medium">Pulse</p>
                    </div>

                    <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-3 animate-spin" />
                        <p className="text-sm font-medium">Spin</p>
                    </div>
                </div>
            </div>

            {/* Hover effects */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold">Hover Effects</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-6 bg-white border-2 border-gray-200 rounded-lg hover-lift cursor-pointer">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-3" />
                        <p className="text-sm font-medium">Hover Lift</p>
                    </div>

                    <div className="p-6 bg-white border-2 border-gray-200 rounded-lg hover-scale cursor-pointer">
                        <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-3" />
                        <p className="text-sm font-medium">Hover Scale</p>
                    </div>

                    <div className="p-6 bg-white border-2 border-gray-200 rounded-lg hover-glow cursor-pointer">
                        <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-3" />
                        <p className="text-sm font-medium">Hover Glow</p>
                    </div>
                </div>
            </div>

            {/* Durata si easing */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Durata si Easing</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Durata</h4>
                            <ul className="space-y-1 text-gray-600">
                                <li>Fast: 150ms</li>
                                <li>Normal: 300ms</li>
                                <li>Slow: 500ms</li>
                                <li>Slower: 800ms</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Easing</h4>
                            <ul className="space-y-1 text-gray-600">
                                <li>Smooth</li>
                                <li>Bounce</li>
                                <li>Sharp</li>
                                <li>Elastic</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Componenta pentru preview butoane
export function ButtonShowcase() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Componente Butoane</h2>

            {/* Variante butoane */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold">Variante</h3>
                <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover-lift font-medium">
                        Primary
                    </button>
                    <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover-lift font-medium hover:bg-blue-50">
                        Secondary
                    </button>
                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover-lift font-medium">
                        Success
                    </button>
                    <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover-lift font-medium">
                        Warning
                    </button>
                    <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover-lift font-medium">
                        Danger
                    </button>
                </div>
            </div>

            {/* Marimi butoane */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold">Marimi</h3>
                <div className="flex flex-wrap items-end gap-4">
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover-lift font-medium">
                        Small
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover-lift font-medium">
                        Medium
                    </button>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover-lift font-medium">
                        Large
                    </button>
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover-lift font-medium">
                        Extra Large
                    </button>
                </div>
            </div>

            {/* Stari butoane */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold">Stari</h3>
                <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover-lift font-medium">
                        Normal
                    </button>
                    <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium">
                        Hover
                    </button>
                    <button className="px-6 py-3 bg-blue-800 text-white rounded-lg font-medium">
                        Active
                    </button>
                    <button className="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed" disabled>
                        Disabled
                    </button>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2">
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Loading
                    </button>
                </div>
            </div>
        </div>
    )
}

// Componenta principala showcase
export function DesignSystemShowcase() {
    const [activeTab, setActiveTab] = useState('colors')

    const tabs = [
        { id: 'colors', label: 'Culori', component: ColorPalette },
        { id: 'typography', label: 'Tipografie', component: TypographyShowcase },
        { id: 'animations', label: 'Animatii', component: AnimationShowcase },
        { id: 'buttons', label: 'Butoane', component: ButtonShowcase },
    ]

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || ColorPalette

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Design System - Cabinet Psihologie
                </h1>
                <p className="text-lg text-gray-600">
                    Sistem de design coerent pentru site-ul de psiholog, optimizat pentru încredere si calm.
                </p>
            </div>

            {/* Tabs */}
            <div className="mb-8">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="bg-white">
                <ActiveComponent />
            </div>
        </div>
    )
}