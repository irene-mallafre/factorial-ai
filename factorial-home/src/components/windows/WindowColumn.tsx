import { Fragment, useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { CANVAS_MIN_WIDTH, MIN_COLUMN_WIDTH, chunkColumns, dockedWindows, type WindowStackState } from '../../hooks/useWindowStack'
import { WindowFrame } from './WindowFrame'
import type { WindowSpec } from './types'

type Props = {
  side: 'left' | 'right'
  keyPrefix: string
  noun: string
  panelKey?: (key: string) => string
  maxWidth?: number
  state: WindowStackState
  overlay: boolean
  specFor: (key: string) => WindowSpec
  onClose: (key: string) => void
  onToggleMaximized: (key: string) => void
  onSetColumnWidth: (width: number) => void
  onResizeBetween: (index: number, delta: number, manual: string[]) => void
  onResizeColumnsBetween: (index: number, delta: number, count: number, min: number) => void
}

const GRIP_V = 'h-full w-[3px] rounded-full bg-transparent transition-colors group-hover:bg-f1-border group-active:bg-f1-border'
const GRIP_H = 'h-[3px] w-full rounded-full bg-transparent transition-colors group-hover:bg-f1-border group-active:bg-f1-border'

/** One side column of stacked windows, with drag handles for width, column and height resizing. */
export function WindowColumn({
  side, keyPrefix, noun, panelKey = (k) => k, maxWidth, state, overlay, specFor, onClose, onToggleMaximized, onSetColumnWidth, onResizeBetween, onResizeColumnsBetween,
}: Props) {
  const firstColumn = useRef<HTMLDivElement>(null)
  const stack = useRef<HTMLDivElement>(null)
  const docked = dockedWindows(state)
  if (docked.length === 0) return null
  const hugs = (key: string) => !!specFor(key).autoHeight && !state.manualHeight.includes(key)
  const columns = chunkColumns(docked)
  const dir = side === 'right' ? -1 : 1

  const startWidthDrag = (e: ReactPointerEvent) => {
    e.preventDefault()
    const startX = e.clientX
    const startWidth = state.columnWidth
    const parent = stack.current?.parentElement?.getBoundingClientRect()
    const others = Array.from(document.querySelectorAll<HTMLElement>('[data-window-stack]'))
      .filter((el) => el !== stack.current)
      .reduce((sum, el) => sum + el.getBoundingClientRect().width, 0)
    const max = Math.max(startWidth, parent ? (parent.width - others - CANVAS_MIN_WIDTH) / columns.length : Infinity)
    const move = (ev: PointerEvent) => onSetColumnWidth(Math.min(max, startWidth + (dir * (ev.clientX - startX)) / columns.length))
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  const startColumnDrag = (index: number) => (e: ReactPointerEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const total = stack.current?.getBoundingClientRect().width ?? 1
    const startX = e.clientX
    const count = columns.length
    const min = (MIN_COLUMN_WIDTH / total) * count
    let applied = 0
    const move = (ev: PointerEvent) => {
      const delta = ((ev.clientX - startX) / total) * count
      onResizeColumnsBetween(index, delta - applied, count, min)
      applied = delta
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  const startHeightDrag = (index: number, total: number, manual: string[]) => (e: ReactPointerEvent) => {
    e.preventDefault()
    const height = firstColumn.current?.clientHeight ?? 1
    const startY = e.clientY
    let applied = 0
    const move = (ev: PointerEvent) => {
      const delta = ((ev.clientY - startY) / height) * total
      onResizeBetween(index, delta - applied, manual)
      applied = delta
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  const columnWeights = columns.map((_, i) => state.columnWeights[i] ?? 1)
  const columnTotal = columnWeights.reduce((a, b) => a + b, 0)

  return (
    <div
      ref={stack}
      data-window-stack={side}
      className={`flex h-full min-w-0 gap-2 py-2 ${side === 'right' ? 'pr-2' : 'pl-2'} ${overlay ? `f0c-window-overlay absolute inset-y-0 z-20 ${side === 'right' ? 'right-0' : 'left-0'}` : 'relative'}`}
      style={{ width: state.columnWidth * columns.length, maxWidth }}
    >
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label={`Resize ${noun} width`}
        onPointerDown={startWidthDrag}
        className={`group absolute inset-y-2 z-10 flex w-2 cursor-col-resize items-center justify-center ${side === 'right' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`}
      >
        <span className={GRIP_V}></span>
      </div>
      {columns.map((column, ci) => {
        const total = column.reduce((sum, key) => (hugs(key) ? sum : sum + (state.weights[state.open.indexOf(key)] ?? 1)), 0)
        return (
          <Fragment key={ci}>
            {ci > 0 && (
              <div role="separator" aria-orientation="vertical" aria-label="Resize columns" onPointerDown={startColumnDrag(ci - 1)} className="group -mx-2 flex w-2 shrink-0 cursor-col-resize items-center justify-center">
                <span className={GRIP_V}></span>
              </div>
            )}
            <div ref={ci === 0 ? firstColumn : undefined} style={{ flexGrow: columnWeights[ci] / columnTotal, flexBasis: 0 }} className="flex min-w-0 flex-col">
              {column.map((key, wi) => (
                <Fragment key={panelKey(key)}>
                  {wi > 0 && (
                    <div
                      role="separator"
                      aria-orientation="horizontal"
                      aria-label={`Resize ${noun} height`}
                      onPointerDown={startHeightDrag(state.open.indexOf(key) - 1, total, [column[wi - 1], key])}
                      className="group flex h-2 shrink-0 cursor-row-resize items-center justify-center"
                    >
                      <span className={GRIP_H}></span>
                    </div>
                  )}
                  <WindowFrame
                    windowKey={`${keyPrefix}:${key}`}
                    spec={specFor(key)}
                    weight={state.weights[state.open.indexOf(key)] ?? 1}
                    totalWeight={total}
                    hugsContent={hugs(key)}
                    onClose={() => onClose(key)}
                    onToggleMaximized={() => onToggleMaximized(key)}
                  />
                </Fragment>
              ))}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
