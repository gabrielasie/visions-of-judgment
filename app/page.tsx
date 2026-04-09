import Link from 'next/link'
import { cantos } from '@/lib/data'
import ScrollHint from '@/components/ScrollHint'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 py-24 md:py-32 border-b border-gold/20 min-h-[90vh]">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-dust mb-6">
          Senior Honors Thesis &middot; University of Notre Dame &middot; 2026
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight text-parchment mb-4 max-w-3xl">
          Visions of Judgment
        </h1>
        <p className="font-serif italic text-2xl text-gold mb-8">
          Dante&rsquo;s Inferno and Nineteenth- and Twentieth-Century Art
        </p>
        <p className="font-serif text-dust max-w-xl leading-relaxed text-lg mb-8">
          From Blake&rsquo;s visionary watercolors to Dal&iacute;&rsquo;s
          Surrealist illustrations, this study examines how four artists
          transformed the same three cantos of the Inferno into four radically
          different visions of desire, despair, and evil.
        </p>

        {/* Descriptor hints — hidden on mobile */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-xl w-full mb-3">
          <span className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-[#464646] text-center">
            ↓ Artworks &amp; analysis
          </span>
          <span className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-[#464646] text-center">
            ↓ Full text with bibliography
          </span>
          <span className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-[#464646] text-center">
            ↓ Author &amp; methodology
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full max-w-xl">
          {/* Primary */}
          <Link
            href="/explore"
            className="w-full md:w-auto bg-[#c9a84c] text-[#0a0a0a] font-semibold font-sans px-8 py-3 text-sm tracking-wide hover:bg-[#b8963e] transition-colors text-center"
          >
            Explore the Works &rarr;
          </Link>
          {/* Secondary */}
          <Link
            href="/thesis"
            className="w-full md:w-auto border border-[#c9a84c] text-[#c9a84c] font-sans px-8 py-3 text-sm tracking-wide hover:bg-[#c9a84c]/10 transition-colors text-center"
          >
            Read the Thesis &rarr;
          </Link>
          {/* Tertiary */}
          <Link
            href="/about"
            className="font-sans text-sm text-dust hover:underline transition-colors text-center mt-1 md:mt-0"
          >
            About &amp; Author
          </Link>
        </div>

        <ScrollHint />
      </section>

      {/* Cantos overview */}
      <section className="px-4 md:px-8 py-20 max-w-5xl mx-auto w-full">
        <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-dust mb-12 text-center">
          Three Cantos, Three Circles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
          {cantos.map((canto) => (
            <div
              key={canto.id}
              className="bg-canvas p-10 flex flex-col gap-4 hover:bg-gold/5 transition-colors"
            >
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-dust">
                {canto.theme}
              </span>
              <h3 className="font-serif text-3xl text-gold">
                {canto.romanNumeral}
              </h3>
              <p className="font-serif text-parchment text-lg leading-snug">
                {canto.subtitle}
              </p>
              <blockquote className="font-serif italic text-dust text-sm leading-relaxed border-l border-gold/30 pl-4 mt-2">
                {canto.danteText.split('\n')[0].replace(/^"/, '')}
              </blockquote>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/thesis"
            className="font-sans text-sm tracking-wide text-gold hover:underline transition-colors"
          >
            Read the full thesis &rarr;
          </Link>
        </div>
      </section>

      {/* Pull quote */}
      <section className="px-4 md:px-8 py-20 border-t border-gold/20 text-center">
        <blockquote className="font-serif italic text-2xl md:text-3xl text-parchment max-w-3xl mx-auto leading-relaxed mb-4">
          &ldquo;From Blake&rsquo;s visionary Romanticism and Dor&eacute;&rsquo;s sublime moralism to Martini&rsquo;s grotesque Symbolism and Dal&iacute;&rsquo;s Surrealist explorations of the unconscious, each artist treats <em>Inferno</em>  not as a static theological doctrine but as a framework for aesthetic and existential inquiry.&rdquo;
        </blockquote>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-dust mt-4">
          &mdash; Gabriela Sierocka, <em className="normal-case font-serif">Visions of Judgment</em>
        </p>
      </section>
    </div>
  )
}
