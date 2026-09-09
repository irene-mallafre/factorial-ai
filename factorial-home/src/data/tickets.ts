import type { Persona } from '../state/persona'

export type InboxItem = { id: string; title: string; meta: string }

/** Manager "Needs you" tasks, which double as the admin inbox. */
export const ADMIN_TASKS: InboxItem[] = [
  { id: 'time-off-batch', title: 'Approve 12 time off requests', meta: 'All within policy · Jun–Jul · no team conflicts' },
  { id: 'recruitment-pick', title: 'Pick Lucia for Senior Designer', meta: 'Score 9.2 / 10 · within band · 14 interviews done' },
  { id: 'contract-renewals', title: 'Confirm 4 contract renewals', meta: 'All within standard policy and budget · already drafted' },
  { id: 'promotion-marc', title: "Approve Marc's promotion to Senior", meta: '2 yrs as Mid · 3 reviews at 4.5+/5 · committee approved' },
  { id: 'q2-bonus', title: 'Send Q2 bonus list — €34,200 across 14 people', meta: 'Aligned with February formula · within €35k cap' },
  { id: 'workshop-budget', title: 'Approve €890 design team workshop', meta: 'Within Q2 L&D budget · requested by Marta' },
]

export const EMPLOYEE_ITEMS: InboxItem[] = [
  { id: 'contract-addendum', title: 'Sign your contract addendum', meta: 'due Friday' },
  { id: 'shift-swap', title: 'Pablo proposes changing your Saturday shift', meta: '' },
]

export const inboxItems = (persona: Persona) => (persona === 'employee' ? EMPLOYEE_ITEMS : ADMIN_TASKS)

export const ticketTitle = (id: string) => [...ADMIN_TASKS, ...EMPLOYEE_ITEMS].find((t) => t.id === id)?.title ?? 'Ticket'
