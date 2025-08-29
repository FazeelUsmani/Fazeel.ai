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
          className="prose prose-lg dark:prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <CardContent className="p-8">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-strong:text-slate-800 dark:prose-strong:text-slate-200 prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-img:rounded-lg prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/!\[([^\]]*)\]\(\/@assets\/([^)]+)\)/g, `<img src="/@assets/$2" alt="$1" class="w-full rounded-lg shadow-lg my-8" />`)
                    .replace(/^# /gm, '## ')
                    .replace(/^## /gm, '### ')
                    .replace(/^### /gm, '#### ')
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^\* /gm, '<li>')
                    .replace(/^- /gm, '<li>')
                    .replace(/<li>/g, '</p><ul><li>')
                    .replace(/<\/li>\n<li>/g, '</li><li>')
                    .replace(/<\/li>\n([^<])/g, '</li></ul><p>$1')
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('####')) {
                        return `<h4 class="text-xl font-semibold mb-4 mt-8">${line.replace('#### ', '')}</h4>`;
                      } else if (line.startsWith('###')) {
                        return `<h3 class="text-2xl font-semibold mb-6 mt-10">${line.replace('### ', '')}</h3>`;
                      } else if (line.startsWith('##')) {
                        return `<h2 class="text-3xl font-bold mb-8 mt-12">${line.replace('## ', '')}</h2>`;
                      } else if (line.trim() === '') {
                        return '<br>';
                      } else if (!line.includes('<')) {
                        return `<p class="mb-4">${line}</p>`;
                      }
                      return line;
                    })
                    .join('')
                }}
              />
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