import { toolGroups, toolView } from '../../data/tools'
import { usePersona } from '../../state/persona'
import type { View } from '../../types'
import { PanelItem } from './PanelItem'
import { PanelSection } from './PanelSection'

type Props = { view: View | null; onView: (view: View) => void }

/** Tools panel: every item opens its tool as a window on top of the workspace. */
export function HubPanel({ view, onView }: Props) {
  const persona = usePersona()
  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      {toolGroups(persona).map((group) => (
        <PanelSection key={group.label} label={group.label}>
          {group.tools.map((tool) => {
            const target = toolView(tool.slug)
            return <PanelItem key={tool.slug} icon={tool.icon} motion={tool.motion} label={tool.label} active={view === target} onClick={() => onView(target)} />
          })}
        </PanelSection>
      ))}
    </div>
  )
}
