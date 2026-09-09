import { createStore, readLocal, writeLocal } from '../lib/store'

export type Persona = 'admin' | 'employee'

const KEY = 'f0compose:home:profile'

export const PERSON = {
  admin: { firstName: 'Alicia', lastName: 'Torres' },
  employee: { firstName: 'Sara', lastName: 'Vidal' },
} as const

export const PERSONA_LABEL: Record<Persona, string> = { admin: 'Admin', employee: 'Employee' }

const personaStore = createStore<Persona>(readLocal(KEY) === 'employee' ? 'employee' : 'admin')

export const usePersona = () => personaStore.use()

export function setPersona(next: Persona) {
  if (personaStore.get() === next) return
  writeLocal(KEY, next)
  personaStore.set(next)
}
