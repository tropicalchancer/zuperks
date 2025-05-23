"use client"

import { X, Copy, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PerkModalProps {
  perk: {
    id: string
    name: string
    description: string
    logo: string
    tag: string
    redemptionSteps: string[]
    code: string
    note: string
  }
  onClose: () => void
}

export function PerkModal({ perk, onClose }: PerkModalProps) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(perk.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="bg-gray-900 border border-green-500/30 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-green-500/30">
          <div className="flex items-center">
            <div className="w-12 h-12 relative mr-3 rounded-md overflow-hidden bg-green-900/30 flex items-center justify-center">
              <Image
                src={perk.logo || "/placeholder.svg"}
                alt={`${perk.name} logo`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-green-400">{perk.name}</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Redeeming your {perk.name} offer</h3>

          <ol className="list-decimal pl-5 space-y-4 mb-6">
            {perk.redemptionSteps.map((step, index) => (
              <li key={index} className="text-gray-300">
                {step}
              </li>
            ))}
          </ol>

          {/* Code section */}
          <div className="bg-gray-800 border border-green-500/30 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <code className="font-mono text-green-400 text-lg">{perk.code}</code>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={copyCode}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </Button>
            </div>
          </div>

          {/* Note */}
          <div className="text-sm text-gray-400 italic">
            <p>Note: {perk.note}</p>
          </div>

          {/* Action button */}
          <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-black font-medium">
            Go to redemption page
          </Button>
        </div>
      </div>
    </div>
  )
}
