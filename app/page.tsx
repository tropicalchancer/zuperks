"use client"

import { useState } from "react"
import { useZupass } from "@/components/auth/ZupassProvider"
import { Button } from "@/components/ui/button"
import { PerkCard } from "@/components/perks/PerkCard"
import { PerkModal } from "@/components/perks/PerkModal"
import Link from "next/link"
import { Plus } from "lucide-react"

// Sample perk data
const perks = [
  {
    id: "granola",
    name: "Granola",
    description: "The AI notepad for people in back-to-back meetings",
    tag: "AI Tools",
    offer: "1 year free of Granola for your entire company",
    logo: "/images/granola-logo.png",
    redemptionSteps: [
      "Download Granola here and apply your code with your Workspace account.",
      "If you login with your personal Gmail account, Zupass holders skip the waitlist option and get Granola free for you.",
      "Contact support: hey@granola.so",
    ],
    code: "ZUPASS-GR4N0L4",
    note: "This offer is intended for new customers only. Existing customers are not eligible.",
  },
  {
    id: "replit",
    name: "Replit Core",
    description: "Cloud development environment that makes it easy to code, collaborate, and deploy applications.",
    tag: "Development",
    offer: "1 year free of Replit Core",
    logo: "/images/replit-logo.png",
    redemptionSteps: [
      "Create a Replit account using your email address.",
      "Enter the code below during checkout when selecting the Core plan.",
      "Enjoy all Core features for 12 months at no cost.",
    ],
    code: "ZUPASS-R3PL1T",
    note: "Limited to one redemption per user. Cannot be combined with other offers.",
  },
  {
    id: "lovable",
    name: "Lovable Starter",
    description: "Development platform that helps teams build better products with a focus on user experience.",
    tag: "UX Design",
    offer: "1 year free of Lovable Starter",
    logo: "/images/lovable-logo.png",
    redemptionSteps: [
      "Sign up for a Lovable account at lovable.app",
      "Enter your ZuPass verification code during the onboarding process.",
      "Your account will automatically be upgraded to the Starter plan.",
    ],
    code: "ZUPASS-L0V4BL3",
    note: "For new users only. Your free year begins upon account creation.",
  },
  {
    id: "vercel",
    name: "Vercel Pro",
    description:
      "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
    tag: "Hosting",
    offer: "6 months of Vercel Pro for free",
    logo: "/images/vercel-logo.png",
    redemptionSteps: [
      "Create or log in to your Vercel account.",
      "Go to your account settings and navigate to the billing section.",
      "Enter the promo code below to activate your 6 months of Pro.",
    ],
    code: "ZUPASS-V3RC3L",
    note: "Valid for both new and existing Hobby tier users. Cannot be applied to existing Pro or Enterprise accounts.",
  },
  {
    id: "figma",
    name: "Figma Professional",
    description: "The collaborative interface design tool that streamlines the design process for teams.",
    tag: "Design",
    offer: "3 months of Figma Professional plan free",
    logo: "/images/figma-logo.png",
    redemptionSteps: [
      "Create or log in to your Figma account.",
      "Navigate to the billing section in your account settings.",
      "Enter the promo code below and select the Professional plan.",
      "Your account will be upgraded with 3 months free.",
    ],
    code: "ZUPASS-F1GM4",
    note: "Available for new Professional plan subscribers only. Cannot be applied to existing Professional or Organization plans.",
  },
  {
    id: "notion",
    name: "Notion Team",
    description: "All-in-one workspace for notes, tasks, wikis, and databases.",
    tag: "Productivity",
    offer: "50% off Notion Team plan for 1 year",
    logo: "/images/notion-logo.png",
    redemptionSteps: [
      "Sign up or log in to your Notion account.",
      "Go to Settings & Members → Plans.",
      "Select the Team plan and enter the promo code at checkout.",
      "Your discount will be applied automatically.",
    ],
    code: "ZUPASS-N0T10N",
    note: "Valid for new and existing Notion users upgrading to Team plan. Cannot be combined with other offers.",
  },
  {
    id: "linear",
    name: "Linear",
    description: "The issue tracking tool you'll enjoy using, streamlining software projects, tasks, and bug tracking.",
    tag: "Project Management",
    offer: "6 months free on the Standard plan",
    logo: "/images/linear-logo.png",
    redemptionSteps: [
      "Create a new Linear account or log in to your existing account.",
      "Go to your workspace settings and select 'Billing'.",
      "Choose the Standard plan and enter the promo code during checkout.",
    ],
    code: "ZUPASS-L1N34R",
    note: "For new Standard plan subscribers. Existing paid users can apply this to extend their current subscription.",
  },
  {
    id: "dune",
    name: "Dune Analytics",
    description: "Crypto analytics platform for querying, visualizing, sharing, and discovering blockchain data.",
    tag: "Analytics",
    offer: "3 months of Dune Pro subscription",
    logo: "/images/dune-logo.png",
    redemptionSteps: [
      "Sign up for a Dune account at dune.com.",
      "Navigate to the subscription page.",
      "Select the Pro plan and enter the promo code at checkout.",
      "Your Pro benefits will be activated immediately.",
    ],
    code: "ZUPASS-DUN3",
    note: "Limited to one redemption per user. For new Pro subscribers only.",
  },
  {
    id: "gitcoin",
    name: "Gitcoin Passport",
    description: "Identity verification protocol that helps prove you're a real human without revealing personal data.",
    tag: "Web3",
    offer: "Premium verification tier free for 1 year",
    logo: "/images/gitcoin-logo.png",
    redemptionSteps: [
      "Connect your wallet to Gitcoin Passport.",
      "Complete the basic verification steps.",
      "Enter the code below in the premium upgrade section.",
      "Your account will be upgraded to premium verification status.",
    ],
    code: "ZUPASS-G1TC01N",
    note: "Must have a compatible wallet. Offer valid for new and existing Gitcoin Passport users.",
  },
  {
    id: "pokt",
    name: "Pokt Network",
    description:
      "Decentralized RPC service providing blockchain data access with guaranteed uptime and no rate limits.",
    tag: "Infrastructure",
    offer: "$500 credit for RPC endpoints",
    logo: "/images/pokt-logo.png",
    redemptionSteps: [
      "Create an account on the Pokt Portal.",
      "Set up your first endpoint.",
      "Navigate to the billing section and enter the promo code.",
      "The credit will be applied to your account immediately.",
    ],
    code: "ZUPASS-P0KT",
    note: "Credit valid for 6 months from activation. Unused credit expires after this period.",
  },
  {
    id: "coursera",
    name: "Coursera Plus",
    description: "Access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs.",
    tag: "Education",
    offer: "6 months of Coursera Plus subscription",
    logo: "/images/coursera-logo.png",
    redemptionSteps: [
      "Create a Coursera account or log in to your existing account.",
      "Go to the Coursera Plus subscription page.",
      "Enter the promo code during checkout.",
      "Your 6-month subscription will begin immediately.",
    ],
    code: "ZUPASS-C0URS3RA",
    note: "Available for new Coursera Plus subscribers only. Cannot be combined with other offers or promotions.",
  },
  {
    id: "pinata",
    name: "Pinata Cloud",
    description: "The simplest way to store and manage content on IPFS with powerful developer tools.",
    tag: "Storage",
    offer: "1 year free on the Growth plan",
    logo: "/images/pinata-logo.png",
    redemptionSteps: [
      "Sign up for a Pinata account at pinata.cloud.",
      "Navigate to the subscription page in your dashboard.",
      "Select the Growth plan and enter the promo code.",
      "Your account will be upgraded with 1 year free.",
    ],
    code: "ZUPASS-P1N4TA",
    note: "For new Growth plan subscribers. Includes 250GB storage and 1TB bandwidth per month.",
  },
]

export default function Home() {
  const { isVerified, setIsVerified } = useZupass()
  const [selectedPerk, setSelectedPerk] = useState<(typeof perks)[0] | null>(null)

  if (!isVerified) {
    return null // ZupassAuth component will be shown by the provider
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-black/70 border-b border-green-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">ZuPass Perks</h1>
          <div className="flex items-center space-x-3">
            <Link href="/propose">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-medium flex items-center">
                <Plus size={16} className="mr-2" />
                Propose Perk
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/20"
              onClick={() => setIsVerified(false)}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl text-green-300 mb-6">Exclusive benefits for ZuPass holders</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {perks.map((perk) => (
              <PerkCard key={perk.id} perk={perk} onClick={() => setSelectedPerk(perk)} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPerk && <PerkModal perk={selectedPerk} onClose={() => setSelectedPerk(null)} />}
    </main>
  )
}
