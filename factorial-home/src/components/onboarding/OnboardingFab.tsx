import { useNavigate } from 'react-router-dom'
import { openOnboarding, useAgentSetup } from '../../state/agentSetup'
import { BuddyMark } from '../agent/BuddyMark'

/** Floating control that starts (or re-runs) the work buddy first-time experience. */
export function OnboardingFab() {
  const setup = useAgentSetup()
  const navigate = useNavigate()
  const start = () => {
    navigate('/p/home')
    openOnboarding()
  }
  return (
    <button type="button" onClick={start} className="f0c-onb-fab f0c-pressable" aria-label={setup.completed ? `Set up ${setup.name} again` : 'Meet your work buddy'}>
      <BuddyMark size="sm" />
      <span className="text-base font-medium text-f1-foreground">{setup.completed ? `Set up ${setup.name} again` : 'Meet your work buddy'}</span>
    </button>
  )
}
