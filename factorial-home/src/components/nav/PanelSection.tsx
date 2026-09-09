import { useEffect, useState, type ReactNode } from 'react'
import { Icons } from '../../generated/icons.gen'
import { Icon } from '../ui/Icon'

type SectionProps = {
  label: string
  trailing?: ReactNode
  children: ReactNode
  /** Start collapsed. */
  defaultOpen?: boolean
  /** Show the content on first paint, then fold it away with a smooth animation. */
  collapseOnLoad?: boolean
}

/** Height-animated body shared by both section styles. */
function Body({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div className="f0c-section-body" data-open={open || undefined} aria-hidden={!open}>
      <div className="f0c-section-inner" inert={open ? undefined : true}>
        {children}
      </div>
    </div>
  )
}

function useSectionState(defaultOpen: boolean, collapseOnLoad: boolean) {
  const [open, setOpen] = useState(defaultOpen || collapseOnLoad)
  useEffect(() => {
    if (!collapseOnLoad || defaultOpen) return
    const id = window.setTimeout(() => setOpen(false), 1400)
    return () => window.clearTimeout(id)
  }, [collapseOnLoad, defaultOpen])
  return [open, setOpen] as const
}

/** Collapsible group with a small header (Home, Comms and Hub panels). */
export function PanelSection({ label, trailing, children, defaultOpen = true, collapseOnLoad = false }: SectionProps) {
  const [open, setOpen] = useSectionState(defaultOpen, collapseOnLoad)
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center justify-between pr-1">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="f0c-pressable flex cursor-pointer items-center gap-1 rounded-[10px] px-1.5 py-1 text-sm font-medium text-f1-foreground-secondary"
        >
          {label}
          <Icon icon={open ? Icons.NextMonth : Icons.NextWeek} size="xs" color="default" />
        </button>
        {trailing}
      </div>
      <Body open={open}>{children}</Body>
    </div>
  )
}

/** Collapsible group with a full-width header (Calendar panel). */
export function CollapsibleSection({ label, children, defaultOpen = true, collapseOnLoad = false }: Omit<SectionProps, 'trailing'>) {
  const [open, setOpen] = useSectionState(defaultOpen, collapseOnLoad)
  return (
    <div className="flex flex-col gap-0.5">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center gap-1 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left text-sm font-medium text-f1-foreground-secondary hover:bg-f1-background-secondary"
      >
        {label}
        <Icon icon={open ? Icons.NextMonth : Icons.PreviousMonth} size="xs" color="default" />
      </button>
      <Body open={open}>{children}</Body>
    </div>
  )
}
