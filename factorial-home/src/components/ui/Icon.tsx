import type { IconComponent } from '../../generated/icons.gen'

export type IconSize = 'xs' | 'sm' | 'md'
export type IconColor = 'default' | 'secondary' | 'info' | 'positive' | 'critical' | 'current'

const SIZE: Record<IconSize, string> = {
  xs: 'w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs',
  sm: 'w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm',
  md: 'w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md',
}

const COLOR: Record<IconColor, string> = {
  default: 'text-f1-icon',
  secondary: 'text-f1-icon-secondary',
  info: 'text-f1-icon-info',
  positive: 'text-f1-icon-positive',
  critical: 'text-f1-icon-critical',
  current: 'text-current',
}

type Props = { icon: IconComponent; size?: IconSize; color?: IconColor }

/** f0's icon wrapper: a fixed-size svg with a semantic colour token. */
export function Icon({ icon: Svg, size = 'md', color = 'default' }: Props) {
  const className = `aspect-square inline-block shrink-0 ${SIZE[size]} ${COLOR[color]}`
  if (color === 'current') return <Svg className={className} />
  return <Svg className={className} data-has-color="true" />
}
