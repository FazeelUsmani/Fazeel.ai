import { z } from "zod";

// Static-only schema definitions for form validation
// No database dependencies - pure Zod schemas for client-side validation

export const insertContactSubmissionSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  description: z.string().min(1, "Project description is required"),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

// Blog post types for static data
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  publishedAt: string;
  featured: boolean;
}

export interface BlogPostMetadata {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  publishedAt: string;
  featured: boolean;
}

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;