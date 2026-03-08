import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
              Matias Leiva
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Fullstack Developer specializing in AI-driven systems, web, and mobile applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Matias-Leiva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/matias-oscar-leiva/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </a>
              <a
                href="https://instagram.com/leivamatias.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </a>
              <a
                href="mailto:matiasoscarleiva@gmail.com"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            © {currentYear} Matias Leiva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
