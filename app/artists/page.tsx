import ArtistsGrid from '@/components/ArtistsGrid'

export const metadata = {
  title: 'Artists — Visions of Judgment',
}

export default function ArtistsPage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <header className="mb-16">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-dust mb-4">
          Four Interpreters
        </p>
        <h1 className="font-serif text-5xl text-parchment mb-6">Artists</h1>
        <p className="font-serif text-dust text-lg max-w-2xl leading-relaxed">
          Seven centuries separate the earliest from the latest of these four
          artists. Each brings a distinct historical moment, visual tradition,
          and interpretive argument to the same infernal text.
        </p>
      </header>

      <ArtistsGrid />
    </div>
  )
}
