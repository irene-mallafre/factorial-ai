import { CONVERSATIONS, type MockConversation } from '../../data/conversations'
import { DEFAULT_REPORTS, DEFAULT_ROUTINES, type BuddyItem } from '../../data/routines'
import { useAgentSetup } from '../../state/agentSetup'
import { Icons } from '../../generated/icons.gen'
import { openConversation, useActiveConversation, useAgentPanel } from '../../state/agentPanel'
import { usePersona } from '../../state/persona'
import type { View } from '../../types'
import { PanelItem } from './PanelItem'
import { PanelSection } from './PanelSection'
import { Icon } from '../ui/Icon'

type Props = { view: View | null; onView: (view: View | null) => void }

export function HomePanel({ view, onView }: Props) {
  const persona = usePersona()
  const admin = persona === 'admin'
  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      <div className="flex flex-col gap-0.5">
        <PanelItem icon={Icons.New} motion="plus" label="New" onClick={() => onView(null)} />
        {admin && <PanelItem icon={Icons.Activity} label="Activity" active={view === 'activity'} onClick={() => onView('activity')} />}
        <PanelItem icon={Icons.Documents} motion="folders" label="Documents" active={view === 'policies'} onClick={() => onView('policies')} />
        <PanelItem icon={Icons.ScreenSettings} label="Preferences" active={view === 'preferences'} onClick={() => onView('preferences')} />
      </div>
      <PanelSection label="Pinned">
        {admin ? <PanelItem icon={Icons.InboxTriage} label="Inbox triage" /> : <PanelItem icon={Icons.MyHolidays} label="My holidays" />}
      </PanelSection>
      <BuddyItems label="Routines" items={DEFAULT_ROUTINES} />
      {admin && <BuddyItems label="Reports" items={DEFAULT_REPORTS} />}
      <ChatsAndTasks />
    </div>
  )
}

function StatusDot({ status }: { status: MockConversation['status'] }) {
  return (
    <span className="flex size-4 shrink-0 items-center justify-center">
      <span
        className={`size-2 rounded-full ${status === 'running' ? 'f0c-history-dot-running' : status === 'needs-you' ? 'bg-f1-icon-warning' : 'border-2 border-solid border-f1-border'}`}
      ></span>
    </span>
  )
}

function ConversationRow({ conversation, active }: { conversation: MockConversation; active: boolean }) {
  return (
    <button
      onClick={() => openConversation(conversation.id)}
      title={conversation.when}
      className={`f0c-pressable flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left ${active ? 'bg-f1-background-secondary' : 'hover:bg-f1-background-secondary'}`}
    >
      <Icon icon={conversation.kind === 'task' ? Icons.Routines : Icons.NewConversation} size="md" color="default" />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-base font-medium text-f1-foreground">{conversation.title}</span>
        <span className="truncate text-sm text-f1-foreground-secondary">{conversation.when}</span>
      </span>
      <StatusDot status={conversation.status} />
    </button>
  )
}

/** Previous and ongoing conversations with the agent, mocked. */
function ChatsAndTasks() {
  const active = useActiveConversation()
  const open = useAgentPanel()
  const trailing = (
    <button aria-label="Filter chats and tasks" className="f0c-pressable flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[6px] hover:bg-f1-background-secondary">
      <Icon icon={Icons.CalendarSettings} size="sm" color="secondary" />
    </button>
  )
  return (
    <PanelSection label="Chats and tasks" trailing={trailing} defaultOpen={false} collapseOnLoad>
      {CONVERSATIONS.map((c) => (
        <ConversationRow key={c.id} conversation={c} active={open && active === c.id} />
      ))}
    </PanelSection>
  )
}

function ActiveDot({ active }: { active: boolean }) {
  return (
    <span className="flex size-4 shrink-0 items-center justify-center" title={active ? 'Active' : 'Paused'}>
      <span className={`size-2 rounded-full ${active ? 'f0c-history-dot-running' : 'border-2 border-solid border-f1-border'}`}></span>
    </span>
  )
}

/** Routines or reports the buddy runs. Empty until the buddy is set up. */
function BuddyItems({ label, items }: { label: string; items: BuddyItem[] }) {
  const setup = useAgentSetup()
  return (
    <PanelSection label={label} defaultOpen={false} collapseOnLoad>
      {setup.completed ? (
        items.map((item) => (
          <button key={item.id} title={item.meta} className="f0c-pressable flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left hover:bg-f1-background-secondary">
            <Icon icon={label === 'Routines' ? Icons.Routines : Icons.Reports} size="md" color="default" />
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-base font-medium text-f1-foreground">{item.label}</span>
              <span className="truncate text-sm text-f1-foreground-secondary">{item.meta}</span>
            </span>
            <ActiveDot active={item.active} />
          </button>
        ))
      ) : (
        <span className="px-1.5 py-1 text-sm text-f1-foreground-tertiary">None yet. Set up your buddy to get {label.toLowerCase()}.</span>
      )}
    </PanelSection>
  )
}
