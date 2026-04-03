'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { artists, artworks, cantos } from '@/lib/data'
import type { Artwork, CantoData } from '@/lib/data'
import { BLUR_DATA_URL } from '@/lib/image-utils'

export default function ArtistsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
      {artists.map((artist) => {
        const works = artworks.filter((w) => w.artist === artist.id)
        return (
          <article
            key={artist.id}
            className="bg-[#111] border border-gold/20 hover:border-gold/50 transition-colors p-8 flex flex-col gap-5"
          >
            {/* Artist identity */}
            <div>
              <h2 className="font-serif text-4xl text-parchment leading-tight mb-1">
                {artist.name}
              </h2>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-dust">
                {artist.years} &middot; {artist.movement}
              </p>
            </div>

            {/* Brief bio */}
            <p className="font-serif text-dust text-sm leading-[1.8]">
              {artist.brief}
            </p>

            {/* Canto thumbnails */}
            <div className="flex gap-4 pt-1">
              {works.map((work) => {
                const canto = cantos.find((c) => c.id === work.canto)!
                return (
                  <Thumbnail
                    key={work.canto}
                    work={work}
                    canto={canto}
                  />
                )
              })}
            </div>
          </article>
        )
      })}
    </div>
  )
}

function Thumbnail({ work, canto }: { work: Artwork; canto: CantoData }) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link
      href={`/explore?canto=${work.canto}`}
      className="group flex flex-col gap-1.5 flex-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0d] border border-gold/15 group-hover:border-gold/40 transition-colors">
        {!imgError ? (
          <Image
            src={work.imagePath}
            alt={`${work.title} — ${canto.title}`}
            fill
            sizes="(max-width: 768px) 30vw, 15vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-2">
            <span className="font-serif italic text-[10px] text-dust text-center leading-tight">
              {work.title}
            </span>
          </div>
        )}
      </div>
      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-dust/60 group-hover:text-dust transition-colors">
        {canto.theme}
      </span>
    </Link>
  )
}
