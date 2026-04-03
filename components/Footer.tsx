'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <footer className="border-t border-gold/15 px-8 py-8 text-center">
      <p className="font-sans text-xs tracking-[0.2em] text-dust/60">
        Gabriela Sierocka &middot; University of Notre Dame &middot; 2026
      </p>
    </footer>
  )
}
