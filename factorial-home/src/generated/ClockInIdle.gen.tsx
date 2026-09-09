export default function ClockInIdleGen() {
  return (
    <div className="flex flex-col gap-0.5 px-1.5 pb-2.5">
      <div className="flex flex-col rounded-md px-1.5 py-2">
        <span className="truncate text-[26px] font-semibold leading-8 tracking-[-0.26px] text-f1-foreground">00:00</span>
        <div className="flex h-5 items-center">
          <div className="h-2 w-full overflow-hidden rounded-[10px] bg-f1-background-secondary">
            <div className="h-full w-full origin-left rounded-[10px] bg-f1-background-accent-bold transition-transform duration-1000 ease-linear" style={{ transform: "scaleX(0)" }}></div>
          </div>
        </div>
        <div className="flex h-5 items-start justify-between text-base text-f1-foreground-secondary">
          <span className="truncate font-medium">--:--</span>
          <span className="truncate">8h 00m left</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 px-1">
        <button aria-label="Barcelona HQ" className="f0c-pressable flex min-w-0 shrink-0 cursor-pointer items-center gap-2 rounded-[10px] p-1.5 hover:bg-f1-background-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon" data-has-color="true">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 7C6 5.34315 7.34315 4 9 4H15C16.6569 4 18 5.34315 18 7V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V7Z" vectorEffect="non-scaling-stroke" />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 12H14" vectorEffect="non-scaling-stroke" />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 8H14" vectorEffect="non-scaling-stroke" />
            <path stroke="currentColor" d="M10 16.5C10 15.9477 10.4477 15.5 11 15.5H13C13.5523 15.5 14 15.9477 14 16.5V20H10V16.5Z" vectorEffect="non-scaling-stroke" />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 20H5" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="truncate text-base text-f1-foreground">Barcelona HQ</span>
        </button>
        <button className="group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Clock in" role="button">
          <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 transition-colors [&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold/80">
            <span className="flex min-w-0 flex-1 items-center justify-center">
              <div className="flex min-w-0 flex-1 items-center justify-center gap-1 -ml-[3px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                  <path fill="currentColor" d="M5.99988 16.5536V7.44636C5.99988 5.91072 7.65884 4.94798 8.99216 5.70988L16.961 10.2635C18.3047 11.0313 18.3047 12.9687 16.961 13.7365L8.99216 18.2901C7.65884 19.052 5.99988 18.0893 5.99988 16.5536Z" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-base" data-testid="one-ellipsis">Clock in</span>
                {" "}
              </div>
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}
