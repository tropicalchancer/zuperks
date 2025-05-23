"use client"

import { useState } from "react"
import { useZupass } from "@/components/auth/ZupassProvider"
import { Button } from "@/components/ui/button"
import { PerkCard } from "@/components/perks/PerkCard"
import { PerkModal } from "@/components/perks/PerkModal"
import Link from "next/link"
import { Plus } from "lucide-react"

// Sample perk data
type PerkType = "traditional" | "community"

interface Perk {
  id: string
  name: string
  description: string
  tag: string
  offer: string
  emoji: string
  type: PerkType
  redemptionSteps: string[]
  code: string
  note: string
}

const perks: Perk[] = [
  {
    id: "airalo",
    name: "Airalo e-sim",
    description: "E-sim for your phone when traveling abroad",
    tag: "nomadism",
    offer: "15% off any e-sim purchase with Airalo",
    emoji: "📱",
    type: "traditional",
    redemptionSteps: [
      "When making a purchase in the app, enter the code below.",
    ],
    code: "SAFETY15",
    note: "New or existing customers.",
  },
  {
    id: "howtodaocohort",
    name: "How To DAO Cohort 3",
    description: "​A 5-week live course that turns DAO theory into real-world action — no dev skills required.",
    tag: "DAOs",
    offer: "25% off",
    emoji: "💻",
    type: "traditional",
    redemptionSteps: [
      "1. Go to https://lu.ma/5gbt3kyx?coupon=ZUPASS25",
      "2. Enter the code below during checkout when selecting the Core plan.",
    ],
    code: "ZUPASS25",
    note: "",
  },
  {
    id: "Shaka",
    name: "Bob Haywood Special Economic Zone assistance",
    description: "Bob Haywood is a zone expert with 50+ years of experience and can help you think through it.",
    tag: "SEZs",
    offer: "30% of his normal 1 hour rate",
    emoji: "✍️",
    type: "community",
    redemptionSteps: [
      "Contact Bob view email to vet if it is a good fit",
    ],
    code: "BIGBOB",
    note: "Weekly writing sessions every Thursday",
  },
  {
    id: "shaka-services",
    name: "Shaka's Event & Music Production Services",
    description: "Venue activation expert and full production manager for live shows and streaming.",
    tag: "events",
    offer: "You want Shaka there. Trust me ;p",
    emoji: "🎤",
    type: "community",
    redemptionSteps: [
      "1. Contact Shaka to discuss your event or production needs.",
      "2. Mention your zuperks membership to receive the special rate.",
      "3. Collaborate with Shaka to activate the Open-Source Orchestra Protocol or manage your event."
    ],
    code: "SHAKAZUPERK",
    note: "Available for both virtual and in-person events."
  },
  {
    id: "zeugh-governance-review",
    name: "Zeugh's Governance Review & Planning",
    description: "You can have your project's governance setup or plan reviewed by Zeugh, an expert in decentralized governance. Zeugh will provide feedback, suggestions, and best practices to help you optimize your DAO or community structure for transparency, efficiency, and resilience.",
    tag: "governance",
    offer: "Free initial review for zuperks members",
    emoji: "🗳️",
    type: "community",
    redemptionSteps: [
      "1. Contact Zeugh and share your current governance setup or plan.",
      "2. Mention your zuperks membership to receive a free initial review.",
      "3. Receive actionable feedback and recommendations tailored to your project."
    ],
    code: "ZEUGHGOV",
    note: "Follow-up consulting session for Zuitzerland members."
  },
  {
    id: "eva-zu-popup-village",
    name: "Eva Klause: Zu Spinoff Popup Village Organizer gut check",
    description: "You can get guidance from Eva Klause on what is involved with running a zu spinoff popup village.",
    tag: "community-building",
    offer: "Free initial consultation for zuperks members",
    emoji: "🏕️",
    type: "community",
    redemptionSteps: [
      "1. Contact Eva to discuss your interest in running a zu spinoff popup village.",
      "2. Mention your zuperks membership to receive a free initial consultation.",
      "3. Learn about the key steps, best practices, and resources for launching your own popup village."
    ],
    code: "EVAVILLAGE",
    note: "Ongoing support available for active projects."
  }
]

export default function Home() {
  const { isVerified, setIsVerified } = useZupass()
  const [selectedPerk, setSelectedPerk] = useState<(typeof perks)[0] | null>(null)
  const [perkType, setPerkType] = useState<"traditional" | "community">("traditional")

  if (!isVerified) {
    return null // ZupassAuth component will be shown by the provider
  }

  const filteredPerks = perks.filter((perk) => perk.type === perkType)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-black/70 border-b border-green-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">zuperks</h1>
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
          <div className="flex justify-end items-center mb-6">
            <div className="flex space-x-2 bg-gray-900/50 p-1 rounded-lg border border-green-500/30">
              <Button
                variant={perkType === "traditional" ? "default" : "ghost"}
                className={`${
                  perkType === "traditional"
                    ? "bg-green-500 text-black hover:bg-green-600"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => setPerkType("traditional")}
              >
                Traditional
              </Button>
              <Button
                variant={perkType === "community" ? "default" : "ghost"}
                className={`${
                  perkType === "community"
                    ? "bg-green-500 text-black hover:bg-green-600"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => setPerkType("community")}
              >
                Community
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredPerks.map((perk) => (
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
