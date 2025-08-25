import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getFeaturedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contactSubmissions = new Map();
    
    // Initialize with sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Advanced Techniques in Large Language Model Fine-tuning",
        excerpt: "Exploring cutting-edge methods for improving LLM performance through domain-specific fine-tuning, including parameter-efficient training techniques and novel optimization strategies.",
        content: "Full content of the advanced LLM fine-tuning article...",
        author: "Fazeel Ahmad",
        category: "LLM Research",
        tags: ["LLM", "Fine-tuning", "Deep Learning", "AI"],
        featured: true,
      },
      {
        title: "Implementing Custom NLP Solutions for Enterprise",
        excerpt: "Real-world case study of developing and deploying a custom natural language processing system for a Fortune 500 company, achieving 95% accuracy improvement.",
        content: "Full content of the enterprise NLP case study...",
        author: "Fazeel Ahmad",
        category: "Case Study",
        tags: ["NLP", "Enterprise", "Case Study", "Implementation"],
        featured: true,
      },
      {
        title: "The Future of Small Language Models in 2024",
        excerpt: "Analyzing emerging trends in efficient AI models, edge computing deployment, and the growing importance of specialized small language models for specific applications.",
        content: "Full content of the SLM trends article...",
        author: "Fazeel Ahmad",
        category: "AI Trends",
        tags: ["SLM", "Trends", "Edge Computing", "Efficiency"],
        featured: true,
      },
      {
        title: "Optimizing Transformer Architectures for Production",
        excerpt: "Best practices and methodologies for deploying transformer models in production environments with focus on performance, scalability, and cost optimization.",
        content: "Full content of the transformer optimization article...",
        author: "Fazeel Ahmad",
        category: "LLM Research",
        tags: ["Transformers", "Production", "Optimization", "Scalability"],
        featured: false,
      },
      {
        title: "Building Conversational AI with Custom Training Data",
        excerpt: "Step-by-step guide to creating domain-specific conversational AI systems using custom datasets and specialized training methodologies.",
        content: "Full content of the conversational AI article...",
        author: "Fazeel Ahmad",
        category: "NLP Insights",
        tags: ["Conversational AI", "Training Data", "Chatbots"],
        featured: false,
      },
    ];

    samplePosts.forEach(post => {
      const id = randomUUID();
      const blogPost: BlogPost = {
        ...post,
        id,
        publishedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date within last 30 days
      };
      this.blogPosts.set(id, blogPost);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime()
    );
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.featured)
      .sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...insertPost,
      id,
      publishedAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => new Date(b.submittedAt!).getTime() - new Date(a.submittedAt!).getTime()
    );
  }
}

export const storage = new MemStorage();
