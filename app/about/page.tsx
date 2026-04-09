export const metadata = {
  title: 'About — Visions of Judgment',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-16">
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
              This thesis explores how four major artists&mdash;William Blake,
              Gustave Dor&eacute;, Alberto Martini, and Salvador
              Dal&iacute;&mdash;reimagined Dante Alighieri&rsquo;s{' '}
              <em>Inferno</em> in ways that reflect the shifting philosophical,
              cultural, and psychological concerns of the nineteenth and
              twentieth centuries. Focusing on three pivotal cantos&mdash;Canto
              V (Paolo and Francesca), Canto XIII (the Suicides), and Canto
              XXXIV (Lucifer)&mdash;the project examines how visual depictions
              of lust, despair, and ultimate evil evolved in meaning across
              time, medium, and artistic intent.
            </p>
            <p>
              This study employs comparative iconographic analysis, close
              reading of Dante&rsquo;s text, and historical contextualization
              to trace the evolving visual hermeneutics of the{' '}
              <em>Inferno</em>. Through interdisciplinary inquiry grounded in
              art history, theology, and literary interpretation, it reveals
              how each artist used Dante&rsquo;s moral architecture to
              articulate the anxieties of their own age. Blake&rsquo;s mystical
              Romanticism reframes sin as spiritual struggle and imagination as
              redemption; Dor&eacute;&rsquo;s engravings monumentalize divine
              justice within the moral certainties of the nineteenth century;
              Martini&rsquo;s Symbolist illustrations expose psychological
              fragmentation and existential dread; and Dal&iacute;&rsquo;s
              Surrealist watercolors transform Hell into a subconscious
              landscape of trauma and ambiguity in the postwar world.
            </p>
            <p>
              This thesis argues that visual reinterpretations of Dante&rsquo;s{' '}
              <em>Inferno</em> reflect the gradual transformation of Hell from
              a moral and theological construct into a psychological and
              metaphysical space, revealing the poem&rsquo;s enduring power to
              mirror the evolving human condition.
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
            This thesis employs an interdisciplinary approach, drawing from art
            history, literary criticism, and visual studies. Each artist is
            treated not merely as an illustrator but as an interpreter who
            probes the deeper symbolic and psychological resonances of
            Dante&rsquo;s poem. In line with Eugene Nassar&rsquo;s principle
            of &lsquo;fidelity to tone&rsquo; rather than literal accuracy
            &mdash; developed in his essay &lsquo;Dante Illustration: Fidelity
            to Text and Tone as Criterion&rsquo; (<em>Comparative Literature
            Studies</em> 30, no.&thinsp;1, 1993) &mdash; the project views
            each body of work as a creative negotiation with Dante&rsquo;s
            vision: filtering it through Romantic idealism, modernist
            fragmentation, and postwar Surrealism.
          </p>
        </section>

        <div className="border-t border-gold/15" />

        {/* Acknowledgments */}
        <section>
          <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-dust mb-6">
            Acknowledgments
          </h2>
          <div className="font-serif text-parchment leading-[1.85] text-[1.0625rem] flex flex-col gap-4">
            <p>
              This thesis would not exist without Professor Theodore J. Cachey
              Jr., whose teaching first showed me that scholarship and wonder
              are not in tension. It was in his classroom, and later across
              Italy, that I learned what it means to truly look. He had a way
              of stopping mid-stride to point at something most of us had
              walked past without seeing: a stone mosaic nearly lost underfoot,
              the unexpected grace of Pietralata, beauty folded into the
              absurdity of those streets as if it had always been there,
              waiting for someone patient enough to notice. He taught us that
              beauty does not announce itself. You have to be willing to reach
              for it, even when you are not sure what you are looking for.
            </p>
            <p>
              That lesson lives on every page of this thesis. To write about
              artists who descended into Hell in search of something luminous
              is, in a way, to follow the example he set.
            </p>
            <p>
              I am also grateful to the Department of Romance Languages and the
              Glynn Family Honors Program at the University of Notre Dame, and
              to all those who accompanied me on the journey to Italy and
              looked alongside me.
            </p>
          </div>
        </section>

        <div className="border-t border-gold/15" />

        {/* Author */}
        <section>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/author.jpg"
            alt="Gabriela Sierocka"
            className="rounded-full w-48 h-48 object-cover object-top ring-2 ring-offset-2 ring-offset-[#0a0a0a] ring-[#c9a84c] mb-6 block mx-auto"
          />
          <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-dust mb-6">
            Author
          </h2>
          <div className="flex flex-col gap-4 font-serif text-parchment text-[1.0625rem]">
            <p className="text-xl text-parchment">Gabriela Sierocka</p>
            <p className="text-dust leading-[1.85]">
              University of Notre Dame
              <br />
              Glynn Family Honors Program
              <br />
              Spring 2026
            </p>
            <p className="text-dust">
              Advisor: Professor Theodore J. Cachey Jr.
            </p>
            <p className="font-serif italic text-dust/70 text-sm">Pax.</p>

            <hr className="w-12 mx-auto border-0 border-t border-[#c9a84c] my-2" />

            <p className="text-dust leading-[1.85]">
              Gabriela Sierocka grew up in Poland and came to the University
              of Notre Dame to study Computer Science with a minor in Italian
              and Business Economics through the Glynn Family Honors
              Program. The research for this thesis took her across Florence,
              Ravenna, Madrid, Figueres, and Paris &mdash; following the
              artists who descended into Hell in search of something luminous.
            </p>
            <p className="text-dust leading-[1.85]">
              This thesis was completed as part of the Glynn Family Honors
              Program at the University of Notre Dame.
            </p>
          </div>
        </section>

        <div className="border-t border-gold/15" />

        {/* Bibliography */}
        <section>
          <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-dust mb-6">
            Selected Bibliography
          </h2>
          <ul className="flex flex-col gap-2 font-serif text-dust text-sm leading-[1.8]">
            {[
              'Ades, Dawn. \u202fDal\u00ed and Surrealism.\u202f London: Thames & Hudson, 1982.',
              'Audeh, Aida, and Nick Havely, eds.\u202f Dante in the Long Nineteenth Century.\u202f Oxford: Oxford University Press, 2012.',
              'Botta, Alessandro.\u202f \u201cIllustrazioni incredibili: Alberto Martini e i racconti di Edgar Allan Poe.\u201d\u202f 2017.',
              'Braida, Antonella.\u202f Dante on View: The Reception of Dante in the Visual and Performing Arts.\u202f Aldershot: Ashgate, 2007.',
              'Cornish, Alison.\u202f Reading Dante\u2019s Stars.\u202f New Haven: Yale University Press, 2000.',
              'Descharnes, Robert, and Gilles N\u00e9ret.\u202f Dal\u00ed: The Paintings.\u202f Cologne: Taschen, 1994.',
              'Foster, Hal.\u202f Compulsive Beauty.\u202f Cambridge, MA: MIT Press, 1993.',
              'Freccero, John.\u202f In Dante\u2019s Wake.\u202f New York: Fordham University Press, 2015.',
              'Gibson, Ian.\u202f The Shameful Life of Salvador Dal\u00ed.\u202f New York: Norton, 1997.',
              'Hollander, Robert.\u202f Dante: A Life in Works.\u202f New Haven: Yale University Press, 2000.',
              'Makdisi, Saree.\u202f William Blake and the Impossible History of the 1790s.\u202f Chicago: University of Chicago Press, 2003.',
              'Marin, Ileana.\u202f \u201cDante\u2019s Hell Envisioned by Gustav Dor\u00e9.\u201d\u202f International Journal of Cross-Cultural Studies and Environmental Communication 4, no.\u00a01 (2015): 17\u201330.',
              'Mitchell, W.\u202fJ.\u202fT.\u202f Iconology: Image, Text, Ideology.\u202f Chicago: University of Chicago Press, 1986.',
              'Nassar, Eugene.\u202f \u201cDante Illustration: Fidelity to Text and Tone as Criterion.\u201d\u202f Comparative Literature Studies 30, no.\u00a01 (1993): 56\u201372.',
              'Parker, Deborah, and Mark Parker.\u202f Inferno Revealed.\u202f New York: Palgrave Macmillan, 2013.',
              'Triscari, Viviana.\u202f \u201cOltre i confini dell\u2019immagine. Arte, vita e scrittura nel doppio talento di Alberto Martini.\u201d\u202f 2024.',
              'Viscomi, Joseph.\u202f Blake and the Idea of the Book.\u202f Princeton: Princeton University Press, 1993.',
            ].map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  )
}
