import type { ReactNode } from 'react'

type RowProps = { icon: ReactNode; label: string; trailing?: ReactNode; onClick?: () => void }

export function MenuRow({ icon, label, trailing, onClick }: RowProps) {
  return (
    <button onClick={onClick} className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left hover:bg-f1-background-secondary">
      {icon}
      <span className="min-w-0 flex-1 truncate text-base font-medium text-f1-foreground">{label}</span>
      {trailing}
    </button>
  )
}

export function MenuDivider() {
  return <div className="-mx-1 my-1 h-px shrink-0 bg-f1-border-secondary"></div>
}

/** Click-away scrim shared by every popover. */
export function Scrim({ onClick }: { onClick: () => void }) {
  return <div className="fixed inset-0 z-40" onClick={onClick}></div>
}
