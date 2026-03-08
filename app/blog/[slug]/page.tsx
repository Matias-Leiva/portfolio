'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, BookOpen, Video } from 'lucide-react';
import { supabase, Post, isSupabaseConfigured } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [params.slug]);

  async function fetchPost() {
    try {
      // Skip Supabase fetch if not configured
      if (!isSupabaseConfigured) {
        throw new Error('Supabase not configured');
      }

      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', params.slug)
        .single();

      if (error) throw error;
      
      if (data) {
        setPost(data);
      }
    } catch (error) {
      console.log('Using mock data (Supabase not configured or error occurred)');
      // Use mock data if Supabase is not configured
      const mockPosts: Record<string, Post> = {
        'ai-voice-assistants-livekit': {
          id: '1',
          title: 'Building AI-Powered Voice Assistants with LiveKit',
          slug: 'ai-voice-assistants-livekit',
          content: `
# Introduction

Building real-time voice assistants has become increasingly accessible with modern tools like LiveKit and Azure Speech Services. In this post, I'll share my experience building production-ready AI voice systems.

## The Tech Stack

- **LiveKit**: Real-time WebRTC infrastructure
- **Azure Speech**: High-quality STT/TTS
- **LLM Integration**: GPT-4 for conversational AI
- **React Native**: Cross-platform mobile support

## Architecture Overview

The system consists of three main components:

1. **Audio Pipeline**: Captures and streams audio in real-time
2. **AI Processing**: Converts speech to text, processes with LLM, generates responses
3. **Playback**: Streams TTS audio back to the user

## Key Challenges

### Latency Optimization
Real-time voice requires sub-second latency. We achieved this by:
- Streaming audio chunks instead of full recordings
- Parallel processing of STT and LLM requests
- Caching common responses

### Error Handling
Network issues and API failures need graceful handling:
- Fallback to cached responses
- Automatic reconnection logic
- User-friendly error messages

## Results

The final system processes voice inputs in under 1.5 seconds on average, providing a natural conversational experience.

## Conclusion

Building AI voice assistants is challenging but incredibly rewarding. The key is choosing the right tools and optimizing every step of the pipeline.
          `,
          type: 'blog',
          cover_image: '/placeholder-blog-1.jpg',
          published_at: '2024-01-15T10:00:00Z',
          created_at: '2024-01-15T10:00:00Z',
        },
        'react-native-best-practices-2024': {
          id: '2',
          title: 'React Native Best Practices for 2024',
          slug: 'react-native-best-practices-2024',
          content: `
# Modern React Native Development

React Native continues to evolve, and 2024 brings new patterns and practices that make mobile development more efficient and enjoyable.

## Performance Optimization

### Use React.memo Wisely
Memoization prevents unnecessary re-renders:
- Profile before optimizing
- Focus on expensive components
- Don't over-optimize

### FlatList Best Practices
- Set proper keyExtractor
- Use getItemLayout when possible
- Implement pagination for large lists

## State Management

Modern approaches include:
- Zustand for simple state
- Redux Toolkit for complex apps
- React Query for server state

## Navigation

React Navigation 6+ offers improved TypeScript support and better performance.

## Testing

- Jest for unit tests
- Detox for E2E testing
- Regular device testing

## Conclusion

Following these practices leads to maintainable, performant React Native applications.
          `,
          type: 'blog',
          cover_image: '/placeholder-blog-2.jpg',
          published_at: '2024-01-10T10:00:00Z',
          created_at: '2024-01-10T10:00:00Z',
        },
      };
      
      const mockPost = mockPosts[params.slug];
      if (mockPost) {
        setPost(mockPost);
      }
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Type Badge */}
            <div className="mb-4">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                post.type === 'blog'
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                  : 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
              }`}>
                {post.type === 'blog' ? (
                  <>
                    <BookOpen className="w-4 h-4" />
                    Blog Post
                  </>
                ) : (
                  <>
                    <Video className="w-4 h-4" />
                    Video Blog
                  </>
                )}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-zinc-600 dark:text-zinc-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.published_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 min read</span>
              </div>
            </div>

            {/* Cover Image */}
            {post.cover_image && (
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-zinc-900 dark:prose-headings:text-white prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-zinc-900 dark:prose-strong:text-white prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-950">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>
        </div>
      </article>

      {/* Author Section */}
      <section className="py-12 bg-white dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                ML
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Matias Leiva
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Fullstack Developer specializing in AI-driven systems, web, and mobile applications. 
                  Passionate about building innovative solutions that make a difference.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
