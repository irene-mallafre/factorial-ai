import { useState } from 'react'
import { closePromptEditor, defaultHomePrompt, saveAgentSetup, useAgentSetup } from '../../state/agentSetup'
import { usePersona } from '../../state/persona'
import { BuddyMark } from '../agent/BuddyMark'
import { Button } from '../ui/Button'

/** The prompt that configures the Home, editable in place. */
export function HomePromptEditor() {
  const setup = useAgentSetup()
  const persona = usePersona()
  const initial = setup.homePrompt || defaultHomePrompt(setup, persona)
  const [text, setText] = useState(initial)
  const dirty = text !== initial
  return (
    <div className="f0c-prompt-editor f0c-card-in" role="region" aria-label="Home prompt">
      <div className="flex items-center gap-2">
        <BuddyMark size="sm" />
        <span className="text-base font-medium text-f1-foreground">How {setup.name} builds this page</span>
        <span className="ml-auto text-sm text-f1-foreground-tertiary">Plain language · saved for you only</span>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={7}
        aria-label="Home prompt"
        className="f0c-prompt-textarea"
        spellCheck={false}
      />
      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" size="sm" label="Reset to default" onClick={() => setText(defaultHomePrompt(setup, persona))} />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" label="Cancel" onClick={closePromptEditor} />
          <Button
            variant="default"
            size="sm"
            label="Save"
            disabled={!dirty}
            onClick={() => {
              saveAgentSetup({ ...setup, homePrompt: text.trim() }, { quiet: true })
              closePromptEditor()
            }}
          />
        </div>
      </div>
    </div>
  )
}
