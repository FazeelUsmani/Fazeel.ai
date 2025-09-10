import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold">Fazeel AI Solutions</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Pioneering AI innovation through advanced language models, 
              cutting-edge research, and transformative business solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/fazeel-usmani/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/FazeelUsmani" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="link-social-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/fazeelusmani" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="link-social-twitter"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="mailto:fazeelusmani18@gmail.com" 
                className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="link-social-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-llm">LLM Development</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-training">Model Training</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-consulting">AI Consulting</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-nlp">NLP Solutions</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-research">Research & Development</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-blog">Blog</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-case-studies">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-papers">Research Papers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-docs">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-tools">AI Tools</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300 dark:text-slate-300">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:fazeelusmani18@gmail.com" className="text-white dark:text-white hover:text-blue-400 transition-colors font-medium">fazeelusmani18@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <span className="text-white">+1 (347) 283-5184</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span className="text-white">New York City, United States</span>
              </li>
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 text-sm" 
                  data-testid="input-newsletter-email"
                />
                <Button 
                  size="sm" 
                  className="px-4 bg-blue-600 hover:bg-blue-700"
                  data-testid="button-newsletter-submit"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © 2023 Fazeel AI Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-terms">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200" data-testid="link-footer-cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
