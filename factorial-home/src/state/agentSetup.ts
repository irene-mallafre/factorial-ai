import { createStore, readLocal, writeLocal } from '../lib/store'
import type { Persona } from './persona'

const KEY = 'f0compose:home:agent-setup'

export type Tone = 'friendly' | 'direct' | 'formal' | 'playful'

export const TONES: { id: Tone; name: string }[] = [
  { id: 'friendly', name: 'Friendly' },
  { id: 'direct', name: 'Direct' },
  { id: 'formal', name: 'Formal' },
  { id: 'playful', name: 'Playful' },
]

/** How the person's day is shaped: decides when the buddy works quietly and when it interrupts. */
export const DAY_SHAPES = [
  { id: 'early', label: 'Early start', time: '07–09' },
  { id: 'meetings', label: 'Meeting-heavy midday', time: '11–15' },
  { id: 'deep', label: 'Deep work afternoons', time: '15–18' },
  { id: 'async', label: 'Async evening catch-up', time: '21+' },
  { id: 'travel', label: 'Often travelling', time: '' },
]

/** Areas the buddy watches and flags. */
export const WATCH_AREAS = [
  { id: 'time-off', label: 'Time off & absences' },
  { id: 'reviews', label: 'Performance reviews' },
  { id: 'recruiting', label: 'Recruiting pipeline' },
  { id: 'payroll', label: 'Payroll deadlines' },
  { id: 'onboarding', label: 'New joiner onboarding' },
  { id: 'roadmap', label: 'Roadmap & delivery' },
  { id: 'one-on-ones', label: '1:1s with my team' },
]

/** Tools the buddy can read from. Factorial is always on. */
export const TOOLS: { id: string; name: string; description: string; glyph: string; locked?: boolean }[] = [
  { id: 'factorial', name: 'Factorial', description: 'People, time off, reviews, payroll · always on', glyph: 'F', locked: true },
  { id: 'calendar', name: 'Calendar', description: 'Reads your week, holds focus blocks', glyph: 'C' },
  { id: 'slack', name: 'Slack', description: 'Nudges you in DM, never posts to channels', glyph: 'S' },
  { id: 'mail', name: 'Mail', description: 'Drafts replies for you to approve', glyph: 'M' },
  { id: 'docs', name: 'Docs/wiki', description: 'Specs, policies, meeting notes', glyph: 'D' },
  { id: 'bi', name: 'BI', description: 'Product and people metrics', glyph: 'B' },
]

export type AgentSetup = {
  /** The buddy's name. */
  name: string
  /** How the person wants to be addressed. Empty falls back to their first name. */
  callMe: string
  tone: Tone
  dayShape: string[]
  workStart: string
  workEnd: string
  watch: string[]
  tools: Record<string, boolean>
  /** The plain-language prompt that configures the Home. Empty means the default for the setup. */
  homePrompt: string
  payslipSuggestion: 'pending' | 'added' | 'dismissed'
  completed: boolean
  /** Setup was shown and closed (or finished). */
  seen: boolean
}

export const DEFAULT_SETUP: AgentSetup = {
  name: 'Factorio',
  callMe: '',
  tone: 'friendly',
  dayShape: ['early', 'deep'],
  workStart: '08:30',
  workEnd: '19:00',
  watch: ['time-off', 'reviews'],
  tools: { factorial: true, calendar: true, slack: true, mail: false, docs: false, bi: false },
  homePrompt: '',
  payslipSuggestion: 'pending',
  completed: false,
  seen: false,
}

function load(): AgentSetup {
  try {
    const raw = readLocal(KEY)
    if (!raw) return DEFAULT_SETUP
    const parsed = JSON.parse(raw) as Partial<AgentSetup>
    return { ...DEFAULT_SETUP, ...parsed, tools: { ...DEFAULT_SETUP.tools, ...(parsed.tools ?? {}), factorial: true } }
  } catch {
    return DEFAULT_SETUP
  }
}

