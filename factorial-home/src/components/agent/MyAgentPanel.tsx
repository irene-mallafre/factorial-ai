import { useEffect, useRef, useState } from 'react'
import { Icons } from '../../generated/icons.gen'
import { CONVERSATION_BY_ID } from '../../data/conversations'
import { clearPendingPrompt, closeAgentPanel, detachConversation, useActiveConversation, usePendingPrompt } from '../../state/agentPanel'
import { useAgentSetup, withTone } from '../../state/agentSetup'
import { PERSON, usePersona } from '../../state/persona'
import { saveLocationLabel, usePreferences, type Preferences } from '../../state/preferences'
import { Button } from '../ui/Button'
import { BuddyMark } from './BuddyMark'

export const AGENT_PANEL_WIDTH = 360

type Message = { id: number | string; role: 'user' | 'agent'; text: string }

const SUGGESTIONS = ["Who's out of office this week?", 'Summarise my team headcount', 'Draft a welcome note for new joiners', 'What needs my approval today?']

/** Canned, keyword-based replies so the panel feels alive without a backend. */
function replyTo(text: string, firstName: string, prefs: Preferences): string {
  const savedTo = `Saved to ${saveLocationLabel(prefs)} › ${prefs.folder}.`
  const t = text.toLowerCase()
  if (/what can .* do in people|what can you do/.test(t)) return 'In People I can look up anyone, tell you who joined or left and when, summarise headcount by team, workplace or contract, draft announcements for a group, and start onboarding or a role change for you to approve. Ask in plain words, e.g. "who is on probation this month?".'
  if (/who joined this quarter/.test(t)) return 'Twelve people joined this quarter: five in Sales, four in Engineering, two in Support and one in Finance. Nine of them are still in onboarding; three have their 30-day check-in this week.'
  if (/summari[sz]e headcount by team|headcount by team/.test(t)) return 'Headcount by team: Engineering 812, Sales 604, Support 388, Operations 341, Product & Design 196, Finance 118, People 97, other 158. Total 2,714, up 85 since last quarter.'
  if (/seur|shipping label|pickup address/.test(t)) return 'The SEUR label covers 2 packages (1.8 kg and 3.2 kg) at €9.40. The pickup address on file is your home in Poblenou; confirm it and I will book the pickup for tomorrow 10:00–14:00 and add the label to your downloads.'
  if (/amazon|wishlist|discount/.test(t)) return 'Two of your six wishlist items are discounted right now: the desk lamp (−22%) and the trail shoes (−15%). I will keep watching the other four and tell you at 08:00 when anything drops.'
  if (/social security|seguridad social/.test(t)) return 'Nothing new in your Social Security inbox since 2 September. I check every Monday at 09:00 and will ping you the same day if a notification arrives.'
  if (/flight|china/.test(t)) return 'For your time off (10–24 July) the best fares to Shanghai this morning are €612 (Qatar, 1 stop), €638 (Turkish, 1 stop) and €649 (Finnair, 1 stop). I will send the next round tomorrow at 07:30.'
  if (/shift|gaps? (still )?uncovered/.test(t)) return 'For the Barcelona 08:00 shift I have three options for the open gap: move Diego from the 10:00 shift (no overtime), offer it to Nuria as an extra shift (+€48), or leave it uncovered and flag the store. Pick one and I will notify the team.'
  if (/expense claims|claims flagged|review 6/.test(t)) return 'The six flagged claims: two above the €40 meal cap, three missing receipts, and one duplicate of a taxi already reimbursed on 12 May. I have prepared approve/return actions for each so you can clear them before the payroll cut-off.'
  if (/probation|renewal drafted/.test(t)) return `M. Ruiz's probation ends in 14 days. Their reviews are 4.5/5 and the renewal is drafted at the same band. Say confirm and I will send it for signature, or end and I will draft the notice with HR. ${savedTo}`
  if (/onboarding blocked|id document|escalate/.test(t)) return 'The new joiner has not uploaded their ID after three chases. Escalating to the HR owner with a summary and a one-click upload link; I will pause the remaining onboarding steps until it arrives.'
  if (/e-signature|connection refused|fix connection/.test(t)) return 'The e-signature provider refused the connection at 08:02. The token expired on 1 Sep. I have opened the integration settings for you; once the credential is renewed I will retry from step 4 automatically.'
  if (/out of office|absen|holiday|time off|vacation/.test(t)) return 'Three people are out this week: Lucía (Tue–Thu), Pablo (Fri) and Marta (all week, parental leave). None of them overlap on the same team, so cover is fine.'
  if (/headcount|team|people|employees/.test(t)) return 'You have 2,714 employees today, up 85 since last quarter: 122 joiners and 37 leavers. Engineering and Sales account for most of the growth.'
  if (/welcome|joiner|onboard/.test(t)) return `Here's a draft:\n\n"Welcome aboard! We're thrilled to have you at Factorial. Your buddy will reach out today, and everything you need for week one is already in your Home. See you at Thursday's all-hands." — ${firstName}\n\n${savedTo}`
  if (/approv|pending|needs/.test(t)) return 'Six items need you: 12 time-off requests, Lucía\'s offer, 4 contract renewals, Marc\'s promotion, the Q2 bonus list and an €890 workshop. The time-off batch and the workshop are inside policy, so I can clear those for you.'
  if (/payslip|nómina|salary/.test(t)) return 'Your August payslip: €3,450.00 gross, €517.50 income tax, €219.08 Social Security, €132.00 meal allowance, €2,845.42 net, paid on 28 August. I put the PDF in your downloads.'
  if (/hello|hi|hey/.test(t)) return `Hi ${firstName}! I'm your work buddy. Ask me about people, time, pay or anything in your workspace.`
  return `I've noted that. I can pull data from People, Time off, Payroll and Recruitment, or draft something for you. Try one of the suggestions below, ${firstName}.`
}

