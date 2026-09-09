import type { ReactNode } from 'react'
import type { IconComponent } from '../../generated/icons.gen'

export type WindowSpec = {
  title: string
  content: ReactNode
  leading?: ReactNode
  actions?: ReactNode
  /** Content sizes itself (no flex-1 scroll body). */
  autoHeight?: boolean
  /** Content fills the window and manages its own scrolling. */
  fills?: boolean
  onToggleFloat?: () => void
  restoreIcon?: IconComponent
}
