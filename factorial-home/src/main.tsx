import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/f0.css'
import './styles/prototype.css'
import './styles/agent.css'
import './styles/activity.css'
import './styles/preferences.css'
import './styles/onboarding.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
