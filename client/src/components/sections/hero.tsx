import { Button } from '@/components/ui/button';
import { Calendar, Play, Rocket, Brain } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-24 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"></div>
      
      {/* Floating geometric shapes for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/10 rounded-lg rotate-45 animate-float-delayed"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
              <Rocket className="mr-2 h-4 w-4" />
              Pioneering AI Innovation
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Advanced AI Solutions
              </span>
              <br />
              <span className="text-slate-800 dark:text-slate-200">
                for Tomorrow's Challenges
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Specializing in Large Language Model development, training, and fine-tuning. 
              Transform your business with cutting-edge AI technologies and expert consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="button-schedule-consultation"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200"
                data-testid="button-view-work"
              >
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">25+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Models Trained</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            {/* Abstract AI visualization with modern tech aesthetic */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/20 dark:border-slate-700/50 flex items-center justify-center relative overflow-hidden">
              {/* Neural network visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-8 opacity-30">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                      key={i}
                      className={`w-3 h-3 ${i % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'} rounded-full animate-pulse`}
                      style={{ animationDelay: `${i * 0.25}s` }}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center z-10">
                <Brain className="h-16 w-16 text-blue-500 mb-4 mx-auto animate-float" />
                <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">AI Neural Networks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
