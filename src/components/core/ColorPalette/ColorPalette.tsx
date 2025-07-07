// src/components/core/ColorPalette/ColorPalette.tsx
import { Typography } from '../Typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ColorPalette() {
    const colorGroups = [
        {
            name: "Primary Colors",
            colors: [
                { name: "Agency Blue", class: "bg-agency-blue", textClass: "text-white" },
                { name: "Agency Blue Light", class: "bg-agency-blue-light", textClass: "text-agency-blue-dark" },
                { name: "Agency Blue Dark", class: "bg-agency-blue-dark", textClass: "text-white" },
            ]
        },
        {
            name: "Accent Colors",
            colors: [
                { name: "Agency Accent", class: "bg-agency-accent", textClass: "text-agency-gray-dark" },
                { name: "Accent Light", class: "bg-agency-accent-light", textClass: "text-agency-accent-dark" },
                { name: "Accent Dark", class: "bg-agency-accent-dark", textClass: "text-white" },
            ]
        },
        {
            name: "Neutral Colors",
            colors: [
                { name: "Agency Gray", class: "bg-agency-gray", textClass: "text-white" },
                { name: "Gray Light", class: "bg-agency-gray-light", textClass: "text-agency-gray-dark" },
                { name: "Gray Dark", class: "bg-agency-gray-dark", textClass: "text-white" },
            ]
        },
        {
            name: "Status Colors",
            colors: [
                { name: "Success", class: "bg-success", textClass: "text-white" },
                { name: "Warning", class: "bg-warning", textClass: "text-agency-gray-dark" },
                { name: "Error", class: "bg-error", textClass: "text-white" },
            ]
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorGroups.map((group, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {group.colors.map((color, colorIndex) => (
                                <div key={colorIndex} className="space-y-2">
                                    <div className={`${color.class} rounded-lg p-4 min-h-[60px] flex items-center justify-center`}>
                                        <Typography variant="small" className={color.textClass}>
                                            {color.name}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
