import { createStore, readLocal, writeLocal } from '../lib/store'

const KEY = 'f0compose:home:preferences'

export type Connector = {
  id: string
  name: string
  description: string
  /** Custom MCP servers added by the user carry their endpoint. */
  url?: string
  custom?: boolean
}

export const BUILT_IN_CONNECTORS: Connector[] = [
  { id: 'google-drive', name: 'Google Drive', description: 'Read and save documents, sheets and folders.' },
  { id: 'slack', name: 'Slack', description: 'Read channels and post updates on your behalf.' },
  { id: 'notion', name: 'Notion', description: 'Search pages and create notes and databases.' },
  { id: 'jira', name: 'Jira', description: 'Create and update issues, read sprints.' },
  { id: 'github', name: 'GitHub', description: 'Pull requests, issues and repository activity.' },
  { id: 'figma', name: 'Figma', description: 'Read designs and comments from your files.' },
]

export type SaveLocation = 'factorial-documents' | 'google-drive' | 'notion' | 'download'

export const SAVE_LOCATIONS: { id: SaveLocation; name: string; description: string; requires?: string }[] = [
  { id: 'factorial-documents', name: 'Factorial Documents', description: 'Kept in your workspace, shared with the right people automatically.' },
  { id: 'google-drive', name: 'Google Drive', description: 'Saved to a folder in your Drive.', requires: 'google-drive' },
  { id: 'notion', name: 'Notion', description: 'Created as pages inside a Notion database.', requires: 'notion' },
  { id: 'download', name: 'Download to my computer', description: 'Nothing is stored in the workspace.' },
]

export type Preferences = {
  connected: string[]
  customConnectors: Connector[]
  saveLocation: SaveLocation
  folder: string
  askBeforeActing: boolean
  notifyWhenDone: boolean
  useWorkspaceLanguage: boolean
}

const DEFAULTS: Preferences = {
  connected: ['slack'],
  customConnectors: [],
  saveLocation: 'factorial-documents',
  folder: 'Work buddy / Drafts',
  askBeforeActing: true,
  notifyWhenDone: true,
  useWorkspaceLanguage: false,
}

function load(): Preferences {
  try {
    const raw = readLocal(KEY)
    return raw ? { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Preferences>) } : DEFAULTS
  } catch {
    return DEFAULTS
  }
}

const store = createStore<Preferences>(load())

export const usePreferences = () => store.use()

export function updatePreferences(patch: Partial<Preferences>) {
  const next = { ...store.get(), ...patch }
  writeLocal(KEY, JSON.stringify(next))
  store.set(next)
}

export function toggleConnection(id: string) {
  const { connected, saveLocation } = store.get()
  const isOn = connected.includes(id)
  const nextConnected = isOn ? connected.filter((c) => c !== id) : [...connected, id]
  // Disconnecting the destination in use falls back to the workspace.
  const location = SAVE_LOCATIONS.find((l) => l.id === saveLocation)
  const nextLocation = isOn && location?.requires === id ? 'factorial-documents' : saveLocation
  updatePreferences({ connected: nextConnected, saveLocation: nextLocation })
}

export function addCustomConnector(url: string) {
  const clean = url.trim()
  if (!clean) return
  let host = clean
  try {
    host = new URL(clean.includes('://') ? clean : `https://${clean}`).host
  } catch {
    /* keep the raw text */
  }
  const id = `mcp:${host.toLowerCase()}`
  const { customConnectors, connected } = store.get()
  if (customConnectors.some((c) => c.id === id)) return
  updatePreferences({
    customConnectors: [...customConnectors, { id, name: host, description: clean, url: clean, custom: true }],
    connected: [...connected, id],
  })
}

export function removeCustomConnector(id: string) {
  const { customConnectors, connected } = store.get()
  updatePreferences({ customConnectors: customConnectors.filter((c) => c.id !== id), connected: connected.filter((c) => c !== id) })
}

export const saveLocationLabel = (p: Preferences) => SAVE_LOCATIONS.find((l) => l.id === p.saveLocation)?.name ?? 'Factorial Documents'
