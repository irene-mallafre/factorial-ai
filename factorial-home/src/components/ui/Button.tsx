import type { MouseEventHandler } from 'react'
import type { IconComponent } from '../../generated/icons.gen'

export type ButtonVariant = 'ghost' | 'outline' | 'default' | 'neutral'
export type ButtonSize = 'sm' | 'md'

const COMMON = 'group relative inline-flex items-center justify-center gap-1 whitespace-nowrap border-none p-0 font-medium'
const MAIN =
  '[&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed no-underline [&_.main]:z-20'
const SOFT_SHADOW = 'shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]'

const VARIANT: Record<ButtonVariant, string> = {
  ghost: `${COMMON} transition-colors ${MAIN} bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:${SOFT_SHADOW} active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]`,
  outline: `${COMMON} ${SOFT_SHADOW} transition-colors ${MAIN} bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover`,
  neutral: `${COMMON} ${SOFT_SHADOW} transition-colors ${MAIN} bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)] data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]`,
  default: `${COMMON} transition-colors ${MAIN} bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]`,
}

const SIZE: Record<ButtonSize, string> = {
  md: 'rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3',
  sm: 'rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2',
}

const FOCUS = 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1 max-w-full'

const ICON_SIZE: Record<ButtonSize, string> = {
  md: 'w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md',
  sm: 'w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm',
}

function iconColor(variant: ButtonVariant, hideLabel: boolean) {
  if (variant === 'default') {
    return hideLabel
      ? '[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold'
      : '[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold/80'
  }
  return hideLabel ? '[&_svg:not([data-has-color])]:text-f1-icon-bold' : '[&_svg:not([data-has-color])]:text-f1-icon'
}

export type ButtonProps = {
  variant: ButtonVariant
  size: ButtonSize
  label: string
  icon?: IconComponent
  hideLabel?: boolean
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

/** f0's Button, reproduced with the exact utility classes the prototype renders. */
export function Button({ variant, size, label, icon: Svg, hideLabel = false, disabled, type, onClick }: ButtonProps) {
  const className = `${hideLabel ? 'pointer-events-auto ' : ''}${VARIANT[variant]} ${SIZE[size]} ${FOCUS}`
  const mainClass = `main flex min-w-0 flex-1 items-center justify-center gap-1 ${hideLabel ? (size === 'sm' ? '!px-[4px] ' : '!px-[6px] ') : ''}transition-colors ${iconColor(variant, hideLabel)}`
  const innerClass = `flex min-w-0 flex-1 items-center justify-center gap-1${!hideLabel && Svg ? ' -ml-[3px]' : ''}`
  return (
    <button
      className={className}
      aria-busy="false"
      aria-label={label}
      type={type}
      role="button"
      disabled={disabled}
      onClick={onClick}
      {...(hideLabel ? { 'data-state': 'closed' } : {})}
    >
      <div className={mainClass}>
        <span className="flex min-w-0 flex-1 items-center justify-center">
          <div className={innerClass}>
            {Svg && <Svg className={`aspect-square inline-block shrink-0 ${ICON_SIZE[size]} text-current`} />}
            {hideLabel ? (
              <span className="sr-only">{label}</span>
            ) : (
              <span className="min-w-0 max-w-full overflow-hidden text-ellipsis block whitespace-nowrap text-base" data-testid="one-ellipsis">
                {label}
              </span>
            )}
            {' '}
          </div>
        </span>
      </div>
    </button>
  )
}
