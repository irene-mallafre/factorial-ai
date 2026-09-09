import { useState } from 'react'
import CommunitiesPosts from '../../generated/CommunitiesPosts'
import CommunitiesAvatar from './CommunitiesAvatar'
import { Icons } from '../../generated/icons.gen'
import { Button } from '../ui/Button'

/** Communities feed with a post composer; the Post button enables once there is text. */
export function Communities() {
  const [draft, setDraft] = useState('')
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 px-3 pb-4 pt-1">
        <div className="flex items-center gap-2">
          <CommunitiesAvatar />
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Create a post…"
            className="h-9 min-w-0 flex-1 rounded-md border border-solid border-f1-border-secondary bg-transparent px-3 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          />
        </div>
        <div className="flex items-center justify-between pl-10">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="md" icon={Icons.AttachAFile} hideLabel label="Attach file" />
            <Button variant="ghost" size="md" icon={Icons.AddHowYourDayWent} hideLabel label="Add emoji" />
            <Button variant="ghost" size="md" icon={Icons.AddLocation} hideLabel label="Add location" />
          </div>
          <Button variant="default" size="md" label="Post" disabled={draft.trim().length === 0} onClick={() => setDraft('')} />
        </div>
      </div>
      <CommunitiesPosts />
    </div>
  )
}
