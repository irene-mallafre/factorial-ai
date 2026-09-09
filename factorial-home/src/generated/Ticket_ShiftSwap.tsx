export default function Ticket_ShiftSwap() {
  return (
    <div className="home-window-scroll min-h-0 flex-1 overflow-auto">
      <div className="flex flex-col gap-3 px-5 pb-1 pt-3">
        <h2 className="text-xl font-semibold text-f1-foreground">Pablo proposes changing your Saturday shift</h2>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
            <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-info text-f1-foreground-info">
              <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon-info" aria-hidden="true"></div>
              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Open</span>
            </div>
          </div>
          <span className="flex h-8 items-center gap-2 text-base">
            <span className="text-f1-foreground-secondary">ID</span>
            <span className="font-medium text-f1-foreground">T-00061</span>
          </span>
        </div>
      </div>
      <div className="px-5 py-3">
        <div className="overflow-hidden rounded-md border border-solid border-f1-border-secondary">
          <div className="flex min-h-11 items-center px-3 border-0 border-b border-solid border-f1-border-secondary">
            <span className="w-40 shrink-0 truncate text-base text-f1-foreground-secondary">Priority</span>
            <div className="flex min-w-0 flex-1 items-center gap-2 text-base text-f1-foreground">
              <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
                <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-info text-f1-foreground-info">
                  <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon-info" aria-hidden="true"></div>
                  <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Medium</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-h-11 items-center px-3 border-0 border-b border-solid border-f1-border-secondary">
            <span className="w-40 shrink-0 truncate text-base text-f1-foreground-secondary">Assignee team</span>
            <div className="flex min-w-0 flex-1 items-center gap-2 text-base text-f1-foreground">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-[6px] bg-f1-background-promote-bold text-sm font-medium text-f1-foreground-inverse">S</span>
              <span className="truncate">Shifts</span>
            </div>
          </div>
          <div className="flex min-h-11 items-center px-3 border-0 border-b border-solid border-f1-border-secondary">
            <span className="w-40 shrink-0 truncate text-base text-f1-foreground-secondary">Assignee</span>
            <div className="flex min-w-0 flex-1 items-center gap-2 text-base text-f1-foreground"><span className="text-f1-foreground-secondary">-</span></div>
          </div>
          <div className="flex min-h-11 items-center px-3 border-0 border-b border-solid border-f1-border-secondary">
            <span className="w-40 shrink-0 truncate text-base text-f1-foreground-secondary">Category</span>
            <div className="flex min-w-0 flex-1 items-center gap-2 text-base text-f1-foreground">Shifts</div>
          </div>
          <div className="flex min-h-11 items-center px-3 border-0 border-b border-solid border-f1-border-secondary">
            <span className="w-40 shrink-0 truncate text-base text-f1-foreground-secondary">Requested by</span>
            <div className="flex min-w-0 flex-1 items-center gap-2 text-base text-f1-foreground">
              <div className="relative inline-flex h-fit w-fit">
                <div className="relative h-fit w-fit">
                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                    <img className="aspect-square h-full w-full object-cover" alt="P" loading="lazy" src="https://i.pravatar.cc/120?u=pablo-n" />
                  </span>
                </div>
              </div>
              <span className="truncate">Pablo Navarro</span>
            </div>
          </div>
          <div className="flex min-h-11 items-center px-3 border-0 border-b border-solid border-f1-border-secondary">
            <span className="w-40 shrink-0 truncate text-base text-f1-foreground-secondary">Created on</span>
            <div className="flex min-w-0 flex-1 items-center gap-2 text-base text-f1-foreground">03/06/2026</div>
          </div>
          <div className="flex min-h-11 items-center px-3 ">
            <span className="w-40 shrink-0 truncate text-base text-f1-foreground-secondary">Time remaining</span>
            <div className="flex min-w-0 flex-1 items-center gap-2 text-base text-f1-foreground"><span>2 days left</span></div>
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-3 px-5 py-3">
        <h3 className="text-lg font-semibold text-f1-foreground">Description</h3>
        <p className="text-base text-f1-foreground">Pablo asks to take your Saturday shift and give you his Thursday. Both are in the same store and neither breaks the weekly hours cap.</p>
      </section>
      <section className="flex flex-col gap-3 px-5 py-3">
        <h3 className="text-lg font-semibold text-f1-foreground">Attachments</h3>
        <div className="flex flex-col items-center gap-3 rounded-md border border-dashed border-f1-border px-5 py-10">
          <button className="group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Upload file" role="button">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 transition-colors [&_svg:not([data-has-color])]:text-f1-icon">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-base" data-testid="one-ellipsis">Upload file</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
          <span className="text-base text-f1-foreground-secondary">Drag and drop documents</span>
        </div>
      </section>
      <section className="flex flex-col gap-3 px-5 py-3">
        <h3 className="text-lg font-semibold text-f1-foreground">Comments</h3>
        <textarea rows={4} aria-label="Comment on Pablo proposes changing your Saturday shift" placeholder="Write a comment…" className="w-full resize-none rounded-md border border-solid border-f1-border bg-f1-background p-3 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"></textarea>
      </section>
    </div>
  )
}
