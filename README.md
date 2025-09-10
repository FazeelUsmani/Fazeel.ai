# AI Consulting Portfolio Website

A modern, full-stack portfolio website showcasing AI consulting services, featuring a professional blog, contact forms, and comprehensive service offerings. Built with React, TypeScript, and Express.js.

## 🚀 Features

- **Professional Portfolio**: Showcase AI consulting services and expertise
- **Dynamic Blog System**: Create and manage blog posts with categories and tags
- **Contact Management**: Professional contact forms with project inquiry handling
- **Responsive Design**: Mobile-first design with dark/light mode support
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Real-time Updates**: TanStack React Query for efficient data fetching
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React & React Icons
- **Animations**: Framer Motion support
- **Theme**: Next-themes for dark/light mode

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas
- **Session Management**: Express sessions with PostgreSQL store
- **Authentication**: Passport.js with local strategy

### Development Tools
- **Package Manager**: npm
- **Database Tools**: Drizzle Kit for migrations
- **Build**: esbuild for production builds
- **Development**: tsx for TypeScript execution
- **Linting**: TypeScript compiler

## 📁 Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── layout/    # Navigation, footer, layout components
│   │   │   ├── sections/  # Page-specific sections
│   │   │   └── ui/        # shadcn/ui component library
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and configurations
│   │   ├── pages/         # Page components (routes)
│   │   ├── App.tsx        # Main application component
│   │   ├── main.tsx       # Application entry point
│   │   └── index.css      # Global styles and CSS variables
│   └── index.html         # HTML template
├── server/                # Express.js backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage abstraction layer
│   └── vite.ts           # Vite development integration
├── shared/               # Shared code between frontend and backend
│   └── schema.ts         # Database schemas and validation
├── attached_assets/      # Static assets and uploads
├── package.json          # Project dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── drizzle.config.ts     # Database configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm
- PostgreSQL database (for production)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   # Database (optional for development - uses in-memory storage by default)
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

4. **Database Setup** (optional for development)
   
   If using a PostgreSQL database:
   ```bash
   # Push database schema
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

## 📜 Available Scripts

- **`npm run dev`** - Start development server with hot reloading
- **`npm run build`** - Build for production (frontend + backend)
- **`npm run start`** - Start production server
- **`npm run check`** - Run TypeScript type checking
- **`npm run db:push`** - Push database schema changes

## 🏗️ Development Workflow

### Adding New Pages

1. Create a new component in `client/src/pages/`
2. Register the route in `client/src/App.tsx`
3. Update navigation in `client/src/components/layout/navbar.tsx`

### Database Changes

1. Update schemas in `shared/schema.ts`
2. Update storage interface in `server/storage.ts`
3. Run `npm run db:push` to apply changes

### UI Components

- Use existing shadcn/ui components from `client/src/components/ui/`
- Follow the established design system and Tailwind classes
- Maintain accessibility standards with Radix UI primitives

## 🎨 Design System

The project uses a comprehensive design system built on:

- **Color Palette**: CSS custom properties for theme consistency
- **Typography**: Tailwind typography plugin
- **Components**: shadcn/ui component library
- **Icons**: Lucide React for consistent iconography
- **Animations**: Tailwind CSS animations with custom keyframes
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 🌐 Deployment

### Production Build

```bash
npm run build
```

This creates:
- `dist/public/` - Frontend static files
- `dist/index.js` - Backend server bundle

### Environment Variables

Required for production:

```env
DATABASE_URL=postgresql://connection-string
NODE_ENV=production
PORT=5000
```

### Hosting Recommendations

- **Frontend + Backend**: Replit, Railway, Render
- **Database**: Neon, Supabase, Railway PostgreSQL
- **Static Assets**: Built-in Express static serving

## 🗃️ Database Schema

### Users
- Authentication and user management
- Username/password authentication

### Blog Posts
- Title, excerpt, content
- Author, category, tags
- Publishing date and featured status

### Contact Submissions
- Contact form submissions
- Project inquiries with budget information
- Terms agreement tracking

## 🔧 Configuration

### Path Aliases
- `@/` - `client/src/`
- `@shared/` - `shared/`
- `@assets/` - `attached_assets/`

### Key Configuration Files
- `vite.config.ts` - Build tool configuration
- `tailwind.config.ts` - Styling configuration
- `tsconfig.json` - TypeScript settings
- `drizzle.config.ts` - Database configuration

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📧 Support

For questions and support, please use the contact form on the website or create an issue in the repository.

---

Built with ❤️ using modern web technologies for AI consulting professionals.