/** The work buddy side panel: brand hero, conversation, suggestions and a composer. */
export function MyAgentPanel() {
  const persona = usePersona()
  const prefs = usePreferences()
  const setup = useAgentSetup()
  const firstName = setup.completed && setup.callMe ? setup.callMe : PERSON[persona].firstName
  const agentName = setup.completed ? setup.name : 'your work buddy'
  const [messages, setMessages] = useState<Message[]>([])
  const [draft, setDraft] = useState('')
  const [thinking, setThinking] = useState(false)
  const scroller = useRef<HTMLDivElement>(null)
  const nextId = useRef(1)

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
  }, [messages, thinking])

  // A row picked in "Chats and tasks" replaces the thread with that conversation.
  const activeConversation = useActiveConversation()
  const [loaded, setLoaded] = useState<string | null>(null)
  if (activeConversation !== loaded) {
    setLoaded(activeConversation)
    const conv = activeConversation ? CONVERSATION_BY_ID[activeConversation] : undefined
    if (conv) setMessages(conv.thread.map((m, i) => ({ id: `${conv.id}:${i}`, role: m.role, text: m.text })))
  }

  // A message handed over from elsewhere (activity cards, the ask box, suggestions).
  // The reply timer lives in a ref: clearing the pending prompt re-runs this effect, and a cleanup
  // there would cancel the reply before it arrives.
  const pending = usePendingPrompt()
  const replyTimer = useRef<number | undefined>(undefined)
  useEffect(() => {
    if (!pending) return
    clearPendingPrompt()
    detachConversation()
    const clean = pending.text.trim()
    setMessages((m) => [...m, { id: nextId.current++, role: 'user', text: clean }])
    setThinking(true)
    window.clearTimeout(replyTimer.current)
    replyTimer.current = window.setTimeout(() => {
      setMessages((m) => [...m, { id: nextId.current++, role: 'agent', text: withTone(replyTo(clean, firstName, prefs), setup.tone) }])
      setThinking(false)
    }, 900)
  }, [pending, firstName, prefs, setup.tone])
  useEffect(() => () => window.clearTimeout(replyTimer.current), [])

  const send = (text: string) => {
    const clean = text.trim()
    if (!clean || thinking) return
    if (activeConversation && CONVERSATION_BY_ID[activeConversation]?.status === 'done' && !CONVERSATION_BY_ID[activeConversation].ongoing) detachConversation()
    setMessages((m) => [...m, { id: nextId.current++, role: 'user', text: clean }])
    setDraft('')
    setThinking(true)
    window.setTimeout(() => {
      setMessages((m) => [...m, { id: nextId.current++, role: 'agent', text: withTone(replyTo(clean, firstName, prefs), setup.tone) }])
      setThinking(false)
    }, 900)
  }

  return (
    <aside data-one-panel="true" className="relative flex shrink-0 flex-col overflow-hidden" style={{ width: AGENT_PANEL_WIDTH }} aria-label="Work buddy">
      <div className="flex w-full shrink-0 items-center justify-between p-[14px]">
        <span className="flex min-w-0 items-center gap-2">
          <BuddyMark size="sm" />
          <span className="truncate text-base font-medium text-f1-foreground">{setup.completed ? setup.name : 'Work buddy'}</span>
        </span>
        <div className="flex items-center">
          <Button variant="ghost" size="md" icon={Icons.CloseClockIn} hideLabel label="Close work buddy" onClick={closeAgentPanel} />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-between px-3.5 pt-4">
        <div ref={scroller} className="home-canvas-scroll flex min-h-0 flex-1 flex-col overflow-y-auto">
          {messages.length === 0 ? (
            <div className="f0c-agent-hero">
              <BuddyMark size="lg" />
              <p className="f0c-one-headline m-0 w-full text-center text-2xl font-semibold tracking-[-0.11px]">Hi {firstName}, I'm {agentName}</p>
              <p className="f0c-agent-tagline">
                Powered by <strong>Factorial ONE</strong>. I know your people, your time and your numbers, and I only act when you say so.
              </p>
            </div>
          ) : (
            <div className="f0c-agent-thread">
              {messages.map((m) => (
                <div key={m.id} className={m.role === 'user' ? 'f0c-agent-bubble f0c-agent-bubble-user' : 'f0c-agent-row'}>
                  {m.role === 'agent' && <BuddyMark size="sm" />}
                  <p className={m.role === 'user' ? 'text-base text-f1-foreground' : 'f0c-agent-bubble text-base text-f1-foreground'}>{m.text}</p>
                </div>
              ))}
              {thinking && (
                <div className="f0c-agent-row">
                  <BuddyMark size="sm" />
                  <span className="shine-text text-base font-medium text-f1-foreground-secondary">Thinking…</span>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="shrink-0 pb-3 pt-3">
          <div className="f0c-agent-chips">
            {SUGGESTIONS.map((s) => (
              <button key={s} className="f0c-agent-chip f0c-pressable" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
          <form
            className="f0c-agent-composer flex flex-col gap-1 rounded-md border border-solid border-f1-border bg-f1-background p-3"
            onSubmit={(e) => {
              e.preventDefault()
              send(draft)
            }}
          >
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  send(draft)
                }
              }}
              rows={2}
              aria-label="Ask your work buddy"
              placeholder={`Ask ${agentName} anything…`}
              className="max-h-40 w-full resize-none border-0 bg-transparent p-0 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
            ></textarea>
            <div className="flex items-center justify-between">
              <Button variant="outline" size="md" icon={Icons.AttachAFile} hideLabel label="Attach a file" />
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="md" icon={Icons.UseVoice} hideLabel label="Use voice" />
                <Button type="submit" variant="default" size="md" icon={Icons.SendMessage} hideLabel label="Send" disabled={draft.trim().length === 0 || thinking} />
              </div>
            </div>
          </form>
          <p className="f0c-agent-footnote">{setup.completed ? setup.name : 'Your work buddy'} can make mistakes. Check important answers.</p>
        </div>
      </div>
    </aside>
  )
}
