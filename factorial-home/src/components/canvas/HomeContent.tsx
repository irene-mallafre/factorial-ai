import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeForYou from '../../generated/EmployeeForYou'
import PulseAvatarAdmin from '../../generated/PulseAvatar_admin'
import PulseAvatarEmployee from '../../generated/PulseAvatar_employee'
import { PERSON, usePersona } from '../../state/persona'
import { useAgentSetup, usePromptEditor } from '../../state/agentSetup'
import { BuddyMark } from '../agent/BuddyMark'
import { NeedsYou } from './NeedsYou'
import { HomePromptEditor } from './HomePromptEditor'
import { BuddyTasks, PayslipSuggestion } from './Suggestions'

/** Waving hand for a beat, then the avatar with its mood badge. */
function PulseAvatar({ persona }: { persona: 'admin' | 'employee' }) {
  const [waving, setWaving] = useState(true)
  useEffect(() => {
    const id = setTimeout(() => setWaving(false), 650)
    return () => clearTimeout(id)
  }, [])
  if (waving) {
    return (
      <div className="f0c-pulse-wave flex size-10 items-center justify-center rounded-full bg-f1-background-warning">
        <span className="f0c-pulse-hand text-[22px] leading-none">👋</span>
      </div>
    )
  }
  return persona === 'employee' ? <PulseAvatarEmployee /> : <PulseAvatarAdmin />
}

/** Tools the work buddy is connected to, shown as a compact stack of app icons. */
const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
const CONNECTED_TOOLS: { id: string; name: string; initials: string; icon?: string }[] = [
  { id: 'factorial', name: 'Factorial', initials: 'F', icon: '/favicon.svg' },
  { id: 'gmail', name: 'Gmail', initials: 'G', icon: favicon('gmail.com') },
  { id: 'notion', name: 'Notion', initials: 'N', icon: favicon('notion.so') },
  { id: 'a3', name: 'A3 Innuva', initials: 'A3', icon: favicon('wolterskluwer.com') },
  { id: 'hubspot', name: 'Hubspot', initials: 'H', icon: favicon('hubspot.com') },
  { id: 'web', name: 'Web', initials: 'W' },
]

function WebGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="f0c-tool-svg">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.75 12h16.5M12 3.75c2.6 2.4 3.9 5.15 3.9 8.25S14.6 17.85 12 20.25c-2.6-2.4-3.9-5.15-3.9-8.25S9.4 6.15 12 3.75Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ToolAvatar({ tool }: { tool: (typeof CONNECTED_TOOLS)[number] }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className={`f0c-tool f0c-tool-${tool.id}`} title={tool.name} aria-label={tool.name} role="img">
      {tool.id === 'web' ? <WebGlyph /> : tool.icon && !failed ? <img src={tool.icon} alt="" className="f0c-tool-img" loading="lazy" onError={() => setFailed(true)} /> : tool.initials}
    </span>
  )
}

function ConnectedTools() {
  const navigate = useNavigate()
  return (
    <span className="f0c-tools" aria-label="Connected tools">
      {CONNECTED_TOOLS.map((t) => (
        <ToolAvatar key={t.id} tool={t} />
      ))}
      <button type="button" className="f0c-tool f0c-tool-add f0c-pressable" aria-label="Connect more tools" title="Connect more tools" onClick={() => navigate('/p/home?view=preferences')}>
        +
      </button>
    </span>
  )
}

/** Default Home canvas: greeting plus the persona's task list. */
export function HomeContent({ greeting, onAddWidget }: { greeting: string; onAddWidget: (id: string) => void }) {
  const persona = usePersona()
  const setup = useAgentSetup()
  const editing = usePromptEditor()
  return (
    <div className="flex w-[712px] max-w-full flex-col gap-8">
      <div className="flex items-center gap-3">
        {setup.completed ? <BuddyMark size="xl" /> : <PulseAvatar persona={persona} />}
        <div className="flex min-w-0 flex-col gap-0.5">
          <h1 className="text-f1-foreground text-lg font-semibold text-left">{greeting.replace('%s', setup.completed && setup.callMe ? setup.callMe : PERSON[persona].firstName)}</h1>
          {setup.completed && (
            <span className="flex items-center gap-2 text-sm text-f1-foreground-secondary">
              <span className="f0c-checkin" aria-hidden="true"></span>
              <span>Checking in</span>
              <ConnectedTools />
            </span>
          )}
        </div>
      </div>
      {editing && <HomePromptEditor />}
      <PayslipSuggestion onAdd={() => onAddWidget('payslip')} />
      {persona === 'employee' ? <EmployeeForYou /> : <NeedsYou extra={<BuddyTasks persona="admin" />} />}
    </div>
  )
}
