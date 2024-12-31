'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AdminDashboard() {
    const router = useRouter()
    const supabase = createClientComponentClient()

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                router.push('/admin/login')
            }
        }

        checkUser()
    }, [router, supabase])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/admin/login')
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                    Sign Out
                </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
                    <p>Welcome to your admin dashboard!</p>
                </div>
            </div>
        </div>
    )
} 