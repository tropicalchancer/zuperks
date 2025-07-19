# Zuperks - Project Structure

## Directory Organization

```
zuperks/
├── .kiro/                  # Kiro AI assistant configuration
├── .next/                  # Next.js build output (generated)
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page (perks listing)
│   ├── popup/              # Popup page route
│   └── propose/            # Perk proposal page route
├── components/             # Reusable React components
│   ├── auth/               # Authentication components
│   │   ├── ZupassAuth.tsx  # Zupass authentication UI
│   │   └── ZupassProvider.tsx # Auth context provider
│   ├── perks/              # Perk-related components
│   │   ├── PerkCard.tsx    # Individual perk display card
│   │   ├── PerkModal.tsx   # Perk details modal
│   │   └── ProposePerkModal.tsx # Perk proposal form modal
│   ├── theme-provider.tsx  # Theme context provider
│   └── ui/                 # Shadcn UI components
├── hooks/                  # Custom React hooks
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/                    # Utility functions and configurations
│   ├── utils.ts            # General utility functions
│   └── zupassConfig.ts     # Zupass authentication configuration
├── public/                 # Static assets
│   ├── images/             # Image assets (logos, etc.)
│   └── placeholder.svg     # Placeholder images
├── styles/                 # Additional styles
│   └── globals.css         # Global CSS
└── package.json            # Project dependencies and scripts
```

## Key Files and Their Purposes

### App Pages
- `app/page.tsx`: Main perks listing page with filtering
- `app/propose/page.tsx`: Form for proposing new perks
- `app/layout.tsx`: Root layout with providers and global structure

### Components
- `components/auth/ZupassProvider.tsx`: Authentication context provider
- `components/auth/ZupassAuth.tsx`: Authentication UI component
- `components/perks/PerkCard.tsx`: Card component for displaying perk summaries
- `components/perks/PerkModal.tsx`: Modal for displaying detailed perk information
- `components/perks/ProposePerkModal.tsx`: Form modal for submitting new perks

### Configuration
- `lib/zupassConfig.ts`: Configuration for Zupass authentication
- `tailwind.config.ts`: Tailwind CSS configuration
- `next.config.mjs`: Next.js configuration

## Data Flow

1. Authentication flow:
   - `ZupassProvider` wraps the application
   - `ZupassAuth` handles the authentication process
   - Authentication state is managed in the provider context

2. Perks display flow:
   - Main page fetches and filters perks
   - `PerkCard` components render individual perks
   - Clicking a perk opens the `PerkModal` with details

3. Perk proposal flow:
   - Proposal page displays existing proposals
   - `ProposePerkModal` captures new perk submissions
   - Submissions are displayed in the proposals list

## Component Architecture

- Follow atomic design principles where possible
- UI components are built on Shadcn/Radix primitives
- Business logic components handle data and state
- Context providers for shared state (auth, theme)

## Naming Conventions

- React components: PascalCase (e.g., `PerkCard.tsx`)
- Utility functions: camelCase (e.g., `utils.ts`)
- Page components: page.tsx in their respective directories
- Hooks: use-prefixed camelCase (e.g., `use-mobile.tsx`)