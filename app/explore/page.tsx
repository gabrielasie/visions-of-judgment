import ExploreClient from '@/components/ExploreClient'
import type { Canto } from '@/lib/data'

export const metadata = {
  title: 'Explore — Visions of Judgment',
}

const VALID_CANTOS: Canto[] = ['v', 'xiii', 'xxxiv']

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ canto?: string }>
}) {
  const { canto } = await searchParams
  const initialCanto: Canto = VALID_CANTOS.includes(canto as Canto)
    ? (canto as Canto)
    : 'v'

  return <ExploreClient initialCanto={initialCanto} />
}
