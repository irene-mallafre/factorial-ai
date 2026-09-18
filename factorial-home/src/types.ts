export type Section = 'home' | 'comms' | 'inbox' | 'cal' | 'hub'

export type View = 'calendar' | 'people' | 'activity' | 'policies' | 'preferences' | `tool:${string}`

export const VIEWS: View[] = ['calendar', 'people', 'activity', 'policies', 'preferences']

/** Tools open as `tool:<slug>` views. */

export const asView = (value: string | null): View | null => (value && (VIEWS.includes(value as View) || /^tool:[a-z0-9-]+$/.test(value)) ? (value as View) : null)
