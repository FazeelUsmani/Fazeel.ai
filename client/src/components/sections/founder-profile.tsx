import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, MessageSquare, TrendingUp, User, Linkedin, Github, Mail } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';

export function FounderProfileSection() {
  const achievements = [
    { value: '8+', label: 'Years Experience', color: 'blue' },
    { value: '15+', label: 'Research Papers', color: 'purple' },
    { value: '5+', label: 'AI Patents', color: 'emerald' },
    { value: '3+', label: 'Industry Awards', color: 'rose' },
  ];

  const expertise = [
    {
      icon: Brain,
      text: 'Large Language Models (LLMs) & Transformer Architectures',
      color: 'text-blue-500'
    },
    {
      icon: Code,
      text: 'Deep Learning & Neural Network Optimization',
      color: 'text-purple-500'
    },
    {
      icon: MessageSquare,
      text: 'Natural Language Processing & Understanding',
      color: 'text-emerald-500'
    },
    {
      icon: TrendingUp,
      text: 'AI Strategy & Implementation',
      color: 'text-rose-500'
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    emerald: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    rose: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              <User className="mr-2 h-4 w-4" />
              Founder & Lead AI Researcher
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-slate-800 dark:text-slate-200">Meet </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fazeel Ahmad
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              AI researcher and entrepreneur with deep expertise in machine learning, natural language processing, 
              and large language model development. Passionate about bridging the gap between cutting-edge AI research 
              and practical business applications.
            </p>
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className={`${colorClasses[achievement.color as keyof typeof colorClasses]} border-0 text-center p-6`}
                  data-testid={`card-achievement-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold">{achievement.value}</div>
                    <div className="text-sm mt-1 opacity-80">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Key Expertise */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">Core Expertise</h3>
              <div className="space-y-3">
                {expertise.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                      <IconComponent className={`${item.color} mr-3 h-5 w-5`} />
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="link-founder-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-slate-700 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="link-founder-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="link-founder-google"
              >
                <FaGoogle className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="link-founder-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            {/* Professional photo placeholder with modern design */}
            <Card className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 border-0 text-white text-center p-8">
              <CardContent className="p-0">
                <div className="w-48 h-48 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <User className="h-24 w-24 opacity-80" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Fazeel Ahmad</h3>
                <p className="text-blue-100 mb-6">Founder & Chief AI Officer</p>
                <div className="text-sm text-blue-100">
                  <p>"Transforming businesses through intelligent AI solutions"</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
