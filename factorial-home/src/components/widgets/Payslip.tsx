import { Icons } from '../../generated/icons.gen'
import { askAgent } from '../../state/agentPanel'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

const LINES: [string, string][] = [
  ['Gross salary', '€3,450.00'],
  ['Income tax (IRPF)', '−€517.50'],
  ['Social Security', '−€219.08'],
  ['Meal allowance', '+€132.00'],
]

/** Payslip (nómina) widget for people who are not managers. */
export function Payslip() {
  return (
    <div className="flex flex-col gap-3 px-3 pb-3 pt-1">
      <div className="flex items-end justify-between gap-2">
        <div className="flex min-w-0 flex-col">
          <span className="text-sm text-f1-foreground-secondary">August 2026 · net pay</span>
          <span className="truncate text-[26px] font-semibold leading-8 tracking-[-0.26px] text-f1-foreground">€2,845.42</span>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full border border-solid border-f1-border-secondary py-0.5 pl-1.5 pr-2 text-sm text-f1-foreground-secondary">
          <Icon icon={Icons.CurrentEmployees} size="sm" color="positive" />
          Paid 28 Aug
        </span>
      </div>
      <div className="overflow-hidden rounded-md border border-solid border-f1-border-secondary">
        {LINES.map(([label, value], i) => (
          <div key={label} className={`flex items-center justify-between px-3 py-2 text-base ${i === 0 ? '' : 'border-0 border-t border-solid border-f1-border-secondary'}`}>
            <span className="text-f1-foreground-secondary">{label}</span>
            <span className="font-medium text-f1-foreground">{value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button variant="outline" size="sm" label="View payslip" onClick={() => askAgent('Open payslip: August 2026')} />
        <Button variant="ghost" size="sm" label="Download PDF" onClick={() => askAgent('Download my August payslip as PDF')} />
      </div>
    </div>
  )
}
