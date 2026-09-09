import { createStore } from '../lib/store'

export type SentMessage = { id: string; body: string }

const drafts = createStore<Record<string, string>>({})
const sent = createStore<Record<string, SentMessage[]>>({})
const EMPTY: SentMessage[] = []

export const useDraft = (chatId: string) => drafts.use()[chatId] ?? ''
export const useSent = (chatId: string) => sent.use()[chatId] ?? EMPTY

export function setDraft(chatId: string, value: string) {
  drafts.set({ ...drafts.get(), [chatId]: value })
}

export function sendDraft(chatId: string, value: string) {
  if (!value.trim()) return
  const prev = sent.get()[chatId] ?? EMPTY
  sent.set({ ...sent.get(), [chatId]: [...prev, { id: `${chatId}-sent-${prev.length}`, body: value }] })
  drafts.set({ ...drafts.get(), [chatId]: '' })
}
