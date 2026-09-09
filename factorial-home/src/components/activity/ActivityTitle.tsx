/** Screen title for the Activity board (module icon inherited from the original Agents screen). */
export function ActivityTitle() {
  return (
    <span className="flex min-w-0 items-center gap-2">
      <div className="relative flex shrink-0 items-center justify-center h-5 w-5" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="absolute h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient-t0qtccyept" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF355E" />
              <stop offset="44%" stopColor="#FF355E" />
              <stop offset="100%" stopColor="#D62D4F" />
            </linearGradient>
          </defs>
          <path d="M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0" fill="url(#gradient-t0qtccyept)" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="relative text-f1-foreground-inverse drop-shadow h-[14px] w-[14px]">
          <path fill="currentColor" d="M17.4205 4.4545C16.9812 4.01517 16.2688 4.01517 15.8295 4.4545C15.3902 4.89384 15.3902 5.60616 15.8295 6.0455L16.159 6.375H12.3081C10.7565 6.375 9.31442 7.17429 8.49209 8.49L7.66241 9.8175C7.25125 10.4754 6.53019 10.875 5.75441 10.875H3.125C2.50368 10.875 2 11.3787 2 12C2 12.6213 2.50368 13.125 3.125 13.125H5.75441C6.53019 13.125 7.25125 13.5246 7.66241 14.1825L8.49209 15.51C9.31442 16.8257 10.7565 17.625 12.3081 17.625H16.159L15.8295 17.9545C15.3902 18.3938 15.3902 19.1062 15.8295 19.5455C16.2688 19.9848 16.9812 19.9848 17.4205 19.5455L19.6705 17.2955C20.1098 16.8562 20.1098 16.1438 19.6705 15.7045L17.4205 13.4545C16.9812 13.0152 16.2688 13.0152 15.8295 13.4545C15.3902 13.8938 15.3902 14.6062 15.8295 15.0455L16.159 15.375H12.3081C11.5323 15.375 10.8113 14.9754 10.4001 14.3175L9.57041 12.99C9.33674 12.6161 9.05303 12.284 8.73099 12C9.05303 11.716 9.33674 11.3839 9.57041 11.01L10.4001 9.6825C10.8113 9.02464 11.5323 8.625 12.3081 8.625H16.159L15.8295 8.95451C15.3902 9.39385 15.3902 10.1062 15.8295 10.5455C16.2688 10.9848 16.9812 10.9848 17.4205 10.5455L19.6705 8.2955C20.1098 7.85616 20.1098 7.14384 19.6705 6.7045L17.4205 4.4545Z" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <span className="truncate text-base font-medium text-f1-foreground">Activity</span>
    </span>
  )
}
