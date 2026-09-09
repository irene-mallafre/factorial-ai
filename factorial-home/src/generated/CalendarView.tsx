export default function CalendarView() {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col">
      <div className="flex shrink-0 items-start justify-between px-4 pt-0" style={{ height: "52px" }}>
        <div className="flex h-8 items-center gap-1 rounded-[10px] border border-solid border-f1-border-secondary px-1">
          <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Previous week" role="button" data-state="closed">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 6L9 12" vectorEffect="non-scaling-stroke" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 18L9 12" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span className="sr-only">Previous week</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
          <span className="px-1 text-base font-medium text-f1-foreground">Jun 1 → Jun 5</span>
          <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Next week" role="button" data-state="closed">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span className="sr-only">Next week</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Reset to today" role="button" data-state="closed">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 13.5C5 14.8845 5.41054 16.2378 6.17971 17.389C6.94888 18.5401 8.04213 19.4373 9.32122 19.9672C10.6003 20.497 12.0078 20.6356 13.3656 20.3655C14.7235 20.0954 15.9708 19.4287 16.9497 18.4497C17.9287 17.4708 18.5954 16.2235 18.8655 14.8656C19.1356 13.5078 18.997 12.1003 18.4672 10.8212C17.9373 9.54213 17.0401 8.44888 15.889 7.67971C14.7378 6.91054 13.3845 6.5 12 6.5L5.5 6.5" vectorEffect="non-scaling-stroke" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 3.5L5 6.5L8 9.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span className="sr-only">Reset to today</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
          <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Calendar settings" role="button" data-state="closed">
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
                  <span className="sr-only">Calendar settings</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
          <span className="mx-1 h-5 w-px shrink-0 bg-f1-border-secondary"></span>
          <button className="group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Workweek" role="button">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 transition-colors [&_svg:not([data-has-color])]:text-f1-icon">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-base" data-testid="one-ellipsis">Workweek</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="home-window-scroll min-h-0 flex-1 overflow-auto">
        <div className="min-w-[720px]">
          <div className="f0c-canvas-surface sticky top-0 z-10 flex border-0 border-y border-solid border-f1-border-secondary" style={{ height: "40px" }}>
            <div className="shrink-0" style={{ width: "64px" }}></div>
            <div className="flex flex-1 items-center gap-2 border-0 border-l border-solid border-f1-border-secondary px-3 text-base text-f1-foreground-secondary"><span className="truncate">Mon</span><span>1</span></div>
            <div className="flex flex-1 items-center gap-2 border-0 border-l border-solid border-f1-border-secondary px-3 text-base text-f1-foreground-secondary">
              <span className="truncate">Tue</span>
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-f1-background-accent-bold text-sm font-medium text-f1-foreground-inverse">2</span>
            </div>
            <div className="flex flex-1 items-center gap-2 border-0 border-l border-solid border-f1-border-secondary px-3 text-base text-f1-foreground-secondary"><span className="truncate">Wed</span><span>3</span></div>
            <div className="flex flex-1 items-center gap-2 border-0 border-l border-solid border-f1-border-secondary px-3 text-base text-f1-foreground-secondary"><span className="truncate">Thu</span><span>4</span></div>
            <div className="flex flex-1 items-center gap-2 border-0 border-l border-solid border-f1-border-secondary px-3 text-base text-f1-foreground-secondary"><span className="truncate">Fri</span><span>5</span></div>
          </div>
          <div className="relative flex" style={{ height: "760px" }}>
            <div className="relative shrink-0" style={{ width: "64px" }}>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "40px" }}>9 AM</div>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "120px" }}>10 AM</div>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "200px" }}>11 AM</div>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "280px" }}>12 PM</div>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "360px" }}>1 PM</div>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "440px" }}>2 PM</div>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "520px" }}>3 PM</div>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "600px" }}>4 PM</div>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "680px" }}>5 PM</div>
              <div className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary" style={{ top: "760px" }}>6 PM</div>
            </div>
            <div className="relative min-w-0 flex-1 border-0 border-l border-solid border-f1-border-secondary">
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "40px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "120px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "200px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "280px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "360px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "440px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "520px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "600px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "680px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "760px" }}></div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info" style={{ top: "122px", height: "36px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Trio sync | Foundations 10-10:30 AM</span>
              </div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info" style={{ top: "162px", height: "36px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Weekly | F0 & Mobile 10:30-11 AM</span>
              </div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] bg-f1-background-info-bold text-f1-foreground-inverse" style={{ top: "202px", height: "76px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Product All Hands</span>
                <span className="truncate text-base">11 AM-12 PM</span>
              </div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info" style={{ top: "282px", height: "36px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Weekly | F0 & Mobile 10:30-11 AM</span>
              </div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info" style={{ top: "402px", height: "36px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Trio sync | Foundations 10-10:30 AM</span>
              </div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info" style={{ top: "442px", height: "36px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Weekly | F0 & Mobile 10:30-11 AM</span>
              </div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info" style={{ top: "482px", height: "76px", left: "2px", right: "12px" }}><span className="truncate text-base font-medium">Weekly | F0 & Mobile</span></div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info" style={{ top: "562px", height: "36px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Weekly | F0 & Mobile 10:30-11 AM</span>
              </div>
            </div>
            <div className="relative min-w-0 flex-1 border-0 border-l border-solid border-f1-border-secondary">
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "40px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "120px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "200px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "280px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "360px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "440px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "520px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "600px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "680px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "760px" }}></div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] bg-f1-background-info-bold text-f1-foreground-inverse" style={{ top: "82px", height: "676px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Product Alignment</span>
                <span className="truncate text-base">9:30-6 PM</span>
              </div>
            </div>
            <div className="relative min-w-0 flex-1 border-0 border-l border-solid border-f1-border-secondary">
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "40px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "120px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "200px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "280px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "360px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "440px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "520px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "600px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "680px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "760px" }}></div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] bg-f1-background-info-bold text-f1-foreground-inverse" style={{ top: "82px", height: "676px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Product Alignment</span>
                <span className="truncate text-base">9:30-6 PM</span>
              </div>
            </div>
            <div className="relative min-w-0 flex-1 border-0 border-l border-solid border-f1-border-secondary">
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "40px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "120px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "200px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "280px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "360px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "440px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "520px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "600px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "680px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "760px" }}></div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] bg-f1-background-info-bold text-f1-foreground-inverse" style={{ top: "82px", height: "676px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Product Alignment</span>
                <span className="truncate text-base">9:30-6 PM</span>
              </div>
            </div>
            <div className="relative min-w-0 flex-1 border-0 border-l border-solid border-f1-border-secondary">
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "40px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "120px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "200px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "280px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "360px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "440px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "520px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "600px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "680px" }}></div>
              <div className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary" style={{ top: "760px" }}></div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info" style={{ top: "122px", height: "36px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Routines experience 10-10:30 AM</span>
              </div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info" style={{ top: "162px", height: "36px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Weekly | F0 & Mobile 10:30-11 AM</span>
              </div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] bg-f1-background-info-bold text-f1-foreground-inverse" style={{ top: "202px", height: "76px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Factorial All Hands</span>
                <span className="truncate text-base">4:30-5:30 PM</span>
              </div>
              <div className="absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] bg-f1-background-info-bold text-f1-foreground-inverse" style={{ top: "642px", height: "76px", left: "2px", right: "12px" }}>
                <span className="truncate text-base font-medium">Factorial All Hands</span>
                <span className="truncate text-base">4:30-5:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
