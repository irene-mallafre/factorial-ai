import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Icons } from '../../generated/icons.gen'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Scrim } from '../ui/Menu'
import { WIDGETS, WIDGET_MENU } from './registry'

type Props = { open: string[]; onToggle: (id: string) => void }

/** The "Open widgets menu" popover in the canvas header. */
export function WidgetsMenu({ open, onToggle }: Props) {
  const anchor = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null)
  const toggleMenu = () => {
    const rect = anchor.current?.getBoundingClientRect()
    if (rect) setPos((p) => (p ? null : { top: rect.bottom + 4, right: window.innerWidth - rect.right }))
  }
  const menu = pos && (
    <>
      <Scrim onClick={() => setPos(null)} />
      <div
        style={{ top: pos.top, right: pos.right, transformOrigin: 'top right' }}
        className="f0c-popover fixed z-50 flex w-56 flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
      >
        {WIDGET_MENU.map((entry) => {
          const isWidget = entry.kind === 'widget'
          const checked = isWidget && open.includes(entry.id)
          return (
            <button
              key={isWidget ? entry.id : entry.key}
              onClick={
                isWidget
                  ? () => {
                      onToggle(entry.id)
                      setPos(null)
                    }
                  : undefined
              }
              className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left hover:bg-f1-background-tertiary"
            >
              <Icon icon={entry.icon} size="md" color="default" />
              <span className="flex-1 text-base font-medium text-f1-foreground">{isWidget ? WIDGETS[entry.id].title : entry.label}</span>
              {checked && <Icon icon={Icons.CurrentEmployees} size="sm" color="info" />}
            </button>
          )
        })}
      </div>
    </>
  )
  return (
    <div ref={anchor} data-home-widgets-menu="true" className="relative">
      {menu && createPortal(menu, document.body)}
      <Button variant="ghost" size="md" icon={Icons.ScreenOptions} hideLabel label="Open widgets menu" onClick={toggleMenu} />
    </div>
  )
}
