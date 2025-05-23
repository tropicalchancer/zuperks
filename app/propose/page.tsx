"use client"

import { useState } from "react"
import { useZupass } from "@/components/auth/ZupassProvider"
import { Button } from "@/components/ui/button"
import { ProposePerkModal } from "@/components/perks/ProposePerkModal"
import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"

// Add a single example proposal for ProtonVPN
const exampleProposals = [
  {
    id: "protonvpn",
    name: "ProtonVPN",
    description: "Secure your internet connection with ProtonVPN. Get 20% off a monthly subscription.",
    tag: "Security",
    offer: "20% off a monthly subscription",
    logo: null, // You can add a logo path if you have one
    submittedDate: "2025-04-21",
    submittedBy: "chance",
    popupCrew: "Zuitzerland",
  },
]

export default function ProposePage() {
  const { isVerified, setIsVerified } = useZupass()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submittedProposals, setSubmittedProposals] = useState<any[]>([])

  if (!isVerified) {
    return null // ZupassAuth component will be shown by the provider
  }

  const handleProposalSubmit = (proposal: any) => {
    // In a real app, you would send this to your backend
    setSubmittedProposals([
      ...submittedProposals,
      {
        ...proposal,
        submittedDate: new Date().toISOString().split("T")[0],
        submittedBy: proposal.submittedBy || "anonymous",
        popupCrew: proposal.popupCrew || "anonymous",
      },
    ])
    setIsModalOpen(false)
  }

  const allProposals = [...exampleProposals, ...submittedProposals]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-black/70 border-b border-green-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1">
              <ArrowLeft size={16} />
              <span>Back to Perks</span>
            </Link>
            <h1 className="text-2xl font-bold text-green-400">Propose a Perk</h1>
          </div>
          <Button
            variant="outline"
            className="border-green-500 text-green-400 hover:bg-green-500/20"
            onClick={() => setIsVerified(false)}
          >
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 bg-gray-900/50 border border-green-500/30 rounded-xl p-6">
            <h2 className="text-xl text-green-300 mb-3">Submit a Perk Proposal</h2>
            <p className="text-gray-300 mb-4">
              Found a great perk that could benefit the community? Submit it here for consideration. If approved, it
              will be added to the main perks page.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-black font-medium flex items-center"
            >
              <Plus size={18} className="mr-2" />
              Propose a New Perk
            </Button>
          </div>

          {/* Community Proposals Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg text-green-300">Community Proposals</h3>
              <div className="text-sm text-gray-400">
                {allProposals.length} proposal{allProposals.length !== 1 ? "s" : ""} submitted
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {allProposals.map((proposal, index) => (
                <div
                  key={proposal.id || index}
                  className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-green-500/30 p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 relative mr-3 rounded-md overflow-hidden bg-green-900/30 flex items-center justify-center">
                        {proposal.logo ? (
                          <img
                            src={proposal.logo || "/placeholder.svg"}
                            alt={`${proposal.name} logo`}
                            className="object-contain w-8 h-8"
                          />
                        ) : (
                          <div className="text-green-400 font-bold text-xl">{proposal.name.charAt(0)}</div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{proposal.name}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{proposal.description}</p>

                  <div className="flex flex-col space-y-2">
                    <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm font-medium w-fit">
                      {proposal.tag}
                    </div>

                    <p className="text-green-400 font-medium">{proposal.offer}</p>

                    <div className="text-xs text-gray-500 mt-3 space-y-1">
                      <div>
                        Submitted by: {proposal.submittedBy} from {proposal.popupCrew}
                      </div>
                      <div>Date: {new Date(proposal.submittedDate).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {allProposals.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <p>No proposals submitted yet. Be the first to propose a perk!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <ProposePerkModal onClose={() => setIsModalOpen(false)} onSubmit={handleProposalSubmit} />}
    </main>
  )
}
