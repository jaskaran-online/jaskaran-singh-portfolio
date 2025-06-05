'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AdminDashboard() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin/login');
      }
    };

    checkUser();
  }, [router, supabase]);

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Add your admin dashboard content here */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Quick Stats</h2>
          <p>Welcome to your admin dashboard!</p>
        </div>
      </div>
    </div>
  );
}
