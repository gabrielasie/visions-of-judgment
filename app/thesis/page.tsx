'use client'

import { useState, useEffect, useCallback } from 'react'

const tocItems = [
  { id: 'introduction', label: 'I. Introduction', level: 0 },
  { id: 'methodological-note', label: '\u2014 Methodological Note', level: 1 },
  { id: 'purpose-and-scope', label: '\u2014 Purpose and Scope', level: 1 },
  { id: 'significance', label: '\u2014 Significance', level: 1 },
  { id: 'visual-tradition', label: "II. Dante\u2019s Inferno and the Visual Tradition", level: 0 },
  { id: 'historical-overview', label: '\u2014 Historical Overview', level: 1 },
  { id: 'visual-magnetism', label: '\u2014 The Visual Magnetism of Cantos V, XIII, and XXXIV', level: 1 },
  { id: 'william-blake', label: 'III. William Blake: The Romantic Visionary', level: 0 },
  { id: 'linnell-commission', label: '\u2014 The Linnell Commission', level: 1 },
  { id: 'blakes-divergence', label: "\u2014 Blake\u2019s Theological Divergence from Dante", level: 1 },
  { id: 'gustave-dore', label: 'IV. Gustave Dor\u00e9: Monument and Moral Geometry', level: 0 },
  { id: 'publishing-context', label: '\u2014 The Publishing Context and Critical Reception', level: 1 },
  { id: 'dores-style', label: "\u2014 Dor\u00e9\u2019s Style: The Sublime Made Legible", level: 1 },
  { id: 'alberto-martini', label: 'V. Alberto Martini: Fragmentation, Anxiety, and the Inferno of the Modern Mind', level: 0 },
  { id: 'commission-context', label: '\u2014 Commission, Context, and Nationalist Reception', level: 1 },
  { id: 'martinis-language', label: "\u2014 Martini\u2019s Visual Language", level: 1 },
  { id: 'salvador-dali', label: 'VI. Salvador Dal\u00ed: Surrealism and the Subconscious', level: 0 },
  { id: 'dali-commission', label: "\u2014 The Commission, the Controversy, and Dal\u00ed\u2019s Catholic Surrealism", level: 1 },
  { id: 'dalis-language', label: "\u2014 Dal\u00ed\u2019s Visual Language", level: 1 },
  { id: 'comparative-analysis', label: 'VII. Comparative Analysis Across Time and Media', level: 0 },
  { id: 'conclusion', label: 'VIII. Conclusion', level: 0 },
  { id: 'bibliography', label: 'IX. Bibliography', level: 0 },
]

