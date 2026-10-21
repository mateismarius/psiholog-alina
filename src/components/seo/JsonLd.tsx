// src/components/seo/JsonLd.tsx - Randeaza date structurate schema.org
interface JsonLdProps {
    data: object
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            // Escapam '<' ca un string din date sa nu poata inchide tag-ul script
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
    )
}
