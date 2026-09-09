import type React from 'react'

export default function ChatMessages_TiendaCentro() {
  return (
    <>
      <div className="flex items-end gap-2">
        <div className="shrink-0">
          <div className="relative inline-flex h-fit w-fit">
            <div className="relative h-fit w-fit">
              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                <img className="aspect-square h-full w-full object-cover" alt="L" loading="lazy" src="https://i.pravatar.cc/120?u=lucia-f" />
              </span>
            </div>
          </div>
        </div>
        <div className="f0c-chat-bubble w-[71%] min-w-0 rounded-xl px-4 py-3" style={{ "--f0c-author": "22 114 106" } as React.CSSProperties}>
          <span className="f0c-chat-author block truncate text-sm font-medium">Lucía Fernandez</span>
          <p className="text-base text-f1-foreground">Escaparate de temporada montado, os dejo fotos.</p>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <div className="shrink-0">
          <div className="relative inline-flex h-fit w-fit">
            <div className="relative h-fit w-fit">
              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                <img className="aspect-square h-full w-full object-cover" alt="N" loading="lazy" src="https://i.pravatar.cc/120?u=nuria-castro" />
              </span>
            </div>
          </div>
        </div>
        <div className="f0c-chat-bubble w-[71%] min-w-0 rounded-xl px-4 py-3" style={{ "--f0c-author": "104 87 64" } as React.CSSProperties}>
          <span className="f0c-chat-author block truncate text-sm font-medium">Nuria Castro</span>
          <p className="text-base text-f1-foreground">Queda genial. ¿Movemos la mesa de novedades a la entrada?</p>
        </div>
      </div>
    </>
  )
}
