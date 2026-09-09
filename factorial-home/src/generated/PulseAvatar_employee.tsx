export default function PulseAvatarEmployee() {
  return (
    <div className="f0c-pulse-avatar relative size-10">
      <div className="relative inline-flex h-fit w-fit">
        <div className="relative h-fit w-fit">
          <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-10 text-lg rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
            <img className="aspect-square h-full w-full object-cover" alt="SV" loading="lazy" src="https://i.pravatar.cc/120?u=sara-vidal" />
          </span>
        </div>
      </div>
      <div className="f0c-pulse-badge absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background">
        <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Add how your day went" role="button" data-state="closed">
          <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
            <span className="flex min-w-0 flex-1 items-center justify-center">
              <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" d="M10 10V11" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" d="M14 10V11" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" d="M9.5 14V14C10.9616 15.1693 13.0384 15.1693 14.5 14V14" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 3V6M18 9V6M18 6H15H21" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="sr-only">Add how your day went</span>
                {" "}
              </div>
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}
