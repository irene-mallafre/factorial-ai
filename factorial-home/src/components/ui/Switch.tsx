type Props = { checked: boolean; onCheckedChange: (checked: boolean) => void; label: string }

/** Toggle switch in the design system's selected colour. */
export function Switch({ checked, onCheckedChange, label }: Props) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      data-state={checked ? 'checked' : 'unchecked'}
      onClick={() => onCheckedChange(!checked)}
      className="f0c-switch focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1"
    >
      <span className="f0c-switch-thumb"></span>
    </button>
  )
}
