import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, ServerCog, Lightbulb, Microchip, MessageSquare, FlaskConical, Check, Calendar, Download } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'LLM Development',
    description: 'Custom Large Language Model architecture design, implementation, and optimization for domain-specific applications and enterprise use cases.',
    features: ['Custom Model Architecture', 'Performance Optimization', 'Scalable Deployment'],
    color: 'blue',
  },
  {
    icon: ServerCog,
    title: 'Model Training & Fine-tuning',
    description: 'Advanced training techniques and fine-tuning services to adapt pre-trained models for specific business requirements and improved performance.',
    features: ['Transfer Learning', 'Domain Adaptation', 'Performance Tuning'],
    color: 'purple',
  },
  {
    icon: Lightbulb,
    title: 'AI Strategy Consulting',
    description: 'Strategic guidance on AI implementation, technology selection, and roadmap development to maximize ROI and competitive advantage.',
    features: ['Technology Assessment', 'Implementation Roadmap', 'ROI Optimization'],
    color: 'emerald',
  },
  {
    icon: Microchip,
    title: 'Small Language Models',
    description: 'Efficient, lightweight language models optimized for specific tasks and resource-constrained environments without compromising performance.',
    features: ['Lightweight Architecture', 'Edge Deployment', 'Cost-Effective Solutions'],
    color: 'indigo',
  },
  {
    icon: MessageSquare,
    title: 'NLP Solutions',
    description: 'Comprehensive natural language processing solutions including sentiment analysis, entity extraction, and conversational AI systems.',
    features: ['Sentiment Analysis', 'Entity Recognition', 'Text Classification'],
    color: 'rose',
  },
  {
    icon: FlaskConical,
    title: 'Research & Development',
    description: 'Cutting-edge AI research, prototyping, and innovation services to explore new frontiers in artificial intelligence and machine learning.',
    features: ['Novel Architectures', 'Algorithm Development', 'Proof of Concepts'],
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
              <Card 
                key={index}
                className="group bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
                        <Check className="text-emerald-500 mr-3 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-3 font-semibold transition-colors duration-200 ${colors.button}`}
                    data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
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
                variant="outline"
                size="lg"
                className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-200"
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
