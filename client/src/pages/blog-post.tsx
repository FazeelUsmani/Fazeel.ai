import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '@shared/schema';

export function BlogPostPage() {
  const { id } = useParams();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog', id],
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded mb-6"></div>
            <div className="h-64 bg-slate-200 dark:bg-slate-700 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Blog post not found
          </h1>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date | string) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const estimatedReadTime = Math.ceil(post.content.split(' ').length / 200);

  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Handle images
      if (paragraph.includes('![') && paragraph.includes('](/attached_assets/')) {
        const match = paragraph.match(/!\[([^\]]*)\]\(\/attached_assets\/([^)]+)\)/);
        if (match) {
          const [, alt, src] = match;
          return (
            <div key={index} className="my-8">
              <img 
                src={`/attached_assets/${src}`}
                alt={alt}
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Image failed to load:', `/attached_assets/${src}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          );
        }
      }
      
      // Handle headings
      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-8 mt-12">
            {paragraph.replace('# ', '')}
          </h1>
        );
      }
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 mt-10 border-b border-slate-200 dark:border-slate-700 pb-3">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('#### ')) {
        return (
          <h4 key={index} className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 mt-6">
            {paragraph.replace('#### ', '')}
          </h4>
        );
      }
      
      // Handle bullet points
      if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
        if (items.length > 0) {
          return (
            <ul key={index} className="space-y-3 ml-6 my-6">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-slate-600 dark:text-slate-300 list-disc text-sm leading-relaxed">
                  <span dangerouslySetInnerHTML={{
                    __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 dark:text-slate-200 font-semibold">$1</strong>')
                  }} />
                </li>
              ))}
            </ul>
          );
        }
      }
      
      // Handle regular paragraphs
      if (paragraph.trim() && !paragraph.startsWith('#')) {
        return (
          <p 
            key={index} 
            className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm"
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 dark:text-slate-200 font-semibold">$1</strong>')
            }}
          />
        );
      }
      
      return null;
    }).filter(Boolean);
  };

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-20 bg-white dark:bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link href="/blog">
            <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-6">
            <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-200 leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {formatDate(post.publishedAt || new Date())}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {estimatedReadTime} min read
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags?.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Share Button */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
              className="border-slate-200 dark:border-slate-700"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article 
          className="max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6">
                {renderContent(post.content)}
              </div>
            </CardContent>
          </Card>
        </motion.article>

        {/* Footer Actions */}
        <motion.footer 
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline"
                onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
            </div>
            <Link href="/blog">
              <Button variant="ghost">
                <BookOpen className="mr-2 h-4 w-4" />
                More Articles
              </Button>
            </Link>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
}