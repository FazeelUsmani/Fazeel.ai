import { BlogPost } from '@shared/schema';

// Static data will be loaded at runtime
declare const postsMetadata: BlogPostMetadata[];
declare const featuredPostIds: string[];

export interface BlogPostMetadata {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[] | null;
  publishedAt: string;
  featured: boolean | null;
}

// Cache for loaded markdown content
const markdownCache = new Map<string, string>();

/**
 * Parse frontmatter and content from markdown
 */
function parseMarkdown(markdown: string): BlogPost {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    throw new Error('Invalid markdown format: missing frontmatter');
  }

  const [, frontmatterStr, content] = match;
  
  // Parse frontmatter (simple YAML parsing)
  const frontmatter: any = {};
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          // Keep as string if JSON parse fails
        }
      }
      
      // Parse booleans and null
      if (value === 'true') value = true as any;
      if (value === 'false') value = false as any;
      if (value === 'null') value = null as any;
      
      frontmatter[key] = value;
    }
  });

  return {
    id: frontmatter.id,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    content: content.trim(),
    author: frontmatter.author,
    category: frontmatter.category,
    tags: frontmatter.tags,
    publishedAt: new Date(frontmatter.publishedAt),
    featured: frontmatter.featured,
  };
}

/**
 * Load markdown content for a specific blog post
 */
async function loadMarkdownContent(id: string): Promise<string> {
  if (markdownCache.has(id)) {
    return markdownCache.get(id)!;
  }

  try {
    const response = await fetch(`/data/blog/posts/${id}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load blog post: ${id}`);
    }
    const markdown = await response.text();
    markdownCache.set(id, markdown);
    return markdown;
  } catch (error) {
    console.error(`Error loading blog post ${id}:`, error);
    throw error;
  }
}

// Cache for loaded data
let cachedPostsMetadata: BlogPostMetadata[] | null = null;
let cachedFeaturedIds: string[] | null = null;

/**
 * Load posts metadata from JSON file
 */
async function loadPostsMetadata(): Promise<BlogPostMetadata[]> {
  if (cachedPostsMetadata) return cachedPostsMetadata;
  
  try {
    const response = await fetch('/data/blog/posts.json');
    if (!response.ok) throw new Error('Failed to load posts metadata');
    const data = await response.json();
    cachedPostsMetadata = data as BlogPostMetadata[];
    return cachedPostsMetadata;
  } catch (error) {
    console.error('Error loading posts metadata:', error);
    return [];
  }
}

/**
 * Load featured post IDs from JSON file
 */
async function loadFeaturedIds(): Promise<string[]> {
  if (cachedFeaturedIds) return cachedFeaturedIds;
  
  try {
    const response = await fetch('/data/blog/featured.json');
    if (!response.ok) throw new Error('Failed to load featured IDs');
    const data = await response.json();
    cachedFeaturedIds = data as string[];
    return cachedFeaturedIds;
  } catch (error) {
    console.error('Error loading featured IDs:', error);
    return [];
  }
}

/**
 * Get all blog posts metadata
 */
export async function getAllBlogPosts(): Promise<BlogPostMetadata[]> {
  const posts = await loadPostsMetadata();
  return posts.sort((a: BlogPostMetadata, b: BlogPostMetadata) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Get featured blog posts metadata
 */
export async function getFeaturedBlogPosts(): Promise<BlogPostMetadata[]> {
  const [posts, featuredIds] = await Promise.all([
    loadPostsMetadata(),
    loadFeaturedIds()
  ]);
  
  const featured = new Set(featuredIds);
  return posts
    .filter((post: BlogPostMetadata) => featured.has(post.id))
    .sort((a: BlogPostMetadata, b: BlogPostMetadata) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/**
 * Get a specific blog post with full content
 */
export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const markdown = await loadMarkdownContent(id);
    return parseMarkdown(markdown);
  } catch (error) {
    console.error(`Error getting blog post ${id}:`, error);
    return null;
  }
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPostMetadata[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post: BlogPostMetadata) => post.category === category);
}

/**
 * Get blog posts by tag
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPostMetadata[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post: BlogPostMetadata) => 
    post.tags && post.tags.includes(tag)
  );
}

/**
 * Search blog posts by title or excerpt
 */
export async function searchBlogPosts(query: string): Promise<BlogPostMetadata[]> {
  const lowercaseQuery = query.toLowerCase();
  const posts = await getAllBlogPosts();
  return posts.filter((post: BlogPostMetadata) =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    (post.tags && post.tags.some((tag: string) => tag.toLowerCase().includes(lowercaseQuery)))
  );
}