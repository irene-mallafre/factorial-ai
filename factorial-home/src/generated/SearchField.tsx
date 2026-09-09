export default function SearchField() {
  return (
    <div className="px-3">
      <button className="mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1" type="button">
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md text-current">
            <path stroke="currentColor" strokeLinecap="round" d="M16 16L19 19" vectorEffect="non-scaling-stroke" />
            <rect width="14" height="14" x="4" y="4" stroke="currentColor" rx="7" vectorEffect="non-scaling-stroke" />
          </svg>
          <span>Search…</span>
        </div>
        <div className="hidden xs:block">
          <div className="flex flex-wrap items-center gap-0.5">
            <span className="sr-only">Shortcut</span>
            <kbd className="flex h-5 items-center justify-center rounded-xs border border-solid py-0.5 font-sans text-sm font-semibold leading-none border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary min-w-5 px-1">⌘</kbd>
            <kbd className="flex h-5 items-center justify-center rounded-xs border border-solid py-0.5 font-sans text-sm font-semibold leading-none border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary uppercase min-w-5 px-1">k</kbd>
          </div>
        </div>
      </button>
    </div>
  )
}
