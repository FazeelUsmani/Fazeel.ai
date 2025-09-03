import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, ServerCog, Lightbulb, Microchip, MessageSquare, FlaskConical, Check, Calendar, Download, ArrowRight, TrendingUp, Brain, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Code,
    title: 'LLM Development',
    description: 'Custom Large Language Model architecture design, implementation, and optimization for domain-specific applications and enterprise use cases.',
    features: ['Custom Model Architecture', 'Performance Optimization', 'Scalable Deployment'],
    detailedDescription: 'Build powerful language models tailored to your unique business needs. We specialize in developing custom LLMs from scratch or adapting existing architectures like GPT, BERT, and T5 for your specific domain.',
    useCases: ['Industry-specific chatbots', 'Document analysis systems', 'Code generation tools', 'Automated content creation'],
    stats: { performance: '95%', speed: '10x', cost: '60%' },
    color: 'blue',
  },
  {
    icon: ServerCog,
    title: 'Model Training & Fine-tuning',
    description: 'Advanced training techniques and fine-tuning services to adapt pre-trained models for specific business requirements and improved performance.',
    features: ['Transfer Learning', 'Domain Adaptation', 'Performance Tuning'],
    detailedDescription: 'Maximize the potential of existing AI models through expert fine-tuning and optimization. We use state-of-the-art techniques including LoRA, QLoRA, and full parameter fine-tuning.',
    useCases: ['Medical diagnosis models', 'Legal document processing', 'Financial analysis systems', 'Customer service automation'],
    stats: { accuracy: '98%', training: '5x', deployment: '24hr' },
    color: 'purple',
  },
  {
    icon: Lightbulb,
    title: 'AI Strategy Consulting',
    description: 'Strategic guidance on AI implementation, technology selection, and roadmap development to maximize ROI and competitive advantage.',
    features: ['Technology Assessment', 'Implementation Roadmap', 'ROI Optimization'],
    detailedDescription: 'Navigate the complex AI landscape with expert guidance. We help you identify opportunities, select the right technologies, and create implementation roadmaps that deliver measurable results.',
    useCases: ['Digital transformation', 'Process automation', 'Competitive analysis', 'Innovation planning'],
    stats: { roi: '300%', time: '50%', success: '90%' },
    color: 'emerald',
  },
  {
    icon: Microchip,
    title: 'Small Language Models',
    description: 'Efficient, lightweight language models optimized for specific tasks and resource-constrained environments without compromising performance.',
    features: ['Lightweight Architecture', 'Edge Deployment', 'Cost-Effective Solutions'],
    detailedDescription: 'Deploy AI at the edge with our specialized small language models. Perfect for mobile applications, IoT devices, and environments where computational resources are limited.',
    useCases: ['Mobile AI assistants', 'Edge computing', 'Real-time processing', 'Embedded systems'],
    stats: { size: '100MB', latency: '<100ms', efficiency: '80%' },
    color: 'indigo',
  },
  {
    icon: MessageSquare,
    title: 'NLP Solutions',
    description: 'Comprehensive natural language processing solutions including sentiment analysis, entity extraction, and conversational AI systems.',
    features: ['Sentiment Analysis', 'Entity Recognition', 'Text Classification'],
    detailedDescription: 'Transform unstructured text into actionable insights with our advanced NLP solutions. From sentiment analysis to complex entity extraction, we cover the full spectrum of language understanding.',
    useCases: ['Social media monitoring', 'Customer feedback analysis', 'Document classification', 'Information extraction'],
    stats: { languages: '50+', accuracy: '96%', processing: '1M/day' },
    color: 'rose',
  },
  {
    icon: FlaskConical,
    title: 'Research & Development',
    description: 'Cutting-edge AI research, prototyping, and innovation services to explore new frontiers in artificial intelligence and machine learning.',
    features: ['Novel Architectures', 'Algorithm Development', 'Proof of Concepts'],
    detailedDescription: 'Stay ahead of the curve with our R&D services. We explore emerging AI technologies, develop novel architectures, and create proof-of-concepts that push the boundaries of what\'s possible.',
    useCases: ['Next-gen AI models', 'Research partnerships', 'Patent development', 'Innovation labs'],
    stats: { projects: '50+', patents: '15', breakthroughs: '10' },
    color: 'amber',
  },
];

const colorClasses = {
  blue: {
    icon: 'bg-gradient-to-br from-blue-500 to-blue-600',
    button: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50',
  },
  purple: {
    icon: 'bg-gradient-to-br from-purple-500 to-purple-600',
    button: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/50',
  },
  emerald: {
    icon: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    button: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50',
  },
  indigo: {
    icon: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    button: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50',
  },
  rose: {
    icon: 'bg-gradient-to-br from-rose-500 to-rose-600',
    button: 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/50',
  },
  amber: {
    icon: 'bg-gradient-to-br from-amber-500 to-amber-600',
    button: 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/50',
  },
};

export function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Services & Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI development services from concept to deployment, specializing in 
            state-of-the-art language models and custom AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="group bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full relative overflow-hidden"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <CardHeader>
                    <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <IconComponent className="text-white h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-600 dark:text-slate-300">
                          <Check className="text-emerald-500 mr-3 h-4 w-4 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Stats badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Object.entries(service.stats).slice(0, 2).map(([key, value]) => (
                        <Badge 
                          key={key} 
                          variant="secondary" 
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                        >
                          {key === 'performance' && '⚡'}
                          {key === 'accuracy' && '🎯'}
                          {key === 'roi' && '📈'}
                          {key === 'size' && '💾'}
                          {key === 'languages' && '🌍'}
                          {key === 'projects' && '🚀'}
                          {key === 'speed' && '🏃'}
                          {key === 'training' && '🎓'}
                          {key === 'time' && '⏱️'}
                          {key === 'latency' && '⚡'}
                          {key === 'processing' && '⚙️'}
                          {key === 'patents' && '📜'}
                          {' '}{value}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full py-3 font-semibold transition-all duration-200 ${colors.button} group`}
                      data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section within Services */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="px-8 py-4 bg-white text-blue-600 font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
                data-testid="button-book-consultation"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button 
                size="lg"
                className="px-8 py-4 bg-white text-blue-600 font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
                data-testid="button-download-case-studies"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
