import { findTool } from '../../data/tools'
import PeopleView from '../../generated/PeopleView'
import { Icons } from '../../generated/icons.gen'
import { Button } from '../ui/Button'
import { AskOne } from './AskOne'

/** Module glyph: the tool's icon in white on Factorial's red blob. */
function ToolGlyph({ slug }: { slug: string }) {
  const tool = findTool(slug)
  const Glyph = tool?.icon
  return (
    <div className="relative flex shrink-0 items-center justify-center h-5 w-5" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`tool-gradient-${slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF355E" />
            <stop offset="44%" stopColor="#FF355E" />
            <stop offset="100%" stopColor="#D62D4F" />
          </linearGradient>
        </defs>
        <path
          d="M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0"
          fill={`url(#tool-gradient-${slug})`}
        />
      </svg>
      {Glyph && <Glyph className="relative text-f1-foreground-inverse drop-shadow h-[14px] w-[14px] [&_path]:stroke-[2.2] [&_circle]:stroke-[2.2] [&_rect]:stroke-[2.2]" />}
    </div>
  )
}

/** A tool opened on top of the workspace: a white window on the gray layer, with its own header. */
export function ToolWindow({ slug }: { slug: string }) {
  const tool = findTool(slug)
  const label = tool?.label ?? 'Tool'
  return (
    <div className="f0c-tool-window" role="region" aria-label={label}>
      <div className="flex w-full shrink-0 items-center justify-between p-[14px]">
        <span className="flex min-w-0 items-center gap-2">
          <ToolGlyph slug={slug} />
          <span className="truncate text-base font-medium text-f1-foreground">{label}</span>
        </span>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="md" icon={Icons.ScreenOptions} hideLabel label="Screen options" />
          <Button variant="ghost" size="md" icon={Icons.ScreenSettings} hideLabel label="Screen settings" />
          <span className="ml-2">
            <AskOne slug={slug} label={label} />
          </span>
        </div>
      </div>
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
        {slug === 'people' ? (
          <PeopleView />
        ) : (
          <div className="f0c-tool-empty">
            <span className="f0c-tool-empty-emoji" aria-hidden="true">
              🤔
            </span>
            <p className="m-0 text-xl font-semibold text-f1-foreground">{label}</p>
            <p className="m-0 max-w-[560px] text-center text-lg text-f1-foreground-secondary">
              This section has no sample content in this prototype yet. You can start a conversation from the bar below.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
