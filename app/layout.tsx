import type { Metadata } from "next"
import { Manrope, Open_Sans } from "next/font/google"

import "./globals.css"
import { Footer } from "@/components/navigation/footer"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Boldo — Enterprise Template",
  description:
    "An enterprise template to ramp up your company website. Boldo helps you build great things that matter.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${openSans.variable} antialiased`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-dark-blue focus:px-6 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
