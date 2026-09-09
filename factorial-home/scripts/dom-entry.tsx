// Dev-only: mounts the app into a jsdom container (see dom-check.mjs).
import { createRoot } from 'react-dom/client'
import App from '../src/App'

export function mount(container: HTMLElement) {
  return new Promise<void>((resolve) => {
    createRoot(container).render(<App />)
    setTimeout(resolve, 50)
  })
}
