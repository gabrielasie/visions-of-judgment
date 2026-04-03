export type Artist = 'blake' | 'dore' | 'martini' | 'dali'
export type Canto = 'v' | 'xiii' | 'xxxiv'

export interface Artwork {
  artist: Artist
  canto: Canto
  title: string
  year: string
  medium: string
  imagePath: string
  dantePassage: {
    lines: string
    citation: string
  }
  analysis: string
  thesisQuote: string
}

export interface CantoData {
  id: Canto
  romanNumeral: string
  title: string
  subtitle: string
  danteText: string
  danteSource: string
  theme: string
}

export interface ArtistData {
  id: Artist
  name: string
  years: string
  movement: string
  brief: string
}

export const cantos: CantoData[] = [
  {
    id: 'v',
    romanNumeral: 'V',
    title: 'Canto V',
    subtitle: 'The Circle of the Lustful',
    danteText: `"Love, which absolves no beloved one from loving,\ntook hold of me so strongly through his beauty\nthat, as you see, it has not left me yet.\nLove brought us both to one death."\n                \u2014 Francesca da Rimini`,
    danteSource: 'Inferno V, 103\u2013106 (trans. Mandelbaum)',
    theme: 'Desire',
  },
  {
    id: 'xiii',
    romanNumeral: 'XIII',
    title: 'Canto XIII',
    subtitle: 'The Wood of the Suicides',
    danteText: `"I am the one who held both keys\nof Frederick\u2019s heart, and turned them, locking, unlocking\nso softly that I kept most men away;\nI bore such fidelity to the glorious office\nthat I lost both sleep and life."\n                \u2014 Pier della Vigna`,
    danteSource: 'Inferno XIII, 58\u201362 (trans. Mandelbaum)',
    theme: 'Despair',
  },
  {
    id: 'xxxiv',
    romanNumeral: 'XXXIV',
    title: 'Canto XXXIV',
    subtitle: 'The Frozen Lake and Satan',
    danteText: `"The emperor of the realm of grief protruded\nfrom mid-chest up above the surrounding ice.\nA giant\u2019s height, and mine, would come far closer\nto matching than a giant\u2019s to his arms;\nin each of his three mouths he crunched a sinner."`,
    danteSource: 'Inferno XXXIV, 28\u201332 (trans. Mandelbaum)',
    theme: 'Evil',
  },
]

export const artists: ArtistData[] = [
  {
    id: 'blake',
    name: 'William Blake',
    years: '1757\u20131827',
    movement: 'Romanticism / Visionary Art',
    brief: `Blake approached Dante\u2019s Inferno as both poet and prophet, producing 102 watercolor illustrations under the Linnell commission (1824\u201327), left unfinished at his death. He openly disagreed with Dante\u2019s moral architecture, viewing the punishments as expressions of natural law \u2014 which he equated with tyranny \u2014 rather than spiritual truth.`,
  },
  {
    id: 'dore',
    name: 'Gustave Dor\u00e9',
    years: '1832\u20131883',
    movement: 'Romanticism / The Sublime',
    brief: `Dor\u00e9\u2019s 1861 engravings for the Inferno became the definitive popular visual text of Dante\u2019s poem for the Victorian age, combining the northern sublime with Michelangelesque anatomy to build a monumental, legible Hell. His imagery was so pervasive it shaped popular visual expectations of the Commedia long after its initial publication.`,
  },
  {
    id: 'martini',
    name: 'Alberto Martini',
    years: '1876\u20131954',
    movement: 'Symbolism / Art Nouveau',
    brief: `Alberto Martini produced his Dante illustrations between 1901 and 1909, working in pen and ink. His fractured, anxious imagery emerged from fin-de-si\u00e8cle Symbolist aesthetics and was received with unease by the Italian cultural establishment, which had conscripted Dante into nationalist ideology.`,
  },
  {
    id: 'dali',
    name: 'Salvador Dal\u00ed',
    years: '1904\u20131989',
    movement: 'Surrealism / Catholic Surrealism',
    brief: `Dal\u00ed\u2019s illustrations for Dante\u2019s Divine Comedy (1950\u20131964) translate the Inferno into the grammar of the unconscious, treating Hell as a landscape of psychic rather than theological consequence. Commissioned by the Italian publisher Rizzoli in anticipation of the 1965 celebrations of Dante\u2019s 700th anniversary, the choice of a Spanish Surrealist provoked immediate controversy from the Italian parliament and cultural critics.`,
  },
]

