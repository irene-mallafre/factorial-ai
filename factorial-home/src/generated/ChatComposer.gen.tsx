export default function ChatComposerGen() {
  return (
    <form className="flex flex-col gap-1 rounded-md border border-solid border-f1-border bg-f1-background p-3">
      <textarea rows={2} aria-label="Message Lucía Fernandez" placeholder="Write something here.." className="max-h-40 w-full resize-none border-0 bg-transparent p-0 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"></textarea>
      <div className="flex items-center justify-between">
        <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Attach a file" role="button" data-state="closed">
          <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
            <span className="flex min-w-0 flex-1 items-center justify-center">
              <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                  <path stroke="currentColor" strokeLinecap="round" d="M15 11L10 16C9.44772 16.5523 8.55228 16.5523 8 16V16C7.44772 15.4477 7.44772 14.5523 8 14L15 7C16.1046 5.89543 17.8954 5.89543 19 7V7C20.1046 8.10457 20.1046 9.89543 19 11L12 18C10.3431 19.6569 7.65685 19.6569 6 18V18C4.34315 16.3431 4.34315 13.6569 6 12L11 7" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="sr-only">Attach a file</span>
                {" "}
              </div>
            </span>
          </div>
        </button>
        <div className="flex items-center gap-2">
          <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Record a voice message" role="button" data-state="closed">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 7C9 5.34315 10.3431 4 12 4V4C13.6569 4 15 5.34315 15 7V11C15 12.6569 13.6569 14 12 14V14C10.3431 14 9 12.6569 9 11V7Z" vectorEffect="non-scaling-stroke" />
                    <path stroke="currentColor" strokeLinecap="round" d="M18 11V11C18 14.3137 15.3137 17 12 17V17C8.68629 17 6 14.3137 6 11V11" vectorEffect="non-scaling-stroke" />
                    <path stroke="currentColor" strokeLinecap="round" d="M12 17V20M12 20H10M12 20H14" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span className="sr-only">Record a voice message</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
          <button disabled className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Send" type="submit" role="button" data-state="closed">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 11L12 5.00002L18 11" vectorEffect="non-scaling-stroke" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 19L12 5.50002" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span className="sr-only">Send</span>
                  {" "}
                </div>
              </span>
            </div>
          </button>
        </div>
      </div>
    </form>
  )
}
