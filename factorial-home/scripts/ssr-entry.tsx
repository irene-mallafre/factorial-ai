// Dev-only: renders the Home page to a string so its markup can be checked without a browser.
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import { closeAgentPanel, openAgentPanel } from '../src/state/agentPanel'
import { closeSetupMode, openOnboarding, resetAgentSetup, saveAgentSetup } from '../src/state/agentSetup'
import { setPersona, type Persona } from '../src/state/persona'

export function render(path: string, agentOpen: boolean, opts: { persona?: Persona; setup?: boolean; setupMode?: boolean } = {}) {
  if (opts.setupMode) openOnboarding()
  else closeSetupMode()
  if (agentOpen) openAgentPanel()
  else closeAgentPanel()
  setPersona(opts.persona ?? 'admin')
  if (opts.setup) saveAgentSetup({ name: 'Factorio', callMe: '', tone: 'direct', dayShape: ['early', 'deep'], workStart: '08:30', workEnd: '19:00', watch: ['time-off', 'recruiting', 'one-on-ones'], tools: { factorial: true, calendar: true, slack: true, mail: false, docs: false, bi: false }, homePrompt: '', payslipSuggestion: 'pending', completed: true, seen: true })
  else resetAgentSetup()
  return renderToString(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/p/home" element={<HomePage />} />
      </Routes>
    </MemoryRouter>,
  )
}
