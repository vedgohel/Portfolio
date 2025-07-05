import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ved Gohel",
  description:
    "Professional portfolio of Ved Gohel, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["portfolio", "full stack developer", "react", "next.js", "web development", "Ved Gohel"],
  authors: [{ name: "Ved Gohel" }],
  creator: "Ved Gohel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
