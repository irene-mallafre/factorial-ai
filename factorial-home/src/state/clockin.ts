import { createStore } from '../lib/store'

const clockStore = createStore<{ clockedInAt: number | null }>({ clockedInAt: null })

export const useClock = () => clockStore.use()

export function toggleClock() {
  clockStore.set({ clockedInAt: clockStore.get().clockedInAt ? null : Date.now() })
}

/** True while the user has not clocked in yet (drives the "pending" dot). */
export function useClockPending() {
  return useClock().clockedInAt === null
}
