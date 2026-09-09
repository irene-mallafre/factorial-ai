import type { ReactNode } from 'react'
import type { IconComponent } from '../../generated/icons.gen'
import { Icon } from '../ui/Icon'

type Props = {
  icon?: IconComponent
  emoji?: string
  label: string
  active?: boolean
  trailing?: ReactNode
  /** data-icon-motion hook for the hover animation, when the icon has one. */
  motion?: string
  onClick?: () => void
}

/** A row in a side panel. */
export function PanelItem({ icon, emoji, label, active = false, trailing, motion, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      data-icon-motion={motion}
      className={`f0c-pressable flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left ${active ? 'bg-f1-background-secondary' : 'hover:bg-f1-background-secondary'}`}
    >
      {emoji ? (
        <span aria-hidden="true" className="flex size-5 shrink-0 items-center justify-center text-[16px] leading-none">
          {emoji}
        </span>
      ) : (
        icon && <Icon icon={icon} size="md" color="default" />
      )}
      <span className="flex-1 truncate text-base font-medium text-f1-foreground">{label}</span>
      {trailing}
    </button>
  )
}
