import { useEffect, useState, type ReactNode } from 'react'

let animated = false

/** Manager task queue. Opening a task only logs it, exactly like the deployed prototype. `extra` renders more rows in the same list. */
export function NeedsYou({ extra }: { extra?: ReactNode }) {
  const open = (id: string) => console.log('open', id)
  const [enter] = useState(() => !animated)
  useEffect(() => {
    animated = true
  }, [])
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full items-center justify-between gap-2"><p className="text-base text-f1-foreground font-medium text-left">Needs you</p></div>
      <div className="flex w-full flex-col">
        <div className="f0c-row-slot">
          <div className="overflow-hidden pb-2">
            <div className={"f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary " + (enter ? "f0c-card-in" : "")} style={enter ? { animationDelay: "0ms" } : undefined} onClick={() => open('time-off-batch')}>
              <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
                  <path stroke="currentColor" strokeLinecap="round" d="M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" d="M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" d="M8 19H16M13.5 13L14 19M10.5 13L10 19" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="shrink-0 text-base font-medium text-f1-foreground">Approve 12 time off requests</span>
                <span className="min-w-0 max-w-[400px] flex-1 truncate text-base text-f1-foreground-secondary ">All within policy · Jun–Jul · no team conflicts</span>
              </span>
              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label={"Open \"Approve 12 time off requests\""} role="button" data-state="closed" onClick={(e) => { e.stopPropagation(); open('time-off-batch') }}>
                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                  <span className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <span className="sr-only">Open "Approve 12 time off requests"</span>
                      {" "}
                    </div>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="f0c-row-slot">
          <div className="overflow-hidden pb-2">
            <div className={"f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary " + (enter ? "f0c-card-in" : "")} style={enter ? { animationDelay: "30ms" } : undefined} onClick={() => open('recruitment-pick')}>
              <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
                  <circle cx="9" cy="9" r="4" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" d="M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.00002 18C4.00002 18 5.50002 16 9.00002 16C12.5 16 14 18 14 18" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 16C19 16 19.75 17 19.75 17" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="shrink-0 text-base font-medium text-f1-foreground">Pick Lucia for Senior Designer</span>
                <span className="min-w-0 max-w-[400px] flex-1 truncate text-base text-f1-foreground-secondary ">Score 9.2 / 10 · within band · 14 interviews done</span>
              </span>
              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label={"Open \"Pick Lucia for Senior Designer\""} role="button" data-state="closed" onClick={(e) => { e.stopPropagation(); open('recruitment-pick') }}>
                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                  <span className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <span className="sr-only">Open "Pick Lucia for Senior Designer"</span>
                      {" "}
                    </div>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="f0c-row-slot">
          <div className="overflow-hidden pb-2">
            <div className={"f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary " + (enter ? "f0c-card-in" : "")} style={enter ? { animationDelay: "60ms" } : undefined} onClick={() => open('contract-renewals')}>
              <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 12H10" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16H10" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="shrink-0 text-base font-medium text-f1-foreground">Confirm 4 contract renewals</span>
                <span className="min-w-0 max-w-[400px] flex-1 truncate text-base text-f1-foreground-secondary ">All within standard policy and budget · already drafted</span>
              </span>
              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label={"Open \"Confirm 4 contract renewals\""} role="button" data-state="closed" onClick={(e) => { e.stopPropagation(); open('contract-renewals') }}>
                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                  <span className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <span className="sr-only">Open "Confirm 4 contract renewals"</span>
                      {" "}
                    </div>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="f0c-row-slot">
          <div className="overflow-hidden pb-2">
            <div className={"f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary " + (enter ? "f0c-card-in" : "")} style={enter ? { animationDelay: "90ms" } : undefined} onClick={() => open('promotion-marc')}>
              <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
                  <path stroke="currentColor" d="M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.4389 9C14.6716 9 15.5 10.1175 15.5 11.16C15.5 13.2713 12.0622 15 12 15C11.9378 15 8.5 13.2713 8.5 11.16C8.5 10.1175 9.32833 9 10.5611 9C11.2689 9 11.7317 9.34125 12 9.64125C12.2683 9.34125 12.7311 9 13.4389 9Z" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="shrink-0 text-base font-medium text-f1-foreground">Approve Marc's promotion to Senior</span>
                <span className="min-w-0 max-w-[400px] flex-1 truncate text-base text-f1-foreground-secondary ">2 yrs as Mid · 3 reviews at 4.5+/5 · committee approved</span>
              </span>
              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label={"Open \"Approve Marc's promotion to Senior\""} role="button" data-state="closed" onClick={(e) => { e.stopPropagation(); open('promotion-marc') }}>
                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                  <span className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <span className="sr-only">Open "Approve Marc's promotion to Senior"</span>
                      {" "}
                    </div>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="f0c-row-slot">
          <div className="overflow-hidden pb-2">
            <div className={"f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary " + (enter ? "f0c-card-in" : "")} style={enter ? { animationDelay: "120ms" } : undefined} onClick={() => open('q2-bonus')}>
              <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
                  <path stroke="currentColor" d="M5.54981 14.121L6.2641 10.121C6.68993 7.73641 8.76387 6 11.1862 6H12.8138C15.2361 6 17.3101 7.73641 17.7359 10.121L18.4502 14.121C18.9974 17.1857 16.6412 20 13.528 20H10.472C7.35882 20 5.00255 17.1857 5.54981 14.121Z" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" d="M10.3257 2.5H13.6743C14.3386 2.5 14.8183 3.13591 14.6358 3.77472L14 6H10L9.36421 3.77472C9.18169 3.1359 9.66135 2.5 10.3257 2.5Z" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" d="M14 10H11.5C10.6716 10 10 10.6716 10 11.5V11.5C10 12.3284 10.6716 13 11.5 13H12.5C13.3284 13 14 13.6716 14 14.5V14.5C14 15.3284 13.3284 16 12.5 16H10" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" d="M12 16V17" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" d="M12 9V10" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="shrink-0 text-base font-medium text-f1-foreground">Send Q2 bonus list — €34,200 across 14 people</span>
                <span className="min-w-0 max-w-[400px] flex-1 truncate text-base text-f1-foreground-secondary ">Aligned with February formula · within €35k cap</span>
              </span>
              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label={"Open \"Send Q2 bonus list — €34,200 across 14 people\""} role="button" data-state="closed" onClick={(e) => { e.stopPropagation(); open('q2-bonus') }}>
                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                  <span className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <span className="sr-only">Open "Send Q2 bonus list — €34,200 across 14 people"</span>
                      {" "}
                    </div>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="f0c-row-slot">
          <div className="overflow-hidden pb-2">
            <div className={"f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary " + (enter ? "f0c-card-in" : "")} style={enter ? { animationDelay: "150ms" } : undefined} onClick={() => open('workshop-budget')}>
              <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
                  <path stroke="currentColor" strokeLinejoin="round" d="M3.1606 8.53576L11.8143 5.07428C11.9335 5.0266 12.0665 5.0266 12.1857 5.07428L20.8394 8.53576C21.2585 8.70339 21.2585 9.29661 20.8394 9.46424L12.1857 12.9257C12.0665 12.9734 11.9335 12.9734 11.8143 12.9257L3.1606 9.46424C2.74152 9.29661 2.74152 8.70339 3.1606 8.53576Z" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinejoin="round" d="M19 10V15.6703C19 15.8703 18.8808 16.0511 18.697 16.1299L12.197 18.9156C12.0712 18.9695 11.9288 18.9695 11.803 18.9156L5.30304 16.1299C5.1192 16.0511 5 15.8703 5 15.6703V10" vectorEffect="non-scaling-stroke" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 9L16 11V13.5" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="shrink-0 text-base font-medium text-f1-foreground">Approve €890 design team workshop</span>
                <span className="min-w-0 max-w-[400px] flex-1 truncate text-base text-f1-foreground-secondary ">Within Q2 L&D budget · requested by Marta</span>
              </span>
              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label={"Open \"Approve €890 design team workshop\""} role="button" data-state="closed" onClick={(e) => { e.stopPropagation(); open('workshop-budget') }}>
                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                  <span className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <span className="sr-only">Open "Approve €890 design team workshop"</span>
                      {" "}
                    </div>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {extra}
      </div>
    </div>
  )
}
