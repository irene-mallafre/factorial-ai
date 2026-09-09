import { useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Icons } from '../../generated/icons.gen'
import { Button } from '../ui/Button'

type Props = {
  title: string
  width: number
  anchorSelector: string
  children: ReactNode
  onDock: () => void
  onClose: () => void
}

/** A widget popped out of its column: a draggable card anchored under a toolbar button. */
export function FloatingPanel({ title, width, anchorSelector, children, onDock, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ x: number; y: number }>(() => {
    const anchor = document.querySelector(anchorSelector)?.getBoundingClientRect()
    const gap = 8
    return anchor ? { x: anchor.right - width, y: anchor.bottom + gap } : { x: window.innerWidth - width - gap, y: gap }
  })

  const startDrag = (e: ReactPointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return
    e.preventDefault()
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const dx = e.clientX - rect.left
    const dy = e.clientY - rect.top
    const move = (ev: PointerEvent) => {
      const maxX = window.innerWidth - 48
      const maxY = window.innerHeight - 44
      setPos({ x: Math.min(maxX, Math.max(48 - rect.width, ev.clientX - dx)), y: Math.min(maxY, Math.max(0, ev.clientY - dy)) })
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  return createPortal(
    <div
      ref={ref}
      data-home-floating="true"
      style={{ left: pos.x, top: pos.y, width }}
      className="f0c-card-in fixed z-40 flex flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-[0_8px_28px_-8px_rgba(13,22,37,0.18)]"
      aria-label={title}
    >
      <header onPointerDown={startDrag} className="flex shrink-0 cursor-grab select-none items-center justify-between py-1.5 pl-3 pr-1.5 active:cursor-grabbing">
        <span className="truncate text-base font-medium text-f1-foreground">{title}</span>
        <div className="flex shrink-0 items-center">
          <Button variant="ghost" size="md" icon={Icons.DockClockIn} hideLabel label={`Dock ${title}`} onClick={onDock} />
          <Button variant="ghost" size="md" icon={Icons.CloseClockIn} hideLabel label={`Close ${title}`} onClick={onClose} />
        </div>
      </header>
      {children}
    </div>,
    document.body,
  )
}
