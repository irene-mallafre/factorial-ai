import { Icons, type IconComponent } from '../generated/icons.gen'
import type { Persona } from '../state/persona'

export type Tool = { slug: string; label: string; icon: IconComponent; motion?: string }
export type ToolGroup = { label: string; tools: Tool[] }

const slugify = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const ICONS: Record<string, IconComponent> = {
  Absences: Icons.Icon2,
  Accounting: Icons.Accounting,
  Benefits: Icons.Benefits,
  Compensation: Icons.Compensation,
  Engagement: Icons.Icon5,
  Equipment: Icons.Equipment,
  Handbook: Icons.Handbook,
  Hours: Icons.ClockInPending,
  Learning: Icons.Icon7,
  Payroll: Icons.Payroll,
  Payslips: Icons.Payslips,
  People: Icons.Icon3,
  Performance: Icons.Analyze,
  Planning: Icons.Planning,
  Projects: Icons.Projects,
  Purchasing: Icons.Purchasing,
  Recruitment: Icons.Icon,
  Sales: Icons.Sales,
  Shifts: Icons.Shifts,
  Software: Icons.Software,
  Spend: Icons.Spending,
  Spending: Icons.Spending,
  Training: Icons.Training,
  Treasury: Icons.Treasury,
  'Time off': Icons.Icon2,
  'Time tracking': Icons.ClockInPending,
  Workplaces: Icons.Barcelona,
}
const MOTION: Record<string, string> = { 'Time tracking': 'timer', Hours: 'timer' }

const group = (label: string, items: string[]): ToolGroup => ({ label, tools: items.map((l) => ({ slug: slugify(l), label: l, icon: ICONS[l], motion: MOTION[l] })) })

const ADMIN: ToolGroup[] = [
  group('Company', ['People', 'Workplaces', 'Equipment', 'Software', 'Handbook']),
  group('Work', ['Time off', 'Time tracking', 'Shifts', 'Projects']),
  group('Pay', ['Payroll', 'Compensation', 'Benefits']),
  group('Talent', ['Recruitment', 'Performance', 'Engagement', 'Training']),
  group('Finance', ['Planning', 'Sales', 'Spending', 'Purchasing', 'Treasury', 'Accounting']),
]

const EMPLOYEE: ToolGroup[] = [
  group('Personal', ['Hours', 'Absences', 'Payslips', 'Learning']),
  group('Company', ['People', 'Workplaces', 'Handbook']),
  group('Work', ['Time off', 'Time tracking', 'Projects']),
  group('Pay', ['Compensation', 'Benefits']),
  group('Talent', ['Performance', 'Engagement', 'Training']),
  group('Finance', ['Planning', 'Spend', 'Purchasing', 'Software']),
]

export const toolGroups = (persona: Persona) => (persona === 'employee' ? EMPLOYEE : ADMIN)

export const findTool = (slug: string): Tool | undefined => [...ADMIN, ...EMPLOYEE].flatMap((g) => g.tools).find((t) => t.slug === slug)

export const toolView = (slug: string) => `tool:${slug}` as const
export const isToolView = (view: string | null): view is `tool:${string}` => !!view && view.startsWith('tool:')
export const toolSlug = (view: string) => view.slice(5)
