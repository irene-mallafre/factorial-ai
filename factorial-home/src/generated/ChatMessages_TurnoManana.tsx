import type React from 'react'

export default function ChatMessages_TurnoManana() {
  return (
    <>
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
          <p className="text-base text-f1-foreground">
            <span className="font-medium text-f1-foreground-warning">{"@Aviso "}</span>
            Cambio de turno — Tienda Centro
          </p>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <div className="shrink-0">
          <div className="relative inline-flex h-fit w-fit">
            <div className="relative h-fit w-fit">
              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                <img className="aspect-square h-full w-full object-cover" alt="J" loading="lazy" src="https://i.pravatar.cc/120?u=julio-rodriguez" />
              </span>
            </div>
          </div>
        </div>
        <div className="f0c-chat-bubble w-[71%] min-w-0 rounded-xl px-4 py-3" style={{ "--f0c-author": "68 78 174" } as React.CSSProperties}>
          <span className="f0c-chat-author block truncate text-sm font-medium">Julio Rodriguez Soares</span>
          <p className="text-base text-f1-foreground">Cambio de turno — Tienda Centro</p>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <div className="shrink-0">
          <div className="relative inline-flex h-fit w-fit">
            <div className="relative h-fit w-fit">
              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                <img className="aspect-square h-full w-full object-cover" alt="R" loading="lazy" src="https://i.pravatar.cc/120?u=raul-siguenza" />
              </span>
            </div>
          </div>
        </div>
        <div className="f0c-chat-bubble w-[71%] min-w-0 rounded-xl px-4 py-3" style={{ "--f0c-author": "172 88 32" } as React.CSSProperties}>
          <span className="f0c-chat-author block truncate text-sm font-medium">Raúl Siguenza Sánchez</span>
          <p className="text-base text-f1-foreground">Cambio de turno — Tienda Centro</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="w-[77%] min-w-0 rounded-xl bg-f1-background-tertiary p-1">
          <div className="rounded-md bg-f1-background-secondary px-4 py-3" style={{ "--f0c-author": "104 87 64" } as React.CSSProperties}>
            <span className="f0c-chat-author block truncate text-sm font-medium">Nuria Castro</span>
            <p className="text-base text-f1-foreground"><span className="font-medium">{"@Aviso "}</span>Cambio de turno — Tienda Centro</p>
          </div>
          <div className="px-3 pb-3 pt-1.5"><p className="text-base text-f1-foreground">Ok!</p></div>
        </div>
        <span className="text-sm text-f1-foreground-secondary">Read 22:14</span>
      </div>
    </>
  )
}
