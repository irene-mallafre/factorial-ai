export default function PeopleTitle() {
  return (
    <span className="flex min-w-0 items-center gap-2">
      <div className="relative flex shrink-0 items-center justify-center h-5 w-5" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="absolute h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient-5v31rkudomr" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF355E" />
              <stop offset="44%" stopColor="#FF355E" />
              <stop offset="100%" stopColor="#D62D4F" />
            </linearGradient>
          </defs>
          <path d="M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0" fill="url(#gradient-5v31rkudomr)" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="relative text-f1-foreground-inverse drop-shadow h-[14px] w-[14px]">
          <path fill="currentColor" d="M14.5057 8.98926C14.5057 9.63685 14.3816 10.2554 14.1559 10.8226C14.6351 11.0802 15.1831 11.2264 15.7653 11.2264C17.6448 11.2264 19.1685 9.70275 19.1685 7.82322C19.1685 5.94368 17.6448 4.42001 15.7653 4.42001C14.7299 4.42001 13.8025 4.88238 13.1783 5.61189C14.0019 6.49743 14.5057 7.68452 14.5057 8.98926Z" vectorEffect="non-scaling-stroke" />
          <path fill="currentColor" d="M12.2195 13.8136C13.2481 13.1931 14.4499 12.7394 15.7651 12.7394C17.9382 12.7394 19.8016 13.9779 21.0858 15.1608C21.9744 15.9793 21.3315 17.277 20.1235 17.277H16.9326C16.7951 16.947 16.5797 16.6344 16.2824 16.3606C15.2703 15.4283 13.8827 14.3963 12.2195 13.8136Z" vectorEffect="non-scaling-stroke" />
          <path fill="currentColor" d="M13.3564 8.98914C13.3564 11.0939 11.6502 12.8001 9.54543 12.8001C7.44069 12.8001 5.73445 11.0939 5.73445 8.98914C5.73445 6.88439 7.44069 5.17816 9.54543 5.17816C11.6502 5.17816 13.3564 6.88439 13.3564 8.98914Z" vectorEffect="non-scaling-stroke" />
          <path fill="currentColor" d="M9.54543 14.4942C7.11198 14.4942 5.02527 15.8811 3.58718 17.2057C2.59216 18.1223 3.31206 19.5755 4.66487 19.5755H14.426C15.7788 19.5755 16.4987 18.1223 15.5037 17.2057C14.0656 15.8811 11.9789 14.4942 9.54543 14.4942Z" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <span className="truncate text-base font-medium text-f1-foreground">Organization</span>
    </span>
  )
}
