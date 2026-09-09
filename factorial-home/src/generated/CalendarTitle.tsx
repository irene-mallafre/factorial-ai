export default function CalendarTitle() {
  return (
    <span className="flex min-w-0 items-center gap-2">
      <div className="relative flex shrink-0 items-center justify-center h-5 w-5" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="absolute h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient-91a1x80q1zv" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF355E" />
              <stop offset="44%" stopColor="#FF355E" />
              <stop offset="100%" stopColor="#D62D4F" />
            </linearGradient>
          </defs>
          <path d="M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0" fill="url(#gradient-91a1x80q1zv)" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="relative text-f1-foreground-inverse drop-shadow h-[14px] w-[14px]">
          <path fill="currentColor" fillRule="evenodd" d="M10 4.00002C10 3.44773 9.55228 3.00002 9 3.00002C8.44772 3.00002 8 3.44773 8 4.00002V5.00002H7.5C5.567 5.00002 4 6.56702 4 8.50002V11V17.5C4 19.433 5.567 21 7.5 21H16.5C18.433 21 20 19.433 20 17.5V11V8.50002C20 6.56702 18.433 5.00002 16.5 5.00002H16V4.00002C16 3.44773 15.5523 3.00002 15 3.00002C14.4477 3.00002 14 3.44773 14 4.00002V5.00002H10V4.00002ZM7.6 10H16.4C16.9601 10 17.2401 10 17.454 10.109C17.6422 10.2049 17.7951 10.3579 17.891 10.546C18 10.7599 18 11.04 18 11.6V15.8C18 16.9201 18 17.4802 17.782 17.908C17.5903 18.2843 17.2843 18.5903 16.908 18.782C16.4802 19 15.9201 19 14.8 19H9.2C8.0799 19 7.51984 19 7.09202 18.782C6.71569 18.5903 6.40973 18.2843 6.21799 17.908C6 17.4802 6 16.9201 6 15.8V11.6C6 11.04 6 10.7599 6.10899 10.546C6.20487 10.3579 6.35785 10.2049 6.54601 10.109C6.75992 10 7.03995 10 7.6 10Z" clipRule="evenodd" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <span className="truncate text-base font-medium text-f1-foreground">June 2026</span>
    </span>
  )
}
