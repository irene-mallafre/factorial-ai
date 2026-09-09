import { useEffect, useState } from 'react'
import { Icons } from '../../generated/icons.gen'
import { toggleClock, useClock } from '../../state/clockin'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

const SHIFT_MINUTES = 480
const pad = (n: number) => String(n).padStart(2, '0')

/** Clock-in widget: a live timer against an eight-hour shift. `compact` drops the workplace label (floating variant). */
export function ClockIn({ compact = false }: { compact?: boolean }) {
  const { clockedInAt } = useClock()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!clockedInAt) return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [clockedInAt])

  const seconds = clockedInAt ? Math.max(0, Math.floor((now - clockedInAt) / 1000)) : 0
  const elapsed = `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`
  const startedAt = clockedInAt ? new Date(clockedInAt).toTimeString().slice(0, 5) : '--:--'
  const minutesLeft = Math.max(0, SHIFT_MINUTES - Math.floor(seconds / 60))
  const left = `${Math.floor(minutesLeft / 60)}h ${pad(minutesLeft % 60)}m left`
  const progress = Math.min(1, seconds / (SHIFT_MINUTES * 60))

  return (
    <div className="flex flex-col gap-0.5 px-1.5 pb-2.5">
      <div className="flex flex-col rounded-md px-1.5 py-2">
        <span className="truncate text-[26px] font-semibold leading-8 tracking-[-0.26px] text-f1-foreground">{elapsed}</span>
        <div className="flex h-5 items-center">
          <div className="h-2 w-full overflow-hidden rounded-[10px] bg-f1-background-secondary">
            <div className="h-full w-full origin-left rounded-[10px] bg-f1-background-accent-bold transition-transform duration-1000 ease-linear" style={{ transform: `scaleX(${progress})` }}></div>
          </div>
        </div>
        <div className="flex h-5 items-start justify-between text-base text-f1-foreground-secondary">
          <span className="truncate font-medium">{startedAt}</span>
          <span className="truncate">{left}</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 px-1">
        <button aria-label="Barcelona HQ" className="f0c-pressable flex min-w-0 shrink-0 cursor-pointer items-center gap-2 rounded-[10px] p-1.5 hover:bg-f1-background-secondary">
          <Icon icon={Icons.Barcelona} size="md" color="default" />
          {!compact && <span className="truncate text-base text-f1-foreground">Barcelona HQ</span>}
        </button>
        <Button variant={clockedInAt ? 'neutral' : 'default'} size="md" icon={clockedInAt ? Icons.ClockOut : Icons.ClockIn} label={clockedInAt ? 'Clock out' : 'Clock in'} onClick={toggleClock} />
      </div>
    </div>
  )
}

/** Floating variant: same widget without the workplace label. */
export const ClockInCompact = () => <ClockIn compact />
