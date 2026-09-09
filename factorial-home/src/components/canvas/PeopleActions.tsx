import { Icons } from '../../generated/icons.gen'
import { MyAgentButton } from '../agent/MyAgentButton'
import { Button } from '../ui/Button'

/** People screen header actions: announcements and the personal agent. */
export function PeopleActions() {
  return (
    <div className="flex items-center">
      <Button variant="ghost" size="md" icon={Icons.NewChannel} hideLabel label="Announcements" />
      <MyAgentButton />
    </div>
  )
}
