'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Text */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Message */}
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 text-zinc-900 dark:text-white font-medium transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              href="/about"
              className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all text-left"
            >
              <div className="text-2xl mb-2">💼</div>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">View Skills</div>
            </Link>
            
            <Link
              href="/blog"
              className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all text-left"
            >
              <div className="text-2xl mb-2">📝</div>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">Read Blog</div>
            </Link>
            
            <Link
              href="/contact"
              className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all text-left"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">Get in Touch</div>
            </Link>
            
            <a
              href="https://github.com/Matias-Leiva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all text-left"
            >
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">GitHub Profile</div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
