"use client"

import Image from "next/image"

interface PerkCardProps {
  perk: {
    id: string
    name: string
    description: string
    tag: string
    offer: string
    logo: string
  }
  onClick: () => void
}

export function PerkCard({ perk, onClick }: PerkCardProps) {
  return (
    <div
      className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-green-500/30 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-500/20"
      onClick={onClick}
    >
      <div className="p-6 cursor-pointer">
        <div className="flex justify-between items-start mb-4">
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
            <h3 className="text-xl font-semibold text-white">{perk.name}</h3>
          </div>
          <button className="bg-green-500 hover:bg-green-400 text-black font-medium px-4 py-1.5 rounded-full text-sm flex items-center transition-colors">
            View <span className="ml-1">→</span>
          </button>
        </div>

        <p className="text-gray-300 mb-4 line-clamp-2">{perk.description}</p>

        <div className="flex flex-col space-y-2">
          <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm font-medium w-fit">
            {perk.tag}
          </div>

          <p className="text-green-400 font-medium">{perk.offer}</p>
        </div>
      </div>
    </div>
  )
}
