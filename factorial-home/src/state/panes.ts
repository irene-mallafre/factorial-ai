import { createStore } from '../lib/store'

/**
 * Left-hand "pane" windows (Comms conversations and Inbox tickets).
 * Panels ask for a pane to be toggled through `requestPane`; the Home page owns
 * the window stack and publishes the currently open keys so panels can show
 * their active state.
 */
const listeners = new Set<(key: string) => void>()

export function onPaneRequest(fn: (key: string) => void) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

export function requestPane(key: string) {
  listeners.forEach((fn) => fn(key))
}

const openStore = createStore<string[]>([])

export const useOpenPanes = () => openStore.use()

export function publishOpenPanes(keys: string[]) {
  const prev = openStore.get()
  if (prev.length === keys.length && prev.every((k, i) => k === keys[i])) return
  openStore.set(keys)
}

export const isTicketKey = (key: string) => key.startsWith('ticket:')
export const ticketIdFromKey = (key: string) => key.slice(7)
