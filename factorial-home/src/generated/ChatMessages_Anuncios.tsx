import type React from 'react'

export default function ChatMessages_Anuncios() {
  return (
    <>
      <div className="flex items-end gap-2">
        <div className="shrink-0">
          <div className="relative inline-flex h-fit w-fit">
            <div className="relative h-fit w-fit">
              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                <img className="aspect-square h-full w-full object-cover" alt="M" loading="lazy" src="https://i.pravatar.cc/120?u=marta-ibanez" />
              </span>
            </div>
          </div>
        </div>
        <div className="f0c-chat-bubble w-[71%] min-w-0 rounded-xl px-4 py-3" style={{ "--f0c-author": "58 96 168" } as React.CSSProperties}>
          <span className="f0c-chat-author block truncate text-sm font-medium">Marta Ibáñez</span>
          <p className="text-base text-f1-foreground">
            <span className="font-medium text-f1-foreground-warning">{"@Todos "}</span>
            Nueva política de vacaciones publicada en el Handbook.
          </p>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <div className="shrink-0">
          <div className="relative inline-flex h-fit w-fit">
            <div className="relative h-fit w-fit">
              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                <img className="aspect-square h-full w-full object-cover" alt="M" loading="lazy" src="https://i.pravatar.cc/120?u=marta-ibanez" />
              </span>
            </div>
          </div>
        </div>
        <div className="f0c-chat-bubble w-[71%] min-w-0 rounded-xl px-4 py-3" style={{ "--f0c-author": "58 96 168" } as React.CSSProperties}>
          <span className="f0c-chat-author block truncate text-sm font-medium">Marta Ibáñez</span>
          <p className="text-base text-f1-foreground">El cierre de mes se adelanta al día 28.</p>
        </div>
      </div>
    </>
  )
}
