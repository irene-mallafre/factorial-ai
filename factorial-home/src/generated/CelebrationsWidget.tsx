export default function CelebrationsWidget() {
  return (
    <div className="relative">
      <div className="home-window-scroll flex gap-3 overflow-x-auto px-3 pb-3 pt-1">
        <div className="flex w-[190px] shrink-0 flex-col overflow-hidden rounded-2xl border border-solid border-f1-border-secondary bg-f1-background">
          <div className="p-1">
            <div className="flex h-[120px] w-full items-center justify-center overflow-hidden rounded-xl" style={{ backgroundColor: "rgba(80, 116, 136, 0.3)" }}>
              <img src="https://i.pravatar.cc/120?u=leslie" alt="" className="size-20 rounded-full border-4 border-solid border-f1-background object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-2 p-3">
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-base font-medium text-f1-foreground">Leslie Alexander</span>
              <span className="flex items-center gap-1 text-base text-f1-foreground-secondary">Birthday<span className="text-[16px] leading-none">🎂</span></span>
            </div>
            <span className="flex size-10 shrink-0 flex-col items-center justify-center rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary">
              <span className="text-[10px] font-semibold uppercase leading-[10px] text-f1-special-highlight">JUL</span>
              <span className="text-lg font-medium text-f1-foreground">10</span>
            </span>
          </div>
        </div>
        <div className="flex w-[190px] shrink-0 flex-col overflow-hidden rounded-2xl border border-solid border-f1-border-secondary bg-f1-background">
          <div className="p-1">
            <div className="flex h-[120px] w-full items-center justify-center overflow-hidden rounded-xl" style={{ backgroundColor: "rgba(125, 58, 50, 0.3)" }}>
              <img src="https://i.pravatar.cc/120?u=bessie" alt="" className="size-20 rounded-full border-4 border-solid border-f1-background object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-2 p-3">
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-base font-medium text-f1-foreground">Bessie Cooper</span>
              <span className="flex items-center gap-1 text-base text-f1-foreground-secondary">First day<span className="text-[16px] leading-none">💼</span></span>
            </div>
            <span className="flex size-10 shrink-0 flex-col items-center justify-center rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary">
              <span className="text-[10px] font-semibold uppercase leading-[10px] text-f1-special-highlight">JUL</span>
              <span className="text-lg font-medium text-f1-foreground">10</span>
            </span>
          </div>
        </div>
        <div className="flex w-[190px] shrink-0 flex-col overflow-hidden rounded-2xl border border-solid border-f1-border-secondary bg-f1-background">
          <div className="p-1">
            <div className="flex h-[120px] w-full items-center justify-center overflow-hidden rounded-xl" style={{ backgroundColor: "rgba(196, 158, 44, 0.3)" }}>
              <img src="https://i.pravatar.cc/120?u=esther" alt="" className="size-20 rounded-full border-4 border-solid border-f1-background object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-2 p-3">
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-base font-medium text-f1-foreground">Esther Howard</span>
              <span className="flex items-center gap-1 text-base text-f1-foreground-secondary">First day<span className="text-[16px] leading-none">💼</span></span>
            </div>
            <span className="flex size-10 shrink-0 flex-col items-center justify-center rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary">
              <span className="text-[10px] font-semibold uppercase leading-[10px] text-f1-special-highlight">JUL</span>
              <span className="text-lg font-medium text-f1-foreground">10</span>
            </span>
          </div>
        </div>
      </div>
      <button aria-label="Show more celebrations" className="f0c-pressable absolute right-2 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-solid border-f1-border-secondary bg-f1-background shadow-[0_2px_6px_-1px_rgba(13,22,37,0.08)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-f1-icon" data-has-color="true">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 6L19 12L13 18" vectorEffect="non-scaling-stroke" />
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 12H18.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </button>
    </div>
  )
}
