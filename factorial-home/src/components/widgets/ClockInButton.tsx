import { Icons } from '../../generated/icons.gen'
import { useClockPending } from '../../state/clockin'
import { Button } from '../ui/Button'

type Props = { open: boolean; onToggle: () => void }

/** Canvas-header toggle for the Clock in widget; shows a highlight dot until the user clocks in. */
export function ClockInButton({ open, onToggle }: Props) {
  const pending = useClockPending()
  return (
    <div data-home-clockin-button="true" data-icon-motion="timer" data-open={open || undefined} className="relative">
      <Button variant="ghost" size="md" icon={Icons.ClockInPending} hideLabel label={pending ? 'Clock in — pending' : 'Clock in'} onClick={onToggle} />
      {pending && !open && (
        <span className="pointer-events-none absolute right-0 top-0 size-2 shrink-0 rounded-full border border-solid border-f1-background bg-f1-special-highlight"></span>
      )}
    </div>
  )
}
