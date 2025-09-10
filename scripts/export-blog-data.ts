import { storage } from '../server/storage';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

async function exportBlogData() {
  console.log('Exporting blog posts from storage...');

  // Get all blog posts
  const allPosts = await storage.getBlogPosts();
  const featuredPosts = await storage.getFeaturedBlogPosts();

  console.log(`Found ${allPosts.length} total posts, ${featuredPosts.length} featured`);

  // Ensure directories exist
  mkdirSync('public/data/blog', { recursive: true });
  mkdirSync('public/data/blog/posts', { recursive: true });

  // Export metadata for all posts
  const postsMetadata = allPosts.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    category: post.category,
    tags: post.tags,
    publishedAt: post.publishedAt,
    featured: post.featured
  }));

  writeFileSync(
    'public/data/blog/posts.json',
    JSON.stringify(postsMetadata, null, 2),
    'utf-8'
  );

  // Export featured posts IDs
  const featuredPostIds = featuredPosts.map(post => post.id);
  writeFileSync(
    'public/data/blog/featured.json',
    JSON.stringify(featuredPostIds, null, 2),
    'utf-8'
  );

  // Export individual markdown files
  for (const post of allPosts) {
    const frontmatter = `---
id: "${post.id}"
title: "${post.title}"
excerpt: "${post.excerpt}"
author: "${post.author}"
category: "${post.category}"
tags: ${JSON.stringify(post.tags)}
publishedAt: "${post.publishedAt}"
featured: ${post.featured}
---

`;

    const markdownContent = frontmatter + post.content;
    
    writeFileSync(
      `public/data/blog/posts/${post.id}.md`,
      markdownContent,
      'utf-8'
    );
    
    console.log(`Exported: ${post.id}.md`);
  }

  console.log('\n✅ Blog data export completed!');
  console.log(`📁 Files created:`);
  console.log(`   - public/data/blog/posts.json (${allPosts.length} posts metadata)`);
  console.log(`   - public/data/blog/featured.json (${featuredPostIds.length} featured IDs)`);
  console.log(`   - public/data/blog/posts/ (${allPosts.length} markdown files)`);
}

exportBlogData().catch(console.error);