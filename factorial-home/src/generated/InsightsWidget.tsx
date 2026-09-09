import type React from 'react'

export default function InsightsWidget() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="relative flex flex-col gap-3 overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background px-4 pb-4 pt-4">
        <div className="flex items-start justify-between gap-2">
          <span className="truncate text-base font-medium text-f1-foreground">Total employees</span>
          <button aria-label="Ask One about Total employees" className="f0c-pressable -mr-1 -mt-1 shrink-0 cursor-pointer rounded-full">
            <div className="h-[1.375rem] w-[1.375rem]" style={{ background: "transparent" }}>
              <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ "--gradient-angle": "undefined" } as React.CSSProperties}>
                <defs>
                  <clipPath id=":reo:-circle"><circle cx="16" cy="16" r="16" /></clipPath>
                  <clipPath id=":reo:-bottom">
                    <path d="M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z" />
                  </clipPath>
                  <clipPath id=":reo:-left">
                    <path d="M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z" />
                  </clipPath>
                  <clipPath id=":reo:-right">
                    <path d="M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z" />
                  </clipPath>
                  <clipPath id=":reo:-top">
                    <path d="M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z" />
                  </clipPath>
                </defs>
                <g clipPath="url(#:reo:-circle)">
                  <foreignObject x="0" y="0" width="32" height="32" clipPath="url(#:reo:-bottom)" opacity="undefined" filter="undefined" style={{ "--rotate3d-angle": "undefined", "--scale": "undefined", "--rotate": "undefined", transform: "scale(var(--scale)) rotate(var(--rotate))", transformOrigin: "center 89%", willChange: "transform" } as React.CSSProperties}>
                    <div style={{ width: "100%", height: "100%", background: "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)" }}></div>
                  </foreignObject>
                  <foreignObject x="0" y="0" width="32" height="32" clipPath="url(#:reo:-left)" opacity="undefined" filter="undefined" style={{ "--rotate3d-angle": "undefined", "--scale": "undefined", "--rotate": "undefined", transform: "scale(var(--scale)) rotate(var(--rotate))", transformOrigin: "11% center", willChange: "transform" } as React.CSSProperties}>
                    <div style={{ width: "100%", height: "100%", background: "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)" }}></div>
                  </foreignObject>
                  <foreignObject x="0" y="0" width="32" height="32" clipPath="url(#:reo:-right)" opacity="undefined" filter="undefined" style={{ "--rotate3d-angle": "undefined", "--scale": "undefined", "--rotate": "undefined", transform: "scale(var(--scale)) rotate(var(--rotate))", transformOrigin: "88.5% center", willChange: "transform" } as React.CSSProperties}>
                    <div style={{ width: "100%", height: "100%", background: "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)" }}></div>
                  </foreignObject>
                  <foreignObject x="0" y="0" width="32" height="32" clipPath="url(#:reo:-top)" opacity="undefined" filter="undefined" style={{ "--rotate3d-angle": "undefined", "--scale": "undefined", "--rotate": "undefined", transform: "scale(var(--scale)) rotate(var(--rotate))", transformOrigin: "center 11%", willChange: "transform" } as React.CSSProperties}>
                    <div style={{ width: "100%", height: "100%", background: "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)" }}></div>
                  </foreignObject>
                </g>
              </svg>
            </div>
          </button>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-base text-f1-foreground-secondary">Total</span>
            <span className="truncate text-2xl font-semibold text-f1-foreground">2.714</span>
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-base text-f1-foreground-secondary">Joiners</span>
            <span className="truncate text-2xl font-semibold text-f1-foreground">122</span>
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-base text-f1-foreground-secondary">Leavers</span>
            <span className="truncate text-2xl font-semibold text-f1-foreground">37</span>
          </div>
        </div>
        <div className="-mx-4 -mb-4 bg-f1-background-secondary px-4 pb-3 pt-2 text-f1-icon-selected">
          <svg viewBox="0 0 300 40" className="block h-12 w-full" preserveAspectRatio="none" aria-hidden="true">
            <polyline points="0.0,36.0 17.6,33.9 35.3,34.8 52.9,31.1 70.6,28.7 88.2,29.8 105.9,25.9 123.5,24.1 141.2,25.2 158.8,21.8 176.5,19.4 194.1,20.3 211.8,16.6 229.4,13.8 247.1,14.8 264.7,11.6 282.4,10.2 300.0,4.0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background">
        <div className="flex flex-col gap-1 px-4 pt-4">
          <span className="text-sm font-medium text-f1-foreground-secondary">Retention</span>
          <span className="text-lg font-semibold text-f1-foreground">Turnover up 22% in Sales this quarter</span>
        </div>
        <div className="">
          <div className="relative mt-3">
            <span className="absolute right-2 top-[-4px] rounded-full border border-solid border-f1-border-critical bg-f1-background px-2 py-0.5 text-sm font-medium text-f1-foreground-critical">+22%</span>
            <svg viewBox="0 0 300 40" className="block h-14 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="turnover-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E51943" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#E51943" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="0,34 20,32 40,33 60,30 80,31 100,29 120,30 140,27 160,28 180,25 200,26 220,22 240,23 260,19 280,16 300,10 300,40 0,40" fill="url(#turnover-fill)" />
              <polyline points="0,34 20,32 40,33 60,30 80,31 100,29 120,30 140,27 160,28 180,25 200,26 220,22 240,23 260,19 280,16 300,10" fill="none" stroke="#E51943" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background">
        <div className="flex flex-col gap-1 px-4 pt-4">
          <span className="text-sm font-medium text-f1-foreground-secondary">Time</span>
          <span className="text-lg font-semibold text-f1-foreground">6 people consistently over 45h/week</span>
        </div>
        <div className="px-4 pb-4">
          <div className="mt-3 flex items-center">
            <div className="">
              <div className="relative inline-flex h-fit w-fit">
                <div className="relative h-fit w-fit">
                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                    <img className="aspect-square h-full w-full object-cover" alt="O" loading="lazy" src="https://i.pravatar.cc/120?u=ot-1" />
                  </span>
                </div>
              </div>
            </div>
            <div className="-ml-1.5">
              <div className="relative inline-flex h-fit w-fit">
                <div className="relative h-fit w-fit">
                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                    <img className="aspect-square h-full w-full object-cover" alt="O" loading="lazy" src="https://i.pravatar.cc/120?u=ot-2" />
                  </span>
                </div>
              </div>
            </div>
            <div className="-ml-1.5">
              <div className="relative inline-flex h-fit w-fit">
                <div className="relative h-fit w-fit">
                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                    <img className="aspect-square h-full w-full object-cover" alt="O" loading="lazy" src="https://i.pravatar.cc/120?u=ot-3" />
                  </span>
                </div>
              </div>
            </div>
            <span className="-ml-1.5 flex size-6 items-center justify-center rounded-full bg-f1-background-secondary text-sm font-medium text-f1-foreground-secondary">+3</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background">
        <div className="flex flex-col gap-1 px-4 pt-4">
          <span className="text-sm font-medium text-f1-foreground-secondary">Performance</span>
          <span className="text-lg font-semibold text-f1-foreground">3 managers haven't completed Q1 reviews</span>
        </div>
        <div className="px-4 pb-4">
          <div className="mt-3 flex items-center">
            <div className="">
              <div className="relative inline-flex h-fit w-fit">
                <div className="relative h-fit w-fit">
                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                    <img className="aspect-square h-full w-full object-cover" alt="R" loading="lazy" src="https://i.pravatar.cc/120?u=rv-1" />
                  </span>
                </div>
              </div>
            </div>
            <div className="-ml-1.5">
              <div className="relative inline-flex h-fit w-fit">
                <div className="relative h-fit w-fit">
                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                    <img className="aspect-square h-full w-full object-cover" alt="R" loading="lazy" src="https://i.pravatar.cc/120?u=rv-2" />
                  </span>
                </div>
              </div>
            </div>
            <div className="-ml-1.5">
              <div className="relative inline-flex h-fit w-fit">
                <div className="relative h-fit w-fit">
                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-6 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                    <img className="aspect-square h-full w-full object-cover" alt="R" loading="lazy" src="https://i.pravatar.cc/120?u=rv-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