const store = createStore<AgentSetup>(load())

/** Whether setup mode (the first-time experience in the Home canvas) is active. */
const setupMode = createStore<boolean>(false)
export const useSetupMode = () => setupMode.use()
export const openOnboarding = () => setupMode.set(true)
/** Leave setup mode without touching the saved answers (used by tooling and tests). */
export const closeSetupMode = () => setupMode.set(false)

/** True for a few seconds right after setup finishes: drives the reveal animation and the toast. */
const live = createStore<boolean>(false)
export const useJustLive = () => live.use()
let liveTimer: number | undefined

export const useAgentSetup = () => store.use()

export function saveAgentSetup(setup: AgentSetup, { quiet = false } = {}) {
  const next = { ...setup, name: setup.name.trim() || DEFAULT_SETUP.name, tools: { ...setup.tools, factorial: true }, seen: true }
  writeLocal(KEY, JSON.stringify(next))
  store.set(next)
  if (quiet) return
  setupMode.set(false)
  if (next.completed && typeof window !== 'undefined') {
    live.set(true)
    if (liveTimer) window.clearTimeout(liveTimer)
    liveTimer = window.setTimeout(() => live.set(false), 4500)
  }
}

/** Close setup without finishing it. */
export function dismissOnboarding() {
  if (!store.get().seen) {
    const next = { ...store.get(), seen: true }
    writeLocal(KEY, JSON.stringify(next))
    store.set(next)
  }
  setupMode.set(false)
}

export function resetAgentSetup() {
  writeLocal(KEY, JSON.stringify(DEFAULT_SETUP))
  store.set(DEFAULT_SETUP)
  live.set(false)
}

/** Give a reply the agent's configured voice. */
export function withTone(text: string, tone: Tone): string {
  switch (tone) {
    case 'direct':
      return text.replace(/^(Happy to help\.|Sure\.|On it\.)\s*/i, '')
    case 'formal':
      return `Certainly. ${text}`
    case 'playful':
      return `${text} ✨`
    default:
      return text
  }
}

export function setPayslipSuggestion(state: AgentSetup['payslipSuggestion']) {
  saveAgentSetup({ ...store.get(), payslipSuggestion: state }, { quiet: true })
}

/** Whether the Home prompt editor (pencil in the header) is open. */
const promptEditor = createStore<boolean>(false)
export const usePromptEditor = () => promptEditor.use()
export const togglePromptEditor = () => promptEditor.set(!promptEditor.get())
export const closePromptEditor = () => promptEditor.set(false)

/** The default Home prompt, written from the setup answers. */
export function defaultHomePrompt(setup: AgentSetup, persona: Persona): string {
  const watch = WATCH_AREAS.filter((w) => setup.watch.includes(w.id)).map((w) => w.label.toLowerCase())
  const day = DAY_SHAPES.filter((d) => setup.dayShape.includes(d.id)).map((d) => d.label.toLowerCase())
  const tools = TOOLS.filter((t) => t.locked || setup.tools[t.id]).map((t) => t.name)
  const who = setup.callMe.trim() || (persona === 'employee' ? 'Sara' : 'Alicia')
  return [
    `Greet ${who} by name when the day starts.`,
    `Start the page with what needs ${who}'s input, smallest decisions first. Keep everything inside policy ready to approve in one click.`,
    `Keep an eye on ${watch.join(', ') || 'time off and reviews'} and raise a task when something needs a decision.`,
    `Work quietly during ${day.join(' and ') || 'the day'}; interrupt only between ${setup.workStart} and ${setup.workEnd} (CET, Mon–Fri) and only for things that expire today.`,
    `Read from ${tools.join(', ')}. Never send, approve or change anything without asking first.`,
    persona === 'employee' ? 'Show the payslip, clock in and communities widgets.' : 'Show the clock in and communities widgets; suggest new ones only when a habit is clear.',
  ].join('\n')
}
