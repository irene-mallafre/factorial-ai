import type { ComponentType } from 'react'
import { CHANNELS, DIRECT_CHATS, type Chat } from '../../data/chats'
import CommsLeading_AlmacenGetafe from '../../generated/CommsLeading_AlmacenGetafe'
import CommsLeading_Anuncios from '../../generated/CommsLeading_Anuncios'
import CommsLeading_Encargados from '../../generated/CommsLeading_Encargados'
import CommsLeading_Incidencias from '../../generated/CommsLeading_Incidencias'
import CommsLeading_Lucia from '../../generated/CommsLeading_Lucia'
import CommsLeading_Pablo from '../../generated/CommsLeading_Pablo'
import CommsLeading_TiendaCentro from '../../generated/CommsLeading_TiendaCentro'
import CommsLeading_TurnoManana from '../../generated/CommsLeading_TurnoManana'
import { Icons } from '../../generated/icons.gen'
import { requestPane, useOpenPanes } from '../../state/panes'
import { PanelItem } from './PanelItem'
import { PanelSection } from './PanelSection'

const LEADING: Record<string, ComponentType> = {
  lucia: CommsLeading_Lucia,
  pablo: CommsLeading_Pablo,
  anuncios: CommsLeading_Anuncios,
  incidencias: CommsLeading_Incidencias,
  'turno-manana': CommsLeading_TurnoManana,
  'tienda-centro': CommsLeading_TiendaCentro,
  'almacen-getafe': CommsLeading_AlmacenGetafe,
  encargados: CommsLeading_Encargados,
}

function UnreadBadge({ count }: { count: number }) {
  return (
    <span className="flex min-w-5 items-center justify-center rounded-md bg-f1-background-selected-secondary px-1 text-sm font-medium text-f1-foreground-selected">
      {count}
    </span>
  )
}

function ChatRow({ chat, active }: { chat: Chat; active: boolean }) {
  const Leading = LEADING[chat.id]
  return (
    <button
      onClick={() => requestPane(chat.id)}
      className={`f0c-pressable flex w-full cursor-pointer items-center gap-1.5 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left ${active ? 'bg-f1-background-secondary' : 'hover:bg-f1-background-secondary'}`}
    >
      <Leading />
      <span className={`flex-1 truncate text-base ${chat.unread ? 'font-semibold' : 'font-medium'} text-f1-foreground`}>{chat.title}</span>
      {chat.unread !== undefined && <UnreadBadge count={chat.unread} />}
    </button>
  )
}

export function CommsPanel() {
  const open = useOpenPanes()
  const row = (chat: Chat) => <ChatRow key={chat.id} chat={chat} active={open.includes(chat.id)} />
  return (
    <div className="flex flex-col gap-3 px-3 pb-1.5">
      <div className="flex flex-col gap-0.5">
        <PanelItem icon={Icons.NewConversation} label="New conversation" />
        <PanelItem icon={Icons.NewChannel} label="New channel" />
      </div>
      <PanelSection label="Chats directos">{DIRECT_CHATS.map(row)}</PanelSection>
      <PanelSection label="Canales">{CHANNELS.map(row)}</PanelSection>
    </div>
  )
}
