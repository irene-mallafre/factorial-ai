/** Routines and reports the buddy creates by default once it is set up. */
export type BuddyItem = { id: string; label: string; meta: string; active: boolean }

export const DEFAULT_ROUTINES: BuddyItem[] = [
  { id: 'morning-brief', label: 'Morning brief', meta: 'Weekdays · 08:30', active: true },
  { id: 'time-off-sweep', label: 'Time-off sweep', meta: 'Daily · approves within policy', active: true },
]

export const DEFAULT_REPORTS: BuddyItem[] = [
  { id: 'team-pulse', label: 'Weekly team pulse', meta: 'Mondays · absences, reviews, hiring', active: true },
  { id: 'hiring-pipeline', label: 'Hiring pipeline', meta: 'Fridays · open roles and stages', active: true },
]
