export type Chat = {
  id: string
  title: string
  kind: 'dm' | 'channel'
  emoji?: string
  unread?: number
}

export const CHATS: Chat[] = [
  { id: 'lucia', title: 'Lucía Fernandez', kind: 'dm', unread: 1 },
  { id: 'pablo', title: 'Pablo Navarro', kind: 'dm' },
  { id: 'anuncios', title: 'Anuncios', kind: 'channel', emoji: '📰', unread: 2 },
  { id: 'incidencias', title: 'Incidencias', kind: 'channel', emoji: '🚨' },
  { id: 'turno-manana', title: 'Turno mañana', kind: 'channel', emoji: '⭐', unread: 3 },
  { id: 'tienda-centro', title: 'Tienda centro', kind: 'channel', emoji: '🛍️' },
  { id: 'almacen-getafe', title: 'Almacén Getafe', kind: 'channel', emoji: '📦' },
  { id: 'encargados', title: 'Encargados', kind: 'channel', emoji: '🌡️' },
]

export const CHAT_BY_ID = Object.fromEntries(CHATS.map((c) => [c.id, c])) as Record<string, Chat>
export const DIRECT_CHATS = CHATS.filter((c) => c.kind === 'dm')
export const CHANNELS = CHATS.filter((c) => c.kind === 'channel')
