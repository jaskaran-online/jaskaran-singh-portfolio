'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AdminDashboard() {
    const router = useRouter()
    const supabase = createClientComponentClient()

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) {
                router.push('/admin/login')
            }
        }
        checkSession()
    }, [router, supabase])

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
                    <p>Welcome to your admin dashboard!</p>
                </div>
            </div>
        </div>
    )
} 