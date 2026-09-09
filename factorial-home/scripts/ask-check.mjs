// Dev-only: mounts the app in jsdom on the People screen and exercises the ask box.
import { JSDOM } from 'jsdom'
import { createServer } from 'vite'
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/p/home?view=people', pretendToBeVisual: true })
const { window } = dom
for (const k of ['window', 'document', 'navigator', 'HTMLElement', 'HTMLTextAreaElement', 'HTMLInputElement', 'Element', 'Node', 'MouseEvent', 'KeyboardEvent', 'Event', 'getComputedStyle', 'localStorage']) {
  try { Object.defineProperty(globalThis, k, { value: window[k], configurable: true, writable: true }) } catch { /* ignore */ }
}
window.ResizeObserver = class { observe() {} disconnect() {} }; globalThis.ResizeObserver = window.ResizeObserver
window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} }); globalThis.matchMedia = window.matchMedia
window.HTMLElement.prototype.scrollTo = () => {}
window.Element.prototype.animate = () => ({ onfinish: null, cancel() {} })
window.Element.prototype.getBoundingClientRect = () => ({ top: 10, bottom: 40, left: 800, right: 900, width: 100, height: 30, x: 800, y: 10, toJSON() {} })
const root = process.cwd()
const server = await createServer({ root, configFile: root + '/vite.config.ts', server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { mount } = await server.ssrLoadModule('/scripts/dom-entry.tsx')
const errors = []; const origError = console.error; console.error = (...a) => errors.push(a.map(String).join(' ').slice(0, 200))
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
await mount(document.getElementById('root')); await sleep(200)
const q = (s) => document.querySelector(s)
const click = (el) => el?.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
const out = {}
const btn = q('main [aria-label="Work buddy"]')
out.button = !!btn
click(btn); await sleep(100)
out.popover = !!q('.f0c-ask'); out.suggestions = [...document.querySelectorAll('.f0c-ask-suggestion')].map((b) => b.textContent.trim()); out.placeholder = q('.f0c-ask-input')?.placeholder; out.panelOpenYet = !!q('[data-one-panel]')
click(document.querySelectorAll('.f0c-ask-suggestion')[1]); await sleep(1200)
out.afterPick = { popoverClosed: !q('.f0c-ask'), panelOpen: !!q('[data-one-panel]'), thread: [...document.querySelectorAll('[data-one-panel] .f0c-agent-thread p')].map((p) => p.textContent.slice(0, 70)) }
click(q('main [aria-label="Work buddy"]')); await sleep(100)
out.buttonClosesPanel = !q('[data-one-panel]')
out.errors = errors.slice(0, 5)
console.error = origError
console.log(JSON.stringify(out, null, 1))
await server.close(); process.exit(0)
