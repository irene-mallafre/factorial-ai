import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

/** Bottom-centre notice, shown for a few seconds. */
export function Toast({ children }: { children: ReactNode }) {
  return createPortal(
    <div className="f0c-toast f0c-card-in" role="status" aria-live="polite">
      {children}
    </div>,
    document.body,
  )
}
