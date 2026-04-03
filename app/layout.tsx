import type { Metadata } from 'next'
import { EB_Garamond, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import './globals.css'

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Visions of Judgment \u2014 Dante\u2019s Inferno in Art",
  description:
    "A comparative study of William Blake, Gustave Dor\u00e9, Alberto Martini, and Salvador Dal\u00ed illustrating the Inferno.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-parchment">
        <Nav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
