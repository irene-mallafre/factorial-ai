// Dev-time helper: generates static content components + an icon registry from the
// captured DOM of the original prototype's deeper views.
// Usage: node scripts/gen2.mjs <capture-dir> <capture2-dir> src/generated
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import {
  parseFile, render, findFirst, findAll, hasAttr, hasClasses, attr, textOf, elementChildren, walk, component,
} from './lib/jsx.mjs'

const [C1, C2, OUT] = process.argv.slice(2)
mkdirSync(OUT, { recursive: true })

const f1 = (name) => parseFile(join(C1, name))
const f2 = (name) => parseFile(join(C2, name))
const pascal = (s) => s.replace(/[^A-Za-z0-9]+/g, ' ').trim().split(' ').map((w) => w[0].toUpperCase() + w.slice(1)).join('')

const written = []
function emit(file, name, jsx, opts = {}) {
  const needsReact = jsx.includes('React.CSSProperties')
  const imports = (needsReact ? "import type React from 'react'\n" : '') + (opts.imports || '')
  writeFileSync(join(OUT, file), component(name, jsx, { props: opts.props || '', imports: imports ? imports + '\n' : '' }))
  written.push(file)
}
const byKey = (root, key) => findFirst(root, (n) => hasAttr(n, 'data-window-key', key))
const must = (x, what) => { if (!x) throw new Error('not found: ' + what); return x }

// ---------------------------------------------------------------- chats
const CHAT_FILES = {
  lucia: 'chat_Luc_a_Fernandez', pablo: 'chat_Pablo_Navarro', anuncios: 'chat_Anuncios', incidencias: 'chat_Incidencias',
  'turno-manana': 'chat_Turno_ma_ana', 'tienda-centro': 'chat_Tienda_centro', 'almacen-getafe': 'chat_Almac_n_Getafe', encargados: 'chat_Encargados',
}
for (const [id, file] of Object.entries(CHAT_FILES)) {
  const root = f2(`${file}__data_window_stack_left_0.html`)
  const section = must(byKey(root, `pane:${id}`), `chat ${id}`)
  const list = must(findFirst(section, (n) => hasClasses(n, ['mx-auto', 'flex', 'w-full', 'max-w-[712px]'])), 'chat list ' + id)
  const listKids = elementChildren(list)
  const hasCall = id === 'turno-manana'
  const msgKids = hasCall ? listKids.slice(0, -1) : listKids
  emit(`ChatMessages_${pascal(id)}.tsx`, `ChatMessages_${pascal(id)}`, `<>\n      ${msgKids.map((k) => render(k, '      ')).join('\n      ')}\n    </>`)
  if (hasCall) emit(`ChatCall_${pascal(id)}.tsx`, `ChatCall_${pascal(id)}`, render(listKids[listKids.length - 1], '    '))
  const header = must(findFirst(section, (n) => n.tagName === 'header'), 'header')
  const leading = elementChildren(elementChildren(header)[0])[0]
  emit(`ChatLeading_${pascal(id)}.tsx`, `ChatLeading_${pascal(id)}`, render(leading, '    '))
  if (id === 'lucia') {
    const form = must(findFirst(section, (n) => n.tagName === 'form'), 'chat form')
    emit('ChatComposer.gen.tsx', 'ChatComposerGen', render(form, '    '))
  }
}

// ---------------------------------------------------------------- tickets
const TICKETS = {
  'time-off-batch': 'ticket_max__main_0.html', 'recruitment-pick': 'ticket_1__section_data_window_key_pane_ticket_0.html',
  'contract-renewals': 'ticket_2__section_data_window_key_pane_ticket_0.html', 'promotion-marc': 'ticket_3__section_data_window_key_pane_ticket_0.html',
  'q2-bonus': 'ticket_4__section_data_window_key_pane_ticket_0.html', 'workshop-budget': 'ticket_5__section_data_window_key_pane_ticket_0.html',
  'contract-addendum': 'emp_ticket_0__main_0.html', 'shift-swap': 'emp_ticket_1__main_0.html',
}
for (const [id, file] of Object.entries(TICKETS)) {
  const root = f2(file)
  const section = must(byKey(root, `pane:ticket:${id}`), `ticket ${id}`)
  const content = must(findFirst(section, (n) => hasClasses(n, ['home-window-scroll', 'min-h-0', 'flex-1', 'overflow-auto'])), 'ticket content ' + id)
  emit(`Ticket_${pascal(id)}.tsx`, `Ticket_${pascal(id)}`, render(content, '    '))
}

