import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ZupassProvider } from "@/components/auth/ZupassProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZuPass Perks",
  description: "Exclusive benefits for ZuPass holders",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ZupassProvider>{children}</ZupassProvider>
      </body>
    </html>
  )
}
