import { createStore, readLocal, writeLocal } from '../lib/store'

export type Theme = 'light' | 'dark'

const KEY = 'f0compose:theme'

const themeStore = createStore<Theme>(readLocal(KEY) === 'dark' ? 'dark' : 'light')

export const useTheme = () => themeStore.use()

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
  writeLocal(KEY, theme)
}

export function toggleTheme() {
  themeStore.set(themeStore.get() === 'dark' ? 'light' : 'dark')
}
