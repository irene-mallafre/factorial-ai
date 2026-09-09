import { useLayoutEffect, useRef } from 'react'
import { Icons } from '../../generated/icons.gen'
import { Button } from '../ui/Button'
import { markRestore, onWindowMount } from './animations'
import { WINDOW_CLASS } from './WindowFrame'
import type { WindowSpec } from './types'

type Props = { windowKey: string; spec: WindowSpec; onRestore: () => void; onClose: () => void }

/** A window taking over the whole canvas column. */
export function MaximizedWindow({ windowKey, spec, onRestore, onClose }: Props) {
  const { title, leading, actions } = spec
  const ref = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    if (ref.current) onWindowMount(ref.current, windowKey)
  }, [windowKey])
  const RestoreIcon = spec.restoreIcon ?? Icons.RestoreCommunities
  return (
    <div className="flex h-full min-w-0 flex-1 p-2">
      <section ref={ref} data-home-window="true" data-window-key={windowKey} className={`${WINDOW_CLASS} min-w-0 flex-1`} aria-label={title}>
        <header className="flex shrink-0 items-center justify-between py-1.5 pl-3 pr-1.5">
          <div className="flex min-w-0 items-center gap-0.5">
            {leading}
            <span className="truncate text-base font-medium text-f1-foreground">{title}</span>
          </div>
          <div className="flex shrink-0 items-center">
            {actions}
            <Button
              variant="ghost"
              size="md"
              icon={RestoreIcon}
              hideLabel
              label={`Restore ${title}`}
              onClick={() => {
                markRestore(windowKey, ref.current)
                onRestore()
              }}
            />
            <Button variant="ghost" size="md" icon={Icons.CloseClockIn} hideLabel label={`Close ${title}`} onClick={onClose} />
          </div>
        </header>
        {spec.fills ? (
          <div className="flex min-h-0 flex-1 flex-col">{spec.content}</div>
        ) : (
          <div className="home-window-scroll min-h-0 flex-1 overflow-auto">
            <div className="mx-auto w-full max-w-[712px] px-6 py-2">{spec.content}</div>
          </div>
        )}
      </section>
    </div>
  )
}
