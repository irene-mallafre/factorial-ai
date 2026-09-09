"""Dev-time helper: wires click handlers into the generated Needs-you block.
In the deployed prototype, opening a Needs-you task only logs `open <id>`."""
import os, re

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(root, 'src', 'generated', 'NeedsYou.gen.tsx')).read()
ids = ['time-off-batch', 'recruitment-pick', 'contract-renewals', 'promotion-marc', 'q2-bonus', 'workshop-budget']

card_re = re.compile(r'<div className="f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-\[10px\] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary ">')
open_re = re.compile(r'(<button className="[^"]*" aria-busy="false" aria-label=\{"Open \\"[^}]*"\} role="button" data-state="closed")>')
assert len(card_re.findall(src)) == 6, len(card_re.findall(src))
assert len(open_re.findall(src)) == 6, len(open_re.findall(src))

i = iter(ids)
src = card_re.sub(lambda m: m.group(0)[:-1] + f" onClick={{() => open('{next(i)}')}}>", src)
j = iter(ids)
src = open_re.sub(lambda m: m.group(1) + f" onClick={{(e) => {{ e.stopPropagation(); open('{next(j)}') }}}}>", src)
# The cards animate in only the first time the list mounts (module-level flag in the original); the
# entrance class and stagger delay are conditional on that.
k = [0]
def enter(m):
    idx = k[0]
    k[0] += 1
    return m.group(0).replace(
        'className="f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary "',
        'className={"f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 cursor-pointer hover:bg-f1-background-secondary " + (enter ? "f0c-card-in" : "")}'
        + f' style={{enter ? {{ animationDelay: "{idx * 30}ms" }} : undefined}}',
        1,
    )
src = re.sub(r'<div className="f0c-ease-hover[^>]*onClick=\{\(\) => open\(\'[a-z0-9-]+\'\)\}>', enter, src)
assert k[0] == 6, k[0]
src = src.replace('export default function NeedsYouGen() {', """import { useEffect, useState, type ReactNode } from 'react'

let animated = false

/** Manager task queue. Opening a task only logs it, exactly like the deployed prototype. `extra` renders more rows in the same list. */
export function NeedsYou({ extra }: { extra?: ReactNode }) {
  const open = (id: string) => console.log('open', id)
  const [enter] = useState(() => !animated)
  useEffect(() => {
    animated = true
  }, [])""")
# inject the extra slot inside the cards container (before its closing tag)
tail = "        </div>\n      </div>\n    </div>\n  )\n}\n"
assert src.endswith(tail), src[-200:]
src = src[: -len(tail)] + "        </div>\n        {extra}\n      </div>\n    </div>\n  )\n}\n"
open(os.path.join(root, 'src', 'components', 'canvas', 'NeedsYou.tsx'), 'w').write(src)
print('ok')
