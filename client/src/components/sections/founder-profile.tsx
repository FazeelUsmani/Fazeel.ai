import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, MessageSquare, TrendingUp, User, Linkedin, Github, Mail, Award, BookOpen, Users, Target, Zap, Database, Globe, Cpu } from 'lucide-react';
import { FaGoogle, FaMedium, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function FounderProfileSection() {
  const achievements = [
    { value: '10+', label: 'Years in AI/ML', color: 'blue', icon: Award },
    { value: '20+', label: 'Research Papers', color: 'purple', icon: BookOpen },
    { value: '8+', label: 'Patents Filed', color: 'emerald', icon: Target },
    { value: '5+', label: 'Industry Awards', color: 'rose', icon: Zap },
  ];

  const expertise = [
    {
      icon: Brain,
      title: 'LLM Architecture',
      text: 'Expert in GPT, BERT, T5, and custom transformer architectures. Specialized in multi-modal models and cross-lingual systems.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Code,
      title: 'Model Optimization',
      text: 'Advanced techniques in quantization, pruning, and knowledge distillation. Experience with ONNX, TensorRT, and edge deployment.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Database,
      title: 'Training at Scale',
      text: 'Distributed training on multi-GPU/TPU clusters. Expertise in data parallelism, model parallelism, and pipeline parallelism.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      icon: Globe,
      title: 'Production Systems',
      text: 'End-to-end ML pipelines, A/B testing, model monitoring, and continuous learning systems for enterprise deployments.',
      color: 'text-rose-500',
      bgColor: 'bg-rose-50 dark:bg-rose-900/20'
    },
  ];
  
  const publications = [
    {
      title: "Efficient Fine-Tuning of Large Language Models for Domain-Specific Tasks",
      venue: "NeurIPS 2024",
      year: "2024"
    },
    {
      title: "Cross-Lingual Transfer Learning in Low-Resource Settings",
      venue: "ACL 2023",
      year: "2023"
    },
    {
      title: "Optimizing Transformer Models for Edge Deployment",
      venue: "ICML 2023",
      year: "2023"
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    emerald: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    rose: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400">
                <User className="mr-2 h-4 w-4" />
                Founder & Chief AI Architect
              </Badge>
            </motion.div>
            
            <motion.h2 className="text-4xl lg:text-5xl font-bold" variants={itemVariants}>
              <span className="text-slate-800 dark:text-slate-200">Meet </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                Fazeel Usmani
              </span>
            </motion.h2>
            
            <motion.p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed" variants={itemVariants}>
              Visionary AI researcher and technology leader with a decade of experience in building state-of-the-art language models 
              and AI systems. Pioneered breakthrough techniques in efficient model training and deployment, reducing computational 
              costs by 60% while maintaining performance. Led AI initiatives at Fortune 500 companies and startups, delivering 
              solutions that process billions of requests daily. Published researcher with contributions to major AI conferences 
              and holder of multiple patents in neural architecture design.
            </motion.p>
            
            {/* Achievements Grid */}
            <motion.div className="grid grid-cols-2 gap-6" variants={itemVariants}>
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card 
                      className={`${colorClasses[achievement.color as keyof typeof colorClasses]} border-0 p-6 cursor-pointer relative overflow-hidden group`}
                      data-testid={`card-achievement-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300"></div>
                      <CardContent className="p-0 relative z-10">
                        <IconComponent className="h-6 w-6 mb-2 opacity-80" />
                        <div className="text-3xl font-bold">{achievement.value}</div>
                        <div className="text-sm mt-1 opacity-80">{achievement.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
            
            {/* Technical Expertise Cards */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Technical Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className={`${item.bgColor} rounded-lg p-4 border border-slate-200 dark:border-slate-700`}
                    >
                      <div className="flex items-start space-x-3">
                        <IconComponent className={`${item.color} h-5 w-5 mt-1 flex-shrink-0`} />
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{item.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
              <motion.a 
                href="#" 
                className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="link-founder-linkedin"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 bg-slate-700 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="link-founder-github"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 bg-sky-500 hover:bg-sky-600 text-white rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="link-founder-twitter"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 bg-slate-900 hover:bg-black text-white rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="link-founder-medium"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaMedium className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="link-founder-google"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGoogle className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Professional Profile Card */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 border-0 text-white p-8 animate-pulse-glow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
              <CardContent className="p-0 relative z-10">
                <div className="w-48 h-48 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border-4 border-white/30">
                  <User className="h-24 w-24 opacity-90" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Fazeel Usmani</h3>
                <p className="text-blue-100 mb-4 text-lg">Founder & Chief AI Architect</p>
                <div className="text-sm text-blue-100 italic mb-6">
                  <p>"Building the future of AI, one model at a time"</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <Button 
                    variant="secondary" 
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    data-testid="button-download-cv"
                  >
                    Download CV
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    data-testid="button-view-publications"
                  >
                    Publications
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Publications */}
            <Card className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-purple-500" />
                  Recent Publications
                </h3>
                <div className="space-y-3">
                  {publications.map((pub, index) => (
                    <motion.div 
                      key={index}
                      className="border-l-2 border-purple-500 pl-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-r transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{pub.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {pub.venue} • {pub.year}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Tech Stack */}
            <Card className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 flex items-center">
                  <Cpu className="mr-2 h-5 w-5 text-blue-500" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'TensorFlow', 'JAX', 'Transformers', 'CUDA', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure'].map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
