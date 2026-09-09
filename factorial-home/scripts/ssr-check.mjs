import { createServer } from 'vite'
const root = '/Users/irene.mallafre/Desktop/Repositories/factorial-ai-explorations/factorial-home'
const server = await createServer({ root, configFile: root + '/vite.config.ts', server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { render } = await server.ssrLoadModule('/scripts/ssr-entry.tsx')
const has = (html, s) => html.includes(s)
const people = render('/p/home?view=people', false)
const peopleAgent = render('/p/home?view=people', true)
const home = render('/p/home', false).replace(/<!-- -->/g, '')
const activity = render('/p/home?view=activity', false)
const activityAgent = render('/p/home?view=activity', true)
const prefs = render('/p/home?view=preferences', false)
const setupMode = render('/p/home', false, { setupMode: true }).replace(/<!-- -->/g, '')
const onboarded = render('/p/home', true, { setup: true }).replace(/<!-- -->/g, '')
const onboardedEmployee = render('/p/home', false, { setup: true, persona: 'employee' }).replace(/<!-- -->/g, '')
console.log(JSON.stringify({
  peopleHasBuddyButton: has(people, 'aria-label="Work buddy"'),
  peopleButtonLabelVisible: /My agent<\/span>/.test(people),
  peopleHasAskOne: has(people, 'Ask One'),
  peopleHasAnnouncements: has(people, 'aria-label="Announcements"'),
  panelClosedByDefault: !has(people, 'data-one-panel'),
  panelOpens: has(peopleAgent, 'data-one-panel="true"'),
  panelHeadline: (peopleAgent.match(/f0c-one-headline[^>]*>([^<]*)/) || [])[1],
  panelHasChips: (peopleAgent.match(/f0c-agent-chip/g) || []).length,
  panelHasComposer: has(peopleAgent, 'aria-label="Ask my agent"'),
  panelTagline: has(peopleAgent, 'Factorial ONE'),
  homeHasWidgets: has(home, 'data-window-stack="right"'),
  panelItemActivity: has(home, '>Activity</span>') && !has(home, '>Agents</span>'),
  activityTitle: (activity.match(/truncate text-base font-medium text-f1-foreground">([^<]*)</) || [])[1],
  activityColumns: [...activity.matchAll(/aria-label="([A-Za-z ]+, \d+)"/g)].map((m) => m[1]),
  activityCards: (activity.match(/<article /g) || []).length,
  activityActions: [...activity.matchAll(/<article [\s\S]*?<\/article>/g)].flatMap((a) => [...a[0].matchAll(/aria-label="([^"]*)" role="button"/g)].map((m) => m[1])),
  activityFilter: [...activity.matchAll(/role="radio" aria-checked="(true|false)"[^>]*>([^<]*)</g)].map((m) => m[2] + (m[1] === 'true' ? '*' : '')),
  activityMisc: (activity.match(/f0c-activity-misc/g) || []).length,
  activityTags: Object.fromEntries(['people','time','pay','hiring','operations','misc'].map((c) => [c, (activity.match(new RegExp('f0c-activity-tag-' + c, 'g')) || []).length])),
  activityAgentNames: /Timesheet Closer|Screening Agent|Expense Auditor|Shift Replanner|Orchestrator|Chaser|Approver/.test(activity),
  activityNoPromptBar: !has(activity, 'data-home-promptbar'),
  activityAgentPanel: has(activityAgent, 'data-one-panel="true"'),
  prefsPanelItem: has(home, '>Preferences</span>'),
  prefsTitle: (prefs.match(/p-\[14px\][\s\S]{0,3000}?text-f1-foreground">([^<]*)</) || [])[1],
  prefsSections: [...prefs.matchAll(/text-base text-f1-foreground font-medium text-left">([^<]*)</g)].map((m) => m[1]),
  prefsConnectors: [...prefs.matchAll(/truncate text-base font-medium text-f1-foreground">([^<]*)<\/span><span class="truncate text-sm/g)].map((m) => m[1]),
  prefsConnectButtons: [...prefs.matchAll(/aria-label="(Connect|Disconnect|Add|Remove)" /g)].map((m) => m[1]),
  prefsLocations: (prefs.match(/role="radio"/g) || []).length,
  prefsSelected: (prefs.match(/aria-checked="true"/g) || []).length,
  prefsSwitches: (prefs.match(/role="switch"/g) || []).length,
  prefsNoPromptBar: !has(prefs, 'data-home-promptbar'),
  chatsSection: has(home, 'Chats and tasks'),
  chatsRows: [...home.matchAll(/title="([^"]*)" class="f0c-pressable flex w-full cursor-pointer items-center gap-1.5[^"]*"><svg[\s\S]*?<span class="truncate text-base font-medium text-f1-foreground">([^<]*)</g)].map((m) => m[2] + ' · ' + m[1]),
  chatsGroups: [...home.matchAll(/text-sm text-f1-foreground-tertiary">([^<]*)</g)].map((m) => m[1]),
  fab: (home.match(/aria-label="(Meet your work buddy|Set up[^"]*)"/) || [])[1],
  buddyButton: /aria-label="Work buddy"/.test(people),
  buddyRobots: (home.match(/f0c-buddy-glyph/g) || []).length,
  railHomeIsRobot: /aria-label="Home"[^>]*data-icon-motion="bot"/.test(home),
  fabAfterSetup: (onboarded.match(/aria-label="(Set up[^"]*)"/) || [])[1],
  setupCaption: /Checking in/.test(onboarded) && !/is set up/.test(onboarded),
  connectedTools: [...onboarded.matchAll(/class="f0c-tool f0c-tool-[a-z0-9]+"[^>]*title="([^"]+)"/g)].map((m) => m[1]),
  toolIcons: (onboarded.match(/f0c-tool-img/g) || []).length,
  buddyAvatarInGreeting: /f0c-buddy-mark-xl/.test(onboarded) && !/f0c-pulse-avatar/.test(onboarded),
  suggestionsHeader: /Suggested by Factorio/.test(onboarded),
  payrollCard: /check your payroll every day/.test(onboarded) && /f0c-suggest-window/.test(onboarded) && /€2,845.42/.test(onboarded),
  buddyTasksInNeedsYou: [...onboarded.matchAll(/title="Raised by Factorio"[\s\S]*?shrink-0 text-base font-medium text-f1-foreground">([^<]*)</g)].map((m) => m[1]),
  pencil: /aria-label="Edit home prompt"/.test(home),
  panelOrder: ['Preferences', 'Pinned', 'Routines', 'Reports', 'Chats and tasks'].map((l) => home.indexOf(l)).every((v, i, a) => v > -1 && (i === 0 || v > a[i - 1])),
  collapsedSections: (home.match(/aria-expanded="false"/g) || []).length,
  agentPanelNamed: /Hi Alicia, I(&#x27;|')m Factorio/.test(onboarded),
  employeePayrollCard: /check your payroll every day/.test(onboardedEmployee),
  payslipInMenu: /Payslip/.test(onboardedEmployee),
  noSuggestionsBeforeSetup: !/Suggested by/.test(home),
  setupModeEyebrow: (setupMode.match(/f0c-su-eyebrow">([^<]*)</) || [])[1],
  setupModeSegments: (setupMode.match(/f0c-su-seg /g) || []).length,
  setupModeQuestion: (setupMode.match(/f0c-su-title">([^<]*)</) || [])[1],
  setupModeAside: /f0c-su-aside/.test(setupMode) && /Work buddy/.test(setupMode),
  setupModePanelClosed: /data-home-panel="true"[^>]*style="width:0px"/.test(setupMode) || /data-home-panel="true"[^>]*inert=""/.test(setupMode),
  setupModeNoWidgets: !/data-window-stack="right"/.test(setupMode),
  setupModeNoUtilities: !/aria-label="Marketplace"/.test(setupMode) && !/aria-label="Open user menu"/.test(setupMode),
  setupModeRail: ['Home', 'Comms', 'Inbox', 'Cal', 'Hub'].every((l) => new RegExp(`aria-label="${l}"`).test(setupMode)),
  setupModeNoHeaderControls: !/Open widgets menu/.test(setupMode) && !/Clock in — pending/.test(setupMode),
  setupModeNoFab: !/Meet your work buddy/.test(setupMode),
  setupModeNoTasks: !/Needs you/.test(setupMode),
  routinesBeforeSetup: /None yet\. Set up your buddy to get routines\./.test(home),
  routinesAfterSetup: [...onboarded.matchAll(/title="([^"]*)" class="f0c-pressable flex w-full cursor-pointer items-center gap-1.5 rounded-\[10px\] py-1.5 pl-1.5 pr-2 text-left hover:bg-f1-background-secondary"><svg/g)].map((m) => m[1]),
  routinesActiveDots: (onboarded.match(/f0c-history-dot-running/g) || []).length,
  homeBuddyButtonAbsent: !has(home, 'aria-label="Work buddy"'),
  sizes: { people: people.length, peopleAgent: peopleAgent.length },
}, null, 1))
await server.close()
