// Shared HTML -> JSX conversion helpers for the capture tooling.
import { readFileSync } from 'node:fs'
import { parseFragment } from 'parse5'

const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  crossorigin: 'crossOrigin',
  srcset: 'srcSet',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
  enctype: 'encType',
  novalidate: 'noValidate',
  allowfullscreen: 'allowFullScreen',
  frameborder: 'frameBorder',
  datetime: 'dateTime',
  accesskey: 'accessKey',
  inputmode: 'inputMode',
  enterkeyhint: 'enterKeyHint',
  'xmlns:xlink': 'xmlnsXlink',
  'xlink:href': 'xlinkHref',
  'xml:space': 'xmlSpace',
}
const BOOLEAN = new Set(['disabled', 'checked', 'selected', 'readonly', 'required', 'autofocus', 'multiple', 'hidden', 'open', 'defer', 'async', 'novalidate', 'allowfullscreen', 'inert'])
const NUMERIC = new Set(['tabIndex', 'colSpan', 'rowSpan', 'rows', 'cols'])
export const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase())

function attrName(name) {
  if (ATTR_MAP[name]) return ATTR_MAP[name]
  if (name.startsWith('data-') || name.startsWith('aria-')) return name
  if (name.includes('-')) return camel(name)
  return name
}

function styleToObject(style) {
  const obj = {}
  style.split(';').forEach((decl) => {
    const idx = decl.indexOf(':')
    if (idx === -1) return
    const prop = decl.slice(0, idx).trim()
    const val = decl.slice(idx + 1).trim()
    if (!prop) return
    obj[prop.startsWith('--') ? prop : camel(prop)] = val
  })
  return obj
}

export function renderAttrs(node, { skip = [] } = {}) {
  const parts = []
  for (const { name, value } of node.attrs) {
    if (skip.includes(name)) continue
    if (name === 'style') {
      const obj = styleToObject(value)
      const body = Object.entries(obj)
        .map(([k, v]) => `${/^[a-zA-Z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${JSON.stringify(v)}`)
        .join(', ')
      const hasCustom = Object.keys(obj).some((k) => k.startsWith('--'))
      parts.push(hasCustom ? `style={{ ${body} } as React.CSSProperties}` : `style={{ ${body} }}`)
      continue
    }
    const jsxName = attrName(name)
    if (BOOLEAN.has(name)) {
      const on = value === '' || value === name || value === 'true'
      if (name === 'disabled' && !['button', 'input', 'select', 'textarea', 'option', 'fieldset', 'optgroup'].includes(node.tagName)) {
        parts.push(`{...{ disabled: ${on ? 'true' : JSON.stringify(value)} }}`)
        continue
      }
      parts.push(on ? jsxName : `${jsxName}={${JSON.stringify(value)}}`)
      continue
    }
    if (name === 'value' && (node.tagName === 'input' || node.tagName === 'textarea')) {
      parts.push(`defaultValue=${JSON.stringify(value)}`)
      continue
    }
    if (NUMERIC.has(jsxName)) {
      parts.push(`${jsxName}={${Number(value)}}`)
      continue
    }
    parts.push(/["\n]/.test(value) ? `${jsxName}={${JSON.stringify(value)}}` : `${jsxName}=${JSON.stringify(value)}`)
  }
  return parts.length ? ' ' + parts.join(' ') : ''
}

function renderText(text) {
  if (text === '') return ''
  if (/^[^{}<>\n]*$/.test(text) && text === text.trim() && !/\s{2,}/.test(text)) return text
  return `{${JSON.stringify(text)}}`
}

export function render(node, indent = '', opts = {}) {
  if (node.nodeName === '#text') return renderText(node.value)
  if (node.nodeName === '#comment') return ''
  const tag = node.tagName
  const attrs = renderAttrs(node, opts)
  const children = (node.childNodes || []).map((c) => render(c, indent + '  ')).filter((s) => s !== '')
  if (VOID.has(tag) || (children.length === 0 && node.namespaceURI === 'http://www.w3.org/2000/svg')) {
    return `<${tag}${attrs} />`
  }
  if (children.length === 0) return `<${tag}${attrs}></${tag}>`
  const inline = children.every((c) => !c.startsWith('<')) || children.join('').length < 80
  if (inline) return `<${tag}${attrs}>${children.join('')}</${tag}>`
  return `<${tag}${attrs}>\n${children.map((c) => indent + '  ' + c).join('\n')}\n${indent}</${tag}>`
}

export function renderChildren(node, indent = '') {
  const kids = (node.childNodes || []).map((c) => render(c, indent)).filter((s) => s !== '')
  if (kids.length === 1) return kids[0]
  return `<>\n${kids.map((c) => indent + '  ' + c).join('\n')}\n${indent}</>`
}

export function walk(node, fn) {
  fn(node)
  ;(node.childNodes || []).forEach((c) => walk(c, fn))
}

export function findFirst(root, pred) {
  let found = null
  walk(root, (n) => {
    if (!found && n.attrs && pred(n)) found = n
  })
  return found
}

export function findAll(root, pred) {
  const out = []
  walk(root, (n) => {
    if (n.attrs && pred(n)) out.push(n)
  })
  return out
}

export const attr = (n, name) => n.attrs?.find((a) => a.name === name)?.value
export const hasAttr = (n, name, value) => n.attrs.some((a) => a.name === name && (value === undefined || a.value === value))
export const classes = (n) => (attr(n, 'class') || '').split(/\s+/).filter(Boolean)
export const hasClasses = (n, list) => {
  const c = classes(n)
  return list.every((x) => c.includes(x))
}
export const elementChildren = (n) => (n.childNodes || []).filter((c) => c.tagName)
export const textOf = (n) => {
  let s = ''
  walk(n, (x) => {
    if (x.nodeName === '#text') s += x.value
  })
  return s
}

export const parseFile = (file) => parseFragment(readFileSync(file, 'utf8'))

export function component(name, jsx, { props = '', imports = '' } = {}) {
  return `${imports}export default function ${name}(${props}) {\n  return (\n    ${jsx}\n  )\n}\n`
}
