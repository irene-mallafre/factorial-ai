export default function EventsWidget() {
  return (
    <div className="flex flex-col gap-1 p-3">
      <div className="flex items-center gap-3 rounded-[10px] py-2 pl-2 pr-1 hover:bg-f1-background-secondary">
        <span className="h-9 w-1 shrink-0 rounded-full" style={{ backgroundColor: "rgb(229, 25, 67)" }}></span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-base font-medium text-f1-foreground">Sarah's birthday</span>
          <span className="truncate text-base text-f1-foreground-secondary">Turns 30 🎉</span>
        </div>
        <span className="flex w-9 shrink-0 flex-col items-center rounded-md border border-solid border-f1-border-secondary bg-f1-background py-0.5">
          <span className="text-sm font-medium text-f1-foreground-critical">JUL</span>
          <span className="text-base font-semibold text-f1-foreground">24</span>
        </span>
      </div>
      <div className="flex items-center gap-3 rounded-[10px] py-2 pl-2 pr-1 hover:bg-f1-background-secondary">
        <span className="h-9 w-1 shrink-0 rounded-full" style={{ backgroundColor: "rgb(12, 165, 127)" }}></span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-base font-medium text-f1-foreground">Company holiday</span>
          <span className="truncate text-base text-f1-foreground-secondary">2 days off</span>
        </div>
        <span className="flex w-9 shrink-0 flex-col items-center rounded-md border border-solid border-f1-border-secondary bg-f1-background py-0.5">
          <span className="text-sm font-medium text-f1-foreground-critical">JUL</span>
          <span className="text-base font-semibold text-f1-foreground">30</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs text-f1-icon-secondary" data-has-color="true">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className="flex w-9 shrink-0 flex-col items-center rounded-md border border-solid border-f1-border-secondary bg-f1-background py-0.5">
          <span className="text-sm font-medium text-f1-foreground-critical">JUL</span>
          <span className="text-base font-semibold text-f1-foreground">31</span>
        </span>
      </div>
      <div className="flex items-center gap-3 rounded-[10px] py-2 pl-2 pr-1 hover:bg-f1-background-secondary">
        <span className="h-9 w-1 shrink-0 rounded-full" style={{ backgroundColor: "rgb(245, 165, 28)" }}></span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-base font-medium text-f1-foreground">Team offsite</span>
          <span className="truncate text-base text-f1-foreground-secondary">Costa Brava · not confirmed</span>
        </div>
        <span className="flex w-9 shrink-0 flex-col items-center rounded-md border border-solid border-f1-border-secondary bg-f1-background py-0.5">
          <span className="text-sm font-medium text-f1-foreground-critical">AUG</span>
          <span className="text-base font-semibold text-f1-foreground">3</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs text-f1-icon-secondary" data-has-color="true">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 6L15 12" vectorEffect="non-scaling-stroke" />
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18L15 12" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className="flex w-9 shrink-0 flex-col items-center rounded-md border border-solid border-f1-border-secondary bg-f1-background py-0.5">
          <span className="text-sm font-medium text-f1-foreground-critical">AUG</span>
          <span className="text-base font-semibold text-f1-foreground">4</span>
        </span>
      </div>
      <div className="flex items-center gap-3 rounded-[10px] py-2 pl-2 pr-1 hover:bg-f1-background-secondary">
        <span className="h-9 w-1 shrink-0 rounded-full" style={{ backgroundColor: "rgb(85, 150, 246)" }}></span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-base font-medium text-f1-foreground">Monthly all-hands</span>
          <span className="truncate text-base text-f1-foreground-secondary">Q3 roadmap update</span>
        </div>
        <span className="flex w-9 shrink-0 flex-col items-center rounded-md border border-solid border-f1-border-secondary bg-f1-background py-0.5">
          <span className="text-sm font-medium text-f1-foreground-critical">AUG</span>
          <span className="text-base font-semibold text-f1-foreground">7</span>
        </span>
      </div>
    </div>
  )
}
