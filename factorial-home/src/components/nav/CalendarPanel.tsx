import { Fragment, useState } from 'react'
import MeetWithField from '../../generated/MeetWithField'
import { Icons } from '../../generated/icons.gen'
import { Button } from '../ui/Button'
import { Checkbox } from '../ui/Checkbox'
import { PanelItem } from './PanelItem'
import { CollapsibleSection } from './PanelSection'

const MONTH_START = new Date(Date.UTC(2026, 5, 1))
const DEFAULT_DAY_OFFSET = 3
const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
/** Days of the month that carry an event in the week view. */
const EVENT_DAYS = [1, 2, 3, 4, 5]
const WORKPLACES = ['Barcelona', 'Bilbao', 'Madrid']
const ABSENCE_FILTERS = ['Current employees', 'My direct reports', 'Employees whose time off I manage', 'Out of office', 'Out this month']

function isoWeek(date: Date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 864e5 + 1) / 7)
}

function monthGrid(month: Date) {
  const first = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth(), 1))
  const start = new Date(first)
  start.setUTCDate(first.getUTCDate() - ((first.getUTCDay() + 6) % 7))
  return Array.from({ length: 6 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const day = new Date(start)
      day.setUTCDate(start.getUTCDate() + w * 7 + d)
      return day
    }),
  )
}

function MiniCalendar() {
  const [selected, setSelected] = useState(() => MONTH_START.getUTCDate() + DEFAULT_DAY_OFFSET)
  const weeks = monthGrid(MONTH_START)
  const month = MONTH_START.getUTCMonth()
  return (
    <div className="flex flex-col gap-2 px-3 pb-3 pt-1">
      <div className="flex items-center justify-end gap-1.5">
        <Button variant="outline" size="sm" icon={Icons.PreviousMonth} hideLabel label="Previous month" />
        <Button variant="outline" size="sm" icon={Icons.NextMonth} hideLabel label="Next month" />
      </div>
      <div className="grid grid-cols-[24px_repeat(7,1fr)] gap-y-1.5">
        <span></span>
        {WEEKDAYS.map((d) => (
          <span key={d} className="text-center text-sm text-f1-foreground-secondary">
            {d}
          </span>
        ))}
        {weeks.map((week) => (
          <Fragment key={week[0].toISOString()}>
            <span className="self-center text-center text-sm text-f1-foreground-tertiary">{isoWeek(week[0])}</span>
            {week.map((day) => {
              const n = day.getUTCDate()
              const inMonth = day.getUTCMonth() === month
              const isSelected = inMonth && n === selected
              const hasEvent = inMonth && EVENT_DAYS.includes(n)
              return (
                <button
                  key={day.toISOString()}
                  onClick={() => inMonth && setSelected(n)}
                  aria-label={day.toISOString().slice(0, 10)}
                  aria-current={isSelected ? 'date' : undefined}
                  disabled={!inMonth}
                  className={`relative mx-auto flex size-8 items-center justify-center rounded-sm text-sm ${
                    isSelected
                      ? 'f0c-pressable cursor-pointer bg-f1-background-selected-bold font-medium text-f1-foreground-inverse'
                      : inMonth
                        ? 'f0c-pressable cursor-pointer text-f1-foreground hover:bg-f1-background-secondary'
                        : 'text-f1-foreground-tertiary'
                  }`}
                >
                  {n}
                  {hasEvent && !isSelected && <span className="absolute bottom-0.5 h-0.5 w-2 rounded-full bg-f1-background-selected-bold"></span>}
                </button>
              )
            })}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function AbsenceFilter({ label }: { label: string }) {
  const [checked, setChecked] = useState(false)
  return (
    <label className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] py-1.5 pl-1.5 pr-2 hover:bg-f1-background-secondary">
      <Checkbox checked={checked} onCheckedChange={setChecked} title={label} />
      <span className="min-w-0 flex-1 truncate text-base font-medium text-f1-foreground">{label}</span>
    </label>
  )
}

export function CalendarPanel() {
  return (
    <div className="flex flex-col">
      <MiniCalendar />
      <div className="flex flex-col gap-3 px-3 pb-1.5">
        <CollapsibleSection label="Meet with">
          <MeetWithField />
        </CollapsibleSection>
        <CollapsibleSection label="Workplaces">
          {WORKPLACES.map((w) => (
            <PanelItem key={w} icon={Icons.Barcelona} label={w} />
          ))}
        </CollapsibleSection>
        <CollapsibleSection label="Team absences">
          {ABSENCE_FILTERS.map((f) => (
            <AbsenceFilter key={f} label={f} />
          ))}
        </CollapsibleSection>
      </div>
    </div>
  )
}
