import type { ComponentType } from 'react'
import type { Chat } from '../../data/chats'
import ChatCall_TurnoManana from '../../generated/ChatCall_TurnoManana'
import ChatMessages_AlmacenGetafe from '../../generated/ChatMessages_AlmacenGetafe'
import ChatMessages_Anuncios from '../../generated/ChatMessages_Anuncios'
import ChatMessages_Encargados from '../../generated/ChatMessages_Encargados'
import ChatMessages_Incidencias from '../../generated/ChatMessages_Incidencias'
import ChatMessages_Lucia from '../../generated/ChatMessages_Lucia'
import ChatMessages_Pablo from '../../generated/ChatMessages_Pablo'
import ChatMessages_TiendaCentro from '../../generated/ChatMessages_TiendaCentro'
import ChatMessages_TurnoManana from '../../generated/ChatMessages_TurnoManana'
import { useSent } from '../../state/chat'
import { ChatComposer } from './ChatComposer'

const MESSAGES: Record<string, ComponentType> = {
  lucia: ChatMessages_Lucia,
  pablo: ChatMessages_Pablo,
  anuncios: ChatMessages_Anuncios,
  incidencias: ChatMessages_Incidencias,
  'turno-manana': ChatMessages_TurnoManana,
  'tienda-centro': ChatMessages_TiendaCentro,
  'almacen-getafe': ChatMessages_AlmacenGetafe,
  encargados: ChatMessages_Encargados,
}

/** Conversation body: the seeded thread, anything sent in this session, the call banner, and the composer. */
export function ChatWindow({ chat }: { chat: Chat }) {
  const Messages = MESSAGES[chat.id]
  const sent = useSent(chat.id)
  return (
    <div className="f0c-swap-in flex min-h-0 flex-1 flex-col" key={chat.id}>
      <div className="home-window-scroll min-h-0 flex-1 overflow-auto px-3 pt-3">
        <div className="mx-auto flex w-full max-w-[712px] flex-col gap-5 px-1">
          <Messages />
          {sent.map((m) => (
            <div key={m.id} className="flex flex-col items-end gap-2">
              <div className="w-[77%] min-w-0 rounded-xl bg-f1-background-tertiary px-4 py-3">
                <div className="">
                  <p className="text-base text-f1-foreground">{m.body}</p>
                </div>
              </div>
            </div>
          ))}
          {chat.id === 'turno-manana' && <ChatCall_TurnoManana />}
        </div>
      </div>
      <div className="shrink-0 px-3 pb-3 pt-5">
        <div className="mx-auto w-full max-w-[712px]">
          <ChatComposer chat={chat} />
        </div>
      </div>
    </div>
  )
}
