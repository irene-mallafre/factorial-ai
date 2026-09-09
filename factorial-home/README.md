# factorial-home

A React + Vite reproduction of the f0compose "Home" prototype at
`https://my-project-kappa-umber.vercel.app/p/home`, including its navigation,
content, styles and the interactions that open deeper views.

## Run

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:5173/p/home` (any other path redirects there).

Other scripts: `pnpm build` (production build to `dist/`), `pnpm preview`,
`pnpm lint`.

## What is reproduced

- **Rail navigation**: Home, Comms, Inbox, Cal and Hub swap the side panel.
  Re-selecting the active item (or the "Collapse panel" button) collapses the
  panel. The selected section and open/closed state persist in localStorage
  under the same keys as the original. Marketplace and Security are inert, as
  in the original.
- **Screens** (URL `?view=…`): Cal → the week calendar; Hub → People → the
  Organization table; Home panel → Activity and Documents (Policies). New clears
  the screen. Screens hide the widget column, like the original.
- **Comms**: clicking a conversation opens it as a window in the left column,
  with the seeded thread, a working composer (Enter sends, Shift+Enter breaks
  the line) and, for "Turno mañana", the call banner. Only one conversation is
  open at a time; clicking the active one closes it.
- **Inbox**: clicking a ticket opens its detail window. Alone it fills the
  canvas; next to a conversation it docks in the left column. The row checkbox
  completes/reopens the item.
- **Needs you** (Home): opening a card only logs `open <id>` to the console,
  which is exactly what the deployed prototype does.
- **Widgets**: the header menu adds/removes Anniversaries, Events and Insights
  (Activity, Opportunities and Links are "soon" and inert); the clock button
  toggles the Clock in widget, which floats (draggable) or docks and runs a
  live timer once you clock in. Every widget can be maximized, restored and
  closed. Columns and window heights are resizable by dragging the handles,
  and a column overlays the canvas when it no longer fits.
- **User menu**: company switch, "Discover Factorial", view as admin/employee
  (a different Home, Hub, Inbox and prompt bar), light/dark theme (persisted),
  Settings (inert) and "Back to catalog" (goes to `/`, which redirects home
  here because the catalog is not part of this app).
- **Styles**: the original design-system CSS (Tailwind utilities plus the f0
  token set) pruned to the rules the captured states use, including dark mode,
  the prototype's own inline styles, the Inter web fonts and the favicon.

Not reproduced: the ONE chat engine behind the prompt bar and the Insights
"Ask One" buttons (typing works, sending does nothing), and the agent brief
flow inside the Agents screen. Everything else on those screens renders as in
the original.

## Customisations on top of the original

- **Work buddy button** (People screen header): the original's "Ask One" orb is
  replaced by the robot icon with the label "Work buddy" (or the chosen name).
  Like Gemini in Google Meet, a click opens a compact ask box under the button
  with suggested prompts and an "Ask …" field; picking a prompt or sending opens
  the full side panel with that conversation, and the button then closes it. It opens a branded side panel in
  the slot the original uses for its conversation panel: a ONE-gradient agent
  mark, a personal greeting, suggestion chips, a composer with keyword-based
  canned replies, and light/dark support. Code lives in
  `src/components/agent/` and `src/styles/agent.css`. Only Tailwind utilities
  that the captured pages used exist in this build, so new UI is styled with
  plain CSS classes.
- **Activity** (Home panel, replaces "Agents", URL `?view=activity`): a board of
  what the system is doing, in five columns (Scheduled, Running, Needs you,
  Stalled, Done). Nothing is attributed to a named agent: the AI is part of the
  system. Every card carries a category tag: People, Time, Pay, Hiring and
  Operations for work, and Miscellaneous for anything not connected to the job
  (Amazon discounts, Social Security notifications, a SEUR shipping label,
  flight offers to China on time-off mornings), which also gets a soft lavender
  wash. A chip filter above the board narrows to one category, and the column
  counts follow it. Cards use the app's own surfaces and type (white bordered cards,
  Inter, f0 outline buttons), with a status dot per column. Card actions
  (Choose an option, Review 6, Escalate…) hand the item to My agent, which
  opens with a tailored reply. Data in `src/data/activity.ts`, UI in
  `src/components/activity/`, layout in `src/styles/activity.css`.
- **Preferences** (Home panel and the user menu's Settings, URL
  `?view=preferences`): connect and disconnect MCP servers (six built in, plus
  custom servers by URL), choose where files created by My agent are saved by
  default (Factorial Documents, Google Drive, Notion or download; destinations
  that need a connection unlock when it is connected) with a default folder,
  and agent behaviour switches. Everything persists in localStorage and My
  agent quotes the chosen destination when it drafts something. State in
  `src/state/preferences.ts`, UI in `src/components/preferences/`.
- **Chats and tasks** (Home panel, under Pinned): a mocked history of
  conversations with the agent in one list, each with a status dot (running, waiting for you, done). Selecting one opens My agent with
  that thread loaded; selecting it again closes the panel. Data in
  `src/data/conversations.ts`.
- **Work buddy** (the personal agent) and its first-time setup: the floating
  "Meet your work buddy" button puts the Home into setup mode. Only the main
  rail (Home, Comms, Inbox, Cal, Hub) stays; the side panel, widgets, header
  controls and task list step aside. The canvas becomes a centred question
  column (max 600px) with a mono eyebrow (`Set up your buddy · 01 / 05`), a
  five-segment progress bar and one question at a time, plus a 290px summary
  aside that fills in as you answer. Grays only, small type. Questions: how
  the buddy should call you, the buddy's name (Factorio, or "Surprise me"),
  how your day looks (multi-select chips with mono time notes, working hours,
  `CET · Mon–Fri`), what to keep an eye on, and which tools to connect (rows
  with a glyph, description and a switch; Factorial is always on). Finishing
  turns the buddy on: the navigation and widgets animate back in, a
  "Factorio is live" toast appears at the bottom, the buddy takes the name and
  greets you by the name you chose, the tasks it raises from the areas you
  watch join the Needs you list (same card style, marked with its mark), a
  "Suggested by …" card proposes adding the Payslip widget with the widget
  previewed inside it (Add to my Home / Not now), and the Home greeting shows
  the "Checking in" line with connected-tool icons. A pencil next to the clock
  button opens the plain-language prompt that configures the Home, editable and
  saved per person. State in `src/state/agentSetup.ts`, UI in
  `src/components/onboarding/SetupExperience.tsx`.
- **Routines, Reports and Chats and tasks** in the Home panel are collapsible
  sections (Pinned sits right under Preferences). They open on load and fold
  away with a smooth animation, and stay collapsed by default. Routines and
  Reports read "None yet" until the buddy is set up, then hold default items
  (Morning brief, Time-off sweep; Weekly team pulse, Hiring pipeline) with a dot
  showing they are active. Data in `src/data/routines.ts`.
- `scripts/ssr-check.mjs` server-renders the page with Vite to check markup
  when no browser is available.

## Project layout

```
src/
  main.tsx                     entry; loads the two stylesheets
  App.tsx                      router (/p/home, everything else redirects there)
  pages/HomePage.tsx           canvas + window columns, overlay math, pane requests
  state/                       persona, theme, clock, open panes, chat drafts
  data/                        chats, inbox items, greetings
  hooks/useWindowStack.ts      open/close/maximize/float/resize state for a column
  components/
    nav/                       rail, side panels, user menu
    canvas/                    canvas header, Home content, Needs you
    panes/                     conversation and ticket window specs
    widgets/                   widget registry, Clock in, Communities, widgets menu
    windows/                   window frame, column, maximized window, floating panel
    ui/                        Button, Icon, Checkbox, menu rows
  generated/                   static markup captured from the original (see below)
  styles/
    f0.css                     pruned design-system CSS (+ @font-face for Inter)
    prototype.css              the prototype's inline style blocks
public/
  fonts/                       Inter woff files
  favicon.svg
```

## How the markup was produced

`scripts/` holds the one-off tooling used to build the components from the
live page and is not part of the app:

- `gen2.mjs` (with `lib/jsx.mjs`) converts captured HTML fragments of every
  state (chat windows, tickets, widgets, screens, popovers, employee persona)
  into the static components under `src/generated/`, and extracts every icon
  into `icons.gen.tsx`.
- `wire2.py` adds the click handlers and first-mount entrance animation to the
  generated Needs-you block.
- `compare.js` canonicalises a DOM subtree so the clone can be diffed against
  the captured originals in the browser; that diff was run for every state
  listed above and only the randomly chosen greeting differs.

The stylesheet in `src/styles/f0.css` was produced by loading the original in
each state (light and dark) and keeping only the CSS rules whose selectors
matched the rendered DOM, with pseudo-classes such as `:hover` stripped before
matching so interaction styles survive.
