# Overview

This is a full-stack AI consulting website built with React frontend and Express backend. The application showcases AI services including Large Language Model development, training, fine-tuning, and NLP solutions. It features a modern UI with blog functionality, contact forms, and detailed service offerings for AI consultation and implementation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Radix UI with shadcn/ui design system
- **Styling**: Tailwind CSS with custom theming support
- **Theme System**: Custom theme provider with light/dark mode toggle

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Structure**: RESTful API design with separate route handlers
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Development Server**: Integrated Vite middleware for hot module replacement
- **Request Logging**: Custom middleware for API request logging and performance monitoring

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Management**: Centralized schema definitions with Zod validation
- **Current Implementation**: In-memory storage with sample data for development
- **Migration System**: Drizzle Kit for database migrations

## Database Schema Design
- **Users Table**: Basic user authentication with username/password
- **Blog Posts Table**: Content management with categories, tags, and featured flags
- **Contact Submissions Table**: Form submissions with project details and budget information
- **Data Validation**: Zod schemas for type-safe data validation and insertion

## Component Architecture
- **Layout Components**: Reusable navbar, footer, and page layouts
- **Section Components**: Modular page sections (hero, services, blog, contact)
- **UI Components**: Comprehensive design system with form controls, dialogs, and feedback components
- **Form Handling**: React Hook Form with Zod validation integration

## Development Tools Integration
- **TypeScript Configuration**: Strict type checking with path aliases
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Code Organization**: Monorepo structure with shared schemas and utilities

# External Dependencies

## Frontend Dependencies
- **React Ecosystem**: React 18 with DOM rendering and TypeScript support
- **UI Framework**: Radix UI primitives for accessible components
- **Form Management**: React Hook Form with Zod resolvers
- **HTTP Client**: Native fetch API with TanStack React Query wrapper
- **Icons**: Lucide React icons and React Icons for social media

## Backend Dependencies
- **Runtime**: Node.js with ES modules
- **Database**: Neon Database serverless PostgreSQL
- **Session Management**: PostgreSQL-backed session storage
- **Development**: tsx for TypeScript execution, Vite plugins for development mode

## Build and Development Tools
- **Build System**: Vite with React plugin and error overlay
- **Database Tooling**: Drizzle Kit for schema management and migrations
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Type Checking**: TypeScript compiler with strict configuration

## Production Considerations
- **Database**: PostgreSQL via Neon Database connection
- **Environment Variables**: DATABASE_URL required for production deployment
- **Static Assets**: Vite builds optimized bundles for production serving
- **Error Handling**: Comprehensive error boundaries and API error responses