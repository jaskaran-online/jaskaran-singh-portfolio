'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">500</h1>
        <h2 className="mb-4 text-2xl font-medium text-gray-600 dark:text-gray-400">
          Something went wrong!
        </h2>
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
