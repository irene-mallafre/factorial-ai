import { Icons } from '../../generated/icons.gen'

type MarkProps = { size?: 'sm' | 'md' | 'xl' | 'lg' }

/**
 * The work buddy's mark: the design system's animated robot (its eyes glance and it smiles on
 * hover) on a soft disc, at the sizes used across the app (xl is the 40px avatar). The large one idles on its own.
 */
export function BuddyMark({ size = 'sm' }: MarkProps) {
  const Robot = Icons.Agents
  return (
    <span className={`f0c-buddy-mark f0c-buddy-mark-${size}`} data-icon-motion="bot" aria-hidden="true">
      <Robot className="f0c-buddy-glyph" />
    </span>
  )
}
