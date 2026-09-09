import { Icons } from '../../generated/icons.gen'
import { Icon } from './Icon'

type Props = { checked: boolean; onCheckedChange: (checked: boolean) => void; title: string }

/** f0's Checkbox (Radix-based in the original), rendered with the same classes. */
export function Checkbox({ checked, onCheckedChange, title }: Props) {
  return (
    <div className="flex items-center">
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      data-state={checked ? 'checked' : 'unchecked'}
      value="on"
      aria-label={title}
      onClick={() => onCheckedChange(!checked)}
      className="relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-0"
    >
      {checked && (
        <span data-state="checked" className="absolute inset-0 z-[2] flex items-center justify-center text-current transition-none" style={{ pointerEvents: 'none' }}>
          <Icon icon={Icons.CurrentEmployees} size="sm" color="current" />
        </span>
      )}
    </button>
    </div>
  )
}
