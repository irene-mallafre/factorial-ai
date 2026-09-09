import { useState, type ComponentType } from 'react'
import { inboxItems, type InboxItem } from '../../data/tickets'
import InboxAvatar_Approve12TimeOffRequests from '../../generated/InboxAvatar_Approve12TimeOffRequests'
import InboxAvatar_Approve890DesignTeamWorkshop from '../../generated/InboxAvatar_Approve890DesignTeamWorkshop'
import InboxAvatar_ApproveMarcSPromotionToSenior from '../../generated/InboxAvatar_ApproveMarcSPromotionToSenior'
import InboxAvatar_Confirm4ContractRenewals from '../../generated/InboxAvatar_Confirm4ContractRenewals'
import InboxAvatar_PabloProposesChangingYourSaturdayShift from '../../generated/InboxAvatar_PabloProposesChangingYourSaturdayShift'
import InboxAvatar_PickLuciaForSeniorDesigner from '../../generated/InboxAvatar_PickLuciaForSeniorDesigner'
import InboxAvatar_SendQ2BonusList34200Across14People from '../../generated/InboxAvatar_SendQ2BonusList34200Across14People'
import InboxAvatar_SignYourContractAddendum from '../../generated/InboxAvatar_SignYourContractAddendum'
import { requestPane, useOpenPanes } from '../../state/panes'
import { usePersona } from '../../state/persona'
import { Checkbox } from '../ui/Checkbox'

const AVATARS: Record<string, ComponentType> = {
  'time-off-batch': InboxAvatar_Approve12TimeOffRequests,
  'recruitment-pick': InboxAvatar_PickLuciaForSeniorDesigner,
  'contract-renewals': InboxAvatar_Confirm4ContractRenewals,
  'promotion-marc': InboxAvatar_ApproveMarcSPromotionToSenior,
  'q2-bonus': InboxAvatar_SendQ2BonusList34200Across14People,
  'workshop-budget': InboxAvatar_Approve890DesignTeamWorkshop,
  'contract-addendum': InboxAvatar_SignYourContractAddendum,
  'shift-swap': InboxAvatar_PabloProposesChangingYourSaturdayShift,
}

function InboxRow({ item, active }: { item: InboxItem; active: boolean }) {
  const [done, setDone] = useState(false)
  const Avatar = AVATARS[item.id]
  return (
    <div className={`flex h-[66px] w-full items-center gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 ${active ? 'bg-f1-background-secondary' : ''}`}>
      <Checkbox checked={done} onCheckedChange={setDone} title={done ? `Reopen "${item.title}"` : `Complete "${item.title}"`} />
      <Avatar />
      <button onClick={() => requestPane(`ticket:${item.id}`)} className={`flex min-w-0 flex-1 cursor-pointer flex-col items-start text-left ${done ? 'opacity-50' : ''}`}>
        <span className="w-full truncate text-base font-medium text-f1-foreground">{item.title}</span>
        <span className="w-full truncate text-base text-f1-foreground-secondary">{item.meta}</span>
      </button>
    </div>
  )
}

export function InboxPanel() {
  const persona = usePersona()
  const open = useOpenPanes()
  return (
    <div className="flex flex-col">
      {inboxItems(persona).map((item) => (
        <InboxRow key={item.id} item={item} active={open.includes(`ticket:${item.id}`)} />
      ))}
    </div>
  )
}
