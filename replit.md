# Overview

This is a full-stack web application built with React and Express.js, featuring a medical testing interface called "MediTest". The application uses a PostgreSQL database with Drizzle ORM for data management and shadcn/ui components for the frontend design system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation (via @hookform/resolvers)

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **API Pattern**: RESTful API design with `/api` prefix routing
- **Development Setup**: Hot module replacement via Vite integration in development
- **Session Management**: PostgreSQL session store (connect-pg-simple) for session persistence

## Data Storage
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM with migrations stored in `./migrations` directory
- **Schema**: Centralized schema definition in `shared/schema.ts` with Zod validation
- **Development Storage**: In-memory storage implementation for development/testing

## Authentication & Authorization
- **Session-based Authentication**: Uses Express sessions with PostgreSQL storage
- **User Model**: Simple user schema with username/password fields
- **CRUD Interface**: Storage abstraction layer for user management operations

## Build & Development
- **Monorepo Structure**: Client and server code in same repository with shared types
- **Development**: Concurrent development server with Vite HMR and Express API
- **Production Build**: Vite builds frontend, esbuild bundles backend server
- **Path Aliases**: TypeScript path mapping for clean imports (`@/`, `@shared/`)

# External Dependencies

## Database & ORM
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Drizzle Kit**: Database migration and introspection tool

## UI & Styling
- **Radix UI**: Comprehensive set of UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

## Development Tools
- **Vite**: Frontend build tool with HMR and development server
- **esbuild**: Fast JavaScript bundler for production server builds
- **TypeScript**: Static type checking across the entire application
- **Replit Integration**: Development environment integration with cartographer and runtime error modal

## Runtime Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **Date-fns**: Date manipulation and formatting utilities
- **Wouter**: Lightweight client-side routing