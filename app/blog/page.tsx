'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Filter, BookOpen, Video } from 'lucide-react';
import { supabase, Post, isSupabaseConfigured } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<'all' | 'blog' | 'vlog'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.type === filter));
    }
  }, [filter, posts]);

  async function fetchPosts() {
    try {
      // Skip Supabase fetch if not configured
      if (!isSupabaseConfigured) {
        throw new Error('Supabase not configured');
      }

      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;
      
      if (data) {
        setPosts(data);
        setFilteredPosts(data);
      }
    } catch (error) {
      console.log('Using mock data (Supabase not configured or error occurred)');
      // Use mock data if Supabase is not configured
      const mockPosts: Post[] = [
        {
          id: '1',
          title: 'Building AI-Powered Voice Assistants with LiveKit',
          slug: 'ai-voice-assistants-livekit',
          content: 'Learn how to build real-time voice assistants using LiveKit, Azure Speech, and modern AI models.',
          type: 'blog',
          cover_image: '/placeholder-blog-1.jpg',
          published_at: '2024-01-15T10:00:00Z',
          created_at: '2024-01-15T10:00:00Z',
        },
        {
          id: '2',
          title: 'React Native Best Practices for 2024',
          slug: 'react-native-best-practices-2024',
          content: 'Discover the latest patterns and practices for building performant React Native applications.',
          type: 'blog',
          cover_image: '/placeholder-blog-2.jpg',
          published_at: '2024-01-10T10:00:00Z',
          created_at: '2024-01-10T10:00:00Z',
        },
        {
          id: '3',
          title: 'Deploying Full-Stack Apps on GCP',
          slug: 'fullstack-gcp-deployment',
          content: 'A comprehensive guide to deploying Next.js applications with PostgreSQL on Google Cloud Platform.',
          type: 'vlog',
          cover_image: '/placeholder-vlog-1.jpg',
          published_at: '2024-01-05T10:00:00Z',
          created_at: '2024-01-05T10:00:00Z',
        },
        {
          id: '4',
          title: 'Understanding RAG: Retrieval-Augmented Generation',
          slug: 'understanding-rag-systems',
          content: 'Deep dive into RAG systems and how they enhance LLM capabilities with external knowledge.',
          type: 'blog',
          cover_image: '/placeholder-blog-3.jpg',
          published_at: '2024-01-01T10:00:00Z',
          created_at: '2024-01-01T10:00:00Z',
        },
      ];
      setPosts(mockPosts);
      setFilteredPosts(mockPosts);
    } finally {
      setLoading(false);
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Blog & Vlogs
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Sharing insights, tutorials, and experiences from my journey in software development
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center items-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <Filter className="w-5 h-5" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('blog')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'blog'
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Blogs
              </button>
              <button
                onClick={() => setFilter('vlog')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'vlog'
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                <Video className="w-4 h-4" />
                Vlogs
              </button>
            </div>
          </motion.div>

          {/* Posts Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                No posts found. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-xl">
                      {/* Cover Image */}
                      <div className="relative aspect-video bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                        {post.cover_image ? (
                          <Image
                            src={post.cover_image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            {post.type === 'blog' ? (
                              <BookOpen className="w-16 h-16 text-zinc-400" />
                            ) : (
                              <Video className="w-16 h-16 text-zinc-400" />
                            )}
                          </div>
                        )}
                        
                        {/* Type Badge */}
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.type === 'blog'
                              ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                              : 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                          }`}>
                            {post.type === 'blog' ? 'Blog' : 'Vlog'}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                          {post.content}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.published_at)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>5 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Want to learn more?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Subscribe to my newsletter for the latest updates on AI, web development, and more.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
