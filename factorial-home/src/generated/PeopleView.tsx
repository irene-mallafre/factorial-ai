export default function PeopleView() {
  return (
    <div className="home-canvas-scroll flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
      <nav aria-label="secondary-navigation" data-orientation="horizontal" dir="ltr" className="relative">
        <div className="absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary"></div>
        <div style={{ position: "relative" }}>
          <ul data-orientation="horizontal" className="relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-f1-background-transparent pt-1" dir="ltr">
            <li className="flex">
              <span data-is-active="false" role="link" id="people" data-active="true" className="group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1" data-radix-collection-item="" {...{ disabled: true }}>
                <span className="text-f1-foreground-secondary ring-1 ring-inset ring-transparent flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground">
                  People
                  <div className="absolute inset-x-0 -bottom-3 h-px bg-f1-background-inverse" style={{ opacity: "1" }}></div>
                </span>
              </span>
            </li>
            <li className="flex">
              <span data-is-active="false" role="link" id="activity" className="group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1" data-radix-collection-item="" {...{ disabled: true }}>
                <span className="text-f1-foreground-secondary ring-1 ring-inset ring-transparent flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground">Activity</span>
              </span>
            </li>
            <li className="flex">
              <span data-is-active="false" role="link" id="teams" className="group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1" data-radix-collection-item="" {...{ disabled: true }}>
                <span className="text-f1-foreground-secondary ring-1 ring-inset ring-transparent flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground">Teams</span>
              </span>
            </li>
            <li className="flex">
              <span data-is-active="false" role="link" id="org-chart" className="group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1" data-radix-collection-item="" {...{ disabled: true }}>
                <span className="text-f1-foreground-secondary ring-1 ring-inset ring-transparent flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground">Org chart</span>
              </span>
            </li>
            <li className="flex">
              <span data-is-active="false" role="link" id="roles" className="group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1" data-radix-collection-item="" {...{ disabled: true }}>
                <span className="text-f1-foreground-secondary ring-1 ring-inset ring-transparent flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground">Roles</span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex w-full flex-col pb-6">
        <div className="flex w-full items-stretch gap-2.5 px-6 py-5">
          <div className="flex min-w-0 flex-1 flex-col items-start overflow-hidden rounded-xl border border-solid border-f1-border-secondary pb-3">
            <div className="flex w-full items-center justify-between py-3 pl-4 pr-3">
              <span className="truncate text-base font-medium text-f1-foreground">Total employees</span>
              <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Ask One about Total employees" role="button" data-state="closed">
                <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 !px-[4px] transition-colors [&_svg:not([data-has-color])]:text-f1-icon-bold">
                  <span className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-current">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <span className="sr-only">Ask One about Total employees</span>
                      {" "}
                    </div>
                  </span>
                </div>
              </button>
            </div>
            <div className="flex w-full items-start justify-between gap-3 px-4 pb-4">
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="truncate text-base text-f1-foreground-secondary">Total</span>
                <span className="whitespace-nowrap text-3xl font-semibold text-f1-foreground">2.714</span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="truncate text-base text-f1-foreground-secondary">Joiners</span>
                <span className="whitespace-nowrap text-3xl font-semibold text-f1-foreground">122</span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="truncate text-base text-f1-foreground-secondary">Leavers</span>
                <span className="whitespace-nowrap text-3xl font-semibold text-f1-foreground">37</span>
              </div>
            </div>
            <div className="w-full px-4 text-f1-icon-selected">
              <svg viewBox="0 0 300 40" className="block h-10 w-full" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="0.0,36.0 17.6,33.9 35.3,34.8 52.9,31.1 70.6,28.7 88.2,29.8 105.9,25.9 123.5,24.1 141.2,25.2 158.8,21.8 176.5,19.4 194.1,20.3 211.8,16.6 229.4,13.8 247.1,14.8 264.7,11.6 282.4,10.2 300.0,4.0 300,40 0,40" fill="currentColor" fillOpacity="0.12" stroke="none" />
                <polyline points="0.0,36.0 17.6,33.9 35.3,34.8 52.9,31.1 70.6,28.7 88.2,29.8 105.9,25.9 123.5,24.1 141.2,25.2 158.8,21.8 176.5,19.4 194.1,20.3 211.8,16.6 229.4,13.8 247.1,14.8 264.7,11.6 282.4,10.2 300.0,4.0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start overflow-hidden rounded-xl border border-solid border-f1-border-secondary pb-3">
            <div className="flex w-full items-center justify-between py-3 pl-4 pr-3">
              <span className="truncate text-base font-medium text-f1-foreground">Total employees</span>
            </div>
            <div className="flex w-full flex-1 flex-col justify-center gap-4 px-4 pb-4">
              <div className="flex w-full items-center gap-3 overflow-hidden rounded-md">
                <div className="flex size-8 shrink-0 items-center justify-center rounded border border-solid bg-f1-background-info border-f1-border-info text-f1-icon-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                    <path fill="currentColor" fillRule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM11.35 9.10001C11.35 9.45899 11.641 9.75001 12 9.75001C12.359 9.75001 12.65 9.45899 12.65 9.10001V9.00001C12.65 8.64102 12.359 8.35001 12 8.35001C11.641 8.35001 11.35 8.64102 11.35 9.00001V9.10001ZM11.35 15.1C11.35 15.459 11.641 15.75 12 15.75C12.359 15.75 12.65 15.459 12.65 15.1V12.1C12.65 11.741 12.359 11.45 12 11.45C11.641 11.45 11.35 11.741 11.35 12.1L11.35 15.1Z" clipRule="evenodd" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <span className="truncate text-base font-medium text-f1-foreground">Pending to accept</span>
                    <span className="truncate text-sm font-medium text-f1-foreground-tertiary">472 people</span>
                  </div>
                  <div className="shrink-0">
                    <div className="relative flex items-center" style={{ marginLeft: "4px" }}>
                      <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                        <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-4px" }}>
                          <div>
                            <div className="flex h-fit w-fit shrink-0 items-center justify-center" style={{ clipPath: "path(\"M 29 6.67055 C 27.1119 9.29683 26 12.5186 26 16 C 26 19.4814 27.1119 22.7032 29 25.3295 C 26.0958 29.3692 21.3551 32 16 32 C 7.16344 32 0 24.8366 0 16 C 0 7.16344 7.16344 0 16 0 C 21.3551 0 26.0958 2.63083 29 6.67055 Z\")" }}>
                              <div className="relative inline-flex h-fit w-fit">
                                <div className="relative h-fit w-fit">
                                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-8 rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                    <img className="aspect-square h-full w-full object-cover" alt="P." loading="lazy" src="https://i.pravatar.cc/120?u=pa-1" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-4px" }}>
                          <div>
                            <div className="flex h-fit w-fit shrink-0 items-center justify-center" style={{ clipPath: "path(\"M 29 6.67055 C 27.1119 9.29683 26 12.5186 26 16 C 26 19.4814 27.1119 22.7032 29 25.3295 C 26.0958 29.3692 21.3551 32 16 32 C 7.16344 32 0 24.8366 0 16 C 0 7.16344 7.16344 0 16 0 C 21.3551 0 26.0958 2.63083 29 6.67055 Z\")" }}>
                              <div className="relative inline-flex h-fit w-fit">
                                <div className="relative h-fit w-fit">
                                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-8 rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                    <img className="aspect-square h-full w-full object-cover" alt="P." loading="lazy" src="https://i.pravatar.cc/120?u=pa-2" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-4px" }}>
                          <div>
                            <div className="flex h-fit w-fit shrink-0 items-center justify-center">
                              <div className="relative inline-flex h-fit w-fit">
                                <div className="relative h-fit w-fit">
                                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-8 rounded-full bg-[hsl(theme(colors.lilac.50))]" role="img" aria-hidden="true" translate="no">
                                    <span translate="no" className="flex h-full w-full items-center justify-center text-f1-foreground-inverse/90 select-none" data-a11y-color-contrast-ignore="true">BR</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-fit w-fit items-center" style={{ marginLeft: "-4px" }}>
                          <div className="cursor-default transition hover:bg-f1-background-secondary-hover flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary h-8 min-w-8 rounded !rounded-full px-2">+467</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-3 overflow-hidden rounded-md">
                <div className="flex size-8 shrink-0 items-center justify-center rounded border border-solid bg-f1-background-warning border-f1-border-warning text-f1-icon-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                    <path fill="currentColor" fillRule="evenodd" d="M5.39903 19C3.87406 19 2.91012 17.3618 3.65071 16.0287L10.2517 4.14697C11.0137 2.77535 12.9863 2.77535 13.7483 4.14697L20.3493 16.0287C21.0899 17.3618 20.1259 19 18.601 19H5.39903ZM12 7.5C11.4345 7.5 10.9888 7.98166 11.0325 8.54549L11.3353 12.4456C11.3623 12.7927 11.6518 13.0607 12 13.0607C12.3482 13.0607 12.6377 12.7927 12.6647 12.4456L12.9675 8.54549C13.0112 7.98166 12.5655 7.5 12 7.5ZM12 16.4869C12.5523 16.4869 13 16.0391 13 15.4869C13 14.9346 12.5523 14.4869 12 14.4869C11.4477 14.4869 11 14.9346 11 15.4869C11 16.0391 11.4477 16.4869 12 16.4869Z" clipRule="evenodd" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <span className="truncate text-base font-medium text-f1-foreground">Uninvited</span>
                    <span className="truncate text-sm font-medium text-f1-foreground-tertiary">472 people</span>
                  </div>
                  <div className="shrink-0">
                    <div className="relative flex items-center" style={{ marginLeft: "4px" }}>
                      <div className="flex min-w-0 items-center justify-start whitespace-nowrap" data-testid="overflow-visible-container">
                        <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-4px" }}>
                          <div>
                            <div className="flex h-fit w-fit shrink-0 items-center justify-center" style={{ clipPath: "path(\"M 29 6.67055 C 27.1119 9.29683 26 12.5186 26 16 C 26 19.4814 27.1119 22.7032 29 25.3295 C 26.0958 29.3692 21.3551 32 16 32 C 7.16344 32 0 24.8366 0 16 C 0 7.16344 7.16344 0 16 0 C 21.3551 0 26.0958 2.63083 29 6.67055 Z\")" }}>
                              <div className="relative inline-flex h-fit w-fit">
                                <div className="relative h-fit w-fit">
                                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-8 rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                    <img className="aspect-square h-full w-full object-cover" alt="U." loading="lazy" src="https://i.pravatar.cc/120?u=un-1" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-4px" }}>
                          <div>
                            <div className="flex h-fit w-fit shrink-0 items-center justify-center" style={{ clipPath: "path(\"M 29 6.67055 C 27.1119 9.29683 26 12.5186 26 16 C 26 19.4814 27.1119 22.7032 29 25.3295 C 26.0958 29.3692 21.3551 32 16 32 C 7.16344 32 0 24.8366 0 16 C 0 7.16344 7.16344 0 16 0 C 21.3551 0 26.0958 2.63083 29 6.67055 Z\")" }}>
                              <div className="relative inline-flex h-fit w-fit">
                                <div className="relative h-fit w-fit">
                                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-8 rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                    <img className="aspect-square h-full w-full object-cover" alt="U." loading="lazy" src="https://i.pravatar.cc/120?u=un-2" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="transition-all duration-150" data-testid="overflow-visible-item" style={{ marginLeft: "-4px" }}>
                          <div>
                            <div className="flex h-fit w-fit shrink-0 items-center justify-center">
                              <div className="relative inline-flex h-fit w-fit">
                                <div className="relative h-fit w-fit">
                                  <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-8 rounded-full bg-[hsl(theme(colors.lilac.50))]" role="img" aria-hidden="true" translate="no">
                                    <span translate="no" className="flex h-full w-full items-center justify-center text-f1-foreground-inverse/90 select-none" data-a11y-color-contrast-ignore="true">BR</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-fit w-fit items-center" style={{ marginLeft: "-4px" }}>
                          <div className="cursor-default transition hover:bg-f1-background-secondary-hover flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary h-8 min-w-8 rounded !rounded-full px-2">+863</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4" style={{ width: "100%" }}>
          <div className="flex flex-row gap-4 px-4">
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 flex-1 gap-1">
                  <div className="flex items-center gap-2">
                    <button className="group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Filters" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
                      <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 transition-colors [&_svg:not([data-has-color])]:text-f1-icon">
                        <span className="flex min-w-0 flex-1 items-center justify-center">
                          <div className="flex min-w-0 flex-1 items-center justify-center gap-1 -ml-[3px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                              <path stroke="currentColor" d="M5.41496 6.65079C4.85896 6.00212 5.31987 5 6.17422 5H17.8258C18.6801 5 19.141 6.00212 18.585 6.65079L14.2407 11.7191C14.0854 11.9004 14 12.1312 14 12.3699V16.5C14 16.8148 13.8518 17.1111 13.6 17.3L11.6 18.8C10.9408 19.2944 10 18.824 10 18V12.3699C10 12.1312 9.91461 11.9004 9.75926 11.7191L5.41496 6.65079Z" vectorEffect="non-scaling-stroke" />
                            </svg>
                            <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-base" data-testid="one-ellipsis">Filters</span>
                            {" "}
                          </div>
                        </span>
                      </div>
                    </button>
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
                    <button className="group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Add person" role="button">
                      <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 transition-colors [&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold/80">
                        <span className="flex min-w-0 flex-1 items-center justify-center">
                          <div className="flex min-w-0 flex-1 items-center justify-center gap-1 -ml-[3px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                              <path fill="currentColor" fillRule="evenodd" d="M12.65 5.00001C12.65 4.64102 12.359 4.35001 12 4.35001C11.641 4.35001 11.35 4.64102 11.35 5.00001V11.35H5C4.64102 11.35 4.35 11.641 4.35 12C4.35 12.359 4.64102 12.65 5 12.65H11.35V19C11.35 19.359 11.641 19.65 12 19.65C12.359 19.65 12.65 19.359 12.65 19V12.65H19C19.359 12.65 19.65 12.359 19.65 12C19.65 11.641 19.359 11.35 19 11.35H12.65V5.00001Z" clipRule="evenodd" vectorEffect="non-scaling-stroke" />
                            </svg>
                            <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-base" data-testid="one-ellipsis">Add person</span>
                            {" "}
                          </div>
                        </span>
                      </div>
                    </button>
                    <button className="group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Export" role="button">
                      <div className="main flex min-w-0 flex-1 items-center justify-center gap-1 transition-colors [&_svg:not([data-has-color])]:text-f1-icon">
                        <span className="flex min-w-0 flex-1 items-center justify-center">
                          <div className="flex min-w-0 flex-1 items-center justify-center gap-1 -ml-[3px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14V5M12 5L9 8M12 5L15 8" vectorEffect="non-scaling-stroke" />
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15" vectorEffect="non-scaling-stroke" />
                            </svg>
                            <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-base" data-testid="one-ellipsis">Export</span>
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r4c:" aria-label="Select all" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background" aria-sort="none" style={{ left: "0px", right: "0px" }}>
                          <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                          <div className="flex items-center whitespace-nowrap gap-1">
                            <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Employee</span>
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
                        <th className="relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background" aria-sort="none" style={{ left: "0px", right: "0px" }}>
                          <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                          <div className="flex items-center whitespace-nowrap gap-1">
                            <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Workplace</span>
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
                        <th className="relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background" aria-sort="none" style={{ left: "0px", right: "0px" }}>
                          <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                          <div className="flex items-center whitespace-nowrap gap-1">
                            <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Hired</span>
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
                            <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Access status</span>
                          </div>
                        </th>
                        <th className="relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent group h-11 bg-f1-background" style={{ left: "0px", right: "0px" }}>
                          <div className="absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"></div>
                          <div className="flex items-center whitespace-nowrap">
                            <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Contract status</span>
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r4k:" aria-label="Select emp-001" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="A" loading="lazy" src="https://i.pravatar.cc/120?u=emp-001" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Ada Lovelace</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">7 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r4m:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r4p:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r4s:" aria-label="Select emp-002" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="M" loading="lazy" src="https://i.pravatar.cc/120?u=emp-002" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Marie Curie</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">6 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r4u:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r51:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r54:" aria-label="Select emp-003" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="A" loading="lazy" src="https://i.pravatar.cc/120?u=emp-003" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Alan Turing</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Madrid</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">5 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r56:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r59:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r5c:" aria-label="Select emp-004" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="G" loading="lazy" src="https://i.pravatar.cc/120?u=emp-004" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Grace Hopper</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">5 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Uninvited</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r5e:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r5h:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r5k:" aria-label="Select emp-005" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="L" loading="lazy" src="https://i.pravatar.cc/120?u=emp-005" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Lin Chen</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Remote — Singapore</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">4 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Ending soon</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r5m:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r5p:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r5s:" aria-label="Select emp-006" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="D" loading="lazy" src="https://i.pravatar.cc/120?u=emp-006" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Diego Hernández</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">3 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r5u:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r61:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r64:" aria-label="Select emp-007" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="P" loading="lazy" src="https://i.pravatar.cc/120?u=emp-007" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Priya Patel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">3 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Pending to accept</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r66:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r69:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r6c:" aria-label="Select emp-008" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="H" loading="lazy" src="https://i.pravatar.cc/120?u=emp-008" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Henrik Sørensen</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Remote — Copenhagen</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">6 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r6e:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r6h:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r6k:" aria-label="Select emp-009" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="C" loading="lazy" src="https://i.pravatar.cc/120?u=emp-009" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Chiara Romano</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Madrid</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">4 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r6m:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r6p:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r6s:" aria-label="Select emp-010" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="Y" loading="lazy" src="https://i.pravatar.cc/120?u=emp-010" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Yusuf Adeyemi</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">6 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r6u:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r71:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r74:" aria-label="Select emp-011" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="S" loading="lazy" src="https://i.pravatar.cc/120?u=emp-011" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Sofía Castillo</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">4 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Uninvited</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r76:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r79:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r7c:" aria-label="Select emp-012" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="M" loading="lazy" src="https://i.pravatar.cc/120?u=emp-012" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Marcus Lindberg</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Remote — Stockholm</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">3 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Ending soon</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r7e:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r7h:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r7k:" aria-label="Select emp-013" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="E" loading="lazy" src="https://i.pravatar.cc/120?u=emp-013" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Elena Voronova</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Madrid</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">3 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Pending to accept</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r7m:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r7p:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r7s:" aria-label="Select emp-014" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="B" loading="lazy" src="https://i.pravatar.cc/120?u=emp-014" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Ben Carter</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">5 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r7u:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r81:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r84:" aria-label="Select emp-015" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="H" loading="lazy" src="https://i.pravatar.cc/120?u=emp-015" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Hana Tanaka</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Remote — Tokyo</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">4 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Ending soon</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r86:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r89:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r8c:" aria-label="Select emp-016" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="L" loading="lazy" src="https://i.pravatar.cc/120?u=emp-016" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Lucía Fernández</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">5 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r8e:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r8h:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r8k:" aria-label="Select emp-017" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="O" loading="lazy" src="https://i.pravatar.cc/120?u=emp-017" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Olu Okonkwo</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
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
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Uninvited</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r8m:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r8p:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r8s:" aria-label="Select emp-018" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="K" loading="lazy" src="https://i.pravatar.cc/120?u=emp-018" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Klara Becker</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Berlin</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">4 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r8u:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r91:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r94:" aria-label="Select emp-019" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="A" loading="lazy" src="https://i.pravatar.cc/120?u=emp-019" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Aarav Singh</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Remote — Bangalore</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">2 years ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Pending to accept</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r96:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r99:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r9c:" aria-label="Select emp-020" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="N" loading="lazy" src="https://i.pravatar.cc/120?u=emp-020" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Noah Müller</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Madrid</span>
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
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Ending soon</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r9e:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r9h:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r9k:" aria-label="Select emp-101" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="N" loading="lazy" src="https://i.pravatar.cc/120?u=emp-101" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Nadia Haddad</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Barcelona</span>
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
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Pending to accept</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r9m:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:r9p:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":r9s:" aria-label="Select emp-102" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="T" loading="lazy" src="https://i.pravatar.cc/120?u=emp-102" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Tomás Ferreira</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Madrid</span>
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
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Uninvited</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:r9u:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:ra1:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":ra4:" aria-label="Select emp-103" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="I" loading="lazy" src="https://i.pravatar.cc/120?u=emp-103" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Ivy Nakamura</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Remote — Osaka</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">3 months ago</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Active</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">In progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:ra6:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:ra9:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id=":rac:" aria-label="Select emp-104" className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full peer font-medium">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <div className="flex min-w-0 flex-1 items-center gap-2 pt-[2px]">
                                  <div className="relative inline-flex h-fit w-fit">
                                    <div className="relative h-fit w-fit">
                                      <span data-a11y-color-contrast-ignore="true" className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-5 text-sm rounded-full bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" role="img" aria-hidden="true" translate="no">
                                        <img className="aspect-square h-full w-full object-cover" alt="S" loading="lazy" src="https://i.pravatar.cc/120?u=emp-104" />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="max-w-full overflow-hidden text-ellipsis block whitespace-nowrap min-w-0 flex-1 text-f1-foreground" data-testid="one-ellipsis">Samuel Boateng</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Bilbao</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Starts soon</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6 [&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 h-full">
                          <div className="[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1] [&:has([type=button])]:relative [&:has([type=button])]:z-[1] [&:has(a)]:relative [&:has(a)]:z-[1] pointer-events-none h-full items-start">
                            <div className="relative z-[1] h-full">
                              <div className="flex">
                                <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-f1-foreground pt-[2px]" data-testid="one-ellipsis">Uninvited</span>
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
                                      <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap" data-testid="one-ellipsis">Not started</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
                          <aside className="absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 transition-all group-hover:opacity-100 md:flex bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231] via-[#F5F6F8] via-60% dark:via-[#192231] to-transparent to-100% opacity-0">
                            <aside className="pointer-events-auto items-center justify-end gap-2 md:flex">
                              <div className="pointer-events-auto">
                                <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Actions" type="button" id="radix-:rae:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
                                  <button className="pointer-events-auto group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20 bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full" aria-busy="false" aria-label="Mobile Actions" type="button" id="radix-:rah:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-pressed="false" role="button">
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
    </div>
  )
}
