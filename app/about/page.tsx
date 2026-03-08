'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Server, 
  Database, 
  Brain, 
  Cloud, 
  Wrench,
  Layers
} from 'lucide-react';

type Skill = {
  name: string;
  icon: string;
  category: string;
};

const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', icon: '🟨', category: 'Languages' },
  { name: 'TypeScript', icon: '🔷', category: 'Languages' },
  { name: 'Python', icon: '🐍', category: 'Languages' },
  { name: 'C++', icon: '⚡', category: 'Languages' },
  
  // Frontend
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
  { name: 'Rive', icon: '🎭', category: 'Frontend' },
  
  // Mobile
  { name: 'React Native', icon: '📱', category: 'Mobile' },
  { name: 'Expo', icon: '🚀', category: 'Mobile' },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Supabase', icon: '🔋', category: 'Backend' },
  { name: 'REST APIs', icon: '🔌', category: 'Backend' },
  { name: 'GraphQL', icon: '📊', category: 'Backend' },
  
  // AI/ML
  { name: 'LLMs', icon: '🧠', category: 'AI/ML' },
  { name: 'STT', icon: '🎤', category: 'AI/ML' },
  { name: 'TTS', icon: '🔊', category: 'AI/ML' },
  { name: 'Azure Speech', icon: '☁️', category: 'AI/ML' },
  { name: 'RAG', icon: '📚', category: 'AI/ML' },
  { name: 'LiveKit', icon: '🎥', category: 'AI/ML' },
  
  // Cloud/Infra
  { name: 'GCP', icon: '☁️', category: 'Cloud/Infra' },
  { name: 'AWS', icon: '🌐', category: 'Cloud/Infra' },
  { name: 'Docker', icon: '🐳', category: 'Cloud/Infra' },
  { name: 'CI/CD', icon: '🔄', category: 'Cloud/Infra' },
  
  // Databases
  { name: 'PostgreSQL', icon: '🐘', category: 'Databases' },
  { name: 'MongoDB', icon: '🍃', category: 'Databases' },
  { name: 'Redis', icon: '🔴', category: 'Databases' },
  
  // Tools
  { name: 'Git', icon: '📦', category: 'Tools' },
  { name: 'Jest', icon: '🃏', category: 'Tools' },
  { name: 'VS Code', icon: '💻', category: 'Tools' },
  { name: 'Postman', icon: '📮', category: 'Tools' },
];

const categories = [
  { name: 'Languages', icon: Code, color: 'blue' },
  { name: 'Frontend', icon: Layers, color: 'purple' },
  { name: 'Mobile', icon: Smartphone, color: 'green' },
  { name: 'Backend', icon: Server, color: 'orange' },
  { name: 'AI/ML', icon: Brain, color: 'pink' },
  { name: 'Cloud/Infra', icon: Cloud, color: 'cyan' },
  { name: 'Databases', icon: Database, color: 'red' },
  { name: 'Tools', icon: Wrench, color: 'yellow' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300',
  purple: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300',
  green: 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-green-700 dark:text-green-300',
  orange: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300',
  pink: 'bg-pink-100 dark:bg-pink-900/30 border-pink-300 dark:border-pink-700 text-pink-700 dark:text-pink-300',
  cyan: 'bg-cyan-100 dark:bg-cyan-900/30 border-cyan-300 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300',
  red: 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 text-red-700 dark:text-red-300',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              I'm a passionate fullstack developer with a strong focus on building intelligent, 
              scalable applications. From AI-powered systems to mobile apps and cloud infrastructure, 
              I love creating solutions that make a real impact.
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-24 p-8 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
          >
            <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
              <p className="text-lg leading-relaxed">
                With years of experience in fullstack development, I specialize in creating 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> AI-driven systems</span> 
                {' '}and end-to-end solutions. My expertise spans from building intuitive user interfaces 
                to architecting robust backend systems and deploying scalable cloud infrastructure.
              </p>
              <p className="text-lg leading-relaxed">
                I've worked extensively with <span className="font-semibold">AI pipelines</span>, 
                integrating speech-to-text, large language models, and text-to-speech systems into 
                production applications. Using technologies like LiveKit, Azure Speech, and modern 
                AI frameworks, I build real-time, intelligent systems that enhance user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                My development philosophy is simple: write clean, maintainable code, stay curious 
                about emerging technologies, and always prioritize user experience. Whether it's 
                React Native mobile apps, Next.js web applications, or complex cloud architectures, 
                I bring the same level of dedication and craftsmanship to every project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </motion.div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(s => s.category === category.name);
              const Icon = category.icon;
              
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${colorMap[category.color]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all cursor-pointer"
                      >
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <div className="text-sm font-medium text-zinc-900 dark:text-white">
                          {skill.name}
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-700 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          {skill.name}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Experience Highlights
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'AI Pipeline Architecture',
                description: 'Built complete AI systems integrating STT, LLM, and TTS with real-time processing using LiveKit and Azure Speech Services.',
                icon: '🤖'
              },
              {
                title: 'Mobile Development',
                description: 'Created cross-platform mobile applications with React Native and Expo, delivering seamless experiences on iOS and Android.',
                icon: '📱'
              },
              {
                title: 'Cloud Infrastructure',
                description: 'Designed and deployed scalable solutions on GCP and AWS with PostgreSQL, Redis, and Supabase for optimal performance.',
                icon: '☁️'
              },
              {
                title: 'Full-Stack Web Apps',
                description: 'Developed modern web applications using Next.js, React, and TypeScript with focus on performance and user experience.',
                icon: '💻'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
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
        </div>
      </section>
    </div>
  );
}
