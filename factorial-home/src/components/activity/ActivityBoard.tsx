import { useState } from 'react'
import { ACTIVITY_COLUMNS, CATEGORIES, type ActivityCard, type ActivityCategory, type ActivityStatus } from '../../data/activity'
import { Icons } from '../../generated/icons.gen'
import { askAgent } from '../../state/agentPanel'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

function Card({ card, status }: { card: ActivityCard; status: ActivityStatus }) {
  const done = status === 'done'
  const category = CATEGORIES.find((c) => c.id === card.category)!
  return (
    <article
      className={`flex flex-col gap-2 rounded-md border border-solid p-3 shadow-[0_2px_20px_0_rgba(13,22,37,0.04)] ${category.work ? 'border-f1-border-secondary bg-f1-background' : 'f0c-activity-misc'}`}
      aria-label={`${category.label}: ${card.body}`}
    >
      <span className={`f0c-activity-tag f0c-activity-tag-${card.category}`}>{category.label}</span>
      <div className="flex items-start gap-2">
        {done && (
          <span className="flex shrink-0 pt-0.5">
            <Icon icon={Icons.CurrentEmployees} size="sm" color="positive" />
          </span>
        )}
        <p className={`m-0 min-w-0 flex-1 text-base font-medium ${done ? 'text-f1-foreground-secondary' : 'text-f1-foreground'}`}>{card.body}</p>
      </div>
      {card.action && (
        <div className="flex">
          <Button variant="outline" size="sm" label={card.action} onClick={() => askAgent(`${card.action}: ${card.body}`)} />
        </div>
      )}
      <div className="flex items-center justify-between gap-2 text-sm text-f1-foreground-secondary">
        <span className="truncate">{card.meta[0]}</span>
        <span className="shrink-0">{card.meta[1]}</span>
      </div>
    </article>
  )
}

type Filter = 'all' | ActivityCategory

function FilterControl({ value, onChange }: { value: Filter; onChange: (f: Filter) => void }) {
  const options: { id: Filter; label: string }[] = [{ id: 'all', label: 'All' }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.label }))]
  return (
    <div role="radiogroup" aria-label="Category" className="f0c-activity-filters">
      {options.map((f) => (
        <button
          key={f.id}
          type="button"
          role="radio"
          aria-checked={value === f.id}
          onClick={() => onChange(f.id)}
          className={`f0c-pressable f0c-activity-filter ${value === f.id ? 'f0c-activity-filter-on' : ''} ${f.id === 'misc' ? 'f0c-activity-filter-misc' : ''}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

/** Activity board: what the system is doing, in five columns, filterable by category. */
export function ActivityBoard() {
  const [filter, setFilter] = useState<Filter>('all')
  const matches = (card: ActivityCard) => filter === 'all' || card.category === filter
  const caption = filter === 'all' ? 'Everything the system is running for you' : filter === 'misc' ? 'Anything not connected to your job' : `${CATEGORIES.find((c) => c.id === filter)?.label} work, run by the system`
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col">
      <div className="flex shrink-0 items-center justify-between gap-2 px-5 pb-1">
        <FilterControl value={filter} onChange={setFilter} />
        <span className="shrink-0 text-sm text-f1-foreground-secondary">{caption}</span>
      </div>
      <div className="f0c-activity home-canvas-scroll" role="list" aria-label="Activity">
        {ACTIVITY_COLUMNS.map((column) => {
          const cards = column.cards.filter(matches)
          const count = filter === 'all' ? column.count : cards.length
          return (
            <section key={column.id} className="f0c-activity-column" role="listitem" aria-label={`${column.label}, ${count}`}>
              <header className="flex items-center gap-2 px-1 pb-3">
                <span className={`f0c-activity-dot f0c-activity-dot-${column.id}`} aria-hidden="true"></span>
                <span className="flex-1 truncate text-sm font-medium text-f1-foreground-secondary">{column.label}</span>
                <span className="text-sm text-f1-foreground-secondary">{count}</span>
              </header>
              <div className="f0c-activity-cards">
                {cards.map((card) => (
                  <Card key={card.id} card={card} status={column.id} />
                ))}
                {cards.length === 0 && <p className="m-0 px-1 py-2 text-sm text-f1-foreground-tertiary">Nothing here right now.</p>}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
