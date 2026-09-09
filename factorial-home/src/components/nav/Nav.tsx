import { useState } from 'react'
import RailLogo from '../../generated/RailLogo'
import SearchField from '../../generated/SearchField'
import { Icons, type IconComponent } from '../../generated/icons.gen'
import { readLocal, writeLocal } from '../../lib/store'
import type { Section, View } from '../../types'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import SkipLink from '../SkipLink'
import { CalendarPanel } from './CalendarPanel'
import { CommsPanel } from './CommsPanel'
import { HomePanel } from './HomePanel'
import { HubPanel } from './HubPanel'
import { InboxPanel } from './InboxPanel'
import { UserMenu } from './UserMenu'

const SECTION_KEY = 'f0compose:home:nav-section'
const OPEN_KEY = 'f0compose:home:nav-open'

const RAIL: { id: Section; label: string; icon: IconComponent; motion: string }[] = [
  { id: 'home', label: 'Home', icon: Icons.Agents, motion: 'bot' },
  { id: 'comms', label: 'Comms', icon: Icons.Comms, motion: 'messages' },
  { id: 'inbox', label: 'Inbox', icon: Icons.Inbox, motion: 'inbox' },
  { id: 'cal', label: 'Cal', icon: Icons.Cal, motion: 'calendar' },
  { id: 'hub', label: 'Hub', icon: Icons.Hub, motion: 'hub' },
]

const PANEL_TITLE: Record<Section, string> = { home: 'Home', comms: 'Comms', inbox: 'Inbox', cal: 'Calendar', hub: 'Hub' }

const initialSection = (): Section => {
  const stored = readLocal(SECTION_KEY)
  return RAIL.some((r) => r.id === stored) ? (stored as Section) : 'home'
}
const initialOpen = () => readLocal(OPEN_KEY) !== 'closed'

function RailItem({ icon, label, motion, active, onClick }: { icon: IconComponent; label: string; motion: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label={label} aria-current={active ? 'true' : undefined} data-icon-motion={motion} className="group flex w-full cursor-pointer flex-col items-center gap-0.5">
      <span className={`flex size-8 items-center justify-center rounded-[10px] ${active ? 'bg-f1-background-secondary' : 'group-hover:bg-f1-background-secondary'}`}>
        <Icon icon={icon} size="md" color="default" />
      </span>
      <span className="w-full truncate text-center text-[9px] font-medium leading-3 text-f1-foreground-secondary">{label}</span>
    </button>
  )
}

function RailUtility({ icon, label, motion }: { icon: IconComponent; label: string; motion: string }) {
  return (
    <button aria-label={label} data-icon-motion={motion} className="f0c-pressable flex size-8 cursor-pointer items-center justify-center rounded-[10px] hover:bg-f1-background-secondary">
      <Icon icon={icon} size="md" color="default" />
    </button>
  )
}

type Props = { view: View | null; onView: (view: View | null) => void; /** Setup mode: only the main rail items show, the panel stays closed. */ setupMode?: boolean }

/** Rail + side panel. Selecting the active rail item toggles the panel; the choice is persisted like the original. */
export function Nav({ view, onView, setupMode = false }: Props) {
  const [section, setSection] = useState<Section>(initialSection)
  const [open, setOpen] = useState<boolean>(initialOpen)

  const persist = (s: Section, o: boolean) => {
    writeLocal(SECTION_KEY, s)
    writeLocal(OPEN_KEY, o ? 'open' : 'closed')
  }
  const select = (s: Section) => {
    const nextOpen = s === section ? !open : true
    setSection(s)
    setOpen(nextOpen)
    persist(s, nextOpen)
    if (s === 'cal') onView('calendar')
    else if (view === 'calendar') onView(null)
  }
  const collapse = () => {
    setOpen(false)
    persist(section, false)
  }

  const width = section === 'inbox' ? 419 : section === 'cal' ? 293 : 240

  return (
    <div className="z-0 transition-all w-[240px] shrink-0 pl-3">
      <SkipLink />
      <div data-home-nav="true" className="flex h-full min-h-0">
        <div data-home-rail="true" className="flex w-12 shrink-0 flex-col items-center overflow-y-auto">
          <div className="flex h-[60px] shrink-0 items-center justify-center">
            <RailLogo />
          </div>
          <div className="flex w-full flex-col gap-2 px-1.5" inert={setupMode || undefined}>
            {RAIL.map((item) => (
              <RailItem key={item.id} icon={item.icon} label={item.label} motion={item.motion} active={item.id === section} onClick={() => select(item.id)} />
            ))}
          </div>
          {!setupMode && (
            <div className="mt-auto flex flex-col items-center gap-0.5 pb-3 pt-2">
              <RailUtility icon={Icons.Marketplace} label="Marketplace" motion="marketplace" />
              <RailUtility icon={Icons.Security} label="Security" motion="shield" />
              <span className="pt-1.5">
                <UserMenu />
              </span>
            </div>
          )}
        </div>
        <div
          data-home-panel="true"
          className="f0c-ease-out h-full shrink-0 overflow-hidden transition-[width] duration-200 motion-reduce:transition-none"
          style={{ width: open && !setupMode ? width : 0 }}
          inert={open && !setupMode ? undefined : true}
        >
          <div className="flex h-full flex-col" style={{ width }}>
            <div className="flex h-[60px] shrink-0 items-center justify-between pl-3 pr-2">
              <span className="truncate text-base font-medium text-f1-foreground">{PANEL_TITLE[section]}</span>
              <div className="flex shrink-0 items-center">
                {section === 'inbox' && <Button variant="ghost" size="sm" icon={Icons.CalendarSettings} hideLabel label="Filter inbox" />}
                <Button variant="ghost" size="sm" icon={Icons.CollapsePanel} hideLabel label="Collapse panel" onClick={collapse} />
              </div>
            </div>
            {section !== 'cal' && <SearchField />}
            <div className="home-panel-scroll min-h-0 flex-1 overflow-y-auto">
              {section === 'home' ? (
                <HomePanel view={view} onView={onView} />
              ) : section === 'comms' ? (
                <CommsPanel />
              ) : section === 'inbox' ? (
                <InboxPanel />
              ) : section === 'cal' ? (
                <CalendarPanel />
              ) : (
                <HubPanel view={view} onView={onView} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
