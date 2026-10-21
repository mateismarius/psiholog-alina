'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/core/Typography'
import { AnimatedSection } from '@/components/AnimatedSection'
import { colorClasses } from '@/lib/colorMap'
import { cn } from '@/lib/utils'
import { faqCategories } from './faq-data'

// Acordeon accesibil: butoane reale (tastatura, aria-expanded), iar raspunsurile
// raman in HTML (atributul hidden), ca motoarele de cautare sa le poata citi.
export function FaqAccordion() {
    const [openCategory, setOpenCategory] = useState<number | null>(0)
    const [openFaq, setOpenFaq] = useState<{ category: number, faq: number } | null>(null)

    const toggleCategory = (categoryIndex: number) => {
        setOpenCategory(openCategory === categoryIndex ? null : categoryIndex)
    }

    const toggleFaq = (categoryIndex: number, faqIndex: number) => {
        const isOpen = openFaq?.category === categoryIndex && openFaq?.faq === faqIndex
        setOpenFaq(isOpen ? null : { category: categoryIndex, faq: faqIndex })
    }

    return (
        <AnimatedSection animation="stagger">
            <div className="space-y-4 max-w-4xl mx-auto">
                {faqCategories.map((category, categoryIndex) => {
                    const Icon = category.icon
                    const colors = colorClasses(category.color)
                    const isOpen = openCategory === categoryIndex
                    const panelId = `faq-categorie-${categoryIndex}`

                    return (
                        <Card key={categoryIndex} className={`${colors.border200} overflow-hidden py-0 gap-0`}>
                            <button
                                type="button"
                                onClick={() => toggleCategory(categoryIndex)}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                className={`w-full text-left px-6 py-6 ${colors.hoverBg50} transition-colors`}
                            >
                                <span className="flex items-center justify-between gap-4">
                                    <span className="flex items-center gap-4">
                                        <span className={`w-12 h-12 shrink-0 ${colors.bg100} rounded-lg flex items-center justify-center`}>
                                            <Icon className={`w-6 h-6 ${colors.text600}`} aria-hidden="true" />
                                        </span>
                                        <span>
                                            <CardTitle className="text-xl">{category.title}</CardTitle>
                                            <Typography variant="small" className="text-gray-600">
                                                {category.faqs.length} întrebări
                                            </Typography>
                                        </span>
                                    </span>
                                    <ChevronDown
                                        className={cn('w-5 h-5 shrink-0 text-gray-500 transition-transform motion-reduce:transition-none', isOpen && 'rotate-180')}
                                        aria-hidden="true"
                                    />
                                </span>
                            </button>

                            <CardContent id={panelId} hidden={!isOpen} className="pb-6">
                                <div className="space-y-3 md:pl-16">
                                    {category.faqs.map((faq, faqIndex) => {
                                        const isFaqOpen = openFaq?.category === categoryIndex && openFaq?.faq === faqIndex
                                        const answerId = `faq-${categoryIndex}-${faqIndex}`

                                        return (
                                            <div key={faqIndex} className={`border ${colors.border100} rounded-lg overflow-hidden`}>
                                                <h3>
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleFaq(categoryIndex, faqIndex)}
                                                        aria-expanded={isFaqOpen}
                                                        aria-controls={answerId}
                                                        className={`w-full text-left p-4 min-h-11 flex items-center justify-between gap-4 ${colors.hoverBg50} transition-colors`}
                                                    >
                                                        <span className={`text-base md:text-lg font-medium tracking-tight leading-snug font-sans ${colors.text700}`}>
                                                            {faq.question}
                                                        </span>
                                                        <ChevronDown
                                                            className={cn('w-4 h-4 shrink-0 text-gray-500 transition-transform motion-reduce:transition-none', isFaqOpen && 'rotate-180')}
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </h3>

                                                <div id={answerId} hidden={!isFaqOpen} className="px-4 pb-4 border-t border-gray-100">
                                                    <Typography variant="body" className="text-gray-700 leading-relaxed pt-3">
                                                        {faq.answer}
                                                    </Typography>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </AnimatedSection>
    )
}
