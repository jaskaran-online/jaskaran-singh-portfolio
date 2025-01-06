'use client'
import { Analytics } from 'react-lens-analytics'

export function AnalyticsWrapper() {
    return <Analytics projectId={process.env.PROJECT_SECRET || ''} />
}
