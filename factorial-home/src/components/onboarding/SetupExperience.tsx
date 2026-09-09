import { useState } from 'react'
import { DAY_SHAPES, DEFAULT_SETUP, TOOLS, WATCH_AREAS, dismissOnboarding, saveAgentSetup, useAgentSetup, type AgentSetup } from '../../state/agentSetup'
import { PERSON, usePersona } from '../../state/persona'
import { BuddyMark } from '../agent/BuddyMark'
import { Switch } from '../ui/Switch'

const STEPS = ['Your name', 'Buddy name', 'Your day', 'Watch', 'Tools'] as const
const SURPRISE_NAMES = ['Nova', 'Pixel', 'Atlas', 'Mika', 'Juno', 'Ori']
const pad2 = (n: number) => String(n).padStart(2, '0')

function Chip({ on, label, note, onClick }: { on: boolean; label: string; note?: string; onClick: () => void }) {
  return (
    <button type="button" aria-pressed={on} onClick={onClick} className={`f0c-su-chip f0c-pressable ${on ? 'f0c-su-chip-on' : ''}`}>
      <span>{label}</span>
      {note && <span className="f0c-su-mono f0c-su-chip-note">{note}</span>}
    </button>
  )
}

function Field({ value, onChange, placeholder, autoFocus }: { value: string; onChange: (v: string) => void; placeholder: string; autoFocus?: boolean }) {
  return (
    <input
      autoFocus={autoFocus}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label={placeholder}
      className="f0c-su-input"
    />
  )
}

