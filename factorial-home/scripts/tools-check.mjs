// Dev-only: mounts the app in jsdom, opens a tool from the Tools panel and asks One from its window.
import { JSDOM } from 'jsdom'
import { createServer } from 'vite'
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/p/home', pretendToBeVisual: true })
const { window } = dom
for (const k of ['window', 'document', 'navigator', 'HTMLElement', 'HTMLTextAreaElement', 'HTMLInputElement', 'Element', 'Node', 'MouseEvent', 'KeyboardEvent', 'Event', 'getComputedStyle', 'localStorage']) {
  try { Object.defineProperty(globalThis, k, { value: window[k], configurable: true, writable: true }) } catch { /* ignore */ }
}
window.ResizeObserver = class { observe() {} disconnect() {} }; globalThis.ResizeObserver = window.ResizeObserver
window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} }); globalThis.matchMedia = window.matchMedia
window.HTMLElement.prototype.scrollTo = () => {}
window.Element.prototype.animate = () => ({ onfinish: null, cancel() {} })
const root = process.cwd()
const server = await createServer({ root, configFile: root + '/vite.config.ts', server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { mount } = await server.ssrLoadModule('/scripts/dom-entry.tsx')
const errors = []; const origError = console.error; console.error = (...a) => errors.push(a.map(String).join(' ').slice(0, 200))
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
await mount(document.getElementById('root')); await sleep(200)
const q = (s) => document.querySelector(s)
const click = (el) => el?.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
const panelBtn = (t) => [...document.querySelectorAll('[data-home-panel] button')].find((b) => b.textContent.trim() === t)
const out = {}
click(q('[data-home-rail] [aria-label="Tools"]')); await sleep(100)
out.panelTitle = q('[data-home-panel] span')?.textContent
click(panelBtn('Time off')); await sleep(200)
out.url = window.location.href
out.window = { present: !!q('.f0c-tool-window'), title: q('.f0c-tool-window span.truncate')?.textContent, empty: q('.f0c-tool-empty p')?.textContent, askOne: !!q('.f0c-tool-window .f0c-askone-label'), toolsMode: q('#f0-layout')?.className.includes('f0c-tools-mode'), widgets: !!q('[data-window-stack="right"]'), header: !!q('[aria-label="Open widgets menu"]') }
click(q('.f0c-askone-label')); await sleep(100)
out.askone = { expanded: q('.f0c-askone')?.className.includes('f0c-askone-open'), input: q('.f0c-askone-input')?.placeholder, title: q('.f0c-askone-menu-title')?.textContent, options: [...document.querySelectorAll('.f0c-askone-option')].map((b) => b.textContent) }
click(document.querySelectorAll('.f0c-askone-option')[1]); await sleep(1200)
out.one = { panel: !!q('[data-one-panel]'), flat: q('[data-one-panel]')?.className.includes('f0c-one-flat'), width: q('[data-one-panel]')?.style.width, title: q('[data-one-panel] span.truncate')?.textContent, expand: !!q('[aria-label="Expand conversation"]'), thread: [...document.querySelectorAll('[data-one-panel] .f0c-agent-thread p')].map((p) => p.textContent.slice(0, 80)), placeholder: q('[data-one-panel] textarea')?.placeholder, footnote: q('[data-one-panel] .f0c-agent-footnote')?.textContent, pillCollapsed: !q('.f0c-askone-open') }
click(panelBtn('People')); await sleep(300)
out.people = { title: q('.f0c-tool-window span.truncate')?.textContent, table: !!q('.f0c-tool-window .home-canvas-scroll'), active: panelBtn('People')?.className.includes('bg-f1-background-secondary') }
click(q('[data-home-rail] [aria-label="Home"]')); await sleep(200)
out.backHome = { url: window.location.href, toolsMode: q('#f0-layout')?.className.includes('f0c-tools-mode') }
out.errors = errors.slice(0, 5)
console.error = origError
console.log(JSON.stringify(out, null, 1))
await server.close(); process.exit(0)
