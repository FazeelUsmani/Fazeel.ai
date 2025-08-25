import { Button } from '@/components/ui/button';
import { Calendar, Play, Rocket, Brain, ArrowRight, Sparkles, Code, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="pt-24 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"></div>
      
      {/* Animated floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/10 rounded-lg rotate-45"
        animate={{ y: [0, 20, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-16 h-16 bg-emerald-500/10 rounded-lg"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-32 w-24 h-24 bg-rose-500/10 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <Sparkles className="mr-2 h-4 w-4" />
                Transforming Ideas into AI Reality
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-x">
                Next-Generation AI
              </span>
              <br />
              <span className="text-slate-800 dark:text-slate-200">
                Solutions That Scale
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Empowering enterprises with state-of-the-art Large Language Models, Small Language Models, 
              and custom AI solutions. From conception to deployment, we bring your AI vision to life with 
              unmatched expertise in transformer architectures and neural network optimization.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl group"
                  data-testid="button-schedule-consultation"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200"
                  data-testid="button-view-work"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Explore Case Studies
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-8 pt-4"
              variants={itemVariants}
            >
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    100+
                  </motion.span>
                </motion.div>
                <div className="text-sm text-slate-500 dark:text-slate-400">AI Models Built</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-purple-600 dark:text-purple-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    50+
                  </motion.span>
                </motion.div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Enterprise Clients</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-emerald-600 dark:text-emerald-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    99%
                  </motion.span>
                </motion.div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Success Rate</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Advanced AI visualization */}
            <div className="w-full h-[500px] relative">
              {/* Central AI Core */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full backdrop-blur-sm border border-white/20 dark:border-slate-700/50 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="h-20 w-20 text-blue-500" />
              </motion.div>
              
              {/* Orbiting elements */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/40 to-blue-500/40 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Code className="h-8 w-8 text-emerald-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Database className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/40 to-red-500/40 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Globe className="h-8 w-8 text-orange-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/40 to-blue-500/40 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Rocket className="h-8 w-8 text-indigo-400" />
                  </div>
                </div>
              </motion.div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="150"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -10 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
