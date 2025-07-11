// src/hooks/useInView.ts - Custom hook for intersection observer
import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
    threshold?: number
    rootMargin?: string
    triggerOnce?: boolean
}

export function useInView<T extends HTMLElement = HTMLDivElement>(options: UseInViewOptions = {}) {
    const [isInView, setIsInView] = useState(false)
    const [hasTriggered, setHasTriggered] = useState(false)
    const ref = useRef<T>(null)

    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    if (triggerOnce) {
                        setHasTriggered(true)
                    }
                } else if (!triggerOnce || !hasTriggered) {
                    setIsInView(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [threshold, rootMargin, triggerOnce, hasTriggered])

    return { ref, isInView }
}