export const artworks: Artwork[] = [
  // Blake
  {
    artist: 'blake',
    canto: 'v',
    title: 'The Whirlwind of Lovers',
    year: '1824\u20131827',
    medium: 'Watercolor on paper',
    imagePath: '/images/blake-canto-v.jpg',
    dantePassage: {
      lines: `\u201cLove, which absolves no beloved one from loving, / took hold of me so strongly through his beauty / that, as you see, it has not left me yet.\u201d`,
      citation: 'Inferno V, 103\u2013105',
    },
    analysis: `Blake\u2019s depiction of Canto V transforms Dante\u2019s ambivalent sympathy for the lustful sinners into an unambiguous celebration of erotic energy. His watercolor shows Paolo and Francesca entwined in a luminous vortex, their bodies suffused with light rather than torment. Unlike Dante the pilgrim, who faints from compassion, Blake\u2019s composition aligns visual sympathy entirely with the lovers, reframing damnation as liberation from moral law. The absence of demonic Minos and the overwhelming warmth of the circular storm constitute a deliberate counter-reading of the canto\u2019s theology. Sources: Makdisi, William Blake and the Impossible History of the 1790s, 133; Freccero, In Dante\u2019s Wake, 54.`,
    thesisQuote: `For Blake, Paolo and Francesca float luminously amid the storm \u2014 their forms glowing with pale radiance \u2014 recasting Hell\u2019s justice as divine sympathy.`,
  },
  {
    artist: 'blake',
    canto: 'xiii',
    title: 'The Wood of the Self-Murderers: The Harpies and the Suicides',
    year: '1824\u20131827',
    medium: 'Watercolor on paper',
    imagePath: '/images/blake-canto-xiii.jpg',
    dantePassage: {
      lines: `\u201cNessus had not yet reached the other bank / when we moved into a wood that was not marked / by any path.\u201d`,
      citation: 'Inferno XIII, 1\u20133',
    },
    analysis: `In Blake\u2019s illustration of the Wood of Suicides, the blasted tree-bodies register not as punishment but as the natural form of souls turned inward against themselves. Blake, who throughout his Divine Comedy illustrations challenges Dante\u2019s moral framework, here transforms the grotesque into something approaching the sublime, rendering Pier della Vigna and the anonymous Florentine with the same tenderness he gave to his own suffering figures. The scene encapsulates his broader argument that self-destruction is the inevitable end of tyranny internalized, the political as much as the psychological meaning of Canto XIII. Blake\u2019s Harpies, rather than agents of divine justice, appear as extensions of the same repressive force that drove these souls to their ends. Sources: Makdisi, William Blake and the Impossible History of the 1790s, 133; Freccero, In Dante\u2019s Wake, 54.`,
    thesisQuote: `The blasted wood is for Blake the landscape of a society that makes self-destruction rational \u2014 damnation as diagnosis.`,
  },
  {
    artist: 'blake',
    canto: 'xxxiv',
    title: 'Lucifer and the Giants',
    year: '1824\u20131827',
    medium: 'Watercolor on paper',
    imagePath: '/images/blake-canto-xxxiv.jpg',
    dantePassage: {
      lines: `\u201cThe emperor of the realm of grief protruded / from mid-chest up above the surrounding ice.\u201d`,
      citation: 'Inferno XXXIV, 28\u201329',
    },
    analysis: `Blake\u2019s Canto XXXIV is among his most restrained illustrations, suggesting that the frozen emperor of Hell is incommensurable with his visual theology of dynamic energy. Satan bound in ice represents everything Blake despised: stasis, negation, the death of imagination. Where Dor\u00e9 made Satan monstrous and Dal\u00ed made him psychoanalytically legible, Blake renders him almost blank \u2014 a void rather than a presence, defined by what he cannot do rather than what he is. The scene\u2019s real energy belongs to Dante and Virgil ascending, the upward movement of intellect and imagination escaping the gravitational pull of negation. Sources: Makdisi, William Blake and the Impossible History of the 1790s, 133; Freccero, In Dante\u2019s Wake, 54.`,
    thesisQuote: `Blake\u2019s Satan is absence made visible: the ultimate contrary of the creative energy that organizes his entire cosmos.`,
  },

  // Dore
  {
    artist: 'dore',
    canto: 'v',
    title: 'Paolo and Francesca da Rimini',
    year: '1861',
    medium: 'Wood engraving',
    imagePath: '/images/dore-canto-v.jpg',
    dantePassage: {
      lines: `\u201cAnd she to me: \u2018There is no greater sorrow / than to recall our time of joy / in wretchedness.\u2019\u201d`,
      citation: 'Inferno V, 121\u2013123',
    },
    analysis: `Dor\u00e9\u2019s engraving of the lustful sinners is among the most reproduced images in all of Dante illustration, and its power lies in the tension between spectacle and sympathy. The swirling mass of souls in the dark tempest occupies the full vertical frame, a churning crowd that conveys both the enormity of damnation and its terrible beauty. Dor\u00e9 positions Dante and Virgil as witnesses at the margin, their scale diminished against the vortex, reinforcing the pilgrim\u2019s horror before the scope of desire\u2019s consequences. When Paolo and Francesca drift forward from the crowd, their tenderness is rendered with a specificity that makes the scene\u2019s pathos almost unbearable. Sources: Marin, \u201cDante\u2019s Hell Envisioned by Gustav Dor\u00e9,\u201d 17; Audeh and Havely, Dante in the Long Nineteenth Century.`,
    thesisQuote: `Dor\u00e9 makes the infernal spectacular precisely so that pity must work against the grain of the image \u2014 compassion as intellectual effort.`,
  },
  {
    artist: 'dore',
    canto: 'xiii',
    title: 'The Forest of Suicides',
    year: '1861',
    medium: 'Wood engraving',
    imagePath: '/images/dore-canto-xiii.jpg',
    dantePassage: {
      lines: `\u201cI heard cries of grief on all sides, / and no one whom I saw was making them, / so that, confused, I stopped and held my ground.\u201d`,
      citation: 'Inferno XIII, 22\u201324',
    },
    analysis: `Dor\u00e9\u2019s dense cross-hatching transforms the Wood of Suicides into a place of psychological horror as much as physical punishment, the thick black trees pressing against the frame\u2019s edges while Harpies\u2019 wings create a canopy of shadow that leaves almost no light. The torn branches bleeding speak directly to the literal text, but Dor\u00e9 amplifies the violence: bark and flesh merge without clear boundary, suggesting that these souls have not merely been punished but fundamentally unmade. It is the most explicitly body-horror of his Inferno images, and remains the definitive visual rendering of Canto XIII for more than a century of readers. Dor\u00e9\u2019s mastery of tonal gradation means that the deepest darkness in the image is reserved not for the Harpies but for the spaces between the trees. Sources: Marin, \u201cDante\u2019s Hell Envisioned by Gustav Dor\u00e9,\u201d 17; Audeh and Havely, Dante in the Long Nineteenth Century.`,
    thesisQuote: `Dor\u00e9\u2019s Wood is the Victorian unconscious given topography \u2014 the forest where what cannot be spoken takes grotesque root.`,
  },
  {
    artist: 'dore',
    canto: 'xxxiv',
    title: 'Lucifer, King of Hell',
    year: '1861',
    medium: 'Wood engraving',
    imagePath: '/images/dore-canto-xxxiv.jpg',
    dantePassage: {
      lines: `\u201cIn each of his three mouths he crunched a sinner / with his teeth, as if they were a grinder, / keeping three of them in misery.\u201d`,
      citation: 'Inferno XXXIV, 55\u201357',
    },
    analysis: `Dor\u00e9\u2019s Satan is the most architecturally conceived of the major artists\u2019 treatments \u2014 a figure whose scale and stillness suggest geological time rather than mythological narrative. The three faces, each a different hue, are rendered with sufficient realism to register as genuinely monstrous rather than merely allegorical. The perspective from below \u2014 Dante and Virgil tiny figures descending toward the giant\u2019s waist \u2014 establishes the viewer\u2019s smallness before absolute evil. Dor\u00e9\u2019s illustration captures what Dante\u2019s text insists on: that the bottom of Hell is not fire but ice, not chaos but terrible, permanent order; the engraving\u2019s compositional stability is itself an argument about the nature of evil. Sources: Marin, \u201cDante\u2019s Hell Envisioned by Gustav Dor\u00e9,\u201d 17; Audeh and Havely, Dante in the Long Nineteenth Century.`,
    thesisQuote: `Dor\u00e9\u2019s Satan is architecture, not monster \u2014 evil as the principle of permanence, the universe\u2019s load-bearing wall.`,
  },

  // Martini
  {
    artist: 'martini',
    canto: 'v',
    title: 'Canto V (Minos)',
    year: 'c. 1901\u201309',
    medium: 'Pen and ink on paper',
    imagePath: '/images/martini-canto-v.jpg',
    dantePassage: {
      lines: `\u201cnot green its branches are, but black and gnarled; / no fruit is there, but poison dark and hard\u201d`,
      citation: 'Inferno XIII.4\u20135 (trans. Mandelbaum)',
    },
    analysis: `Rather than depicting Paolo and Francesca directly, Martini represents Minos, the infernal judge who assigns souls to their circles of punishment. Minos\u2019s grotesquely elongated body coils upon itself, his serpentine tail wrapped tightly around his form, visually enacting judgment as compulsion rather than rational authority. The composition emphasizes distortion over clarity: anatomy is stretched, space compressed, and the figure appears suspended within an indeterminate void. Judgment here is not presented as divine or objective but as unstable and almost pathological. Sources: Botta, \u201cIllustrazioni incredibili,\u201d 42\u201345.`,
    thesisQuote: `Martini shifts attention away from individual sinners toward the mechanism of condemnation itself, rendering justice as anxious, excessive, and psychologically charged.`,
  },
  {
    artist: 'martini',
    canto: 'xiii',
    title: 'The Wood of the Suicides',
    year: 'c. 1901\u201309',
    medium: 'Pen and ink on paper',
    imagePath: '/images/martini-canto-xiii.jpg',
    dantePassage: {
      lines: `\u201cnot green its branches are, but black and gnarled; / no fruit is there, but thorns with poison tips\u201d`,
      citation: 'Inferno XIII.4\u20135 (trans. Mandelbaum)',
    },
    analysis: `Martini renders the forest not as a coherent environment but as a nightmarish continuum of flesh and matter. Trunks resemble skeletal spines; branches extend like grasping limbs; human faces emerge from bark in grotesque, half-formed states, as though the self is struggling unsuccessfully to reconstitute itself. Unlike Dor\u00e9\u2019s forest, which retains spatial clarity and moral legibility, Martini\u2019s wood feels psychologically suffocating. Viviana Triscari identifies in Martini\u2019s work a persistent fear of psychic disintegration, in which identity appears porous and irrecoverable. Sources: Triscari, \u201cOltre i confini dell\u2019immagine,\u201d 2024.`,
    thesisQuote: `The suicides\u2019 metamorphosis becomes less a theological sentence than an existential condition \u2014 identity porous, irrecoverable, pressing toward the picture plane.`,
  },
  {
    artist: 'martini',
    canto: 'xxxiv',
    title: 'Lucifer (Canto XXXIV)',
    year: 'c. 1901\u201309',
    medium: 'Pen and ink on paper',
    imagePath: '/images/martini-canto-xxxiv.jpg',
    dantePassage: {
      lines: `\u201cThe Emperor of the sorrowful realm / emerged from the ice from mid-breast up\u201d`,
      citation: 'Inferno XXXIV.28\u201329 (trans. Mandelbaum)',
    },
    analysis: `Martini presents evil as simultaneously corporeal and unstable, humanlike yet grotesquely multiplied. Most striking is the multiplication of Lucifer\u2019s faces: while Dante describes Satan as possessing three faces, Martini exaggerates this motif into disturbing visual excess, the clustered heads fusing into a single monstrous mass. This transforms evil from a singular adversary into a fractured consciousness \u2014 suggesting not authority but internal contradiction. Martini\u2019s Lucifer does not reign over Hell; he endures it. Sources: Praz, The Romantic Agony; Triscari, \u201cOltre i confini dell\u2019immagine,\u201d 2024.`,
    thesisQuote: `Martini\u2019s Lucifer evokes not sovereignty but imprisonment within the self \u2014 evil rendered as a crisis of identity rather than an external force.`,
  },

  // Dali
  {
    artist: 'dali',
    canto: 'v',
    title: 'Paolo and Francesca',
    year: '1960',
    medium: 'Watercolor woodcut',
    imagePath: '/images/dali-canto-v.jpg',
    dantePassage: {
      lines: `\u201cLove brought us both to one death. / Ca\u00efna awaits the one who quenched our lives.\u201d`,
      citation: 'Inferno V, 106\u2013107',
    },
    analysis: `Dal\u00ed\u2019s illustration of Canto V deploys the full arsenal of Surrealist visual rhetoric to argue that desire cannot be punished because desire is the fundamental structure of consciousness. The lovers float in a biomorphic space that refuses stable orientation, the tempest rendered as pure libidinal energy \u2014 not wind but will, not storm but the unconscious made visible. Dal\u00ed\u2019s Francesca is immediately recognizable from his other female figures: the same melting softness, the same ambiguity between sensuality and dissolution that characterized his major paintings of the late 1930s. His reading of Canto V is the most explicitly psychoanalytic, treating damnation as the dream-work of the id made permanent. Sources: Ades, Dal\u00ed and Surrealism, 89; Foster, Compulsive Beauty, 55\u201360; Descharnes and N\u00e9ret, Dal\u00ed: The Paintings, 512.`,
    thesisQuote: `Dal\u00ed\u2019s lovers are not punished but unleashed \u2014 desire given the infinite space it always claimed as its right, Hell as the only honest name for the unconscious.`,
  },
  {
    artist: 'dali',
    canto: 'xiii',
    title: 'The Wood of Self-Destroyers',
    year: '1960',
    medium: 'Watercolor woodcut',
    imagePath: '/images/dali-canto-xiii.jpg',
    dantePassage: {
      lines: `\u201cWe heard cries of grief on all sides, / and no one whom I saw was making them, / so that, confused, I stopped and held my ground.\u201d`,
      citation: 'Inferno XIII, 22\u201324',
    },
    analysis: `Dal\u00ed\u2019s Wood of Suicides renders the transformation of soul into tree as a metamorphic process continuous with the biological surrealism of his wider oeuvre. The figures are in various stages of arboreal transformation, with limbs becoming branches in the manner of his famous melting anatomies, the boundary between human and vegetable dissolving in the same way time dissolves in his most celebrated paintings. Where Blake saw political meaning in the suicides and Dor\u00e9 emphasized visceral horror, Dal\u00ed finds in Canto XIII an image of the unconscious\u2019s self-consuming tendency. The blood that flows from broken branches becomes, in Dal\u00ed\u2019s rendering, a kind of ink \u2014 self-destruction as self-inscription, the wound as text. Sources: Ades, Dal\u00ed and Surrealism, 89; Foster, Compulsive Beauty, 55\u201360; Descharnes and N\u00e9ret, Dal\u00ed: The Paintings, 512.`,
    thesisQuote: `The wood is for Dal\u00ed the site where the self-consuming psyche finds its perfect botanical correlative \u2014 suicide as metamorphosis, punishment as transformation.`,
  },
  {
    artist: 'dali',
    canto: 'xxxiv',
    title: 'Lucifer',
    year: '1963',
    medium: 'Watercolor woodcut',
    imagePath: '/images/dali-canto-xxxiv.jpg',
    dantePassage: {
      lines: `\u201cThe emperor of the realm of grief protruded / from mid-chest up above the surrounding ice.\u201d`,
      citation: 'Inferno XXXIV, 28\u201329',
    },
    analysis: `Dal\u00ed\u2019s Satan sits at the intersection of Surrealist iconography and his personal mythology of the paternal and authoritative figure subjected to psychic dissolution. His three-headed Lucifer draws on the long iconographic tradition but transforms it: the faces are distorted in ways that recall his portraits of authority figures submitted to Surrealist decomposition, the monstrous read through the lens of the uncanny. The frozen lake is rendered as a mirror, its flatness contrasting with the turbulent forms above, suggesting that ultimate evil is not chaos but reflection \u2014 self-regard taken to its cosmic conclusion. For Dal\u00ed, Hell\u2019s bottom is where the ego, having consumed everything else, at last consumes itself. Sources: Ades, Dal\u00ed and Surrealism, 89; Foster, Compulsive Beauty, 55\u201360; Descharnes and N\u00e9ret, Dal\u00ed: The Paintings, 512.`,
    thesisQuote: `Dal\u00ed\u2019s Lucifer is the superego frozen at the moment of its own recognition \u2014 authority revealed as the face of what it destroyed.`,
  },
]
