import CalendarTitle from '../../generated/CalendarTitle'
import PeopleTitle from '../../generated/PeopleTitle'
import PoliciesTitle from '../../generated/PoliciesTitle'
import type { SVGProps } from 'react'
import { Icons } from '../../generated/icons.gen'
import { togglePromptEditor, usePromptEditor } from '../../state/agentSetup'
import type { View } from '../../types'
import { Button } from '../ui/Button'
import { ActivityTitle } from '../activity/ActivityTitle'
import { PreferencesTitle } from '../preferences/PreferencesScreen'
import { PeopleActions } from './PeopleActions'
import { ClockInButton } from '../widgets/ClockInButton'
import { WidgetsMenu } from '../widgets/WidgetsMenu'

type Props = { view: View | null; openWidgets: string[]; onToggleWidget: (id: string) => void; /** Hide the Home controls (setup mode). */ quiet?: boolean }

function PencilIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 19h3.2L18 9.2a1.6 1.6 0 0 0 0-2.3l-.9-.9a1.6 1.6 0 0 0-2.3 0L5 15.8V19Z" vectorEffect="non-scaling-stroke" />
      <path stroke="currentColor" strokeLinecap="round" d="M13.5 7.5 16.5 10.5" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

/** Top bar of the canvas: screen title + actions, or the widget controls on Home. */
export function CanvasHeader({ view, openWidgets, onToggleWidget, quiet = false }: Props) {
  const editing = usePromptEditor()
  return (
    <div className="flex w-full items-center justify-between p-[14px]">
      <div className="flex min-w-0 items-center gap-2">
        {view === 'policies' ? <PoliciesTitle /> : view === 'calendar' ? <CalendarTitle /> : view === 'people' ? <PeopleTitle /> : view === 'activity' ? <ActivityTitle /> : view === 'preferences' ? <PreferencesTitle /> : null}
      </div>
      {view ? (
        <div className="flex items-center">
          {view === 'activity' || view === 'preferences' ? null : view === 'people' ? (
            <PeopleActions />
          ) : (
            <>
              <Button variant="ghost" size="md" icon={Icons.ScreenOptions} hideLabel label="Screen options" />
              <Button variant="ghost" size="md" icon={Icons.ScreenSettings} hideLabel label="Screen settings" />
            </>
          )}
        </div>
      ) : quiet ? (
        <div className="flex items-center"></div>
      ) : (
        <div className="flex items-center">
          <ClockInButton open={openWidgets.includes('clockin')} onToggle={() => onToggleWidget('clockin')} />
          <div data-open={editing || undefined} className="f0c-agent-button relative">
            <Button variant="ghost" size="md" icon={PencilIcon} hideLabel label={editing ? 'Close home prompt' : 'Edit home prompt'} onClick={togglePromptEditor} />
          </div>
          <WidgetsMenu open={openWidgets} onToggle={onToggleWidget} />
        </div>
      )}
    </div>
  )
}
