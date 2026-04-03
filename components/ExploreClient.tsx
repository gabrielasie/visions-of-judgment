'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { artworks, artists, cantos } from '@/lib/data'
import type { Canto, Artwork, ArtistData } from '@/lib/data'
import { BLUR_DATA_URL } from '@/lib/image-utils'

const CANTO_TABS: { id: Canto; label: string }[] = [
  { id: 'v', label: 'Canto V · Desire' },
  { id: 'xiii', label: 'Canto XIII · Despair' },
  { id: 'xxxiv', label: 'Canto XXXIV · Evil' },
]

export default function ExploreClient({ initialCanto = 'v' }: { initialCanto?: Canto }) {
  const [selectedCanto, setSelectedCanto] = useState<Canto>(initialCanto)
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  const canto = cantos.find((c) => c.id === selectedCanto)!
  const cantoArtworks = artworks.filter((w) => w.canto === selectedCanto)

  function handleCantoChange(id: Canto) {
    setSelectedCanto(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen">
      {/* Mobile: horizontal scrollable canto tab strip, sticks below fixed nav */}
      <div className="lg:hidden sticky top-14 z-10 flex overflow-x-auto bg-canvas border-b border-gold/20 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {CANTO_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleCantoChange(tab.id)}
            className={`flex-shrink-0 px-5 py-3 font-sans text-xs tracking-[0.2em] uppercase transition-colors whitespace-nowrap border-b-2 ${
              selectedCanto === tab.id
                ? 'text-gold border-gold'
                : 'text-dust border-transparent hover:text-parchment'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Two-panel layout */}
      <div className="lg:flex lg:items-start">
        {/* Left panel — desktop only, sticks below fixed nav */}
        <aside className="hidden lg:flex lg:flex-col lg:w-[35%] lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:overflow-y-auto border-r border-gold/20 px-10 py-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-dust mb-2">
            {canto.theme}
          </p>
          <h2 className="font-serif text-3xl text-parchment leading-tight mb-1">
            {canto.title}
          </h2>
          <p className="font-sans text-xs tracking-[0.15em] uppercase text-dust/70 mb-8">
            {canto.subtitle}
          </p>

          <blockquote className="font-serif italic text-dust/90 text-sm leading-[1.85] border-l-2 border-gold/40 pl-5 whitespace-pre-line flex-1">
            {canto.danteText}
            <footer className="not-italic text-xs mt-3 tracking-wider text-dust/60">
              — {canto.danteSource}
            </footer>
          </blockquote>

          {/* Canto selector tabs */}
          <div className="mt-10 flex flex-col gap-1">
            {CANTO_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCantoChange(tab.id)}
                className={`text-left px-4 py-3 font-sans text-xs tracking-[0.2em] uppercase transition-colors border ${
                  selectedCanto === tab.id
                    ? 'text-gold border-gold/50 bg-gold/5'
                    : 'text-dust border-transparent hover:text-parchment hover:border-gold/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Right panel — artwork grid */}
        <div className="w-full lg:w-[65%]">
          {/* Mobile: canto info above the grid */}
          <div className="lg:hidden px-6 pt-8 pb-6">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-dust mb-2">
              {canto.theme}
            </p>
            <h2 className="font-serif text-2xl text-parchment mb-1">{canto.title}</h2>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-dust/70 mb-5">
              {canto.subtitle}
            </p>
            <blockquote className="font-serif italic text-dust/90 text-sm leading-[1.85] border-l-2 border-gold/40 pl-4 whitespace-pre-line">
              {canto.danteText}
              <footer className="not-italic text-xs mt-2 tracking-wider text-dust/60">
                — {canto.danteSource}
              </footer>
            </blockquote>
          </div>

          {/* 2×2 grid (single column on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/10">
            {cantoArtworks.map((work) => {
              const artist = artists.find((a) => a.id === work.artist)!
              return (
                <ArtworkCard
                  key={`${work.artist}-${work.canto}`}
                  work={work}
                  artist={artist}
                  onClick={() => setSelectedArtwork(work)}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Detail panel */}
      {selectedArtwork && (
        <DetailPanel
          work={selectedArtwork}
          artist={artists.find((a) => a.id === selectedArtwork.artist)!}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </div>
  )
}

function ArtworkCard({
  work,
  artist,
  onClick,
}: {
  work: Artwork
  artist: ArtistData
  onClick: () => void
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      onClick={onClick}
      className="bg-canvas p-6 flex flex-col gap-4 cursor-pointer border border-transparent hover:border-gold/40 transition-colors"
    >
      {/* Artwork image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0d] border border-gold/10">
        {!imgError ? (
          <Image
            src={work.imagePath}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <span className="font-serif italic text-sm text-dust text-center leading-snug">
              {work.title}
            </span>
          </div>
        )}
      </div>

      {/* Artist name (small caps), title, year + medium */}
      <div>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-dust [font-variant:small-caps] mb-0.5">
          {artist.name}
        </p>
        <h3 className="font-serif italic text-xl text-parchment leading-snug">
          {work.title}
        </h3>
        <p className="font-sans text-xs text-dust/70 mt-1">
          {work.year} &middot; {work.medium}
        </p>
      </div>

      {/* One-line thesis quote */}
      <p className="font-serif italic text-sm text-dust/80 leading-relaxed line-clamp-2">
        &ldquo;{work.thesisQuote}&rdquo;
      </p>
    </article>
  )
}

function DetailPanel({
  work,
  artist,
  onClose,
}: {
  work: Artwork
  artist: ArtistData
  onClose: () => void
}) {
  const [imgError, setImgError] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-stretch">
      {/* Dark backdrop */}
      <div
        className="flex-1 bg-black/75 cursor-pointer"
        onClick={onClose}
        aria-label="Close panel"
      />

      {/* Sliding panel */}
      <div className="w-full sm:w-[580px] lg:w-[45%] bg-canvas border-l border-gold/20 overflow-y-auto flex flex-col animate-slide-in-right">
        {/* Close button */}
        <div className="flex justify-end p-4 border-b border-gold/20 sticky top-0 bg-canvas z-10">
          <button
            onClick={onClose}
            className="font-sans text-base text-dust hover:text-parchment transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Large artwork image */}
        <div className="relative aspect-[4/3] w-full bg-[#0d0d0d] flex-shrink-0 border-b border-gold/10">
          {!imgError ? (
            <Image
              src={work.imagePath}
              alt={work.title}
              fill
              sizes="(max-width: 640px) 100vw, 580px"
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center px-8">
              <span className="font-serif italic text-dust text-base text-center leading-snug">
                {work.title}
              </span>
            </div>
          )}
        </div>

        {/* Panel content */}
        <div className="p-8 flex flex-col gap-6">
          {/* Artist + artwork title + year/medium */}
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-dust [font-variant:small-caps] mb-1">
              {artist.name}
            </p>
            <h3 className="font-serif text-2xl text-parchment leading-snug mb-1">
              {work.title}
            </h3>
            <p className="font-sans text-xs text-dust/70">
              {work.year} &middot; {work.medium}
            </p>
          </div>

          {/* Dante passage for this artwork */}
          <blockquote className="font-serif italic text-dust/90 text-sm leading-[1.8] border-l-2 border-gold/40 pl-4">
            {work.dantePassage.lines}
            <footer className="not-italic text-xs mt-2 tracking-wider text-dust/60">
              — {work.dantePassage.citation}
            </footer>
          </blockquote>

          {/* Full analysis */}
          <p className="font-serif text-dust text-sm leading-[1.85]">
            {work.analysis}
          </p>

          {/* Thesis quote */}
          <p className="font-serif italic text-parchment text-sm leading-relaxed border-t border-gold/20 pt-5">
            &ldquo;{work.thesisQuote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
