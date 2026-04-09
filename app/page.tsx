import Link from 'next/link'
import { cantos } from '@/lib/data'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 md:px-8 py-24 md:py-32 border-b border-gold/20">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-dust mb-6">
          A Thesis in the History of Art
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight text-parchment mb-4 max-w-3xl">
          Visions of Judgment
        </h1>
        <p className="font-serif italic text-2xl text-gold mb-8">
          Dante&rsquo;s Inferno and Nineteenth- and Twentieth-Century Art
        </p>
        <p className="font-serif text-dust max-w-xl leading-relaxed text-lg mb-12">
          From Blake&rsquo;s visionary watercolors to Dalí&rsquo;s surrealist
          woodcuts, this study examines how four artists transformed the same
          three cantos of the Inferno into four radically different arguments
          about desire, despair, and evil.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            href="/explore"
            className="font-sans text-sm tracking-widest uppercase px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-canvas transition-colors"
          >
            Explore the Works
          </Link>
          <Link
            href="/about"
            className="font-sans text-sm tracking-widest uppercase px-8 py-3 border border-dust/40 text-dust hover:border-parchment hover:text-parchment transition-colors"
          >
            About the Thesis
          </Link>
        </div>
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
      </section>

      {/* Pull quote */}
      <section className="px-4 md:px-8 py-20 border-t border-gold/20 text-center">
        <blockquote className="font-serif italic text-2xl md:text-3xl text-parchment max-w-3xl mx-auto leading-relaxed mb-4">
          &ldquo;From Blake&rsquo;s visionary Romanticism and Dor&eacute;&rsquo;s sublime moralism to Martini&rsquo;s grotesque Symbolism and Dal&iacute;&rsquo;s Surrealist explorations of the unconscious, each artist treats <em>Inferno</em> not as a static theological doctrine but as a framework for aesthetic and existential inquiry.&rdquo;
        </blockquote>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-dust mt-4">
          &mdash; Gabriela Sierocka, <em className="normal-case font-serif">Visions of Judgment</em>
        </p>
      </section>
    </div>
  )
}
