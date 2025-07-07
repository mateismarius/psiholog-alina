// src/components/layout/index.ts
import {Facebook, Instagram, Linkedin, Twitter} from "lucide-react";

export { Header } from './Header/Header'
export { Footer } from './Footer/Footer'
export { Layout } from './Layout/Layout'

// Navigation Data
export const navigationItems = [
    { name: 'Acasă', href: '/' },
    {
        name: 'Servicii',
        children: [
            {
                name: 'Site-uri E-commerce',
                href: '/servicii/ecommerce',
                description: 'Magazine online cu WordPress și Shopify'
            },
            {
                name: 'Site-uri de Prezentare',
                href: '/servicii/prezentare',
                description: 'Site-uri corporate și de servicii'
            },
            {
                name: 'Marketing Digital',
                href: '/servicii/marketing',
                description: 'Google Ads, Facebook, Instagram, TikTok'
            },
            {
                name: 'SEO & Consultanță',
                href: '/servicii/seo',
                description: 'Optimizare și consultanță business'
            },
            {
                name: 'Servicii Administrative',
                href: '/servicii/administrative',
                description: 'Înființări firme, SEAP, asociații'
            },
            {
                name: 'Hosting & Mentenanță',
                href: '/servicii/hosting',
                description: 'Hosting și administrare site-uri'
            }
        ]
    },
    { name: 'Despre Noi', href: '/despre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
]

export const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter }
]

export const footerServices = [
    { name: 'Site-uri E-commerce', href: '/servicii/ecommerce' },
    { name: 'Site-uri de Prezentare', href: '/servicii/prezentare' },
    { name: 'Marketing Digital', href: '/servicii/marketing' },
    { name: 'SEO & Consultanță', href: '/servicii/seo' },
    { name: 'Hosting & Mentenanță', href: '/servicii/hosting' }
]

export const footerCompany = [
    { name: 'Despre Noi', href: '/despre' },
    { name: 'Portofoliu', href: '/portofoliu' },
    { name: 'Blog', href: '/blog' },
    { name: 'Cariere', href: '/cariere' },
    { name: 'Contact', href: '/contact' }
]