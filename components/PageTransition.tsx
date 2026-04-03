'use client'

import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // key forces React to remount this div on every route change,
  // triggering the CSS animation fresh each time.
  return (
    <div key={pathname} className="animate-fade-in">
      {children}
    </div>
  )
}
