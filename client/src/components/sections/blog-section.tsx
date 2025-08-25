import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useQuery } from '@tanstack/react-query';
import { Brain, TrendingUp, BarChart, Rocket, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@shared/schema';

const categoryIcons = {
  'LLM Research': Brain,
  'NLP Insights': Brain,
  'Case Study': BarChart,
  'AI Trends': TrendingUp,
};

const categoryColors = {
  'LLM Research': 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  'NLP Insights': 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  'Case Study': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
  'AI Trends': 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
};

const heroIcons = {
  'LLM Research': Brain,
  'Case Study': TrendingUp,
  'AI Trends': Rocket,
};

const heroColors = {
  'LLM Research': 'from-blue-500 to-purple-600',
  'Case Study': 'from-emerald-500 to-blue-600',
  'AI Trends': 'from-purple-500 to-pink-600',
};

export function BlogSection() {
  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/featured'],
  });

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const categories = ['LLM Research', 'NLP Insights', 'Case Studies', 'AI Trends'];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Latest Insights & Research
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments in AI, machine learning, and emerging technologies 
            through our research articles and industry insights.
          </p>
        </div>

        {/* Featured Blog Posts */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="h-48 bg-slate-200 dark:bg-slate-700"></div>
                <CardHeader>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-2"></div>
                  <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post, index) => {
              const IconComponent = heroIcons[post.category as keyof typeof heroIcons] || Brain;
              const heroColor = heroColors[post.category as keyof typeof heroColors] || 'from-blue-500 to-purple-600';
              const categoryColor = categoryColors[post.category as keyof typeof categoryColors] || 'bg-blue-100 text-blue-600';

              return (
                <Card 
                  key={post.id}
                  className="group bg-white dark:bg-slate-800 overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700"
                  data-testid={`card-blog-post-${index}`}
                >
                  {/* Hero Image */}
                  <div className={`h-48 bg-gradient-to-br ${heroColor} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-white text-center">
                      <IconComponent className="h-12 w-12 mb-2 mx-auto" />
                      <div className="text-sm font-medium">Featured Article</div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className={`${categoryColor} text-xs font-medium border-0`}>
                        {post.category}
                      </Badge>
                      <span className="text-slate-400 text-sm">{formatDate(post.publishedAt!)}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300">{post.author}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                        data-testid={`button-read-more-${index}`}
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Blog Categories */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Explore by Category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Brain;
              const colorClass = categoryColors[category as keyof typeof categoryColors] || 'bg-blue-100 text-blue-600';
              
              return (
                <Button
                  key={category}
                  variant="ghost"
                  className={`px-6 py-3 ${colorClass} font-medium hover:opacity-80 transition-opacity duration-200`}
                  data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <IconComponent className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="text-center p-8 border border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200">Stay Updated</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest AI insights, research updates, and industry news.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                data-testid="input-newsletter-email"
              />
              <Button 
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
