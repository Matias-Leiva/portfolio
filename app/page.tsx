'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
            />
          </div>

          <div className="relative">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Matias Leiva
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-700 dark:text-zinc-300">
                Fullstack Developer
              </h2>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
                Specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">AI-driven systems</span>, 
                web, and mobile applications. I build end-to-end solutions from frontend to infrastructure, 
                with expertise in <span className="font-semibold text-purple-600 dark:text-purple-400">AI pipelines</span>, 
                real-time systems, and modern cloud architectures.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105"
              >
                <Code className="w-5 h-5" />
                View Skills
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 text-zinc-900 dark:text-white font-medium transition-all hover:scale-105"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">AI</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Specialist</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Highlights Section */}
      <section className="py-24 bg-white dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
              What I Do Best
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              From concept to deployment, I deliver comprehensive solutions
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI Integration',
                  description: 'Building complete AI pipelines with STT, LLM, and TTS systems. Expert in LiveKit, Azure Speech, and modern AI infrastructure.',
                  icon: '🤖',
                  color: 'blue'
                },
                {
                  title: 'Full-Stack Development',
                  description: 'End-to-end development using React, Next.js, React Native, and Expo. Creating seamless experiences across web and mobile.',
                  icon: '💻',
                  color: 'purple'
                },
                {
                  title: 'Cloud & Infrastructure',
                  description: 'Deploying scalable solutions with GCP, AWS, PostgreSQL, Redis, and Supabase. DevOps and real-time system expertise.',
                  icon: '☁️',
                  color: 'green'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all hover:shadow-lg"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
