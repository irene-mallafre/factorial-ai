import type { ComponentType } from 'react'
import CelebrationsWidget from '../../generated/CelebrationsWidget'
import EventsWidget from '../../generated/EventsWidget'
import InsightsWidget from '../../generated/InsightsWidget'
import { Icons, type IconComponent } from '../../generated/icons.gen'
import type { WindowSpec } from '../windows/types'
import { ClockIn, ClockInCompact } from './ClockIn'
import { Communities } from './Communities'
import { Payslip } from './Payslip'

export type WidgetId = 'celebrations' | 'clockin' | 'communities' | 'events' | 'insights' | 'payslip'

type WidgetDef = {
  title: string
  content: ComponentType
  autoHeight?: boolean
  canFloat?: boolean
  floatingContent?: ComponentType
  floatingWidth?: number
}

export const WIDGETS: Record<WidgetId, WidgetDef> = {
  celebrations: { title: 'Anniversaries', content: CelebrationsWidget },
  clockin: { title: 'Clock in', content: ClockIn, autoHeight: true, canFloat: true, floatingContent: ClockInCompact, floatingWidth: 188 },
  communities: { title: 'Communities', content: Communities },
  events: { title: 'Events', content: EventsWidget },
  insights: { title: 'Insights', content: InsightsWidget },
  payslip: { title: 'Payslip', content: Payslip, autoHeight: true },
}

export const WIDGET_PREFIX = 'widget'
export const DEFAULT_WIDGETS: WidgetId[] = ['clockin', 'communities']

export function widgetSpec(id: string, onToggleFloat?: (id: string) => void): WindowSpec {
  const def = WIDGETS[id as WidgetId]
  const Content = def.content
  return { title: def.title, content: <Content />, autoHeight: def.autoHeight, onToggleFloat: def.canFloat && onToggleFloat ? () => onToggleFloat(id) : undefined }
}

/** Entries of the "Open widgets menu" popover, in order. */
export const WIDGET_MENU: ({ kind: 'widget'; id: WidgetId; icon: IconComponent } | { kind: 'soon'; key: string; label: string; icon: IconComponent })[] = [
  { kind: 'widget', id: 'communities', icon: Icons.Communities2 },
  { kind: 'widget', id: 'celebrations', icon: Icons.DiscoverFactorial },
  { kind: 'widget', id: 'events', icon: Icons.Events },
  { kind: 'widget', id: 'insights', icon: Icons.Analyze },
  { kind: 'widget', id: 'payslip', icon: Icons.Payslips },
  { kind: 'soon', key: 'activity', label: 'Activity', icon: Icons.Activity },
  { kind: 'soon', key: 'opportunities', label: 'Opportunities', icon: Icons.Opportunities },
  { kind: 'soon', key: 'links', label: 'Links', icon: Icons.Links },
]
