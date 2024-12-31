'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function AdminLoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const supabase = createClientComponentClient()

    useEffect(() => {
        // Check if user is already logged in
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session) {
                router.replace('/admin/dashboard')
            }
        }
        checkSession()
    }, [router, supabase])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        if (!email || !password) {
            toast.error('Please enter both email and password')
            setLoading(false)
            return
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) {
                console.error('Sign in error:', error)
                toast.error(error.message || 'Invalid email or password')
                setLoading(false)
                return
            }

            if (!data?.session) {
                console.error('No session returned after sign in')
                toast.error('Authentication failed')
                setLoading(false)
                return
            }

            toast.success('Successfully signed in')
            // Use router.replace instead of push to prevent back navigation
            router.replace('/admin/dashboard')
        } catch (error) {
            console.error('Unexpected error during sign in:', error)
            toast.error('An unexpected error occurred')
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-[#0f192d] px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Admin Login
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Sign in to access the admin dashboard
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email address
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="relative block w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Password
                            </label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="relative block w-full"
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="relative flex w-full justify-center"
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
} 