/** First-time setup: one question at a time in a centred column, with a running summary beside it. */
export function SetupExperience() {
  const saved = useAgentSetup()
  const persona = usePersona()
  const [draft, setDraft] = useState<AgentSetup>({ ...saved, completed: false })
  const [step, setStep] = useState(0)
  const firstName = PERSON[persona].firstName
  const buddyName = draft.name.trim() || DEFAULT_SETUP.name
  const you = draft.callMe.trim() || firstName
  const last = step === STEPS.length - 1
  const toggleIn = (list: string[], id: string) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id])
  const finish = () => saveAgentSetup({ ...draft, completed: true })

  let question: { title: string; helper: string; body: React.ReactNode }
  if (step === 0) {
    question = {
      title: 'First: how should I call you?',
      helper: 'It goes on the messages I will send to you and nowhere else.',
      body: (
        <div className="f0c-su-stack">
          <Field autoFocus value={draft.callMe} onChange={(v) => setDraft({ ...draft, callMe: v })} placeholder={firstName} />
          <div className="f0c-su-chips">
            <Chip on={draft.callMe.trim() === ''} label={firstName} onClick={() => setDraft({ ...draft, callMe: '' })} />
            <Chip on={draft.callMe === `${firstName} ${PERSON[persona].lastName}`} label={`${firstName} ${PERSON[persona].lastName}`} onClick={() => setDraft({ ...draft, callMe: `${firstName} ${PERSON[persona].lastName}` })} />
          </div>
        </div>
      ),
    }
  } else if (step === 1) {
    question = {
      title: 'And what should I answer to?',
      helper: 'Pick a name for your agent, or type your own. You can rename it any time.',
      body: (
        <div className="f0c-su-stack">
          <Field autoFocus value={draft.name} onChange={(v) => setDraft({ ...draft, name: v })} placeholder="Factorio" />
          <div className="f0c-su-chips">
            <Chip on={buddyName === 'Factorio'} label="Factorio" onClick={() => setDraft({ ...draft, name: 'Factorio' })} />
            <Chip
              on={false}
              label="Surprise me"
              onClick={() => setDraft({ ...draft, name: SURPRISE_NAMES.filter((n) => n !== draft.name)[Math.floor(Math.random() * (SURPRISE_NAMES.length - 1))] })}
            />
          </div>
        </div>
      ),
    }
  } else if (step === 2) {
    question = {
      title: 'How does your day usually look?',
      helper: 'This decides when your buddy works quietly in the background and when it interrupts you.',
      body: (
        <div className="f0c-su-stack">
          <div className="f0c-su-chips">
            {DAY_SHAPES.map((d) => (
              <Chip key={d.id} on={draft.dayShape.includes(d.id)} label={d.label} note={d.time || undefined} onClick={() => setDraft({ ...draft, dayShape: toggleIn(draft.dayShape, d.id) })} />
            ))}
          </div>
          <div className="f0c-su-hours">
            <span className="f0c-su-sublabel">Working hours</span>
            <div className="f0c-su-hours-row">
              <input type="time" value={draft.workStart} onChange={(e) => setDraft({ ...draft, workStart: e.target.value })} aria-label="Working hours start" className="f0c-su-time f0c-su-mono" />
              <span className="f0c-su-mono f0c-su-dim">to</span>
              <input type="time" value={draft.workEnd} onChange={(e) => setDraft({ ...draft, workEnd: e.target.value })} aria-label="Working hours end" className="f0c-su-time f0c-su-mono" />
              <span className="f0c-su-mono f0c-su-dim">CET · Mon–Fri</span>
            </div>
          </div>
        </div>
      ),
    }
  } else if (step === 3) {
    question = {
      title: 'What should I keep an eye on?',
      helper: 'Your buddy watches these areas and flags what needs you. Pick as many as you like.',
      body: (
        <div className="f0c-su-chips">
          {WATCH_AREAS.map((w) => (
            <Chip key={w.id} on={draft.watch.includes(w.id)} label={w.label} onClick={() => setDraft({ ...draft, watch: toggleIn(draft.watch, w.id) })} />
          ))}
        </div>
      ),
    }
  } else {
    question = {
      title: 'Last thing — connect your tools.',
      helper: 'Your agent reads only what these grant it, and never writes without asking first.',
      body: (
        <div className="f0c-su-tools">
          {TOOLS.map((t) => {
            const on = t.locked ? true : !!draft.tools[t.id]
            return (
              <div key={t.id} className={`f0c-su-tool ${t.locked ? 'f0c-su-tool-locked' : ''}`}>
                <span className="f0c-su-glyph f0c-su-mono" aria-hidden="true">
                  {t.glyph}
                </span>
                <span className="f0c-su-tool-text">
                  <span className="f0c-su-tool-name">{t.name}</span>
                  <span className="f0c-su-tool-desc">{t.description}</span>
                </span>
                {t.locked ? (
                  <span className="f0c-su-mono f0c-su-dim">Always on</span>
                ) : (
                  <Switch checked={on} onCheckedChange={(v) => setDraft({ ...draft, tools: { ...draft.tools, [t.id]: v } })} label={t.name} />
                )}
              </div>
            )
          })}
        </div>
      ),
    }
  }

  const dayLabels = DAY_SHAPES.filter((d) => draft.dayShape.includes(d.id)).map((d) => d.label)
  const watchLabels = WATCH_AREAS.filter((w) => draft.watch.includes(w.id)).map((w) => w.label)
  const toolNames = TOOLS.filter((t) => t.locked || draft.tools[t.id]).map((t) => t.name)
  const summary: { label: string; value: string; reached: boolean }[] = [
    { label: 'You', value: you, reached: step >= 0 },
    { label: 'Buddy', value: buddyName, reached: step >= 1 },
    { label: 'Day', value: `${dayLabels.join(', ') || '—'} · ${draft.workStart}–${draft.workEnd}`, reached: step >= 2 },
    { label: 'Watching', value: watchLabels.join(', ') || '—', reached: step >= 3 },
    { label: 'Tools', value: toolNames.join(', '), reached: step >= 4 },
  ]

  return (
    <div className="f0c-su" role="region" aria-label="Set up your buddy">
      <div className="f0c-su-main">
        <p className="f0c-su-mono f0c-su-eyebrow">
          Set up your buddy · {pad2(step + 1)} / {pad2(STEPS.length)}
        </p>
        <div className="f0c-su-progress" aria-hidden="true">
          {STEPS.map((s, i) => (
            <span key={s} className={`f0c-su-seg ${i < step ? 'f0c-su-seg-done' : i === step ? 'f0c-su-seg-current' : ''}`}></span>
          ))}
        </div>
        <div key={step} className="f0c-su-question f0c-card-in">
          <h2 className="f0c-su-title">{question.title}</h2>
          <p className="f0c-su-helper">{question.helper}</p>
          <div className="f0c-su-body">{question.body}</div>
        </div>
        <div className="f0c-su-nav">
          <button type="button" className="f0c-su-btn f0c-pressable" onClick={step === 0 ? dismissOnboarding : () => setStep(step - 1)}>
            {step === 0 ? 'Not now' : 'Back'}
          </button>
          <button type="button" className="f0c-su-btn f0c-su-btn-primary f0c-pressable" onClick={last ? finish : () => setStep(step + 1)}>
            {last ? `Turn ${buddyName} on` : 'Continue'}
          </button>
        </div>
      </div>
      <aside className="f0c-su-aside" aria-label="Summary">
        <div className="f0c-su-aside-head">
          <BuddyMark size="md" />
          <span className="f0c-su-aside-name">{buddyName}</span>
          <span className="f0c-su-mono f0c-su-dim">Work buddy</span>
        </div>
        <dl className="f0c-su-summary">
          {summary.map((row, i) => (
            <div key={row.label} className={`f0c-su-summary-row ${row.reached ? '' : 'f0c-su-summary-pending'} ${i === step ? 'f0c-su-summary-current' : ''}`}>
              <dt className="f0c-su-mono">{row.label}</dt>
              <dd>{row.reached ? row.value : '—'}</dd>
            </div>
          ))}
        </dl>
        <p className="f0c-su-aside-note">Everything here can be changed later in Preferences.</p>
      </aside>
    </div>
  )
}
