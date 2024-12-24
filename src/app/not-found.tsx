'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">404</h1>
                <h2 className="mb-8 text-2xl font-medium text-gray-600 dark:text-gray-400">
                    Page Not Found
                </h2>
                <Link
                    href="/"
                    className="rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                    Return Home
                </Link>
            </motion.div>
        </div>
    );
} 