import type React from 'react'

export default function ChatMessages_Pablo() {
  return (
    <>
      <div className="flex items-end gap-2">
        <div className="shrink-0">
          <div className="relative inline-flex h-fit w-fit">
            <div className="relative h-fit w-fit">
              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                <img className="aspect-square h-full w-full object-cover" alt="P" loading="lazy" src="https://i.pravatar.cc/120?u=pablo-n" />
              </span>
            </div>
          </div>
        </div>
        <div className="f0c-chat-bubble w-[71%] min-w-0 rounded-xl px-4 py-3" style={{ "--f0c-author": "150 63 117" } as React.CSSProperties}>
          <span className="f0c-chat-author block truncate text-sm font-medium">Pablo Navarro</span>
          <p className="text-base text-f1-foreground">El pedido de Getafe llega mañana a primera hora.</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="w-[77%] min-w-0 rounded-xl bg-f1-background-tertiary px-4 py-3">
          <div className="">
            <p className="text-base text-f1-foreground">Perfecto, aviso al turno de mañana.</p>
          </div>
        </div>
        <span className="text-sm text-f1-foreground-secondary">Read 18:40</span>
      </div>
    </>
  )
}
