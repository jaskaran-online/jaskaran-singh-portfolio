'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { LayoutDashboard, FileEdit, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Posts',
    href: '/admin/posts',
    icon: FileEdit,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

export const AdminNav = () => {
  const pathname = usePathname();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/admin/login';
  };

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-8">
          <Link href="/admin" className="text-xl font-bold">
            Admin
          </Link>
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent',
                    pathname === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <Button variant="ghost" size="sm" className="gap-2" onClick={handleSignOut}>
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </nav>
  );
};
