export default function MeetWithField() {
  return (
    <div className="flex h-8 w-full items-center gap-2 rounded-[10px] border border-solid border-f1-border-secondary bg-f1-background px-2.5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="aspect-square inline-block shrink-0 w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm text-f1-icon" data-has-color="true">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 16V16C8.60581 12.7243 13.3942 12.7243 15.5 16V16" vectorEffect="non-scaling-stroke" />
        <path stroke="currentColor" strokeLinecap="round" d="M16 16L19 19" vectorEffect="non-scaling-stroke" />
        <circle cx="11" cy="10.5" r="2.5" stroke="currentColor" vectorEffect="non-scaling-stroke" />
        <circle cx="11" cy="11" r="7" stroke="currentColor" vectorEffect="non-scaling-stroke" />
      </svg>
      <input aria-label="Search for people" placeholder="Search for people" className="min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-secondary" />
    </div>
  )
}
