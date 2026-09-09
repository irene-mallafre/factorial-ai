import { useState } from 'react'
import { Icons } from '../../generated/icons.gen'
import {
  BUILT_IN_CONNECTORS, SAVE_LOCATIONS, addCustomConnector, removeCustomConnector, toggleConnection, updatePreferences, usePreferences, type Connector,
} from '../../state/preferences'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Switch } from '../ui/Switch'

const CARD = 'overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-[0_2px_20px_0_rgba(13,22,37,0.04)]'
const ROW = 'flex items-center gap-3 px-3 py-3'
const DIVIDER = 'border-0 border-t border-solid border-f1-border-secondary'

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-base text-f1-foreground font-medium text-left">{title}</p>
      <p className="text-base text-f1-foreground-secondary">{description}</p>
    </div>
  )
}

function LetterMark({ name }: { name: string }) {
  return (
    <span
      className="relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary size-8 rounded-sm text-sm bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground"
      aria-hidden="true"
    >
      {name.trim().charAt(0).toUpperCase()}
    </span>
  )
}

function ConnectorRow({ connector, connected, first }: { connector: Connector; connected: boolean; first: boolean }) {
  return (
    <div className={`${ROW} ${first ? '' : DIVIDER}`}>
      <LetterMark name={connector.name} />
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-base font-medium text-f1-foreground">{connector.name}</span>
        <span className="truncate text-sm text-f1-foreground-secondary">{connector.description}</span>
      </div>
      <span className="flex shrink-0 items-center gap-1 text-sm text-f1-foreground-secondary">
        <span className={`f0c-pref-status ${connected ? 'f0c-pref-status-on' : ''}`} aria-hidden="true"></span>
        {connected ? 'Connected' : 'Not connected'}
      </span>
      {connector.custom ? (
        <Button variant="ghost" size="sm" label="Remove" onClick={() => removeCustomConnector(connector.id)} />
      ) : (
        <Button variant={connected ? 'ghost' : 'outline'} size="sm" label={connected ? 'Disconnect' : 'Connect'} onClick={() => toggleConnection(connector.id)} />
      )}
    </div>
  )
}

function Connections() {
  const prefs = usePreferences()
  const [url, setUrl] = useState('')
  const all = [...BUILT_IN_CONNECTORS, ...prefs.customConnectors]
  const submit = () => {
    addCustomConnector(url)
    setUrl('')
  }
  return (
    <section className="flex w-full flex-col gap-3">
      <SectionHeader title="Connections" description="MCP servers your work buddy can use to read from and act on other tools. Each one asks for your permission before its first action." />
      <div className={CARD}>
        {all.map((c, i) => (
          <ConnectorRow key={c.id} connector={c} connected={prefs.connected.includes(c.id)} first={i === 0} />
        ))}
        <form
          className={`${ROW} ${DIVIDER}`}
          onSubmit={(e) => {
            e.preventDefault()
            submit()
          }}
        >
          <span className="flex size-8 shrink-0 items-center justify-center">
            <Icon icon={Icons.New} size="md" color="secondary" />
          </span>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            aria-label="MCP server URL"
            placeholder="Add a custom MCP server, e.g. https://mcp.example.com/sse"
            className="h-8 min-w-0 flex-1 rounded-md border border-solid border-f1-border-secondary bg-transparent px-3 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          />
          <Button type="submit" variant="outline" size="sm" label="Add" disabled={url.trim().length === 0} />
        </form>
      </div>
    </section>
  )
}

function SaveLocation() {
  const prefs = usePreferences()
  return (
    <section className="flex w-full flex-col gap-3">
      <SectionHeader title="Files created by your work buddy" description="Where drafts, exports and documents your work buddy produces are saved by default. You can still choose another place for a single file." />
      <div className="f0c-pref-options" role="radiogroup" aria-label="Default save location">
        {SAVE_LOCATIONS.map((loc) => {
          const missing = loc.requires && !prefs.connected.includes(loc.requires)
          const selected = prefs.saveLocation === loc.id
          return (
            <button
              key={loc.id}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={!!missing}
              onClick={() => updatePreferences({ saveLocation: loc.id })}
              className={`f0c-pref-option ${selected ? 'f0c-pref-option-selected' : ''}`}
            >
              <span className="f0c-pref-radio" aria-hidden="true"></span>
              <span className="flex min-w-0 flex-1 flex-col text-left">
                <span className="truncate text-base font-medium text-f1-foreground">{loc.name}</span>
                <span className="text-sm text-f1-foreground-secondary">{missing ? `Connect ${SAVE_LOCATIONS.find((l) => l.id === loc.id)?.name} above to use it.` : loc.description}</span>
              </span>
            </button>
          )
        })}
      </div>
      <div className={CARD}>
        <label className={ROW}>
          <span className="flex size-8 shrink-0 items-center justify-center">
            <Icon icon={Icons.Documents} size="md" color="secondary" />
          </span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="text-base font-medium text-f1-foreground">Default folder</span>
            <span className="text-sm text-f1-foreground-secondary">Created if it does not exist yet.</span>
          </span>
          <input
            value={prefs.folder}
            onChange={(e) => updatePreferences({ folder: e.target.value })}
            aria-label="Default folder"
            className="h-8 w-[240px] min-w-0 rounded-md border border-solid border-f1-border-secondary bg-transparent px-3 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          />
        </label>
      </div>
    </section>
  )
}

function Behaviour() {
  const prefs = usePreferences()
  const rows: { key: 'askBeforeActing' | 'notifyWhenDone' | 'useWorkspaceLanguage'; title: string; description: string }[] = [
    { key: 'askBeforeActing', title: 'Ask before taking actions', description: 'Your work buddy proposes and waits for your confirmation before sending, approving or changing anything.' },
    { key: 'notifyWhenDone', title: 'Notify me when a task finishes', description: 'A note in your Inbox when something you delegated is done or needs you.' },
    { key: 'useWorkspaceLanguage', title: 'Reply in the workspace language', description: 'Answer in Spanish instead of the language you write in.' },
  ]
  return (
    <section className="flex w-full flex-col gap-3">
      <SectionHeader title="Work buddy behaviour" description="How your work buddy works with you." />
      <div className={CARD}>
        {rows.map((row, i) => (
          <div key={row.key} className={`${ROW} ${i === 0 ? '' : DIVIDER}`}>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-base font-medium text-f1-foreground">{row.title}</span>
              <span className="text-sm text-f1-foreground-secondary">{row.description}</span>
            </span>
            <Switch checked={prefs[row.key]} onCheckedChange={(v) => updatePreferences({ [row.key]: v })} label={row.title} />
          </div>
        ))}
      </div>
    </section>
  )
}

/** Preferences screen: connections, default file destination and agent behaviour. */
export function PreferencesScreen() {
  return (
    <div className="home-canvas-scroll flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
      <div className="mx-auto flex w-[712px] max-w-full flex-col gap-8 px-4 pb-8 pt-2">
        <Connections />
        <SaveLocation />
        <Behaviour />
      </div>
    </div>
  )
}

export function PreferencesTitle() {
  return (
    <span className="flex min-w-0 items-center gap-2">
      <Icon icon={Icons.ScreenSettings} size="md" color="default" />
      <span className="truncate text-base font-medium text-f1-foreground">Preferences</span>
    </span>
  )
}
