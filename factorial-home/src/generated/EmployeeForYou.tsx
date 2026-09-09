export default function EmployeeForYou() {
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center justify-between gap-2">
          <p className="text-base text-f1-foreground font-medium text-left">For you</p>
          <button className="f0c-ease-hover shrink-0 cursor-pointer text-base font-medium leading-5 text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground">View all (35)</button>
        </div>
        <div className="flex w-full flex-col gap-2">
          <button className="f0c-pressable flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 text-left hover:bg-f1-background-secondary" aria-label="Sign your contract addendum">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 16H10" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="flex min-w-0 flex-1 items-center gap-2">
              <span className="shrink-0 text-base font-medium text-f1-foreground">Sign your contract addendum</span>
              <span className="min-w-0 flex-1 truncate text-base text-f1-foreground-secondary">due Friday</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
            </svg>
          </button>
          <button className="f0c-pressable flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 text-left hover:bg-f1-background-secondary" aria-label="Pablo proposes changing your Saturday shift">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 9V7C10 5.89543 10.8954 5 12 5H17C18.1046 5 19 5.89543 19 7V12.7929C19 13.2383 18.4614 13.4614 18.1464 13.1464L17 12H16.5" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="flex min-w-0 flex-1 items-center gap-2">
              <span className="shrink-0 text-base font-medium text-f1-foreground">Pablo proposes changing your Saturday shift</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center justify-between gap-2">
          <p className="text-base text-f1-foreground font-medium text-left">Quick actions</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
          <button className="f0c-pressable flex cursor-pointer flex-col items-start gap-3 rounded-[10px] bg-f1-background-tertiary p-3 text-left hover:bg-f1-background-secondary" aria-label="Request time off">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
              <path stroke="currentColor" strokeLinecap="round" d="M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" d="M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" d="M8 19H16M13.5 13L14 19M10.5 13L10 19" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="truncate text-base font-medium text-f1-foreground">Request time off</span>
          </button>
          <button className="f0c-pressable flex cursor-pointer flex-col items-start gap-3 rounded-[10px] bg-f1-background-tertiary p-3 text-left hover:bg-f1-background-secondary" aria-label="View my payslip">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" d="M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" d="M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" d="M11.5 7V6" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" d="M11.5 14V13" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="truncate text-base font-medium text-f1-foreground">View my payslip</span>
          </button>
          <button className="f0c-pressable flex cursor-pointer flex-col items-start gap-3 rounded-[10px] bg-f1-background-tertiary p-3 text-left hover:bg-f1-background-secondary" aria-label="My shift">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
              <path stroke="currentColor" strokeLinecap="round" d="M10.5 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V9" vectorEffect="non-scaling-stroke" />
              <circle cx="17.5" cy="15.5" r="4.5" stroke="currentColor" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" d="M17.5 14V15.054C17.5 15.3326 17.6393 15.5928 17.8711 15.7474L19 16.5" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 10L11 10" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 14H9" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="truncate text-base font-medium text-f1-foreground">My shift</span>
          </button>
          <button className="f0c-pressable flex cursor-pointer flex-col items-start gap-3 rounded-[10px] bg-f1-background-tertiary p-3 text-left hover:bg-f1-background-secondary" aria-label="Submit an expense">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-f1-icon-secondary" data-has-color="true">
              <path stroke="currentColor" strokeLinejoin="round" d="M4 7V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16V12C20 10.3431 18.6569 9 17 9H16" vectorEffect="non-scaling-stroke" />
              <path stroke="currentColor" strokeLinejoin="round" d="M6 5H15C16.1046 5 17 5.89543 17 7V9H6C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5Z" vectorEffect="non-scaling-stroke" />
              <circle cx="16.25" cy="13.75" r="1.25" fill="currentColor" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="truncate text-base font-medium text-f1-foreground">Submit an expense</span>
          </button>
        </div>
      </div>
    </>
  )
}
