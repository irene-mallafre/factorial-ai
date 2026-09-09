export default function FloatingClockInGen() {
  return (
    <div data-home-floating="true" className="f0c-card-in fixed z-40 flex flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-[0_8px_28px_-8px_rgba(13,22,37,0.18)]" aria-label="Clock in" style={{ left: "534px", top: "54px", width: "188px" }}>
      <header className="flex shrink-0 cursor-grab select-none items-center justify-between py-1.5 pl-3 pr-1.5 active:cursor-grabbing">
        <span className="truncate text-base font-medium text-f1-foreground">Clock in</span>
        <div className="flex shrink-0 items-center">
          <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Dock Clock in" role="button" data-state="closed">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                    <path fill="currentColor" d="M20.6586 14.9935C20.6585 17.0093 19.024 18.6439 17.0082 18.6439L11.7504 18.6439L7.0014 18.6498L7.00043 18.6498C4.9849 18.6496 3.35025 17.0159 3.35004 15.0004L3.35004 9.00037C3.35004 7.01372 4.93803 5.3993 6.91351 5.35291C6.94198 5.34908 6.97092 5.34319 7.00043 5.34314L17.0082 5.34314C19.0241 5.34314 20.6586 6.97768 20.6586 8.99353L20.6586 14.9935ZM19.3578 8.99353C19.3578 7.69565 18.3061 6.64392 17.0082 6.64392L7.06097 6.64392C7.04107 6.6458 7.02081 6.64978 7.00043 6.64978C5.70274 6.64999 4.65082 7.70263 4.65082 9.00037L4.65082 15.0004C4.65103 16.2976 5.70234 17.3492 6.99945 17.35L11.7485 17.3431L17.0082 17.3431C18.3061 17.3431 19.3577 16.2913 19.3578 14.9935L19.3578 8.99353Z" />
                    <path fill="currentColor" d="M16.8251 8.3092C17.2806 8.30938 17.6493 8.67887 17.6493 9.1344V14.8453C17.6491 15.3007 17.2805 15.6704 16.8251 15.6705H12.8261C12.3706 15.6705 12.0011 15.3008 12.0009 14.8453V9.1344C12.0009 8.67881 12.3705 8.30927 12.8261 8.3092H16.8251Z" />
                  </svg>
                  <span className="sr-only">Dock Clock in</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
          <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Close Clock in" role="button" data-state="closed">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.9497 7.05026L12 12L7.05025 16.9498" vectorEffect="non-scaling-stroke" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 12L7.05025 7.05026L16.9497 16.9498" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span className="sr-only">Close Clock in</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
        </div>
      </header>
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
    </div>
  )
}
