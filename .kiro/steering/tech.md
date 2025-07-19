# Zuperks - Technical Stack

## Core Technologies

- **Framework**: Next.js 15.2.4 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color scheme (green/black theme)
- **Authentication**: Zupass (PCD-based authentication)
- **UI Components**: Shadcn UI (Radix UI primitives)

## Key Libraries

- **Authentication**: @pcd/passport-interface, @pcd/zuauth
- **UI Components**: 
  - Radix UI primitives (@radix-ui/react-*)
  - Lucide React (icons)
  - Tailwind CSS utilities (class-variance-authority, tailwind-merge)
- **Form Handling**: react-hook-form with zod validation
- **Notifications**: Sonner (toast notifications)
- **Date Handling**: date-fns

## Project Structure

- Next.js App Router architecture
- Component-based design with reusable UI elements
- Custom hooks for shared functionality

## Build & Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Environment Setup

The application requires proper configuration of Zupass authentication. Refer to `lib/zupassConfig.ts` for the configuration of whitelisted tickets.

## Deployment

The application is deployed on Vercel and synced with v0.dev deployments.

## Code Style & Conventions

- Use TypeScript for type safety
- Follow React functional component patterns with hooks
- Use Tailwind CSS for styling with consistent color scheme
- Maintain component modularity and reusability
- Use proper TypeScript interfaces for data structures