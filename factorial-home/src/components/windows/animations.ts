/** Window open/close motion, ported from the prototype (Web Animations API). */

let pendingRestore: string | null = null
const firstSeen = new Map<string, number>()
const REENTER_AFTER = 400
const CLOSE_MS = 150
const RESTORE_MS = 200

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'

export const findWindow = (key: string) => document.querySelector<HTMLElement>(`section[data-home-window][data-window-key="${key}"]`)

/** Fade a window out, then run `done` (which unmounts it). */
export function closeWithAnimation(key: string, done: () => void) {
  const el = findWindow(key)
  firstSeen.delete(key)
  if (!el) {
    done()
    return
  }
  let fired = false
  const finish = () => {
    if (fired) return
    fired = true
    done()
  }
  if (reducedMotion()) {
    const anim = el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 120, easing: EASE, fill: 'forwards' })
    anim.onfinish = finish
    window.setTimeout(finish, 240)
    return
  }
  el.style.animation = 'none'
  const anim = el.animate(
    [
      { opacity: 1, transform: 'none', filter: 'blur(0px)' },
      { opacity: 0, transform: 'scale(0.98)', filter: 'blur(2px)' },
    ],
    { duration: CLOSE_MS, easing: EASE, fill: 'forwards' },
  )
  anim.onfinish = finish
  window.setTimeout(finish, CLOSE_MS + 120)
}

/** Mark a window as about to change between docked and maximized so the next mount fades in. */
export function markRestore(key: string, el: HTMLElement | null) {
  if (el) pendingRestore = key
}

function fadeIn(el: HTMLElement, key: string) {
  if (pendingRestore !== key) return
  pendingRestore = null
  el.style.animation = 'none'
  if (reducedMotion()) {
    el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 120, easing: EASE })
    return
  }
  el.animate(
    [
      { opacity: 0, filter: 'blur(4px)' },
      { opacity: 1, filter: 'blur(0px)' },
    ],
    { duration: RESTORE_MS, easing: EASE },
  )
}

/** Called on mount: suppress the CSS entrance for windows that merely re-rendered, fade in after a restore. */
export function onWindowMount(el: HTMLElement | null, key: string) {
  if (!el) return
  const seen = firstSeen.get(key)
  if (seen === undefined) firstSeen.set(key, Date.now())
  else if (Date.now() - seen > REENTER_AFTER) el.style.animation = 'none'
  fadeIn(el, key)
}
