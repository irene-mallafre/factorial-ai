import { Icons } from '../../generated/icons.gen'
import { askAgent } from '../../state/agentPanel'
import { setPayslipSuggestion, useAgentSetup } from '../../state/agentSetup'
import type { Persona } from '../../state/persona'
import { BuddyMark } from '../agent/BuddyMark'
import { Button } from '../ui/Button'
import { Payslip } from '../widgets/Payslip'

type Task = { id: string; title: string; subtitle: string; action: string }

/** Tasks the buddy raises from the areas it watches. They need the person's input to complete. */
const WATCH_TASKS: Record<string, Task> = {
  'time-off': { id: 'time-off', title: 'Clear the 12 time-off requests', subtitle: 'All inside policy · no team left short · I can approve them', action: 'Approve all' },
  reviews: { id: 'reviews', title: "Sign off Marc's promotion", subtitle: '2 yrs as Mid · 3 reviews at 4.5+ · committee approved', action: 'Approve' },
  recruiting: { id: 'recruiting', title: "Send Lucía's offer", subtitle: 'Score 9.2/10 · 14 interviews done · inside the band', action: 'Send offer' },
  payroll: { id: 'payroll', title: 'Chase 4 missing timesheets', subtitle: 'Payroll closes in 3 days · reminders drafted', action: 'Send reminders' },
  onboarding: { id: 'onboarding', title: 'Unblock one new joiner', subtitle: 'ID document missing · 3 chases sent · escalate or wait?', action: 'Escalate' },
  roadmap: { id: 'roadmap', title: 'Two milestones slip into next sprint', subtitle: 'Payroll export and shifts planner · owners know', action: 'Open summary' },
  'one-on-ones': { id: 'one-on-ones', title: 'Prep 1:1 with Marta', subtitle: 'Tomorrow · 3 topics gathered', action: 'Open notes' },
}

const EMPLOYEE_TASKS: Task[] = [
  { id: 'e-timeoff', title: 'Plan your 9 remaining days off', subtitle: 'Two long weekends fit around the team calendar in October', action: 'See options' },
  { id: 'e-shift', title: "Answer Pablo's Saturday swap", subtitle: 'You would work Friday 14:00–22:00 instead', action: 'Decide' },
]

/** Rows appended to the Needs-you list, in its exact card style, marked with the buddy's mark. */
export function BuddyTasks({ persona }: { persona: Persona }) {
  const setup = useAgentSetup()
  if (!setup.completed) return null
  const tasks = persona === 'employee' ? EMPLOYEE_TASKS : setup.watch.map((w) => WATCH_TASKS[w]).filter(Boolean)
  return (
    <>
      {tasks.map((t) => (
        <div key={t.id} className="f0c-row-slot">
          <div className="overflow-hidden pb-2">
            <div
              className="f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary f0c-card-in"
              onClick={() => askAgent(`${t.action}: ${t.title}`)}
            >
              <span className="flex" title={`Raised by ${setup.name}`}>
                <BuddyMark size="sm" />
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="shrink-0 text-base font-medium text-f1-foreground">{t.title}</span>
                <span className="min-w-0 max-w-[400px] flex-1 truncate text-base text-f1-foreground-secondary">{t.subtitle}</span>
              </span>
              <Button
                variant="ghost"
                size="sm"
                icon={Icons.NextWeek}
                hideLabel
                label={`Open "${t.title}"`}
                onClick={(e) => {
                  e.stopPropagation()
                  askAgent(`${t.action}: ${t.title}`)
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

/** One suggestion from the buddy: add the payroll widget, previewed inside the card. */
export function PayslipSuggestion({ onAdd }: { onAdd: () => void }) {
  const setup = useAgentSetup()
  if (!setup.completed || setup.payslipSuggestion !== 'pending') return null
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full items-center justify-between gap-2">
        <p className="text-base text-f1-foreground font-medium text-left">Suggested by {setup.name}</p>
      </div>
      <div className="f0c-suggest-card">
        <div className="flex items-start gap-2">
          <span className="flex pt-0.5">
            <BuddyMark size="sm" />
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <span className="text-base font-medium text-f1-foreground">Hey, I see that you check your payroll every day. Add it to your homepage.</span>
            <span className="text-base text-f1-foreground-secondary">It sits next to Clock in, and I'll flag anything unusual before payday.</span>
          </div>
        </div>
        <div className="f0c-suggest-preview" aria-hidden="true">
          <div className="f0c-suggest-window">
            <div className="flex shrink-0 items-center justify-between py-1.5 pl-3 pr-1.5">
              <span className="truncate text-base font-medium text-f1-foreground">Payslip</span>
            </div>
            <Payslip />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="sm"
            label="Add to my Home"
            onClick={() => {
              onAdd()
              setPayslipSuggestion('added')
            }}
          />
          <Button variant="ghost" size="sm" label="Not now" onClick={() => setPayslipSuggestion('dismissed')} />
        </div>
      </div>
    </div>
  )
}
