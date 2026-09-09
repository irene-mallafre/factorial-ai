import { createStore } from '../lib/store'

/** Whether the work buddy side panel is open. */
const agentPanel = createStore<boolean>(false)

export const useAgentPanel = () => agentPanel.use()
export const openAgentPanel = () => agentPanel.set(true)
export const toggleAgentPanel = () => agentPanel.set(!agentPanel.get())

/** A message queued from elsewhere in the app (e.g. an activity card action) for the panel to send. */
const pendingPrompt = createStore<{ id: number; text: string } | null>(null)
let promptId = 0

export const usePendingPrompt = () => pendingPrompt.use()
export const clearPendingPrompt = () => pendingPrompt.set(null)

/** Open the panel and hand it a message to send on the user's behalf. */
export function askAgent(text: string) {
  pendingPrompt.set({ id: ++promptId, text })
  agentPanel.set(true)
}

/** The conversation from "Chats and tasks" currently loaded in the panel, if any. */
const activeConversation = createStore<string | null>(null)

export const useActiveConversation = () => activeConversation.use()

/** Open the panel on a previous or ongoing conversation. Selecting the one already shown closes the panel. */
export function openConversation(id: string) {
  if (agentPanel.get() && activeConversation.get() === id) {
    agentPanel.set(false)
    return
  }
  activeConversation.set(id)
  agentPanel.set(true)
}

export function closeAgentPanel() {
  agentPanel.set(false)
}

/** Called by the panel when the user starts something new, so no history row shows as active. */
export function detachConversation() {
  if (activeConversation.get() !== null) activeConversation.set(null)
}
