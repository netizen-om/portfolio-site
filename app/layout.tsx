import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans';
import "./globals.css"

// const geist = GeistSans({
//   subsets: ["latin"],
//   variable: "--font-geist",
// })

export const metadata: Metadata = {
  title: "Alex Johnson - Full Stack Developer",
  description:
    "Premium portfolio showcasing full-stack development expertise with modern technologies and elegant design.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  )
}