function TOCList({
  activeId,
  onItemClick,
}: {
  activeId: string
  onItemClick: (id: string) => void
}) {
  return (
    <ul className="flex flex-col gap-0.5">
      {tocItems.map(({ id, label, level }) => (
        <li key={id}>
          <button
            onClick={() => onItemClick(id)}
            className={`text-left w-full py-1 transition-colors leading-snug font-sans ${
              level === 1 ? 'pl-3 text-[0.68rem]' : 'text-[0.72rem]'
            } ${
              activeId === id
                ? 'text-[#c9a84c]'
                : 'text-[#525252] hover:text-[#909090]'
            }`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default function ThesisPage() {
  const [activeId, setActiveId] = useState('introduction')
  const [tocOpen, setTocOpen] = useState(false)

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
      setTocOpen(false)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-72px 0px -60% 0px', threshold: 0 }
    )

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Page header */}
      <header className="max-w-screen-xl mx-auto px-4 md:px-8 pt-10 pb-8 border-b border-[#c9a84c]/20">
        <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-[#464646] mb-3">
          Honors Thesis &middot; University of Notre Dame &middot; Spring 2026
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#e8dcc8] leading-tight">
          Visions of Judgment
        </h1>
        <p className="font-serif italic text-[#c9a84c] text-xl mt-2">
          Dante&rsquo;s <em>Inferno</em> and Nineteenth- and Twentieth-Century Art
        </p>
        <p className="font-sans text-[0.7rem] text-[#464646] mt-3 tracking-wide">
          Gabriela Sierocka &middot; Glynn Family Honors Program &middot; Advisor: Professor Theodore J. Cachey Jr.
        </p>
      </header>

      {/* Mobile TOC accordion */}
      <div className="md:hidden sticky top-14 z-10 bg-[#0a0a0a] border-b border-[#c9a84c]/20">
        <button
          onClick={() => setTocOpen((o) => !o)}
          className="w-full px-4 py-3 flex items-center justify-between font-sans text-[0.65rem] tracking-[0.2em] uppercase text-[#525252] hover:text-[#909090] transition-colors"
        >
          <span>Table of Contents</span>
          <span className="text-[0.6rem]">{tocOpen ? '▲' : '▼'}</span>
        </button>
        {tocOpen && (
          <div className="px-4 pb-4 bg-[#0a0a0a]">
            <TOCList activeId={activeId} onItemClick={scrollTo} />
          </div>
        )}
      </div>

      {/* Two-column layout */}
      <div className="max-w-screen-xl mx-auto flex">
        {/* Desktop sticky sidebar */}
        <aside className="hidden md:block w-[25%] shrink-0">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-10 px-6 pr-4 border-r border-[#c9a84c]/10">
            <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-[#333333] mb-4">
              Contents
            </p>
            <TOCList activeId={activeId} onItemClick={scrollTo} />
          </div>
        </aside>

        {/* Main article */}
        <article className="w-full md:w-[75%] px-4 md:pl-12 md:pr-16 py-12 max-w-prose md:max-w-none">
          {/* ── I. Introduction ── */}
          <section id="introduction" className="mb-14">
            <h2 className="font-serif text-2xl [font-variant:small-caps] tracking-wide text-[#c9a84c] mb-6">
              I. Introduction
            </h2>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Dante Alighieri&rsquo;s <em>Inferno</em>, the first canticle of the <em>Divine
                Comedy</em>, has endured for over seven centuries as both a literary masterpiece
                and a visual archetype of sin, punishment, and the human moral imagination. Its
                lasting impact lies in the vivid specificity of its imagery: hellish landscapes,
                mythic figures, and psychological torment that have compelled generations of
                artists to reimagine Dante&rsquo;s poetic vision through visual media. From
                Botticelli&rsquo;s Renaissance drawings to contemporary graphic novels,{' '}
                <em>Inferno</em> has been continuously reinterpreted, demonstrating what Eugene
                Nassar calls its capacity to be &lsquo;recast to fit the consciousness of every
                age.&rsquo;
              </p>
              <p>
                This thesis explores how four artists&mdash;William Blake, Gustave Dor&eacute;,
                Alberto Martini, and Salvador Dal&iacute;&mdash;reimagined <em>Inferno</em> across
                the nineteenth and twentieth centuries, revealing how each era reframes
                Dante&rsquo;s text in response to its own cultural, philosophical, and
                psychological currents. Despite differences in period, medium, and artistic
                movement, these figures share a commitment to transforming <em>Inferno</em> into a
                visual language that resonates with the anxieties and ideals of their time. From
                Blake&rsquo;s visionary Romanticism and Dor&eacute;&rsquo;s sublime moralism to
                Martini&rsquo;s grotesque Symbolism and Dal&iacute;&rsquo;s Surrealist explorations
                of the unconscious, each artist treats <em>Inferno</em> not as a static theological
                doctrine but as a framework for aesthetic and existential inquiry.
              </p>
              <p>
                The study focuses on three pivotal cantos: Canto V (The Lustful: Paolo and
                Francesca), a meditation on forbidden desire and moral ambiguity; Canto XIII (The
                Suicides), where despair and self-destruction take root in the eerie imagery of the
                bleeding forest; and Canto XXXIV (Lucifer), a vision of absolute evil and the
                frozen stasis of betrayal.
              </p>
            </div>
          </section>

          {/* ── Methodological Note ── */}
          <section id="methodological-note" className="mb-14 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">Methodological Note</h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                This thesis employs an interdisciplinary approach, drawing from art history,
                literary criticism, and visual studies. Each artist is treated not merely as an
                illustrator but as an interpreter who probes the deeper symbolic and psychological
                resonances of Dante&rsquo;s poem. In line with Nassar&rsquo;s principle of
                &lsquo;fidelity to tone&rsquo; rather than literal accuracy, the project views
                each body of work as a creative negotiation with Dante&rsquo;s vision: filtering
                it through Romantic idealism, modernist fragmentation, and postwar Surrealism.
              </p>
              <p>
                The project also incorporates a digital humanities component, accessible at{' '}
                <a
                  href="https://visions-of-judgment.onrender.com"
                  className="text-[#c9a84c] underline underline-offset-2 hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visions-of-judgment.onrender.com
                </a>
                , an interactive website that juxtaposes Dante&rsquo;s text with selected visual
                interpretations from the four artists studied here. Inspired by Digital Dante
                (Columbia University) and The World of Dante (University of Virginia), the site
                offers a multimodal experience that invites users to explore textual and visual
                dialogue in new, accessible ways.
              </p>
            </div>
          </section>

          {/* ── Purpose and Scope ── */}
          <section id="purpose-and-scope" className="mb-14 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">Purpose and Scope</h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                This thesis investigates the central question: how and why have artists across two
                centuries reinterpreted Dante&rsquo;s <em>Inferno</em> to reflect their own
                historical and psychological landscapes? By examining Blake&rsquo;s visionary
                Romanticism, Dor&eacute;&rsquo;s monumental moralism, Martini&rsquo;s Symbolist
                anxiety, and Dal&iacute;&rsquo;s Surrealist dream imagery, the study reveals how
                each transformed Dante&rsquo;s text into a mirror of their era&rsquo;s spiritual
                and cultural preoccupations.
              </p>
              <p>
                Far from serving as mere illustrators, these artists reimagined the{' '}
                <em>Inferno</em> as a living framework through which to grapple with the crises of
                their times: the waning of religious certainty, the trauma of industrial and world
                wars, and the emergence of modern psychology and existential doubt. Their work
                reveals how Dante&rsquo;s medieval moral universe could be reinterpreted through
                Romantic idealism, Victorian order, modernist fragmentation, and postwar Surrealism.
              </p>
            </div>
          </section>

          {/* ── Significance ── */}
          <section id="significance" className="mb-16 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">Significance</h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                The lasting relevance of <em>Inferno</em>  lies in its capacity for reinvention.
                Each generation has discovered new meaning in Dante&rsquo;s poetic architecture of
                Hell, transforming it into a reflection of contemporary fears and hopes. In the
                nineteenth century, this meant responding to Romantic idealism, industrial upheaval,
                and the challenges of secular modernity. In the twentieth, it entailed confronting
                war, genocide, and psychological disintegration through new visual languages of
                critique and introspection.
              </p>
              <p>
                By analyzing modern reinterpretations of <em>Inferno</em>, this thesis offers a
                unique vantage point on how timeless moral questions take on shifting emotional and
                symbolic forms. These artists do not merely illustrate Dante&rsquo;s text; they
                expand and often challenge it, creating visual counterpoints that speak to the
                ethical and psychological uncertainties of their time.
              </p>
            </div>
          </section>

          <div className="border-t border-[#c9a84c]/15 mb-16" />

          {/* ── II. Dante's Inferno and the Visual Tradition ── */}
          <section id="visual-tradition" className="mb-14">
            <h2 className="font-serif text-2xl [font-variant:small-caps] tracking-wide text-[#c9a84c] mb-6">
              II. Dante&rsquo;s Inferno and the Visual Tradition
            </h2>
          </section>

          {/* ── Historical Overview ── */}
          <section id="historical-overview" className="mb-14 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">Historical Overview</h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                From its earliest circulation in manuscript form, Dante&rsquo;s{' '}
                <em>Inferno</em>  has exerted a uniquely visual magnetism. Few literary works so
                vividly translate language into image: each canto unfolds as a carefully staged
                tableau of movement, gesture, and atmosphere. The poet&rsquo;s architecture of
                Hell, articulated through concentric circles, precise spatial orientation, and a
                choreography of light and shadow, lends itself naturally to pictorial
                representation. As Deborah Parker and Mark Parker observe, Dante &lsquo;writes in
                images that demand visualization,&rsquo; constructing what they call a
                &lsquo;poetics of visibility&rsquo; that transforms text into spectacle. His verse
                functions as a kind of verbal architecture of sight, in which words delineate
                space, perspective, and illumination with painterly precision.
              </p>
              <p>
                Already in the fourteenth century, artists such as Giovanni di Paolo and Priamo
                della Quercia illuminated Dante&rsquo;s visions in manuscripts that mirrored the
                scholastic clarity of medieval cosmology. These early illustrations sought not to
                dramatize emotion but to map the moral order of the universe. Their didactic
                clarity corresponds to what Alison Cornish terms Dante&rsquo;s &lsquo;verbal
                iconography&rsquo;: the capacity of his language to construct images that
                &lsquo;replace sight with understanding.&rsquo;
              </p>
              <p>
                By the nineteenth century, the <em>Inferno</em>  had become a crucible for
                aesthetic and psychological experimentation. The Enlightenment&rsquo;s rational
                order gave way to Romantic imagination, and artists such as William Blake
                transformed Dante&rsquo;s punishments into states of visionary perception. Saree
                Makdisi argues that Blake&rsquo;s illustrations &lsquo;turn Hell inward,&rsquo;
                replacing the medieval idea of punishment with a psychological drama of
                consciousness. This shift from the moral to the imaginative, from theology to
                subjectivity, marks the emergence of a modern visual Dante.
              </p>
            </div>
          </section>

          {/* ── Visual Magnetism ── */}
          <section id="visual-magnetism" className="mb-16 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">
              The Visual Magnetism of Cantos V, XIII, and XXXIV
            </h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                The <em>Inferno</em>&rsquo;s enduring appeal lies in its ability to be seen as
                much as read. Dante writes with the precision of a painter: each canto constructs
                a spatial and emotional scene that lends itself to visual translation. Among these,
                Cantos V, XIII, and XXXIV possess a particular pictorial magnetism. Their vivid
                topographies&mdash;the tempest of the lustful, the bleeding forest of the suicides,
                and the frozen pit of Lucifer&mdash;form self-contained tableaux that invite
                artistic re-creation across centuries.
              </p>
              <p>
                <strong className="text-[#c9a84c] font-normal">Canto V: </strong> In the circle of
                the lustful, Dante&rsquo;s imagery becomes kinetic and theatrical. The whirlwind of
                souls is both punishment and metaphor: desire rendered as movement without rest.
                John Freccero describes the episode as a &lsquo;portrait in motion,&rsquo; where
                narrative and image merge to produce a moral chiaroscuro of pity and peril.
              </p>
              <p>
                <strong className="text-[#c9a84c] font-normal">Canto XIII: </strong> Here, the
                horror of metamorphosis becomes Dante&rsquo;s visual language. When Dante plucks a
                branch, it cries out in pain, bleeding and speaking&mdash;a terrifying fusion of
                body and tree. Robert Hollander calls the canto &lsquo;a study in embodiment,&rsquo;
                where moral transgression is made visible through material transformation.
              </p>
              <p>
                <strong className="text-[#c9a84c] font-normal">Canto XXXIV: </strong> At the
                poem&rsquo;s nadir, Dante overturns the medieval iconography of fire and descent.
                Instead of flames, the lowest pit of Hell is a vast field of ice. The colossal,
                motionless Lucifer embodies the perversion of divine order: an anti-Christ trapped
                within the architecture of his own rebellion.
              </p>
              <p>
                Each of these scenes crystallizes Dante&rsquo;s mastery of &lsquo;verbal
                painting&rsquo;&mdash;what Alison Cornish calls the <em>iconografia verbale</em>:
                the translation of metaphysical truth into sensory image. Canto V externalizes the
                turbulence of desire, Canto XIII visualizes the violence of despair, and Canto
                XXXIV monumentalizes evil as paralysis.
              </p>
            </div>
          </section>

          <div className="border-t border-[#c9a84c]/15 mb-16" />

          {/* ── III. William Blake ── */}
          <section id="william-blake" className="mb-14">
            <h2 className="font-serif text-2xl [font-variant:small-caps] tracking-wide text-[#c9a84c] mb-6">
              III. William Blake: The Romantic Visionary
            </h2>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                William Blake (1757&ndash;1827) approached Dante&rsquo;s <em>Inferno</em>  as both
                a poet and a prophet. For him, Hell was not a place of divine punishment but a
                condition of the mind, a realm of perception. Blake&rsquo;s reading of Dante
                reflects his place in the Romantic era, shaped by mystical Christianity,
                Swedenborg&rsquo;s visions of Heaven and Hell, and his lifelong dialogue with
                Milton&rsquo;s rebellious angels. He rejected the rationalism of the
                Enlightenment, believing instead that truth is known through vision, not reason.
              </p>
            </div>
          </section>

          {/* ── Linnell Commission ── */}
          <section id="linnell-commission" className="mb-14 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">The Linnell Commission</h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                In his late years, Blake was commissioned by the artist and patron John Linnell
                (1824&ndash;27) to illustrate the <em>Divine Comedy</em>, a project left
                unfinished at his death. John Linnell was a younger artist who had befriended Blake
                in old age and became his primary supporter. The commission was unusual and arguably
                enabling rather than constraining: Linnell paid Blake a weekly stipend of
                &pound;2&ndash;3 while he worked, effectively providing financial security for the
                first time in years. Blake began the <em>Divine Comedy</em> illustrations at age
                sixty-seven and worked on them until his death in 1827, leaving all 102 watercolors
                unfinished.
              </p>
              <p>
                Crucially, the commission was personal rather than institutional: Linnell did not
                initially intend to publish the illustrations, and there was no publisher, no
                readership pressure, and no ideological gatekeeping. This explains in part why
                Blake felt free to produce so theologically heterodox a reading. Blake openly
                disagreed with Dante&rsquo;s moral architecture, and his annotations to the poem
                make his resistance explicit. He writes that Dante&rsquo;s punishments are
                expressions of &lsquo;natural law,&rsquo; which Blake equated with tyranny, rather
                than spiritual truth.
              </p>
            </div>
          </section>

          {/* ── Blake's Theological Divergence ── */}
          <section id="blakes-divergence" className="mb-16 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">
              Blake&rsquo;s Theological Divergence from Dante
            </h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Blake&rsquo;s illustrations for the <em>Inferno</em>  reveal his conviction that
                sin and punishment are not external decrees but inner states of being. His series
                of 102 watercolors translates Dante&rsquo;s physical torments into emotional and
                spiritual conditions. This interpretation echoes his statement in{' '}
                <em>The Marriage of Heaven and Hell</em>  that &lsquo;Energy is Eternal
                Delight.&rsquo; For Blake, Dante&rsquo;s static moral law becomes an opportunity
                to explore how imagination can redeem even suffering. Where Dante sees hierarchy,
                Blake sees contradiction: energy against restraint, desire against reason,
                imagination against moral judgment.
              </p>
              <p>
                In Canto V, Paolo and Francesca float luminously amid the storm, their bodies
                entwined yet calm at its center. The painter uses circular motion not as punishment
                but as harmony, a spiritual rather than moral rhythm. The wind no longer signifies
                divine wrath but cosmic energy. Hell, for Blake, becomes the crucible where love,
                though misdirected, reveals the soul&rsquo;s longing for unity.
              </p>
              <p>
                In Canto XIII, the bleeding trees are not damned souls but fragments of the human
                form divine, their vitality trapped in matter. The forest becomes a portrait of the
                soul&rsquo;s exile from imagination&mdash;the true death in Blake&rsquo;s
                cosmology. Blake&rsquo;s empathy dissolves the boundary between sin and suffering,
                turning Hell&rsquo;s grotesque literalism into an allegory of creative paralysis
                and redemption.
              </p>
              <p>
                In Canto XXXIV, where Dante&rsquo;s Lucifer stands as the axiom of negation,
                Blake&rsquo;s is a tragic archetype&mdash;not pure evil but defeated imagination.
                Evil, in this context, is not rebellion but misperception: the failure to perceive
                reality through the divine imagination.
              </p>
            </div>
          </section>

          <div className="border-t border-[#c9a84c]/15 mb-16" />

          {/* ── IV. Gustave Doré ── */}
          <section id="gustave-dore" className="mb-14">
            <h2 className="font-serif text-2xl [font-variant:small-caps] tracking-wide text-[#c9a84c] mb-6">
              IV. Gustave Dor&eacute;: Monument and Moral Geometry
            </h2>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Published in Paris in 1861, Gustave Dor&eacute;&rsquo;s <em>Inferno</em>{' '}
                illustrations were conceived not as marginal ornaments but as a full-scale visual
                monument to Dante. The volume contained seventy-five full-page wood engravings
                after Dor&eacute;, issued by Hachette in a deluxe, highly produced format.
                Dor&eacute;&rsquo;s own role was primarily that of designer; the plates were cut
                by professional wood engravers. His engravings build a public, legible, spectacular
                Hell: a place that can be seen clearly even when it cannot be morally escaped.
              </p>
            </div>
          </section>

          {/* ── Publishing Context ── */}
          <section id="publishing-context" className="mb-14 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">
              The Publishing Context and Critical Reception
            </h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Dor&eacute;&rsquo;s <em>Inferno</em> (1861) was not simply a commercial success.
                It was a cultural event that met with a divided critical reception. The French
                literary establishment was initially suspicious of Dor&eacute; precisely because he
                was not a classically trained painter but primarily a caricaturist and popular
                illustrator. His association with <em>Le Journal pour rire</em> and mass-market
                illustration made critics question whether he possessed the gravitas required for
                Dante.
              </p>
              <p>
                The <em>Inferno</em> was published as a luxury folio at a price point that placed
                it firmly in bourgeois and aristocratic drawing rooms rather than scholarly
                libraries. The art critic Th&eacute;ophile Gautier was among those who expressed
                admiration for Dor&eacute;&rsquo;s technical power while worrying about his
                tendency toward theatrical melodrama over spiritual depth. In Britain, where the
                engravings were enormously popular, the reception was almost uncritically
                celebratory; Dante became a Victorian commodity partly through Dor&eacute;&rsquo;s
                images.
              </p>
            </div>
          </section>

          {/* ── Doré's Style ── */}
          <section id="dores-style" className="mb-16 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">
              Dor&eacute;&rsquo;s Style: The Sublime Made Legible
            </h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Art historian Aida Audeh characterizes Dor&eacute;&rsquo;s Dante imagery as an
                eclectic synthesis of Michelangelesque nudes, northern landscape traditions of the
                sublime, and a visual language fluent in popular culture and mass reproduction. The
                &lsquo;northern sublime&rsquo; in Dor&eacute; is not simply a taste for gloom; it
                is an aesthetic of overwhelming environment&mdash;storm, forest, cliff,
                cavern&mdash;within which the human figure appears simultaneously dignified as
                anatomical form and diminished as moral subject. Dor&eacute; consistently
                orchestrates a tension between the individual and the mass: sinners are both
                singular bodies and a collective phenomenon, a swarm of consequences.
              </p>
              <p>
                In Canto V, Dor&eacute; frames the lovers within a collective anatomy of sin:
                Paolo and Francesca are not isolated as a romantic exception but are a readable
                figure within a larger, nearly continuous band of contorted bodies. The result is
                not a sentimental excuse but a controlled invitation to pity: we see them clearly,
                and then we see them swept onward with everyone else.
              </p>
              <p>
                In Canto XIII, Dor&eacute; makes the wood itself the protagonist: a dense lattice
                of barren trunks and branches that fills the frame and presses inward. Terror is
                not only in the wound but in the administration of the wound&mdash;the calm
                repetition of suffering as a law of place.
              </p>
              <p>
                In Canto XXXIV, Dor&eacute; stages evil as a kind of frozen grandeur: a power that
                is still physically overwhelming but spiritually inert. Lucifer&rsquo;s wings,
                rather than signaling free flight, become instruments of confinement. This is evil
                rendered as monument&mdash;a negative cathedral at the poem&rsquo;s core.
              </p>
            </div>
          </section>

          <div className="border-t border-[#c9a84c]/15 mb-16" />

          {/* ── V. Alberto Martini ── */}
          <section id="alberto-martini" className="mb-14">
            <h2 className="font-serif text-2xl [font-variant:small-caps] tracking-wide text-[#c9a84c] mb-6">
              V. Alberto Martini: Fragmentation, Anxiety, and the Inferno of the Modern Mind
            </h2>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                While Dor&eacute; monumentalizes Hell as moral architecture, Alberto Martini
                violently destabilizes it. Created between 1901 and 1909 and later expanded in
                the 1920s, Martini&rsquo;s illustrations for Dante&rsquo;s{' '}
                <em>Inferno</em> emerge from a radically different cultural atmosphere, one shaped
                by fin-de-si&egrave;cle pessimism, Symbolist aesthetics, and the growing influence
                of psychological theories that questioned the coherence of the rational self.
                Martini does not attempt to visualize Hell as a stable place. Instead, his images
                present damnation as a condition of mental disintegration, where bodies fracture,
                space collapses, and meaning itself becomes uncertain.
              </p>
            </div>
          </section>

          {/* ── Commission, Context, and Nationalist Reception ── */}
          <section id="commission-context" className="mb-14 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">
              Commission, Context, and Nationalist Reception
            </h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Alberto Martini began his Dante illustrations between 1901 and 1909 and returned
                to them in the 1920s. The project was neither state-commissioned nor driven by a
                patron; it was an autonomous artistic endeavor. Martini was deeply influenced by
                the Decadent literary tradition, including Oscar Wilde, Aubrey Beardsley, and
                Edgar Allan Poe, and he saw Dante&rsquo;s infernal world as a natural correlative
                to his own preoccupation with psychological horror, metamorphosis, and the grotesque
                body.
              </p>
              <p>
                In the early twentieth century, Dante was increasingly conscripted into Italian
                nationalist ideology, and Martini&rsquo;s psychologically tormented, anti-heroic
                Hell was a deeply uncomfortable counter-image. His work implicitly refuses the
                Dantean grandeur that official Italian culture celebrated. The reception only
                deepened in the Fascist period, when the <em>Commedia</em> was actively
                appropriated as a symbol of national spiritual greatness&mdash;a context that makes
                Martini&rsquo;s fractured, despairing images even more subversive.
              </p>
            </div>
          </section>

          {/* ── Martini's Visual Language ── */}
          <section id="martinis-language" className="mb-16 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">
              Martini&rsquo;s Visual Language
            </h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Martini&rsquo;s drawings are immediately unsettling. Executed primarily in ink,
                they rely on nervous, erratic linework, exaggerated anatomy, and unstable spatial
                relationships. Figures frequently appear suspended in voids or compressed against
                shallow pictorial planes, creating a sense of suffocation rather than immersion.
                Light does not illuminate but flickers uncertainly, as if emanating from the
                figures&rsquo; own psychological distress rather than from a coherent source.
              </p>
              <p>
                For Canto V, rather than depicting Paolo and Francesca directly, Martini represents
                Minos, the infernal judge. Minos&rsquo;s grotesquely elongated body coils upon
                itself, his serpentine tail wrapped tightly around his form, visually enacting the
                act of judgment as compulsion rather than rational authority. Judgment here is not
                presented as divine or objective but as unstable and almost pathological.
              </p>
              <p>
                For Canto XIII, Martini renders the forest not as a coherent environment but as a
                nightmarish continuum of flesh and matter. Trunks resemble skeletal spines; branches
                extend like grasping limbs; human faces emerge from bark in grotesque, half-formed
                states. Viviana Triscari identifies in Martini&rsquo;s work a persistent fear of
                psychic disintegration, in which identity appears porous and irrecoverable.
              </p>
              <p>
                For Canto XXXIV, the multiplication of Lucifer&rsquo;s faces transforms evil from
                a singular adversary into a fractured consciousness&mdash;suggesting not authority
                but internal contradiction. Martini&rsquo;s Lucifer does not reign over Hell; he
                endures it. His monstrous form evokes not sovereignty but imprisonment within the
                self.
              </p>
            </div>
          </section>

          <div className="border-t border-[#c9a84c]/15 mb-16" />

          {/* ── VI. Salvador Dalí ── */}
          <section id="salvador-dali" className="mb-14">
            <h2 className="font-serif text-2xl [font-variant:small-caps] tracking-wide text-[#c9a84c] mb-6">
              VI. Salvador Dal&iacute;: Surrealism and the Subconscious
            </h2>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                With Salvador Dal&iacute;&rsquo;s illustrations for Dante&rsquo;s{' '}
                <em>Divine Comedy</em> (1950&ndash;1964), the visual tradition of the{' '}
                <em>Inferno</em> undergoes its most radical transformation. Where Dor&eacute;
                monumentalizes Hell as moral architecture and Martini fractures it into
                psychological anxiety, Dal&iacute; dissolves it almost entirely into the realm of
                the subconscious. His images no longer attempt to depict Hell as a coherent place
                or even as a stable mental state. Instead, Dal&iacute; presents the{' '}
                <em>Inferno</em> as a dreamscape governed by symbolic association, erotic
                displacement, trauma, and irrational metamorphosis.
              </p>
            </div>
          </section>

          {/* ── Dalí Commission ── */}
          <section id="dali-commission" className="mb-14 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">
              The Commission, the Controversy, and Dal&iacute;&rsquo;s Catholic Surrealism
            </h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                The commission originated with the Italian publisher Rizzoli, which undertook the
                project in anticipation of the 1965 celebrations of the 700th anniversary of
                Dante&rsquo;s birth. The choice of a Spanish Surrealist was immediately
                controversial: the Italian parliament and cultural critics were outraged not only
                because Dal&iacute; was not Italian but because his Catholic Surrealism was seen as
                fundamentally incompatible with Dante&rsquo;s theological rigor.
              </p>
              <p>
                Yet Dal&iacute; himself was a deeply complicated Catholic: he professed Catholicism
                while producing imagery saturated with psychosexual Freudian content. This tension
                is not peripheral but central to reading his <em>Inferno</em> illustrations. Italian
                critics largely failed to understand that Dal&iacute;&rsquo;s apparent irreverence
                was in fact a different kind of devotion&mdash;a mystic-Surrealist engagement with
                Dante&rsquo;s sacred text rather than a dismissal of it.
              </p>
            </div>
          </section>

          {/* ── Dalí's Visual Language ── */}
          <section id="dalis-language" className="mb-16 pl-0 md:pl-6">
            <h3 className="font-serif text-lg text-[#e8dcc8] mb-4">
              Dal&iacute;&rsquo;s Visual Language
            </h3>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Dal&iacute;&rsquo;s illustrations are executed primarily in watercolor and mixed
                media. Color washes bleed into one another; forms appear soft, melting, or
                incomplete. His imagery draws repeatedly on what he termed the
                &lsquo;paranoiac-critical method,&rsquo; a process through which irrational
                associations generate visual meaning. Applied to Dante, this method transforms the{' '}
                <em>Inferno</em> into a sequence of psychic symbols rather than narrative scenes.
              </p>
              <p>
                For Canto V, the lovers themselves are displaced into miniature, almost schematic
                figures in the distance. What dominates is the psychic structure of the
                canto&mdash;eros, repetition, and the self&rsquo;s susceptibility to obsession.
                Dal&iacute;&rsquo;s Canto V becomes less a scene of romantic tragedy than a tableau
                of erotic memory.
              </p>
              <p>
                For Canto XIII, the boundary between body and environment dissolves almost entirely.
                Figures melt into branches, drip downward, or fragment into biomorphic shapes.
                Dal&iacute;&rsquo;s forest is not punitive; it is mournful.
              </p>
              <p>
                For Canto XXXIV, Dal&iacute; stages the scene in a near-void: broad areas of
                unmodulated paper surround a robed, hooded figure whose face reads like a mask.
                Evil is no longer a stable object that can be measured by scale or anatomized
                through grotesque distortion. It becomes something closer to a psychological and
                metaphysical problem: a presence that refuses full representation.
              </p>
            </div>
          </section>

          <div className="border-t border-[#c9a84c]/15 mb-16" />

          {/* ── VII. Comparative Analysis ── */}
          <section id="comparative-analysis" className="mb-16">
            <h2 className="font-serif text-2xl [font-variant:small-caps] tracking-wide text-[#c9a84c] mb-6">
              VII. Comparative Analysis Across Time and Media
            </h2>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Dante&rsquo;s <em>Inferno</em>  is, at its core, architectural. It is a place
                carefully structured according to moral logic, descending in ordered circles toward
                a frozen center. Among the artists examined here, Dor&eacute; remains closest to
                this spatial worldview. Blake initiates the first rupture: spatial coherence begins
                to soften as backgrounds glow rather than recede. With Martini, spatial logic
                collapses further; his <em>Inferno</em> is not navigable, not a place one enters
                but a condition one inhabits. Dal&iacute; completes this transformation: space
                functions according to dream logic, landscapes melt into bodies, and descent becomes
                psychological rather than vertical.
              </p>
              <p>
                The evolution of the human body across these interpretations is equally revealing.
                Dor&eacute;&rsquo;s figures, though tormented, remain anatomically coherent. Blake
                begins to loosen this framework, his figures often appearing elongated or radiant.
                With Martini, the body fractures entirely: identity becomes unstable, and punishment
                is experienced as the collapse of selfhood. Dal&iacute;&rsquo;s bodies extend this
                transformation to its furthest extreme&mdash;they melt, dissolve, or appear
                unfinished, resisting anatomical or symbolic closure.
              </p>
              <p>
                Underlying these visual transformations is a profound shift in how justice itself is
                conceived. In Dor&eacute;&rsquo;s engravings, justice remains legible even when
                terrifying. Blake complicates this model by shifting emphasis from juridical
                structure to moral perception. With Martini, this assurance fractures entirely.
                Dal&iacute; abandons moral resolution almost entirely: Hell no longer instructs or
                warns but exposes. Meaning is not delivered; it must be reckoned with, or left
                unresolved.
              </p>
              <p>
                What allows the <em>Inferno</em> to endure across these radical reinterpretations
                is the symbolic openness of its imagery. Wind, forest, and ice function not merely
                as narrative settings but as a visual vocabulary capable of infinite translation.
                Dante supplies the grammar; later artists provide the syntax through which their
                own cultural moment speaks.
              </p>
            </div>
          </section>

          <div className="border-t border-[#c9a84c]/15 mb-16" />

          {/* ── VIII. Conclusion ── */}
          <section id="conclusion" className="mb-16">
            <h2 className="font-serif text-2xl [font-variant:small-caps] tracking-wide text-[#c9a84c] mb-6">
              VIII. Conclusion
            </h2>
            <div className="font-serif text-[#e8dcc8] leading-[1.8] text-[1.0625rem] flex flex-col gap-5">
              <p>
                Dante&rsquo;s <em>Inferno</em> endures not because it offers a fixed image of the
                afterlife but because it provides a symbolic language capable of transformation.
                Across centuries, its winds, forests, and frozen depths have remained imaginatively
                fertile precisely because they invite reinterpretation. The visual history traced in
                this thesis reveals that Hell does not remain the same as the world changes.
                Instead, each era remakes judgment in its own image.
              </p>
              <p>
                Through the works of William Blake, Gustave Dor&eacute;, Alberto Martini, and
                Salvador Dal&iacute;, Dante&rsquo;s <em>Inferno</em> undergoes a profound
                metamorphosis. What begins as a rigorously structured moral universe gradually
                becomes an interior landscape shaped by emotion, psychology, and memory. This shift
                does not represent a rejection of Dante&rsquo;s vision but a reorientation of how
                that vision is understood. Judgment moves from heaven toward the human mind.
              </p>
              <p>
                Across these reinterpretations, space loses coherence, the body loses stability,
                and evil loses its center. Hell shifts from a mapped territory to a psychological
                condition, from a place one enters to a state one inhabits. The descent through the
                afterlife becomes a descent into the self.
              </p>
              <p>
                In tracing this visual evolution, this thesis demonstrates that illustrations of the{' '}
                <em>Inferno</em> are not secondary embellishments but acts of interpretation. Each
                image constitutes a form of judgment in itself, revealing how artists understood
                responsibility, suffering, and the nature of the human soul. The afterlife depicted
                in Dante becomes, over time, a reflection of earthly consciousness.
              </p>
              <p>
                The enduring power of Dante&rsquo;s Hell lies not in its flames or monsters but in
                its adaptability. As belief systems shift and metaphysical certainties erode, the{' '}
                <em>Inferno</em>  continues to offer a framework through which humanity confronts its
                darkest questions. The geography fades, the theology transforms, yet the vision
                persists: reimagined, refracted, and renewed across time. In the hands of these
                artists, Dante&rsquo;s Hell becomes more than a destination beyond life. It becomes
                a lens through which each age confronts judgment itself&mdash;not only as divine
                decree but as an enduring human struggle to understand guilt, responsibility, and
                the limits of freedom.
              </p>
            </div>
          </section>

          <div className="border-t border-[#c9a84c]/15 mb-16" />

          {/* ── IX. Bibliography ── */}
          <section id="bibliography" className="mb-16">
            <h2 className="font-serif text-2xl [font-variant:small-caps] tracking-wide text-[#c9a84c] mb-8">
              IX. Bibliography
            </h2>

            <div className="flex flex-col gap-10">
              {/* Primary Sources */}
              <div>
                <h3 className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-[#525252] mb-4">
                  Primary Sources
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Blake, William. The Marriage of Heaven and Hell. 1790\u20131793.',
                    'Dante Alighieri. Inferno. Translated by Robert M. Durling. Oxford: Oxford University Press, 1996.',
                    'Dante Alighieri. Inferno. Translated by Allen Mandelbaum. New York: Bantam Books, 1982.',
                  ].map((entry) => (
                    <li
                      key={entry}
                      className="font-serif text-[#525252] text-sm leading-[1.8] pl-6 -indent-6"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secondary Scholarship */}
              <div>
                <h3 className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-[#525252] mb-4">
                  Secondary Scholarship
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Ades, Dawn. Dal\u00ed and Surrealism. London: Thames & Hudson, 1982.',
                    'Audeh, Aida. \u201cGustave Dor\u00e9\u2019s Dante Illustrations.\u201d The World of Dante, University of Virginia. Accessed October 2025.',
                    'Audeh, Aida, and Nick Havely, eds. Dante in the Long Nineteenth Century: Nationality, Identity, and Appropriation. Oxford: Oxford University Press, 2012.',
                    'Barilli, Renato. Il simbolismo (parte prima). Milan: Fratelli Fabbri Editori, 1967.',
                    'Barolini, Teodolinda. \u201cCommento Baroliniano.\u201d Digital Dante, Columbia University. Accessed October 2025.',
                    'Belting, Hans. Likeness and Presence: A History of the Image Before the Era of Art. Translated by Edmund Jephcott. Chicago: University of Chicago Press, 1994.',
                    'Binski, Paul. Medieval Death: Ritual and Representation. London: British Museum Press, 1996.',
                    'Botta, Alessandro. \u201cIllustrazioni incredibili: Alberto Martini e i racconti di Edgar Allan Poe.\u201d (2017): 1\u2013305.',
                    'Braida, Antonella. Dante on View: The Reception of Dante in the Visual and Performing Arts. Aldershot: Ashgate, 2007.',
                    'Burke, Edmund. A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful. London: R. and J. Dodsley, 1757.',
                    'Cheney, Liana. Illustrations for Dante\u2019s Inferno: A Comparative Study. Cultural and Religious Studies, 2016.',
                    'Cornish, Alison. Reading Dante\u2019s Stars. New Haven: Yale University Press, 2000.',
                    'Descharnes, Robert, and Gilles N\u00e9ret. Dal\u00ed: The Paintings. Cologne: Taschen, 1994.',
                    'Foster, Hal. Compulsive Beauty. Cambridge, MA: MIT Press, 1993.',
                    'Freccero, John. In Dante\u2019s Wake: Reading from Medieval to Modern in the Augustinian Tradition. New York: Fordham University Press, 2015.',
                    'Gibson, Ian. The Shameful Life of Salvador Dal\u00ed. New York: Norton, 1997.',
                    'Gilchrist, Alexander. Life of William Blake. 2nd ed. 1863. Reprinted New York: Dover, 1998.',
                    'Hollander, Robert. Dante: A Life in Works. New Haven: Yale University Press, 2000.',
                    'Hollander, Robert. Inferno Commentary. Princeton: Princeton Dante Project, 2000.',
                    'Kaenel, Philippe. Le M\u00e9tier d\u2019illustrateur. Geneva: Droz, 2005.',
                    'Makdisi, Saree. William Blake and the Impossible History of the 1790s. Chicago: University of Chicago Press, 2003.',
                    'Marin, Ileana. \u201cDante\u2019s Hell Envisioned by Gustav Dor\u00e9: An Overlooked Opening to Modernity.\u201d International Journal of Cross-Cultural Studies and Environmental Communication 4, no.\u00a01 (2015): 17\u201330.',
                    'Mitchell, W.\u202fJ.\u202fT. Iconology: Image, Text, Ideology. Chicago: University of Chicago Press, 1986.',
                    'Nassar, Eugene. \u201cDante Illustration: Fidelity to Text and Tone as Criterion.\u201d Comparative Literature Studies 30, no.\u00a01 (1993): 56\u201372.',
                    'Parker, Deborah, and Mark Parker. Inferno Revealed: From Dante to Dan Brown. New York: Palgrave Macmillan, 2013.',
                    'Praz, Mario. The Romantic Agony. Translated by Angus Davidson. 2nd ed. Oxford: Oxford University Press, 1978.',
                    'Triscari, Viviana. \u201cOltre i confini dell\u2019immagine. Arte, vita e scrittura nel doppio talento di Alberto Martini.\u201d (2024).',
                    'Viscomi, Joseph. Blake and the Idea of the Book. Princeton: Princeton University Press, 1993.',
                    'Visions of Dante. Exhibition. Division of Rare and Manuscript Collections, Cornell University Library, 2015.',
                    'The World of Dante. Directed by Deborah Parker. University of Virginia. Accessed October 2025.',
                  ].map((entry) => (
                    <li
                      key={entry}
                      className="font-serif text-[#525252] text-sm leading-[1.8] pl-6 -indent-6"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
