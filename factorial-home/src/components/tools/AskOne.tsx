import { useEffect, useRef, useState, type SVGProps } from 'react'
import { Icons } from '../../generated/icons.gen'
import { askAgent } from '../../state/agentPanel'

/** Contextual prompts per tool, shown when the pill expands. */
const SUGGESTIONS: Record<string, string[]> = {
  people: ['Who has not accepted their invite yet?', 'Summarise the contracts ending soon', 'Draft a reminder for the 472 uninvited'],
  'time-off': ['Who is out next week?', 'Summarise the pending requests', 'Draft the summer coverage plan'],
  'time-tracking': ['Who is missing timesheets this month?', 'Summarise overtime by team', 'Draft a reminder for the late timesheets'],
  payroll: ['What changes before the next payroll run?', 'Summarise variable pay this month', 'Check the 4 missing timesheets'],
  recruitment: ['Which offers are waiting on me?', 'Summarise the open roles', 'Draft the Senior Designer offer'],
  performance: ['Which reviews are overdue?', 'Summarise Q1 ratings by team', "Draft Marc's promotion note"],
  shifts: ['Which shifts are still uncovered?', 'Summarise next week by store', 'Find cover for Saturday 08:00'],
}
const fallback = (label: string) => [`What needs my attention in ${label}?`, `Summarise ${label} this month`, `Draft an update about ${label}`]

function SendArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  )
}

type Props = { slug: string; label: string }

/**
 * "Ask One" as a round input. Idle it reads "Ask One" and glows with f0's AI gradient on hover;
 * clicking expands it into an input with suggestions for this view. The first prompt opens One beside the tool.
 */
export function AskOne({ slug, label }: Props) {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const root = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const One = Icons.AskOne

  useEffect(() => {
    if (!open) return
    input.current?.focus()
    const away = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', away)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('pointerdown', away)
      document.removeEventListener('keydown', esc)
    }
  }, [open])

  const submit = (prompt: string) => {
    const clean = prompt.trim()
    if (!clean) return
    setOpen(false)
    setText('')
    askAgent(clean, label)
  }

  const suggestions = SUGGESTIONS[slug] ?? fallback(label)

  return (
    <div ref={root} className={`f0c-askone ${open ? 'f0c-askone-open' : ''}`}>
      <form
        className="f0c-askone-pill"
        onSubmit={(e) => {
          e.preventDefault()
          submit(text)
        }}
        onClick={() => !open && setOpen(true)}
      >
        <One className="f0c-askone-spark" aria-hidden="true" />
        {open ? (
          <input ref={input} value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask One about this page" aria-label="Ask One about this page" className="f0c-askone-input" />
        ) : (
          <button type="button" className="f0c-askone-label" aria-expanded={false} aria-label="Ask One">
            Ask One
          </button>
        )}
        {open && (
          <button type="submit" className="f0c-askone-send f0c-pressable" aria-label="Send" disabled={text.trim().length === 0}>
            <SendArrow className="f0c-askone-send-icon" />
          </button>
        )}
      </form>
      {open && (
        <div className="f0c-askone-menu f0c-popover" role="listbox" aria-label="Suggested for this view">
          <span className="f0c-askone-menu-title">Suggested for this view</span>
          {suggestions.map((s) => (
            <button key={s} type="button" role="option" aria-selected={false} className="f0c-askone-option f0c-pressable" onClick={() => submit(s)}>
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
