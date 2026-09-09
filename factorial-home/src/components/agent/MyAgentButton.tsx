import { useEffect, useRef, useState, type SVGProps } from 'react'
import { createPortal } from 'react-dom'
import { Icons } from '../../generated/icons.gen'
import { askAgent, closeAgentPanel, useAgentPanel } from '../../state/agentPanel'
import { useAgentSetup } from '../../state/agentSetup'
import { Button } from '../ui/Button'
import { Scrim } from '../ui/Menu'
import { BuddyMark } from './BuddyMark'

/** Prompts offered before a conversation starts, for the People screen. */
const SUGGESTIONS = (name: string) => [`What can ${name} do in People`, 'Who joined this quarter?', 'Summarise headcount by team']

function ReplyArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 6v5a4 4 0 0 0 4 4h9M14 11l4 4-4 4" />
    </svg>
  )
}

function SendArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  )
}

/**
 * Header control for the work buddy. Like Gemini in Meet: a first click opens a compact ask box with
 * suggested prompts; starting a conversation opens the full side panel. When the panel is open, the
 * button closes it.
 */
export function MyAgentButton() {
  const open = useAgentPanel()
  const setup = useAgentSetup()
  const name = setup.completed ? setup.name : 'Work buddy'
  const askName = setup.completed ? setup.name : 'your work buddy'
  const anchor = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null)
  const [text, setText] = useState('')

  const toggle = () => {
    if (open) {
      closeAgentPanel()
      return
    }
    const rect = anchor.current?.getBoundingClientRect()
    if (rect) setPos((p) => (p ? null : { top: rect.bottom + 6, right: window.innerWidth - rect.right }))
  }

  useEffect(() => {
    if (pos) input.current?.focus()
  }, [pos])

  const start = (prompt: string) => {
    const clean = prompt.trim()
    if (!clean) return
    setPos(null)
    setText('')
    askAgent(clean)
  }

  const popover = pos && (
    <>
      <Scrim onClick={() => setPos(null)} />
      <div className="f0c-ask f0c-popover" style={{ top: pos.top, right: pos.right, transformOrigin: 'top right' }} role="dialog" aria-label={`Ask ${askName}`}>
        <div className="f0c-ask-suggestions">
          {SUGGESTIONS(askName).map((s) => (
            <button key={s} type="button" className="f0c-ask-suggestion f0c-pressable" onClick={() => start(s)}>
              <ReplyArrow className="f0c-ask-arrow" />
              <span>{s}</span>
            </button>
          ))}
          <div className="f0c-ask-close">
            <Button variant="ghost" size="sm" icon={Icons.CloseClockIn} hideLabel label="Close" onClick={() => setPos(null)} />
          </div>
        </div>
        <form
          className="f0c-ask-composer"
          onSubmit={(e) => {
            e.preventDefault()
            start(text)
          }}
        >
          <input ref={input} value={text} onChange={(e) => setText(e.target.value)} placeholder={`Ask ${name}`} aria-label={`Ask ${name}`} className="f0c-ask-input" />
          <div className="f0c-ask-row">
            <BuddyMark size="sm" />
            <span className="flex-1"></span>
            <Button variant="ghost" size="sm" icon={Icons.ScreenOptions} hideLabel label="More options" />
            <button type="submit" className="f0c-ask-send f0c-pressable" aria-label="Send" disabled={text.trim().length === 0}>
              <SendArrow className="f0c-ask-send-icon" />
            </button>
          </div>
        </form>
      </div>
    </>
  )

  return (
    <div ref={anchor} data-icon-motion="bot" data-open={open || !!pos || undefined} className="f0c-agent-button relative">
      {popover && createPortal(popover, document.body)}
      <Button variant="ghost" size="md" icon={Icons.Agents} label={name} onClick={toggle} />
    </div>
  )
}
