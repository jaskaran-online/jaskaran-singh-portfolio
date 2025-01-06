'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Don't show admin navigation on login page
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  // Show nothing while checking auth
  if (isLoading) {
    return null;
  }

  // If not authenticated and not on login page, show nothing (will redirect in page component)
  if (!isAuthenticated && !isLoginPage) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f192d]">
      {!isLoginPage && isAuthenticated && (
        <nav className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-[#0f192d]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link
                  href="/admin"
                  className="flex items-center text-xl font-semibold text-gray-900 dark:text-white"
                >
                  Admin
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href="/admin"
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      pathname === '/admin'
                        ? 'border-b-2 border-blue-500 text-gray-900 dark:text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/admin/posts"
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      pathname === '/admin/posts'
                        ? 'border-b-2 border-blue-500 text-gray-900 dark:text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Posts
                  </Link>
                  <Link
                    href="/admin/settings"
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      pathname === '/admin/settings'
                        ? 'border-b-2 border-blue-500 text-gray-900 dark:text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={handleSignOut}
                  className="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
      <main className={isLoginPage ? '' : 'mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'}>
        {(isLoginPage || isAuthenticated) && children}
      </main>
    </div>
  );
}
