import { Icons, type IconComponent } from '../../generated/icons.gen'
import { usePersona } from '../../state/persona'
import type { View } from '../../types'
import { PanelItem } from './PanelItem'
import { PanelSection } from './PanelSection'

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

/** Items whose icon animates on hover in the original. */
const MOTION: Record<string, string> = { 'Time tracking': 'timer', Hours: 'timer' }

const ADMIN_GROUPS = [
  { label: 'Company', items: ['People', 'Workplaces', 'Equipment', 'Software', 'Handbook'] },
  { label: 'Work', items: ['Time off', 'Time tracking', 'Shifts', 'Projects'] },
  { label: 'Pay', items: ['Payroll', 'Compensation', 'Benefits'] },
  { label: 'Talent', items: ['Recruitment', 'Performance', 'Engagement', 'Training'] },
  { label: 'Finance', items: ['Planning', 'Sales', 'Spending', 'Purchasing', 'Treasury', 'Accounting'] },
]

const EMPLOYEE_GROUPS = [
  { label: 'Personal', items: ['Hours', 'Absences', 'Payslips', 'Learning'] },
  { label: 'Company', items: ['People', 'Workplaces', 'Handbook'] },
  { label: 'Work', items: ['Time off', 'Time tracking', 'Projects'] },
  { label: 'Pay', items: ['Compensation', 'Benefits'] },
  { label: 'Talent', items: ['Performance', 'Engagement', 'Training'] },
  { label: 'Finance', items: ['Planning', 'Spend', 'Purchasing', 'Software'] },
]

/** Only People opens a screen in the prototype. */
const ITEM_VIEW: Record<string, View> = { People: 'people' }

type Props = { view: View | null; onView: (view: View) => void }

export function HubPanel({ view, onView }: Props) {
  const persona = usePersona()
  const groups = persona === 'employee' ? EMPLOYEE_GROUPS : ADMIN_GROUPS
  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      {groups.map((group) => (
        <PanelSection key={group.label} label={group.label}>
          {group.items.map((item) => {
            const target = ITEM_VIEW[item]
            return (
              <PanelItem
                key={item}
                icon={ICONS[item]}
                motion={MOTION[item]}
                label={item}
                active={target !== undefined && view === target}
                onClick={target === undefined ? undefined : () => onView(target)}
              />
            )
          })}
        </PanelSection>
      ))}
    </div>
  )
}
