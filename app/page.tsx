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