// ---------------------------------------------------------------- widgets
const widgets = f2('widgets_all__data_window_stack_right_0.html')
const widgetContent = (id) => {
  const section = must(byKey(widgets, `widget:${id}`), 'widget ' + id)
  return must(findFirst(section, (n) => hasClasses(n, ['home-window-scroll'])), 'widget scroll ' + id)
}
{
  const inner = elementChildren(widgetContent('communities'))[0]
  const kids = elementChildren(inner)
  emit('CommunitiesComposer.gen.tsx', 'CommunitiesComposerGen', render(kids[0], '    '))
  emit('CommunitiesAvatar.tsx', 'CommunitiesAvatar', render(elementChildren(elementChildren(kids[0])[0])[0], '    '))
  const posts = kids.slice(1).map((k) => render(k, '      ')).join('\n      ')
  emit('CommunitiesPosts.tsx', 'CommunitiesPosts', `<>\n      ${posts}\n    </>`)
  emit('CelebrationsWidget.tsx', 'CelebrationsWidget', render(elementChildren(widgetContent('celebrations'))[0], '    '))
  emit('EventsWidget.tsx', 'EventsWidget', render(elementChildren(widgetContent('events'))[0], '    '))
  emit('InsightsWidget.tsx', 'InsightsWidget', render(elementChildren(widgetContent('insights'))[0], '    '))
  emit('ClockInIdle.gen.tsx', 'ClockInIdleGen', render(elementChildren(widgetContent('clockin'))[0], '    '))
  const clocked = f2('extra__clockedInWidget.html')
  emit('ClockInActive.gen.tsx', 'ClockInActiveGen', render(elementChildren(must(findFirst(clocked, (n) => hasClasses(n, ['home-window-scroll'])), 'clocked'))[0], '    '))
  emit('FloatingClockIn.gen.tsx', 'FloatingClockInGen', render(elementChildren(f2('clockin_floating__data_home_floating_0.html'))[0], '    '))
}

// ---------------------------------------------------------------- views
const titleSpan = (root) => must(findFirst(root, (n) => n.tagName === 'span' && hasClasses(n, ['flex', 'min-w-0', 'items-center', 'gap-2'])), 'title span')
{
  const people = f2('view_people__main_0.html')
  emit('PeopleTitle.tsx', 'PeopleTitle', render(titleSpan(people), '    '))
  const ann = must(findFirst(people, (n) => hasAttr(n, 'aria-label', 'Announcements')), 'announcements')
  let parent = null
  walk(people, (n) => { if ((n.childNodes || []).includes(ann)) parent = n })
  emit('PeopleActions.gen.tsx', 'PeopleActionsGen', render(parent, '    '))
  emit('PeopleView.tsx', 'PeopleView', render(must(findFirst(people, (n) => hasClasses(n, ['home-canvas-scroll', 'flex', 'min-h-0', 'w-full', 'flex-1', 'flex-col', 'overflow-y-auto'])), 'people view'), '    '))

  const agents = f2('view_agents__main_0.html')
  emit('AgentsTitle.tsx', 'AgentsTitle', render(titleSpan(agents), '    '))
  const nav = must(findFirst(agents, (n) => n.tagName === 'nav'), 'agents nav')
  let navParent = null, navGrand = null
  walk(agents, (n) => { if ((n.childNodes || []).includes(nav)) navParent = n })
  walk(agents, (n) => { if ((n.childNodes || []).includes(navParent)) navGrand = n })
  emit('AgentsView.tsx', 'AgentsView', render(navGrand, '    '))

  const policies = f2('view_policies__main_0.html')
  emit('PoliciesTitle.tsx', 'PoliciesTitle', render(titleSpan(policies), '    '))
  emit('PoliciesView.tsx', 'PoliciesView', render(must(findFirst(policies, (n) => hasClasses(n, ['flex', 'w-full', 'flex-col', 'gap-2', 'px-7', 'pb-6'])), 'policies view'), '    '))

  const cal = f1('cal.main.html')
  emit('CalendarTitle.tsx', 'CalendarTitle', render(titleSpan(cal), '    '))
  const calBody = must(findFirst(cal, (n) => hasClasses(n, ['flex', 'min-h-0', 'w-full', 'flex-1', 'flex-col']) && !hasClasses(n, ['items-center'])), 'cal body')
  emit('CalendarView.tsx', 'CalendarView', render(calBody, '    '))
}

