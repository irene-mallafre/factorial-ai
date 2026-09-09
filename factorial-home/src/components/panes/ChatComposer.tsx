import { Icons } from '../../generated/icons.gen'
import type { Chat } from '../../data/chats'
import { sendDraft, setDraft, useDraft } from '../../state/chat'
import { Button } from '../ui/Button'

/** Message box at the bottom of a conversation window. Enter sends, Shift+Enter breaks the line. */
export function ChatComposer({ chat }: { chat: Chat }) {
  const draft = useDraft(chat.id)
  return (
    <form
      className="flex flex-col gap-1 rounded-md border border-solid border-f1-border bg-f1-background p-3"
      onSubmit={(e) => {
        e.preventDefault()
        sendDraft(chat.id, draft)
      }}
    >
      <textarea
        value={draft}
        onChange={(e) => setDraft(chat.id, e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendDraft(chat.id, draft)
          }
        }}
        rows={2}
        aria-label={`Message ${chat.title}`}
        placeholder="Write something here.."
        className="max-h-40 w-full resize-none border-0 bg-transparent p-0 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
      ></textarea>
      <div className="flex items-center justify-between">
        <Button variant="outline" size="md" icon={Icons.AttachAFile} hideLabel label="Attach a file" />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="md" icon={Icons.UseVoice} hideLabel label="Record a voice message" />
          <Button type="submit" variant="default" size="md" icon={Icons.SendMessage} hideLabel label="Send" disabled={draft.trim().length === 0} />
        </div>
      </div>
    </form>
  )
}
