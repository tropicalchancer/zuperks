"use client"

import { useState } from "react"
import { useZupass } from "@/components/auth/ZupassProvider"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Sample perk data (same as in the main page)
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
        description: "You can have your project's governance setup or plan reviewed by Zeugh, an expert in decentralized governance.",
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

// Group perks by type for display
const traditionalPerks = perks.filter(perk => perk.type === "traditional");
const communityPerks = perks.filter(perk => perk.type === "community");

// Group perks by tag for display
const groupByTag = (perks: Perk[]) => {
    const groups: Record<string, Perk[]> = {};
    perks.forEach(perk => {
        if (!groups[perk.tag]) {
            groups[perk.tag] = [];
        }
        groups[perk.tag].push(perk);
    });
    return groups;
};

export default function ClassicPage() {
    const { isVerified, setIsVerified } = useZupass();
    const router = useRouter();
    const [selectedLocation, setSelectedLocation] = useState("edge city");

    if (!isVerified) {
        return null; // ZupassAuth component will be shown by the provider
    }

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocation(e.target.value);
    };

    return (
        <div className="bg-gray-100 min-h-screen font-sans text-sm">
            {/* Header */}
            <header className="bg-white border-b border-gray-300 p-2">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div>
                        <Link href="/classic" className="text-blue-700 text-2xl font-bold no-underline hover:underline">
                            zuperks
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">{selectedLocation}</span>
                        <select
                            className="border border-gray-400 rounded px-1"
                            value={selectedLocation}
                            onChange={handleLocationChange}
                        >
                            <option value="edge city">edge city</option>
                            <option value="zuzalu">zuzalu</option>
                            <option value="zuconnect">zuconnect</option>
                        </select>
                        <button className="border border-gray-400 rounded px-2 bg-gray-100 hover:bg-gray-200">
                            go
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto flex mt-2">
                {/* Left sidebar */}
                <div className="w-32 bg-gray-100 p-2">
                    <div className="mb-4">
                        <Link href="#" className="text-blue-700 hover:underline block">contact</Link>
                        <Link href="/propose" className="text-blue-700 hover:underline block">post a listing</Link>
                    </div>
                    <div className="mb-4">
                        <Link href="#" className="text-blue-700 hover:underline font-bold block">FAQ</Link>
                        <Link href="#" className="text-blue-700 hover:underline block">subscriptions</Link>
                    </div>
                    <div className="text-xs mt-4">
                        <p>zuperks australia</p>
                        <p>PO Box 1150</p>
                        <p>Lane Cove NSW 2066</p>
                        <p>
                            <a href="mailto:edgecity@zuperks.org" className="text-blue-700 hover:underline">
                                edgecity@zuperks.org
                            </a>
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="border border-gray-400 w-24 h-24 flex items-center justify-center text-center">
                            <span className="text-xs">Image Placeholder</span>
                        </div>
                        <a href="#" className="text-blue-700 hover:underline text-xs">about this image</a>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 pl-4">
                    <div className="flex">
                        {/* Community & Events column */}
                        <div className="w-1/2 pr-2">
                            <div className="bg-gray-200 p-1 font-bold border border-gray-300 mb-1">
                                community & events
                            </div>
                            <div className="mb-4">
                                <Link href="#" className="text-blue-700 hover:underline">events / entertainment</Link>
                                <span className="text-gray-500 ml-1">(40)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">community notices</Link>
                                <span className="text-gray-500 ml-1">(75)</span>
                            </div>

                            <div className="bg-gray-200 p-1 font-bold border border-gray-300 mb-1">
                                housing / office
                            </div>
                            <div className="mb-4">
                                <Link href="#" className="text-blue-700 hover:underline">housing available</Link>
                                <span className="text-gray-500 ml-1">(30)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">housing wanted</Link>
                                <span className="text-gray-500 ml-1">(9)</span>
                            </div>

                            <div className="bg-gray-200 p-1 font-bold border border-gray-300 mb-1">
                                sale / wanted
                            </div>
                            <div className="mb-4">
                                <Link href="#" className="text-blue-700 hover:underline">general for sale</Link>
                                <span className="text-gray-500 ml-1">(28)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">items wanted</Link>
                                <span className="text-gray-500 ml-1">(6)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">small / personal biz ads</Link>
                                <span className="text-gray-500 ml-1">(34)</span>
                            </div>
                        </div>

                        {/* Jobs column */}
                        <div className="w-1/2 pl-2">
                            <div className="bg-gray-200 p-1 font-bold border border-gray-300 mb-1">
                                jobs
                            </div>
                            <div className="mb-4">
                                <Link href="#" className="text-blue-700 hover:underline">business / e-biz / mktg / sales / mgmt</Link>
                                <span className="text-gray-500 ml-1">(2)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">computer / internet engineering</Link>
                                <span className="text-gray-500 ml-1">(1)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">creative / design / media / multimedia</Link>
                                <span className="text-gray-500 ml-1">(1)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">non-profit</Link>
                                <span className="text-gray-500 ml-1">(0)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">office / admin / cust serv / hr</Link>
                                <span className="text-gray-500 ml-1">(0)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">writing / editing</Link>
                                <span className="text-gray-500 ml-1">(2)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">et cetera jobs</Link>
                                <span className="text-gray-500 ml-1">(2)</span>
                            </div>

                            <div className="mb-4">
                                <Link href="#" className="text-blue-700 hover:underline">resumes</Link>
                                <span className="text-gray-500 ml-1">(20)</span>
                                <br />
                                <Link href="#" className="text-blue-700 hover:underline">freelance services</Link>
                                <span className="text-gray-500 ml-1">(25)</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-2 border-t border-gray-400">
                        <p className="text-xs">
                            questions/comments? =&gt; <a href="mailto:bruce@zuperks.org" className="text-blue-700 hover:underline">bruce@zuperks.org</a>
                        </p>
                        <p className="text-xs">
                            <a href="#" className="text-blue-700 hover:underline">about edge city zuperks</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Sign out button (small and unobtrusive) */}
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={() => setIsVerified(false)}
                    className="text-xs text-gray-500 hover:text-gray-700"
                >
                    sign out
                </button>
            </div>
        </div>
    )
}