// ---------------------------------------------------------------- home canvas pieces
{
  const home = f1('home.root.html')
  const needs = must(findFirst(home, (n) => hasClasses(n, ['flex', 'w-full', 'flex-col', 'gap-2']) && textOf(n).startsWith('Needs you')), 'needs you')
  emit('NeedsYou.gen.tsx', 'NeedsYouGen', render(needs, '    '))
  emit('PromptBar.tsx', 'PromptBar', render(must(findFirst(home, (n) => hasAttr(n, 'data-home-promptbar')), 'promptbar'), '    '))
  emit('PulseAvatar_admin.tsx', 'PulseAvatarAdmin', render(must(findFirst(home, (n) => hasClasses(n, ['f0c-pulse-avatar'])), 'pulse admin'), '    '))
  const rail = must(findFirst(home, (n) => hasAttr(n, 'data-home-rail')), 'rail')
  emit('RailLogo.tsx', 'RailLogo', render(elementChildren(elementChildren(rail)[0])[0], '    '))
  const userBtn = must(findFirst(rail, (n) => hasAttr(n, 'aria-label', 'Open user menu')), 'user btn')
  emit('RailAvatar_admin.tsx', 'RailAvatarAdmin', render(elementChildren(userBtn)[0], '    '))
  const panel = must(findFirst(home, (n) => hasAttr(n, 'data-home-panel')), 'panel')
  emit('SearchField.tsx', 'SearchField', render(must(findFirst(panel, (n) => hasClasses(n, ['px-3']) && n.tagName === 'div' && textOf(n).includes('Search')), 'search'), '    '))

  const emp = f2('employee_home__root_0.html')
  emit('PulseAvatar_employee.tsx', 'PulseAvatarEmployee', render(must(findFirst(emp, (n) => hasClasses(n, ['f0c-pulse-avatar'])), 'pulse emp'), '    '))
  emit('PromptBar_employee.tsx', 'PromptBarEmployee', render(must(findFirst(emp, (n) => hasAttr(n, 'data-home-promptbar')), 'emp promptbar'), '    '))
  const empUser = must(findFirst(emp, (n) => hasAttr(n, 'aria-label', 'Open user menu')), 'emp user')
  emit('RailAvatar_employee.tsx', 'RailAvatarEmployee', render(elementChildren(empUser)[0], '    '))
  const canvas = must(findFirst(emp, (n) => hasClasses(n, ['flex', 'w-[712px]', 'max-w-full', 'flex-col', 'gap-8'])), 'emp canvas')
  const blocks = elementChildren(canvas).slice(1).map((k) => render(k, '      ')).join('\n      ')
  emit('EmployeeForYou.tsx', 'EmployeeForYou', `<>\n      ${blocks}\n    </>`)
}

// ---------------------------------------------------------------- panel pieces
{
  const commsPanel = f2('chat_Encargados__data_home_panel_0.html')
  const items = findAll(commsPanel, (n) => n.tagName === 'button' && hasClasses(n, ['f0c-pressable', 'flex', 'w-full', 'items-center', 'gap-1.5']))
  const titleToId = { 'Lucía Fernandez': 'lucia', 'Pablo Navarro': 'pablo', Anuncios: 'anuncios', Incidencias: 'incidencias', 'Turno mañana': 'turno-manana', 'Tienda centro': 'tienda-centro', 'Almacén Getafe': 'almacen-getafe', Encargados: 'encargados' }
  for (const b of items) {
    const label = textOf(elementChildren(b).find((c) => c.tagName === 'span' && hasClasses(c, ['flex-1'])) || b).trim()
    const id = titleToId[label]
    if (!id) continue
    emit(`CommsLeading_${pascal(id)}.tsx`, `CommsLeading_${pascal(id)}`, render(elementChildren(b)[0], '    '))
  }
  const inboxAvatars = (root, prefix) => {
    const rows = findAll(root, (n) => hasClasses(n, ['flex', 'h-[66px]', 'w-full', 'items-center']))
    for (const r of rows) {
      const title = textOf(must(findFirst(r, (n) => n.tagName === 'span' && hasClasses(n, ['font-medium'])), 'row title')).trim()
      const av = must(elementChildren(r).find((c) => hasClasses(c, ['shrink-0']) && c.tagName === 'div'), 'row avatar')
      emit(`${prefix}_${pascal(title)}.tsx`, `${prefix}_${pascal(title)}`, render(av, '    '))
    }
  }
  inboxAvatars(f2('ticket_5__data_home_panel_0.html'), 'InboxAvatar')
  inboxAvatars(f2('employee_inbox__data_home_panel_0.html'), 'InboxAvatar')
  const cb = must(findFirst(f2('inbox_checked__data_home_panel_0.html'), (n) => hasAttr(n, 'aria-checked', 'true')), 'checked')
  emit('CheckboxChecked.gen.tsx', 'CheckboxCheckedGen', render(cb, '    '))
  const calPanel = f1('cal.panel.html')
  const meet = must(findFirst(calPanel, (n) => hasAttr(n, 'aria-label', 'Search for people')), 'meet input')
  let meetParent = null
  walk(calPanel, (n) => { if ((n.childNodes || []).includes(meet)) meetParent = n })
  emit('MeetWithField.tsx', 'MeetWithField', render(meetParent, '    '))
}

