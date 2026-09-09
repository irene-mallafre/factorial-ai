import type React from 'react'

export default function PromptBar() {
  return (
    <div data-home-promptbar="true" className="relative w-[712px] max-w-full shrink-0 pb-1.5">
      <div className="relative flex w-full flex-col">
        <div data-one-composer="true">
          <form aria-busy="false" className="relative isolate z-20 flex flex-col items-stretch md:gap-3 gap-2 rounded-lg border border-solid border-f1-border has-[textarea:focus]:border-f1-background-tertiary transition-all hover:cursor-text p-0 before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:bg-f1-background before:content-[''] after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-md after:blur-[6px] after:content-[''] after:scale-90 after:opacity-0 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))] from-[#E55619] via-[#A1ADE5] to-[#E51943] after:transition-all after:delay-200 after:duration-300 has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100" style={{ "--gradient-angle": "undefined" } as React.CSSProperties}>
            <div className="overflow-hidden" style={{ height: "auto", opacity: "1" }}>
              <div className="grid flex-1 grid-cols-1 grid-rows-1 min-h-[20px] py-0">
                <div aria-hidden="true" className="col-start-1 row-start-1 pointer-events-none invisible min-h-[20px] max-h-[240px] whitespace-pre-wrap break-words text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground my-3 px-3"></div>
                <p className="col-start-1 row-start-1 pointer-events-none text-f1-foreground-secondary text-[16px] sm:text-[14px] leading-[20px] font-normal pt-3 px-3 overflow-hidden text-ellipsis whitespace-nowrap">Ask about time, people, or company info and a lot of other things...</p>
                <textarea name="one-ai-input" rows={1} className="col-start-1 row-start-1 min-h-[20px] max-h-[240px] h-auto resize-none whitespace-pre-wrap break-words text-[16px] sm:text-[14px] leading-[20px] font-normal mt-3 px-3 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none text-f1-foreground caret-f1-foreground"></textarea>
              </div>
              <div className="flex shrink-0 items-center justify-between p-3">
                <div className="flex items-center gap-2">
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
                </div>
                <div className="flex items-center">
                  <button disabled className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Send message" type="submit" role="button" data-state="closed">
                    <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                      <span className="flex min-w-0 flex-1 items-center justify-center">
                        <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 11L12 5.00002L18 11" vectorEffect="non-scaling-stroke" />
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 19L12 5.50002" vectorEffect="non-scaling-stroke" />
                          </svg>
                          <span className="sr-only">Send message</span>
                          {" "}
                        </div>
                      </span>
                    </div>
                  </button>
                  <span className="order-[-1] mr-2 flex items-center">
                    <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Use voice" role="button" data-state="closed">
                      <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[6px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                        <span className="flex min-w-0 flex-1 items-center justify-center">
                          <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 7C9 5.34315 10.3431 4 12 4V4C13.6569 4 15 5.34315 15 7V11C15 12.6569 13.6569 14 12 14V14C10.3431 14 9 12.6569 9 11V7Z" vectorEffect="non-scaling-stroke" />
                              <path stroke="currentColor" strokeLinecap="round" d="M18 11V11C18 14.3137 15.3137 17 12 17V17C8.68629 17 6 14.3137 6 11V11" vectorEffect="non-scaling-stroke" />
                              <path stroke="currentColor" strokeLinecap="round" d="M12 17V20M12 20H10M12 20H14" vectorEffect="non-scaling-stroke" />
                            </svg>
                            <span className="sr-only">Use voice</span>
                            {" "}
                          </div>
                        </span>
                      </div>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full items-center justify-between py-2 flex">
          <div className="flex items-center gap-1">
            <button className="f0c-pressable flex cursor-pointer items-center gap-1 rounded-[10px] px-1.5 py-1 text-base font-medium text-f1-foreground hover:bg-f1-background-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-f1-icon" data-has-color="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 13L5.5 18.5L11 17M7 13L14.5 5.5C15.6046 4.39543 17.3954 4.39543 18.5 5.5V5.5C19.6046 6.60457 19.6046 8.39543 18.5 9.5L11 17M7 13L11 17" vectorEffect="non-scaling-stroke" />
              </svg>
              Create
            </button>
            <button className="f0c-pressable flex cursor-pointer items-center gap-1 rounded-[10px] px-1.5 py-1 text-base font-medium text-f1-foreground hover:bg-f1-background-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-f1-icon" data-has-color="true">
                <circle cx="12" cy="12" r="8" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 9V12L15.5 14" vectorEffect="non-scaling-stroke" />
              </svg>
              Automate
            </button>
            <button className="f0c-pressable flex cursor-pointer items-center gap-1 rounded-[10px] px-1.5 py-1 text-base font-medium text-f1-foreground hover:bg-f1-background-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-f1-icon" data-has-color="true">
                <path fill="currentColor" d="M3.73145 4.97357C4.14535 4.97393 4.48145 5.30958 4.48145 5.72357V10.2646C4.48145 11.6768 4.48184 12.6912 4.54688 13.4872C4.61121 14.2744 4.73473 14.7829 4.94434 15.1943C5.3518 15.9936 6.00238 16.6434 6.80176 17.0507C7.21303 17.2602 7.72096 17.3848 8.50781 17.4492C9.30388 17.5142 10.3192 17.5146 11.7314 17.5146H20.2607C20.6748 17.5148 21.0107 17.8505 21.0107 18.2646C21.0104 18.6784 20.6746 19.0144 20.2607 19.0146H11.7314C10.3439 19.0146 9.25705 19.0145 8.38574 18.9433C7.50611 18.8714 6.77893 18.7227 6.12109 18.3876C5.0394 17.8365 4.15969 16.9565 3.6084 15.8749C3.2731 15.2169 3.12368 14.4893 3.05176 13.6093C2.98058 12.7381 2.98145 11.652 2.98145 10.2646V5.72357C2.98145 5.30936 3.31723 4.97357 3.73145 4.97357ZM18.7578 8.46674C19.0521 8.17559 19.527 8.17856 19.8184 8.4726C20.1095 8.76702 20.1068 9.24185 19.8125 9.53314L16.4014 12.9091L16.3447 12.9599C16.0511 13.1972 15.6197 13.1803 15.3457 12.9091L12.4629 10.0556L8.11621 14.3564C7.82179 14.6474 7.34694 14.6448 7.05566 14.3505C6.76484 14.0561 6.76743 13.5812 7.06152 13.29L11.9346 8.46674C12.2267 8.17759 12.698 8.17781 12.9902 8.46674L15.874 11.3212L18.7578 8.46674Z" vectorEffect="non-scaling-stroke" />
              </svg>
              Analyze
            </button>
          </div>
          <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="ONE settings" role="button" data-state="closed">
            <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
              <span className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                    <path stroke="currentColor" d="M10.3036 4.71638C11.0868 3.46223 12.9132 3.46223 13.6964 4.71638L14.4364 5.90129C14.7887 6.46555 15.3986 6.81766 16.0635 6.8407L17.4596 6.88908C18.9373 6.94029 19.8505 8.52194 19.156 9.8273L18.4998 11.0606C18.1873 11.6479 18.1873 12.3521 18.4998 12.9394L19.156 14.1727C19.8505 15.4781 18.9373 17.0597 17.4596 17.1109L16.0635 17.1593C15.3986 17.1823 14.7887 17.5345 14.4364 18.0987L13.6964 19.2836C12.9132 20.5378 11.0868 20.5378 10.3036 19.2836L9.56365 18.0987C9.21127 17.5345 8.60139 17.1823 7.93654 17.1593L6.54039 17.1109C5.06266 17.0597 4.14949 15.4781 4.84401 14.1727L5.50018 12.9394C5.81266 12.3521 5.81266 11.6479 5.50018 11.0606L4.84401 9.8273C4.14949 8.52194 5.06266 6.94029 6.54039 6.88908L7.93654 6.8407C8.60139 6.81766 9.21127 6.46555 9.56365 5.90129L10.3036 4.71638Z" vectorEffect="non-scaling-stroke" />
                    <circle cx="11.999" cy="12" r="2.5" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span className="sr-only">ONE settings</span>
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
