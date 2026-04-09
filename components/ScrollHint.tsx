'use client'

import { useEffect, useState } from 'react'

export default function ScrollHint() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setVisible(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="absolute bottom-8 left-0 right-0 text-center pointer-events-none transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-dust/60 mb-1">
        Scroll to explore
      </p>
      <span
        className="block text-dust/60 text-sm"
        style={{ animation: 'bounce 2s infinite' }}
      >
        ↓
      </span>
    </div>
  )
}
