import type { ComponentType } from 'react'
import { CHAT_BY_ID } from '../../data/chats'
import ChatLeading_AlmacenGetafe from '../../generated/ChatLeading_AlmacenGetafe'
import ChatLeading_Anuncios from '../../generated/ChatLeading_Anuncios'
import ChatLeading_Encargados from '../../generated/ChatLeading_Encargados'
import ChatLeading_Incidencias from '../../generated/ChatLeading_Incidencias'
import ChatLeading_Lucia from '../../generated/ChatLeading_Lucia'
import ChatLeading_Pablo from '../../generated/ChatLeading_Pablo'
import ChatLeading_TiendaCentro from '../../generated/ChatLeading_TiendaCentro'
import ChatLeading_TurnoManana from '../../generated/ChatLeading_TurnoManana'
import Ticket_ContractAddendum from '../../generated/Ticket_ContractAddendum'
import Ticket_ContractRenewals from '../../generated/Ticket_ContractRenewals'
import Ticket_PromotionMarc from '../../generated/Ticket_PromotionMarc'
import Ticket_Q2Bonus from '../../generated/Ticket_Q2Bonus'
import Ticket_RecruitmentPick from '../../generated/Ticket_RecruitmentPick'
import Ticket_ShiftSwap from '../../generated/Ticket_ShiftSwap'
import Ticket_TimeOffBatch from '../../generated/Ticket_TimeOffBatch'
import Ticket_WorkshopBudget from '../../generated/Ticket_WorkshopBudget'
import { Icons } from '../../generated/icons.gen'
import { isTicketKey, ticketIdFromKey } from '../../state/panes'
import { Button } from '../ui/Button'
import type { WindowSpec } from '../windows/types'
import { ChatWindow } from './ChatWindow'

export const PANE_PREFIX = 'pane'
export const PANE_COLUMN_WIDTH = 428

const TICKETS: Record<string, ComponentType> = {
  'time-off-batch': Ticket_TimeOffBatch,
  'recruitment-pick': Ticket_RecruitmentPick,
  'contract-renewals': Ticket_ContractRenewals,
  'promotion-marc': Ticket_PromotionMarc,
  'q2-bonus': Ticket_Q2Bonus,
  'workshop-budget': Ticket_WorkshopBudget,
  'contract-addendum': Ticket_ContractAddendum,
  'shift-swap': Ticket_ShiftSwap,
}

const LEADING: Record<string, ComponentType> = {
  lucia: ChatLeading_Lucia,
  pablo: ChatLeading_Pablo,
  anuncios: ChatLeading_Anuncios,
  incidencias: ChatLeading_Incidencias,
  'turno-manana': ChatLeading_TurnoManana,
  'tienda-centro': ChatLeading_TiendaCentro,
  'almacen-getafe': ChatLeading_AlmacenGetafe,
  encargados: ChatLeading_Encargados,
}

/** Window chrome + content for a left-hand pane key ("ticket:<id>" or a chat id). */
export function paneSpec(key: string): WindowSpec {
  if (isTicketKey(key)) {
    const Ticket = TICKETS[ticketIdFromKey(key)]
    return {
      title: 'Ticket',
      restoreIcon: Icons.DockClockIn,
      actions: <Button variant="ghost" size="md" icon={Icons.ScreenOptions} hideLabel label="Ticket options" />,
      content: <Ticket />,
      fills: true,
    }
  }
  const chat = CHAT_BY_ID[key]
  const Leading = LEADING[key]
  return {
    title: chat.title,
    leading: <Leading />,
    actions: (
      <>
        <Button variant="ghost" size="md" icon={Icons.ScreenOptions} hideLabel label={`Options for ${chat.title}`} />
        <Button variant="ghost" size="md" icon={Icons.StartACallInAlmacNGetafe} hideLabel label={`Start a call in ${chat.title}`} />
      </>
    ),
    content: <ChatWindow chat={chat} />,
    fills: true,
  }
}
