export type Section = 'home' | 'comms' | 'inbox' | 'cal' | 'hub'

export type View = 'calendar' | 'people' | 'activity' | 'policies' | 'preferences'

export const VIEWS: View[] = ['calendar', 'people', 'activity', 'policies', 'preferences']

export const asView = (value: string | null): View | null => (VIEWS.includes(value as View) ? (value as View) : null)
