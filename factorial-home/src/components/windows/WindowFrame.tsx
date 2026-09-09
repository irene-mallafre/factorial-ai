import { useLayoutEffect, useRef } from 'react'
import { Icons } from '../../generated/icons.gen'
import { Button } from '../ui/Button'
import { markRestore, onWindowMount } from './animations'
import type { WindowSpec } from './types'

export const WINDOW_CLASS =
  'flex min-h-0 flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-[0_2px_20px_0_rgba(13,22,37,0.04)]'

type HeaderProps = { spec: WindowSpec; onClose: () => void; onMaximize: () => void }

export function WindowHeader({ spec, onClose, onMaximize }: HeaderProps) {
  const { title, leading, actions } = spec
  return (
    <header className="flex shrink-0 items-center justify-between py-1.5 pl-3 pr-1.5">
      <div className="flex min-w-0 items-center gap-0.5">
        {leading}
        <span className="truncate text-base font-medium text-f1-foreground">{title}</span>
      </div>
      <div className="flex shrink-0 items-center">
        {actions}
        {spec.onToggleFloat ? (
          <Button variant="ghost" size="md" icon={Icons.FloatClockIn} hideLabel label={`Float ${title}`} onClick={spec.onToggleFloat} />
        ) : (
          <Button variant="ghost" size="md" icon={Icons.MaximizeCommunities} hideLabel label={`Maximize ${title}`} onClick={onMaximize} />
        )}
        <Button variant="ghost" size="md" icon={Icons.CloseClockIn} hideLabel label={`Close ${title}`} onClick={onClose} />
      </div>
    </header>
  )
}

type Props = {
  windowKey: string
  spec: WindowSpec
  weight: number
  totalWeight: number
  hugsContent: boolean
  onClose: () => void
  onToggleMaximized: () => void
}

/** A docked window inside a column. */
export function WindowFrame({ windowKey, spec, weight, totalWeight, hugsContent, onClose, onToggleMaximized }: Props) {
  const ref = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    onWindowMount(ref.current, windowKey)
  }, [windowKey])
  return (
    <section
      ref={ref}
      data-home-window="true"
      data-window-key={windowKey}
      style={hugsContent ? { flex: '0 0 auto' } : { flexGrow: weight / totalWeight, flexBasis: 0 }}
      className={WINDOW_CLASS}
      aria-label={spec.title}
    >
      <WindowHeader
        spec={spec}
        onClose={onClose}
        onMaximize={() => {
          markRestore(windowKey, ref.current)
          onToggleMaximized()
        }}
      />
      {spec.fills ? (
        <div className="flex min-h-0 flex-1 flex-col">{spec.content}</div>
      ) : (
        <div className={`home-window-scroll min-h-0 overflow-auto ${hugsContent ? '' : 'flex-1'}`}>{spec.content}</div>
      )}
    </section>
  )
}