// ---------------------------------------------------------------- popover pieces
{
  const um = f2('user_menu__portal_1.html')
  const rows = findAll(um, (n) => n.tagName === 'button')
  const factorial = rows.find((r) => textOf(r).includes('Factorial'))
  emit('ModuleIcon_home.tsx', 'ModuleIconHome', render(elementChildren(factorial)[0], '    '))
  const tv = rows.find((r) => textOf(r).includes('Test de verdad'))
  emit('CompanyAvatar_TestDeVerdad.tsx', 'CompanyAvatarTestDeVerdad', render(elementChildren(tv)[0], '    '))
}

// ---------------------------------------------------------------- icon registry
{
  const files = [
    ...readdirSync(C1).filter((f) => f.endsWith('.html')).map((f) => join(C1, f)),
    ...readdirSync(C2).filter((f) => f.endsWith('.html')).map((f) => join(C2, f)),
  ]
  const icons = new Map() // key -> {name, labels, node}
  const names = new Set()
  for (const file of files) {
    const root = parseFile(file)
    const parents = new Map()
    walk(root, (n) => (n.childNodes || []).forEach((c) => parents.set(c, n)))
    walk(root, (svg) => {
      if (svg.tagName !== 'svg') return
      const cls = attr(svg, 'class') || ''
      if (!cls.startsWith('aspect-square inline-block shrink-0')) return
      // label: nearest button ancestor's aria-label or text
      let label = null
      for (let p = parents.get(svg); p; p = parents.get(p)) {
        if (p.tagName === 'button') {
          label = attr(p, 'aria-label') || textOf(p).trim().split('\n')[0].trim()
          break
        }
        if (p.tagName === 'label') { label = textOf(p).trim(); break }
      }
      if (!label) {
        for (let p = parents.get(svg); p; p = parents.get(p)) {
          const al = attr(p, 'aria-label')
          if (al) { label = al; break }
        }
      }
      if (!label) label = 'icon'
      const inner = (svg.childNodes || []).map((c) => render(c, '')).join('')
      const key = (attr(svg, 'viewBox') || '') + '|' + inner
      if (icons.has(key)) { icons.get(key).labels.add(label); return }
      let base = pascal(label.replace(/^Open "|"$/g, '')) || 'Icon'
      if (/^\d/.test(base)) base = 'I' + base
      let name = base, i = 2
      while (names.has(name)) name = `${base}${i++}`
      names.add(name)
      icons.set(key, { name, labels: new Set([label]), svg, inner })
    })
  }
  const lines = []
  for (const { name, labels, svg, inner } of icons.values()) {
    const vb = attr(svg, 'viewBox') || '0 0 24 24'
    const fill = attr(svg, 'fill')
    lines.push(`  // ${[...labels].slice(0, 6).join(' | ')}`)
    lines.push(`  ${name}: (p) => (<svg xmlns="http://www.w3.org/2000/svg" ${fill ? `fill="${fill}" ` : ''}viewBox="${vb}" {...p}>${inner}</svg>),`)
  }
  const src = `import type { SVGProps } from 'react'\n\nexport type IconComponent = (p: SVGProps<SVGSVGElement>) => React.ReactElement\n\n// Icons extracted from the original prototype's rendered DOM, keyed by the first label they appeared under.\nexport const Icons = {\n${lines.join('\n')}\n} satisfies Record<string, IconComponent>\n`
  writeFileSync(join(OUT, 'icons.gen.tsx'), "import type React from 'react'\n" + src)
  written.push('icons.gen.tsx')
  console.log('icons:', icons.size)
}
console.log('written', written.length)
