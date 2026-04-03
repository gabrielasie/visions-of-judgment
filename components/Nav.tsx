'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/explore', label: 'Explore' },
  { href: '/artists', label: 'Artists' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-20 h-14 flex items-center justify-between w-full px-4 md:px-8 bg-canvas border-b border-gold/20">
        <Link
          href="/"
          className="font-serif text-sm [font-variant:small-caps] tracking-[0.08em] text-parchment hover:text-gold transition-colors shrink-0"
        >
          <span className="md:hidden">VOJ</span>
          <span className="hidden md:inline">Visions of Judgment</span>
        </Link>

        <ul className="flex items-center gap-3 flex-shrink-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-sans text-xs tracking-[0.18em] uppercase transition-colors py-1 px-2 md:py-2 md:px-3 block ${
                  pathname === href ? 'text-parchment' : 'text-dust hover:text-parchment'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer so content clears the fixed bar */}
      <div className="h-14" />
    </>
  )
}
