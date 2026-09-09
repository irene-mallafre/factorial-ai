export type ConversationStatus = 'running' | 'needs-you' | 'done'

export type MockConversation = {
  id: string
  kind: 'chat' | 'task'
  title: string
  status: ConversationStatus
  when: string
  ongoing: boolean
  thread: { role: 'user' | 'agent'; text: string }[]
}

/** Mocked history for the "Chats and tasks" section of the Home panel. */
export const CONVERSATIONS: MockConversation[] = [
  {
    id: 'q2-bonus-review',
    kind: 'task',
    title: 'Q2 bonus list review',
    status: 'running',
    when: 'Running · 3 min',
    ongoing: true,
    thread: [
      { role: 'user', text: 'Check the Q2 bonus list against the February formula before I send it.' },
      { role: 'agent', text: 'On it. 14 people, €34,200 in total. So far 11 amounts match the formula exactly; I am re-checking the three that include prorated joiners. About two minutes left.' },
    ],
  },
  {
    id: 'shift-gap-options',
    kind: 'chat',
    title: 'Barcelona shift gap options',
    status: 'needs-you',
    when: 'Waiting for you',
    ongoing: true,
    thread: [
      { role: 'user', text: 'Who can cover the Barcelona 08:00 shift on Saturday?' },
      { role: 'agent', text: 'Three options: move Diego from the 10:00 shift (no overtime), offer it to Nuria as an extra shift (+€48), or leave it uncovered and flag the store. Which one should I take?' },
    ],
  },
  {
    id: 'welcome-note',
    kind: 'chat',
    title: 'Welcome note for new joiners',
    status: 'done',
    when: 'Today, 09:20',
    ongoing: true,
    thread: [
      { role: 'user', text: 'Draft a welcome note for the nine people joining this week.' },
      { role: 'agent', text: '"Welcome aboard! We\'re thrilled to have you at Factorial. Your buddy will reach out today, and everything you need for week one is already in your Home. See you at Thursday\'s all-hands."\n\nSaved to Factorial Documents › Work buddy / Drafts. Want me to post it in #new-joiners?' },
    ],
  },
  {
    id: 'headcount-by-team',
    kind: 'chat',
    title: 'Headcount by team, last 12 months',
    status: 'done',
    when: 'Yesterday',
    ongoing: false,
    thread: [
      { role: 'user', text: 'Show me headcount by team for the last 12 months.' },
      { role: 'agent', text: 'Total headcount went from 2,498 to 2,714 (+8.6%). Engineering +61, Sales +48, Support +19, Ops +12; Finance and Legal are flat. I saved the chart to Factorial Documents › Work buddy / Drafts.' },
    ],
  },
  {
    id: 'time-off-batch',
    kind: 'task',
    title: 'Approve time-off batch (12)',
    status: 'done',
    when: 'Yesterday',
    ongoing: false,
    thread: [
      { role: 'user', text: 'Approve the 12 pending time-off requests if they are within policy.' },
      { role: 'agent', text: 'Done. All 12 were inside allowance and none left a team short, so I approved them and notified each person. Nothing was escalated.' },
    ],
  },
  {
    id: 'onboarding-checklist',
    kind: 'chat',
    title: 'Onboarding checklist for Sales',
    status: 'done',
    when: 'Last week',
    ongoing: false,
    thread: [
      { role: 'user', text: 'Put together an onboarding checklist for new Sales hires.' },
      { role: 'agent', text: 'Here is a 14-item checklist across week one, month one and quarter one, based on the existing Sales handbook. It is saved in Factorial Documents › Onboarding, and I set it as the template for the Sales team.' },
    ],
  },
]

export const CONVERSATION_BY_ID = Object.fromEntries(CONVERSATIONS.map((c) => [c.id, c])) as Record<string, MockConversation>
