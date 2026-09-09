export default function PoliciesView() {
  return (
    <div className="flex w-full flex-col gap-2 px-7 pb-6">
      <p className="text-base font-semibold text-f1-foreground">8 elements</p>
      <div className="flex flex-col gap-4" style={{ width: "100%" }}>
        <div className="flex flex-row gap-4 px-4">
          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 flex-1 gap-1">
                <div className="flex items-center gap-2">
                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Filters" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                    <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                      <span className="flex min-w-0 flex-1 items-center justify-center">
                        <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                            <path stroke="currentColor" d="M5.41496 6.65079C4.85896 6.00212 5.31987 5 6.17422 5H17.8258C18.6801 5 19.141 6.00212 18.585 6.65079L14.2407 11.7191C14.0854 11.9004 14 12.1312 14 12.3699V16.5C14 16.8148 13.8518 17.1111 13.6 17.3L11.6 18.8C10.9408 19.2944 10 18.824 10 18V12.3699C10 12.1312 9.91461 11.9004 9.75926 11.7191L5.41496 6.65079Z" vectorEffect="non-scaling-stroke" />
                          </svg>
                          <span className="sr-only">Filters</span>
                          {" "}
                        </div>
                      </span>
                    </div>
                  </button>
                </div>
                <div className="flex items-center"><div className="mx-2 h-4 w-px bg-f1-background-secondary-hover"></div></div>
                <div className="relative flex items-center min-w-0 flex-1" style={{ gap: "8px" }}>
                  <div aria-hidden="true" className="pointer-events-none invisible absolute left-0 top-0 opacity-0 flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-measurement-container" style={{ gap: "8px" }}>
                    <div data-testid="overflow-measurement-item">
                      <label className="flex appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2 cursor-pointer hover:outline-f1-border-hover">
                        <input type="checkbox" className="sr-only" />
                        <span className="whitespace-nowrap">Published</span>
                      </label>
                    </div>
                    <div data-testid="overflow-measurement-item">
                      <label className="flex appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2 cursor-pointer hover:outline-f1-border-hover">
                        <input type="checkbox" className="sr-only" />
                        <span className="whitespace-nowrap">Draft</span>
                      </label>
                    </div>
                    <div data-testid="overflow-measurement-item">
                      <label className="flex appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2 cursor-pointer hover:outline-f1-border-hover">
                        <input type="checkbox" className="sr-only" />
                        <span className="whitespace-nowrap">Outdated</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container" style={{ gap: "8px" }}>
                    <div className="transition-all duration-150" data-testid="overflow-visible-item">
                      <label className="flex appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2 cursor-pointer hover:outline-f1-border-hover">
                        <input type="checkbox" className="sr-only" />
                        <span className="whitespace-nowrap">Published</span>
                      </label>
                    </div>
                    <div className="transition-all duration-150" data-testid="overflow-visible-item">
                      <label className="flex appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2 cursor-pointer hover:outline-f1-border-hover">
                        <input type="checkbox" className="sr-only" />
                        <span className="whitespace-nowrap">Draft</span>
                      </label>
                    </div>
                    <div className="transition-all duration-150" data-testid="overflow-visible-item">
                      <label className="flex appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2 cursor-pointer hover:outline-f1-border-hover">
                        <input type="checkbox" className="sr-only" />
                        <span className="whitespace-nowrap">Outdated</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <div className="relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center">
                  <div role="button" aria-label="Search" tabIndex={0} className="relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1" style={{ borderRadius: "10px", opacity: "1" }}>
                    <div className="relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background" style={{ borderRadius: "9px" }}>
                      <div className="absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold" style={{ opacity: "1" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                          <path stroke="currentColor" strokeLinecap="round" d="M16 16L19 19" vectorEffect="non-scaling-stroke" />
                          <rect width="14" height="14" x="4" y="4" stroke="currentColor" rx="7" vectorEffect="non-scaling-stroke" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Settings" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                    <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                      <span className="flex min-w-0 flex-1 items-center justify-center">
                        <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                            <path stroke="currentColor" strokeLinecap="round" d="M8 13.0001L8 21.0001" vectorEffect="non-scaling-stroke" />
                            <path stroke="currentColor" strokeLinecap="round" d="M16 3.00006L16 11.0001" vectorEffect="non-scaling-stroke" />
                            <path stroke="currentColor" strokeLinecap="round" d="M8.00001 3.00006L8.00001 4.00006" vectorEffect="non-scaling-stroke" />
                            <path stroke="currentColor" strokeLinecap="round" d="M16 20.0001L16 21.0001" vectorEffect="non-scaling-stroke" />
                            <rect width="6" height="3" x="5" y="7" stroke="currentColor" rx="1.5" vectorEffect="non-scaling-stroke" />
                            <rect width="6" height="3" x="13" y="14" stroke="currentColor" rx="1.5" vectorEffect="non-scaling-stroke" />
                          </svg>
                          <span className="sr-only">Settings</span>
                          {" "}
                        </div>
                      </span>
                    </div>
                  </button>
                </div>
                <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover"></div>
                <div className="flex flex-row-reverse items-center gap-2">
                  <button className="group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Upload documents" role="button">
                    <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 transition-colors [&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold/80">
                      <span className="flex min-w-0 flex-1 items-center justify-center">
                        <div className="flex min-w-0 flex-1 items-center justify-center gap-1 -ml-[3px]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14V5M12 5L9 8M12 5L15 8" vectorEffect="non-scaling-stroke" />
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15" vectorEffect="non-scaling-stroke" />
                          </svg>
                          <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-base" data-testid="one-ellipsis">Upload documents</span>
                          {" "}
                        </div>
                      </span>
                    </div>
                  </button>
                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rbb:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                    <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                      <span className="flex min-w-0 flex-1 items-center justify-center">
                        <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                            <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                            <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                            <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                          </svg>
                          <span className="sr-only">Actions</span>
                          {" "}
                        </div>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex h-full min-h-0 flex-col gap-4">
            <div className="relative h-full w-full overflow-auto">
              <div className="relative w-full">
                <table className="w-full caption-bottom border-spacing-0 border-0 border-none text-base">
                  <thead className="min-h-10 [&_tr]:hover:bg-transparent before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-[''] sticky top-0 z-20">
                    <tr className="group transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-hover relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring">
                      <th className="px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background sticky" tabIndex={0} style={{ width: "46px", maxWidth: "46px", minWidth: "46px", left: "0px", right: "0px" }}>
                        <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                        <div className="flex items-center whitespace-nowrap">
                          <div className="truncate overflow-hidden">
                            <div className="ml-1.5 flex w-full items-center justify-start">
                              <div className="flex items-center">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rbi:" aria-label="Select all" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th className="relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background" aria-sort="none" style={{ left: "0px", right: "0px" }}>
                        <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                        <div className="flex items-center whitespace-nowrap gap-1">
                          <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Policy name</span>
                          <div className="flex items-center">
                            <button className="relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1" aria-label="Sort" tabIndex={0}>
                              <div className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center" style={{ transform: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs text-current">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 13L12 19L6.00002 13" vectorEffect="non-scaling-stroke" />
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5L12 18.5" vectorEffect="non-scaling-stroke" />
                                </svg>
                              </div>
                              <div className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center" style={{ opacity: "0", transform: "scale(0.9)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs text-current">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 13L12 19L6.00002 13" vectorEffect="non-scaling-stroke" />
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5L12 18.5" vectorEffect="non-scaling-stroke" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </th>
                      <th className="relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background" style={{ left: "0px", right: "0px" }}>
                        <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                        <div className="flex items-center whitespace-nowrap">
                          <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Created by</span>
                        </div>
                      </th>
                      <th className="relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background" style={{ left: "0px", right: "0px" }}>
                        <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                        <div className="flex items-center whitespace-nowrap">
                          <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Status</span>
                        </div>
                      </th>
                      <th className="relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background" aria-sort="none" style={{ left: "0px", right: "0px" }}>
                        <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                        <div className="flex items-center whitespace-nowrap gap-1">
                          <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Last update</span>
                          <div className="flex items-center">
                            <button className="relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1" aria-label="Sort" tabIndex={0}>
                              <div className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center" style={{ transform: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs text-current">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 13L12 19L6.00002 13" vectorEffect="non-scaling-stroke" />
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5L12 18.5" vectorEffect="non-scaling-stroke" />
                                </svg>
                              </div>
                              <div className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center" style={{ opacity: "0", transform: "scale(0.9)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs text-current">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 13L12 19L6.00002 13" vectorEffect="non-scaling-stroke" />
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5L12 18.5" vectorEffect="non-scaling-stroke" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </th>
                      <th className="hidden md:table-cell"></th>
                      <th className="px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background sticky after:hidden table-cell md:hidden" tabIndex={0} role="presentation" style={{ width: "68px", maxWidth: "68px", minWidth: "68px", left: "0px", right: "0px" }}>
                        <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-0">
                    <tr className="group group transition-colors hover:bg-f1-background-hover after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring">
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10" style={{ width: "46px", maxWidth: "46px", minWidth: "46px", left: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="pointer-events-auto ml-1.5 flex h-full items-center justify-start">
                              <div className="flex items-center">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rbo:" aria-label="Select travel-expense" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Office Travel and Expense Policy</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div className="pointer-events-auto w-full pt-[3px]">
                                <div className="relative flex items-center" style={{ marginLeft: "2px" }}>
                                  <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                                    <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-2px" }}>
                                      <div>
                                        <div className="pointer-events-auto flex h-fit w-fit shrink-0 items-center justify-center" data-state="closed">
                                          <div className="relative inline-flex h-fit w-fit">
                                            <div className="relative h-fit w-fit">
                                              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                                <img className="aspect-square h-full w-full object-cover" alt="F" loading="lazy" src="https://i.pravatar.cc/120?u=fiona-a" />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div data-cell-type="status">
                                <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
                                  <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-positive text-f1-foreground-positive">
                                    <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon-positive" aria-hidden="true"></div>
                                    <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Published</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">5 days ago</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                        <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                          <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                            <div className="pointer-events-auto">
                              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rbq:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                  <span className="flex min-w-0 flex-1 items-center justify-center">
                                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                      </svg>
                                      <span className="sr-only">Actions</span>
                                      {" "}
                                    </div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </aside>
                        </aside>
                      </td>
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] before:bg-f1-background group-hover:before:bg-f1-background-hover table-cell md:hidden" style={{ width: "68px", maxWidth: "68px", minWidth: "68px", right: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:rbt:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                  <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                    <span className="flex min-w-0 flex-1 items-center justify-center">
                                      <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                          <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                        <span className="sr-only">Mobile Actions</span>
                                        {" "}
                                      </div>
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="group group transition-colors hover:bg-f1-background-hover after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring">
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10" style={{ width: "46px", maxWidth: "46px", minWidth: "46px", left: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="pointer-events-auto ml-1.5 flex h-full items-center justify-start">
                              <div className="flex items-center">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rc0:" aria-label="Select data-protection" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Data Protection Policy</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div className="pointer-events-auto w-full pt-[3px]">
                                <div className="relative flex items-center" style={{ marginLeft: "2px" }}>
                                  <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                                    <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-2px" }}>
                                      <div>
                                        <div className="pointer-events-auto flex h-fit w-fit shrink-0 items-center justify-center" data-state="closed">
                                          <div className="relative inline-flex h-fit w-fit">
                                            <div className="relative h-fit w-fit">
                                              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                                <img className="aspect-square h-full w-full object-cover" alt="P" loading="lazy" src="https://i.pravatar.cc/120?u=pablo-n" />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div data-cell-type="status">
                                <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
                                  <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-positive text-f1-foreground-positive">
                                    <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon-positive" aria-hidden="true"></div>
                                    <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Published</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">7 days ago</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                        <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                          <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                            <div className="pointer-events-auto">
                              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rc2:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                  <span className="flex min-w-0 flex-1 items-center justify-center">
                                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                      </svg>
                                      <span className="sr-only">Actions</span>
                                      {" "}
                                    </div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </aside>
                        </aside>
                      </td>
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] before:bg-f1-background group-hover:before:bg-f1-background-hover table-cell md:hidden" style={{ width: "68px", maxWidth: "68px", minWidth: "68px", right: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:rc5:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                  <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                    <span className="flex min-w-0 flex-1 items-center justify-center">
                                      <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                          <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                        <span className="sr-only">Mobile Actions</span>
                                        {" "}
                                      </div>
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="group group transition-colors hover:bg-f1-background-hover after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring">
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10" style={{ width: "46px", maxWidth: "46px", minWidth: "46px", left: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="pointer-events-auto ml-1.5 flex h-full items-center justify-start">
                              <div className="flex items-center">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rc8:" aria-label="Select remote-work" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Remote Work Policy</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div className="pointer-events-auto w-full pt-[3px]">
                                <div className="relative flex items-center" style={{ marginLeft: "2px" }}>
                                  <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                                    <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-2px" }}>
                                      <div>
                                        <div className="pointer-events-auto flex h-fit w-fit shrink-0 items-center justify-center" data-state="closed">
                                          <div className="relative inline-flex h-fit w-fit">
                                            <div className="relative h-fit w-fit">
                                              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                                <img className="aspect-square h-full w-full object-cover" alt="L" loading="lazy" src="https://i.pravatar.cc/120?u=lucia-f" />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div data-cell-type="status">
                                <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
                                  <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-secondary text-f1-foreground-secondary">
                                    <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon" aria-hidden="true"></div>
                                    <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Draft</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">20 days ago</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                        <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                          <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                            <div className="pointer-events-auto">
                              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rca:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                  <span className="flex min-w-0 flex-1 items-center justify-center">
                                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                      </svg>
                                      <span className="sr-only">Actions</span>
                                      {" "}
                                    </div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </aside>
                        </aside>
                      </td>
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] before:bg-f1-background group-hover:before:bg-f1-background-hover table-cell md:hidden" style={{ width: "68px", maxWidth: "68px", minWidth: "68px", right: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:rcd:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                  <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                    <span className="flex min-w-0 flex-1 items-center justify-center">
                                      <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                          <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                        <span className="sr-only">Mobile Actions</span>
                                        {" "}
                                      </div>
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="group group transition-colors hover:bg-f1-background-hover after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring">
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10" style={{ width: "46px", maxWidth: "46px", minWidth: "46px", left: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="pointer-events-auto ml-1.5 flex h-full items-center justify-start">
                              <div className="flex items-center">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rcg:" aria-label="Select equal-opportunity" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Equal Opportunity Employment Policy</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div className="pointer-events-auto w-full pt-[3px]">
                                <div className="relative flex items-center" style={{ marginLeft: "2px" }}>
                                  <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                                    <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-2px" }}>
                                      <div>
                                        <div className="pointer-events-auto flex h-fit w-fit shrink-0 items-center justify-center" data-state="closed">
                                          <div className="relative inline-flex h-fit w-fit">
                                            <div className="relative h-fit w-fit">
                                              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                                <img className="aspect-square h-full w-full object-cover" alt="A" loading="lazy" src="https://i.pravatar.cc/120?u=aisha-r" />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div data-cell-type="status">
                                <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
                                  <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-positive text-f1-foreground-positive">
                                    <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon-positive" aria-hidden="true"></div>
                                    <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Published</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">22 days ago</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                        <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                          <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                            <div className="pointer-events-auto">
                              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rci:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                  <span className="flex min-w-0 flex-1 items-center justify-center">
                                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                      </svg>
                                      <span className="sr-only">Actions</span>
                                      {" "}
                                    </div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </aside>
                        </aside>
                      </td>
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] before:bg-f1-background group-hover:before:bg-f1-background-hover table-cell md:hidden" style={{ width: "68px", maxWidth: "68px", minWidth: "68px", right: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:rcl:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                  <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                    <span className="flex min-w-0 flex-1 items-center justify-center">
                                      <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                          <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                        <span className="sr-only">Mobile Actions</span>
                                        {" "}
                                      </div>
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="group group transition-colors hover:bg-f1-background-hover after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring">
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10" style={{ width: "46px", maxWidth: "46px", minWidth: "46px", left: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="pointer-events-auto ml-1.5 flex h-full items-center justify-start">
                              <div className="flex items-center">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rco:" aria-label="Select harassment-prevention" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Harassment Prevention Policy</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div className="pointer-events-auto w-full pt-[3px]">
                                <div className="relative flex items-center" style={{ marginLeft: "2px" }}>
                                  <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                                    <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-2px" }}>
                                      <div>
                                        <div className="pointer-events-auto flex h-fit w-fit shrink-0 items-center justify-center" data-state="closed">
                                          <div className="relative inline-flex h-fit w-fit">
                                            <div className="relative h-fit w-fit">
                                              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                                <img className="aspect-square h-full w-full object-cover" alt="M" loading="lazy" src="https://i.pravatar.cc/120?u=marc-v" />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div data-cell-type="status">
                                <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
                                  <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-secondary text-f1-foreground-secondary">
                                    <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon" aria-hidden="true"></div>
                                    <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Draft</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">1 month ago</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                        <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                          <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                            <div className="pointer-events-auto">
                              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rcq:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                  <span className="flex min-w-0 flex-1 items-center justify-center">
                                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                      </svg>
                                      <span className="sr-only">Actions</span>
                                      {" "}
                                    </div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </aside>
                        </aside>
                      </td>
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] before:bg-f1-background group-hover:before:bg-f1-background-hover table-cell md:hidden" style={{ width: "68px", maxWidth: "68px", minWidth: "68px", right: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:rct:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                  <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                    <span className="flex min-w-0 flex-1 items-center justify-center">
                                      <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                          <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                        <span className="sr-only">Mobile Actions</span>
                                        {" "}
                                      </div>
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="group group transition-colors hover:bg-f1-background-hover after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring">
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10" style={{ width: "46px", maxWidth: "46px", minWidth: "46px", left: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="pointer-events-auto ml-1.5 flex h-full items-center justify-start">
                              <div className="flex items-center">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rd0:" aria-label="Select confidentiality" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Confidentiality Agreement</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div className="pointer-events-auto w-full pt-[3px]">
                                <div className="relative flex items-center" style={{ marginLeft: "2px" }}>
                                  <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                                    <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-2px" }}>
                                      <div>
                                        <div className="pointer-events-auto flex h-fit w-fit shrink-0 items-center justify-center" data-state="closed">
                                          <div className="relative inline-flex h-fit w-fit">
                                            <div className="relative h-fit w-fit">
                                              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                                <img className="aspect-square h-full w-full object-cover" alt="A" loading="lazy" src="https://i.pravatar.cc/120?u=alicia" />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div data-cell-type="status">
                                <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
                                  <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-positive text-f1-foreground-positive">
                                    <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon-positive" aria-hidden="true"></div>
                                    <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Published</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">1 month ago</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                        <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                          <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                            <div className="pointer-events-auto">
                              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rd2:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                  <span className="flex min-w-0 flex-1 items-center justify-center">
                                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                      </svg>
                                      <span className="sr-only">Actions</span>
                                      {" "}
                                    </div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </aside>
                        </aside>
                      </td>
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] before:bg-f1-background group-hover:before:bg-f1-background-hover table-cell md:hidden" style={{ width: "68px", maxWidth: "68px", minWidth: "68px", right: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:rd5:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                  <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                    <span className="flex min-w-0 flex-1 items-center justify-center">
                                      <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                          <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                        <span className="sr-only">Mobile Actions</span>
                                        {" "}
                                      </div>
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="group group transition-colors hover:bg-f1-background-hover after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring">
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10" style={{ width: "46px", maxWidth: "46px", minWidth: "46px", left: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="pointer-events-auto ml-1.5 flex h-full items-center justify-start">
                              <div className="flex items-center">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rd8:" aria-label="Select social-media" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Social Media Policy</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div className="pointer-events-auto w-full pt-[3px]">
                                <div className="relative flex items-center" style={{ marginLeft: "2px" }}>
                                  <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                                    <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-2px" }}>
                                      <div>
                                        <div className="pointer-events-auto flex h-fit w-fit shrink-0 items-center justify-center" data-state="closed">
                                          <div className="relative inline-flex h-fit w-fit">
                                            <div className="relative h-fit w-fit">
                                              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                                <img className="aspect-square h-full w-full object-cover" alt="J" loading="lazy" src="https://i.pravatar.cc/120?u=jon-a" />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div data-cell-type="status">
                                <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
                                  <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-secondary text-f1-foreground-secondary">
                                    <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon" aria-hidden="true"></div>
                                    <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Draft</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">2 months ago</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                        <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                          <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                            <div className="pointer-events-auto">
                              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rda:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                  <span className="flex min-w-0 flex-1 items-center justify-center">
                                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                      </svg>
                                      <span className="sr-only">Actions</span>
                                      {" "}
                                    </div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </aside>
                        </aside>
                      </td>
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] before:bg-f1-background group-hover:before:bg-f1-background-hover table-cell md:hidden" style={{ width: "68px", maxWidth: "68px", minWidth: "68px", right: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:rdd:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                  <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                    <span className="flex min-w-0 flex-1 items-center justify-center">
                                      <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                          <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                        <span className="sr-only">Mobile Actions</span>
                                        {" "}
                                      </div>
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="group group transition-colors hover:bg-f1-background-hover after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring">
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10" style={{ width: "46px", maxWidth: "46px", minWidth: "46px", left: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="pointer-events-auto ml-1.5 flex h-full items-center justify-start">
                              <div className="flex items-center">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rdg:" aria-label="Select workplace-safety" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Workplace Safety Policy</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div className="pointer-events-auto w-full pt-[3px]">
                                <div className="relative flex items-center" style={{ marginLeft: "2px" }}>
                                  <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                                    <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-2px" }}>
                                      <div>
                                        <div className="pointer-events-auto flex h-fit w-fit shrink-0 items-center justify-center" data-state="closed">
                                          <div className="relative inline-flex h-fit w-fit">
                                            <div className="relative h-fit w-fit">
                                              <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                                <img className="aspect-square h-full w-full object-cover" alt="J" loading="lazy" src="https://i.pravatar.cc/120?u=jon-a" />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <div data-cell-type="status">
                                <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
                                  <div className="inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium pl-1 rounded-full bg-f1-background-warning text-f1-foreground-warning">
                                    <div className="m-1 aspect-square w-2 rounded-full bg-f1-icon-warning" aria-hidden="true"></div>
                                    <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Outdated</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="relative z-[1] h-full">
                            <div className="flex">
                              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">1 year ago</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                        <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                          <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                            <div className="pointer-events-auto">
                              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rdi:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                  <span className="flex min-w-0 flex-1 items-center justify-center">
                                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                        <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                      </svg>
                                      <span className="sr-only">Actions</span>
                                      {" "}
                                    </div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </aside>
                        </aside>
                      </td>
                      <td className="min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full sticky z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] before:bg-f1-background group-hover:before:bg-f1-background-hover table-cell md:hidden" style={{ width: "68px", maxWidth: "68px", minWidth: "68px", right: "0px" }}>
                        <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                          <div className="overflow-hidden relative z-[1] h-full">
                            <div className="">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:rdl:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                                  <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                                    <span className="flex min-w-0 flex-1 items-center justify-center">
                                      <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                                          <circle cx="12" cy="12" r="1.5" fill="currentColor" transform="rotate(90 12 12)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" transform="rotate(90 12 6.5)" vectorEffect="non-scaling-stroke" />
                                          <circle cx="12" cy="17.5" r="1.5" fill="currentColor" transform="rotate(90 12 17.5)" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                        <span className="sr-only">Mobile Actions</span>
                                        {" "}
                                      </div>
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
