export default function PoliciesTitle() {
  return (
    <span className="flex min-w-0 items-center gap-2">
      <div className="relative flex shrink-0 items-center justify-center h-5 w-5" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="absolute h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient-4f3zbg8wr2k" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF355E" />
              <stop offset="44%" stopColor="#FF355E" />
              <stop offset="100%" stopColor="#D62D4F" />
            </linearGradient>
          </defs>
          <path d="M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0" fill="url(#gradient-4f3zbg8wr2k)" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="relative text-f1-foreground-inverse drop-shadow h-[14px] w-[14px]">
          <path fill="currentColor" d="M5.7 3.85001C4.20883 3.85001 3 5.05884 3 6.55001V15.55C3 17.5382 4.61178 19.15 6.6 19.15H17.4C19.3882 19.15 21 17.5382 21 15.55V10.15C21 8.16178 19.3882 6.55001 17.4 6.55001H13.1571C13.0151 6.55001 12.9 6.43488 12.9 6.29286C12.9 4.94371 11.8063 3.85001 10.4571 3.85001H5.7Z" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <span className="truncate text-base font-medium text-f1-foreground">Policies</span>
    </span>
  )
}
