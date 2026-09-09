export type ActivityStatus = 'scheduled' | 'running' | 'needs-you' | 'stalled' | 'done'

export type ActivityCategory = 'people' | 'time' | 'pay' | 'hiring' | 'operations' | 'misc'

/** Work categories, plus Miscellaneous for anything that is not connected to the job. */
export const CATEGORIES: { id: ActivityCategory; label: string; work: boolean }[] = [
  { id: 'people', label: 'People', work: true },
  { id: 'time', label: 'Time', work: true },
  { id: 'pay', label: 'Pay', work: true },
  { id: 'hiring', label: 'Hiring', work: true },
  { id: 'operations', label: 'Operations', work: true },
  { id: 'misc', label: 'Miscellaneous', work: false },
]

export type ActivityCard = {
  id: string
  /** What the system is doing, phrased without naming any agent. */
  body: string
  /** Optional call to action rendered as an outline button. */
  action?: string
  meta: [string, string]
  category: ActivityCategory
}

export type ActivityColumn = { id: ActivityStatus; label: string; count: number; cards: ActivityCard[] }

/** Activity board: everything the system is running, waiting on, blocked by or has finished. */
export const ACTIVITY_COLUMNS: ActivityColumn[] = [
  {
    id: 'scheduled',
    label: 'Scheduled',
    count: 26,
    cards: [
      { id: 'timesheet-close', category: 'time', body: 'Timesheet period close in 3 days. 218 timesheets in scope.', meta: ['Routine, monthly', 'Mar 31'] },
      { id: 'certification-expiry', category: 'operations', body: '4 forklift licences expiring within 60 days.', meta: ['Routine, weekly', 'Mon 07:00'] },
      { id: 'flights-china', category: 'misc', body: 'Send me flight offers to China every morning of my time off.', meta: ['Routine, daily 07:30', 'Jul 10–24'] },
      { id: 'social-security', category: 'misc', body: 'Look for new notifications in my Social Security inbox.', meta: ['Routine, weekly', 'Mon 09:00'] },
    ],
  },
  {
    id: 'running',
    label: 'Running',
    count: 4,
    cards: [
      { id: 'screening', category: 'hiring', body: 'Assessing 38 applicants for Warehouse Lead. 26 of 38 done.', meta: ['Started 09:12', '~8 min left'] },
      { id: 'expense-audit', category: 'pay', body: 'Auditing 52 expense claims against the T&E policy.', meta: ['Started 09:40', '~2 min left'] },
      { id: 'amazon-discounts', category: 'misc', body: 'Checking Amazon discounts on the 6 items in my wishlist.', meta: ['Started 09:45', '~1 min left'] },
    ],
  },
  {
    id: 'needs-you',
    label: 'Needs you',
    count: 6,
    cards: [
      { id: 'shift-gap', category: 'operations', body: 'Barcelona 08:00 shift: 1 of 4 gaps still uncovered.', action: 'Choose an option', meta: ['You', 'Expires 07:45'] },
      { id: 'flagged-claims', category: 'pay', body: '6 of 52 expense claims flagged: caps, receipts, 1 duplicate.', action: 'Review 6', meta: ['You', 'Payroll cut-off'] },
      { id: 'probation-end', category: 'people', body: 'M. Ruiz probation ends in 14 days. Renewal drafted.', action: 'Confirm or end', meta: ['You + HR', '2 nudges sent'] },
      { id: 'seur-label', category: 'misc', body: 'SEUR shipping label drafted for 2 packages. Pickup address needs confirming.', action: 'Confirm address', meta: ['You', 'Pickup tomorrow'] },
    ],
  },
  {
    id: 'stalled',
    label: 'Stalled',
    count: 2,
    cards: [
      { id: 'onboarding-blocked', category: 'people', body: 'Onboarding blocked 6 days: ID document never uploaded. 3 chases sent.', action: 'Escalate', meta: ['HR owner', 'Start in 3 days'] },
      { id: 'signature-failed', category: 'operations', body: 'Signature chase failed: e-signature connection refused. Retry from step 4.', action: 'Fix connection', meta: ['Admin', 'Failed 08:02'] },
    ],
  },
  {
    id: 'done',
    label: 'Done',
    count: 62,
    cards: [
      { id: 'time-off-approved', category: 'time', body: '23 time-off requests auto-approved, 1 exception routed.', meta: ['7 days', '~4h saved'] },
      { id: 'clock-in-nudges', category: 'time', body: '9 clock-in nudges sent, 7 resolved without a manager.', meta: ['7 days', '2 escalated'] },
      { id: 'flights-sent', category: 'misc', body: 'This morning\'s flight offers to China sent: 3 fares under €650.', meta: ['Today 07:30', 'Sent to you'] },
    ],
  },
]
