// src/components/layout/Layout/Layout.tsx
import { ReactNode } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

interface LayoutProps {
    children: ReactNode
    className?: string
}

export function Layout({ children, className = '' }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className={`flex-1 pt-16 lg:pt-20 ${className}`}>
                {children}
            </main>
            <Footer />
        </div>
    )}