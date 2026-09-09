// Dev-only: mounts the real app in jsdom and drives the setup trigger, so behaviour can be checked without a browser.
import { JSDOM } from 'jsdom'
import { createServer } from 'vite'

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/p/home', pretendToBeVisual: true })
const { window } = dom
for (const k of ['window', 'document', 'navigator', 'HTMLElement', 'HTMLTextAreaElement', 'Element', 'Node', 'MouseEvent', 'KeyboardEvent', 'Event', 'getComputedStyle', 'localStorage', 'ResizeObserver', 'matchMedia', 'requestAnimationFrame', 'cancelAnimationFrame']) {
  if (!(k in globalThis) || k === 'localStorage') {
    try { Object.defineProperty(globalThis, k, { value: window[k], configurable: true, writable: true }) } catch { /* ignore */ }
  }
}
if (!window.ResizeObserver) { window.ResizeObserver = class { observe() {} disconnect() {} }; globalThis.ResizeObserver = window.ResizeObserver }
if (!window.matchMedia) { window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} }); globalThis.matchMedia = window.matchMedia }
window.HTMLElement.prototype.scrollTo = () => {}
window.Element.prototype.animate = () => ({ onfinish: null, cancel() {} })

const root = process.cwd()
const server = await createServer({ root, configFile: root + '/vite.config.ts', server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { mount } = await server.ssrLoadModule('/scripts/dom-entry.tsx')
const errors = []
window.addEventListener('error', (e) => errors.push(String(e.error || e.message)))
const origError = console.error
console.error = (...a) => { errors.push(a.map(String).join(' ').slice(0, 300)); }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
await mount(document.getElementById('root'))
await sleep(300)
const q = (s) => document.querySelector(s)
const text = (s) => q(s)?.textContent?.trim()
const out = { step0: {}, afterClick: {}, afterContinue: {}, afterFinish: {} }
out.step0 = { fab: !!q('.f0c-onb-fab'), fabLabel: q('.f0c-onb-fab')?.getAttribute('aria-label'), setup: !!q('.f0c-su'), needsYou: !!document.body.textContent.includes('Needs you') }
q('.f0c-onb-fab')?.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
await sleep(300)
out.afterClick = { setup: !!q('.f0c-su'), eyebrow: text('.f0c-su-eyebrow'), question: text('.f0c-su-title'), panelWidth: q('[data-home-panel]')?.style.width, widgets: !!q('[data-window-stack="right"]'), fab: !!q('.f0c-onb-fab'), url: window.location.href }
for (let i = 0; i < 4; i++) { [...document.querySelectorAll('.f0c-su-btn-primary')][0]?.dispatchEvent(new window.MouseEvent('click', { bubbles: true })); await sleep(50) }
out.afterContinue = { eyebrow: text('.f0c-su-eyebrow'), question: text('.f0c-su-title'), primary: text('.f0c-su-btn-primary') }
q('.f0c-su-btn-primary')?.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
await sleep(300)
out.afterFinish = { setup: !!q('.f0c-su'), toast: text('.f0c-toast'), reveal: document.getElementById('f0-layout')?.className.includes('f0c-reveal'), suggested: document.body.textContent.includes('Suggested by Factorio'), checkin: document.body.textContent.includes('Checking in'), fabLabel: q('.f0c-onb-fab')?.getAttribute('aria-label') }
out.errors = errors.slice(0, 8)
console.error = origError
console.log(JSON.stringify(out, null, 1))
await server.close()
process.exit(0)
