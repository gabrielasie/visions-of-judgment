export const metadata = {
  title: 'About — Visions of Judgment',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      <header className="mb-16">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-dust mb-4">
          The Project
        </p>
        <h1 className="font-serif text-5xl text-parchment">
          About This Project
        </h1>
      </header>

      <div className="flex flex-col gap-14">

        {/* Thesis Abstract */}
        <section>
          <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-dust mb-6">
            Abstract
          </h2>
          <div className="font-serif text-parchment leading-[1.85] text-[1.0625rem] flex flex-col gap-4">
            <p>
              This thesis argues that the history of Dante illustration is not a
              history of faithful visual translation but a history of
              appropriation. Each of the four artists examined here&mdash;William
              Blake, Gustave Dor&eacute;, Simone Martini, and Salvador
              Dal&iacute;&mdash;uses the <em>Inferno</em> as a vehicle for a
              distinct interpretive argument, often in direct conflict with
              Dante&rsquo;s own moral and theological framework. Through close
              analysis of three cantos&mdash;Canto&nbsp;V (the Circle of the
              Lustful), Canto&nbsp;XIII (the Wood of Suicides), and
              Canto&nbsp;XXXIV (the Frozen Lake and Satan)&mdash;this study
              demonstrates that visual interpretation is always argumentation: an
              illustration does not depict what the text says; it takes a
              position on what the text means.
            </p>
            <p>
              Blake subverts Dante&rsquo;s moral condemnation to champion erotic
              and imaginative energy, reading the damned as martyrs of a
              repressive law. Dor&eacute; renders Hell as spectacular theatre,
              his compositional grandeur compelling a pity that must work
              against the grain of the image. Martini&rsquo;s Gothic courtly
              vocabulary naturalizes damnation into devotion, producing
              illustrations whose visual idiom cannot fully accommodate
              Dante&rsquo;s theology of sin. Dal&iacute; translates the
              <em>Inferno</em> into the grammar of the unconscious, treating
              Hell as a landscape of psychic rather than theological
              consequence. Together, these four bodies of work constitute not a
              cumulative tradition of Dante visualization but a series of
              irreconcilable arguments&mdash;a testament to the poem&rsquo;s
              capacity to sustain, and to provoke, radically divergent moral
              visions across seven centuries of visual culture.
            </p>
            <p>
              The three cantos chosen for comparison are not arbitrary. They
              represent the <em>Inferno</em>&rsquo;s three most distinctive
              visual provocations: the ambiguity of desire, the paradox of
              self-willed death, and the anti-climax of absolute evil. Each
              foregrounds a different dimension of Dante&rsquo;s moral universe,
              and each artist&rsquo;s response reveals a different set of
              assumptions about what images can and cannot do with moral ideas.
              The central claim holds across all three: the history of Dante
              illustration is a history of the misreading that art makes
              possible&mdash;and necessary.
            </p>
          </div>
        </section>

        <div className="border-t border-gold/15" />

        {/* Methodology */}
        <section>
          <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-dust mb-6">
            Methodology
          </h2>
          <p className="font-serif text-parchment leading-[1.85] text-[1.0625rem]">
            The comparative method employed here draws on iconographic analysis,
            reception history, and the theory of ekphrasis as developed by
            W.J.T. Mitchell and others. Each artwork is read first against
            Dante&rsquo;s text, then against the artist&rsquo;s wider body of
            work, and finally against the historical and ideological conditions
            of its production&mdash;resisting the notion of a single
            &ldquo;correct&rdquo; visual reading in favor of mapping the full
            range of interpretive positions the poem has made available to its
            illustrators.
          </p>
        </section>

        <div className="border-t border-gold/15" />

        {/* Acknowledgments */}
        <section>
          <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-dust mb-6">
            Acknowledgments
          </h2>
          <p className="font-serif text-parchment leading-[1.85] text-[1.0625rem]">
            This project would not exist without the guidance of Professor
            Theodore J. Cachey Jr., whose seminar on Dante and the visual arts
            first made this question legible to me and whose scholarly generosity
            over two years of advising gave it its present shape. His work on
            Dante reception and the cartography of the <em>Commedia</em> has
            been a constant orienting presence, and his insistence that close
            reading and historical rigor are not in competition but in
            conversation is the methodological conviction that underlies every
            page of this thesis.
          </p>
        </section>

        <div className="border-t border-gold/15" />

        {/* Author */}
        <section>
          <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-dust mb-6">
            Author
          </h2>
          <div className="flex flex-col gap-1 font-serif text-parchment text-[1.0625rem]">
            <p className="text-xl text-parchment">Gabriela Sierocka</p>
            <p className="text-dust leading-[1.85]">
              University of Notre Dame
              <br />
              Glynn Family Honors Program
              <br />
              Spring 2026
            </p>
            <p className="text-dust mt-3">
              Advisor: Professor Theodore J. Cachey Jr.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
