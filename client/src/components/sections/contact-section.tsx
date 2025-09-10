import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { insertContactSubmissionSchema, type InsertContactSubmission } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Calendar, Download, Send } from 'lucide-react';

export function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      description: '',
      agreedToTerms: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for your message. We will get back to you within 24 hours.',
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: (error: any) => {
      toast({
        title: 'Error sending message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      items: [
        { label: 'General:', value: 'contact@fazeel.ai', href: 'mailto:contact@fazeel.ai' },
        { label: 'Support:', value: 'support@fazeel.ai', href: 'mailto:support@fazeel.ai' }
      ],
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Phone / WhatsApp',
      items: [
        { label: '', value: '+1 347-283-5184 (US)' },
        { label: '', value: '+91 98765 43210 (India)' }
      ],
      color: 'purple',
    },
    {
      icon: MapPin,
      title: 'Offices',
      items: [
        { label: '', value: 'New York City, United States' },
        { label: '', value: 'Hyderabad, India' }
      ],
      color: 'emerald',
    },
    {
      icon: Clock,
      title: 'Response Time',
      items: [
        { label: '', value: 'Within 24 hours' }
      ],
      color: 'rose',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Build the Future Together
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge AI solutions? 
            Get in touch to discuss your project and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const colorClass = colorClasses[item.color as keyof typeof colorClasses];
                  
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{item.title}</div>
                        <div className="space-y-1">
                          {item.items.map((subItem, subIndex) => (
                            <div key={subIndex} className="flex items-center space-x-2">
                              {subItem.label && (
                                <span className="text-sm text-slate-500 dark:text-slate-400">{subItem.label}</span>
                              )}
                              {'href' in subItem ? (
                                <a 
                                  href={subItem.href} 
                                  className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                >
                                  {subItem.value}
                                </a>
                              ) : (
                                <div className="text-slate-600 dark:text-slate-300">{subItem.value}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Quick Actions</h4>
              
              <Button 
                variant="outline"
                className="w-full p-4 h-auto justify-start bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                data-testid="button-schedule-call"
              >
                <Calendar className="mr-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-left">
                  <div className="font-semibold text-blue-600 dark:text-blue-400">Schedule a Call</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Book a free 30-minute consultation</div>
                </div>
              </Button>
              
              <Button 
                variant="outline"
                className="w-full p-4 h-auto justify-start bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                data-testid="button-download-portfolio"
              >
                <Download className="mr-3 h-5 w-5 text-purple-600 dark:text-purple-400" />
                <div className="text-left">
                  <div className="font-semibold text-purple-600 dark:text-purple-400">Download Portfolio</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Get our latest case studies</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John" 
                                {...field} 
                                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                data-testid="input-first-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Doe" 
                                {...field} 
                                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                data-testid="input-last-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="john@company.com" 
                                {...field} 
                                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Company</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your Company" 
                                {...field}
                                value={field.value || ''}
                                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                data-testid="input-company"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                data-testid="select-project-type"
                              >
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="llm-development">LLM Development</SelectItem>
                              <SelectItem value="model-training">Model Training & Fine-tuning</SelectItem>
                              <SelectItem value="ai-consulting">AI Strategy Consulting</SelectItem>
                              <SelectItem value="nlp-solutions">NLP Solutions</SelectItem>
                              <SelectItem value="research-development">Research & Development</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Project Budget</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                data-testid="select-budget"
                              >
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-10k">Under $10k</SelectItem>
                              <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                              <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                              <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                              <SelectItem value="500k-plus">$500k+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Project Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4}
                              placeholder="Tell us about your project, goals, and requirements..."
                              {...field} 
                              className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                              data-testid="textarea-description"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="agreedToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              data-testid="checkbox-terms"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-slate-600 dark:text-slate-300">
                              I agree to the <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">privacy policy</a> and{' '}
                              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">terms of service</a>.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit"
                      size="lg"
                      disabled={contactMutation.isPending}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                      data-testid="button-send-message"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
