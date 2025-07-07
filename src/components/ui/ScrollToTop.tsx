'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!isVisible) return null

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-6 right-6 z-50 p-3 bg-therapeutic-600 text-white rounded-full 
                shadow-therapeutic hover:bg-therapeutic-700 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-therapeutic-500 focus:ring-offset-2
                hover:scale-110 hover:shadow-xl
                ${isVisible ? 'animate-fade-in' : ''}
            `}
            aria-label="Scroll to top"
        >
            <ChevronUp className="h-5 w-5" />
        </button>
    )
}

// Wrapper component for use in server components
export function ScrollToTopWrapper() {
    return <ScrollToTop />
}