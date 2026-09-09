import { useCallback, useState } from 'react'

export type WindowStackState = {
  open: string[]
  weights: number[]
  columnWidth: number
  columnWeights: number[]
  maximized: string | null
  floating: string[]
  manualHeight: string[]
}

export const DEFAULT_COLUMN_WIDTH = 448
export const MAX_COLUMN_WIDTH = 1400
export const MIN_COLUMN_WIDTH = 336
export const MIN_WEIGHT = 0.15
export const WINDOWS_PER_COLUMN = 2
export const CANVAS_MIN_WIDTH = 480

export function chunkColumns<T>(list: T[]): T[][] {
  const out: T[][] = []
  for (let i = 0; i < list.length; i += WINDOWS_PER_COLUMN) out.push(list.slice(i, i + WINDOWS_PER_COLUMN))
  return out
}

export const dockedWindows = (state: WindowStackState) => state.open.filter((k) => !state.floating.includes(k))
export const columnCount = (state: WindowStackState) => Math.ceil(dockedWindows(state).length / WINDOWS_PER_COLUMN)
export const columnsWidth = (state: WindowStackState) => state.columnWidth * columnCount(state)

export function useWindowStack({ columnWidth = DEFAULT_COLUMN_WIDTH, open: initialOpen = [] as string[] } = {}) {
  const [state, setState] = useState<WindowStackState>({
    open: [...initialOpen],
    weights: initialOpen.map(() => 1),
    columnWidth,
    columnWeights: [],
    maximized: null,
    floating: [],
    manualHeight: [],
  })

  const toggle = useCallback((key: string) => {
    setState((s) => {
      const i = s.open.indexOf(key)
      return i >= 0
        ? {
            ...s,
            open: s.open.filter((k) => k !== key),
            weights: s.weights.filter((_, j) => j !== i),
            maximized: s.maximized === key ? null : s.maximized,
            floating: s.floating.filter((k) => k !== key),
          }
        : { ...s, open: [...s.open, key], weights: [...s.weights, 1] }
    })
  }, [])

  const open = useCallback((key: string) => {
    setState((s) => (s.open.includes(key) ? s : { ...s, open: [...s.open, key], weights: [...s.weights, 1] }))
  }, [])

  const openOnly = useCallback((key: string) => {
    setState((s) =>
      s.open.length === 1 && s.open[0] === key
        ? s
        : { ...s, open: [key], weights: [1], columnWeights: [], maximized: s.maximized === null ? null : key, manualHeight: [], floating: [] },
    )
  }, [])

  /** Open `key`, replacing the first open window that matches `same` (and dropping the others that match). */
  const openReplacing = useCallback((key: string, same: (k: string) => boolean) => {
    setState((s) => {
      if (s.open.includes(key)) return s
      const entries = s.open.map((k, i) => ({ w: k, weight: s.weights[i] ?? 1 }))
      const at = entries.findIndex(({ w }) => same(w))
      const next =
        at === -1
          ? [...entries, { w: key, weight: 1 }]
          : entries.map((e, i) => (i === at ? { w: key, weight: e.weight } : e)).filter((_, i) => i === at || !same(entries[i].w))
      return {
        ...s,
        open: next.map(({ w }) => w),
        weights: next.map(({ weight }) => weight),
        manualHeight: s.manualHeight.filter((k) => !same(k)),
        floating: s.floating.filter((k) => !same(k)),
        maximized: s.maximized !== null && same(s.maximized) ? null : s.maximized,
      }
    })
  }, [])

  const close = useCallback((key: string) => {
    setState((s) => {
      const i = s.open.indexOf(key)
      return i < 0
        ? s
        : {
            ...s,
            open: s.open.filter((k) => k !== key),
            weights: s.weights.filter((_, j) => j !== i),
            maximized: s.maximized === key ? null : s.maximized,
            floating: s.floating.filter((k) => k !== key),
          }
    })
  }, [])

  const maximize = useCallback((key: string) => {
    setState((s) => (s.maximized === key ? s : { ...s, maximized: key }))
  }, [])

  const restore = useCallback(() => {
    setState((s) => (s.maximized === null ? s : { ...s, maximized: null }))
  }, [])

  const toggleMaximized = useCallback((key: string) => {
    setState((s) => ({ ...s, maximized: s.maximized === key ? null : key }))
  }, [])

  const toggleFloating = useCallback((key: string) => {
    setState((s) => ({
      ...s,
      floating: s.floating.includes(key) ? s.floating.filter((k) => k !== key) : [...s.floating, key],
      maximized: s.maximized === key ? null : s.maximized,
    }))
  }, [])

  const setColumnWidth = useCallback((width: number) => {
    setState((s) => ({ ...s, columnWidth: Math.min(MAX_COLUMN_WIDTH, Math.max(MIN_COLUMN_WIDTH, width)) }))
  }, [])

  const resizeColumnsBetween = useCallback((index: number, delta: number, count: number, min: number) => {
    setState((s) => {
      const weights = Array.from({ length: count }, (_, j) => s.columnWeights[j] ?? 1)
      const a = weights[index]
      const b = weights[index + 1]
      if (a === undefined || b === undefined) return s
      const d = Math.max(min - a, Math.min(b - min, delta))
      weights[index] = a + d
      weights[index + 1] = b - d
      return { ...s, columnWeights: weights }
    })
  }, [])

  const resizeBetween = useCallback((index: number, delta: number, manual: string[] = []) => {
    setState((s) => {
      const weights = [...s.weights]
      const a = weights[index]
      const b = weights[index + 1]
      if (a === undefined || b === undefined) return s
      const d = Math.max(MIN_WEIGHT - a, Math.min(b - MIN_WEIGHT, delta))
      weights[index] = a + d
      weights[index + 1] = b - d
      return { ...s, weights, manualHeight: [...new Set([...s.manualHeight, ...manual])] }
    })
  }, [])

  return { state, toggle, open, openOnly, openReplacing, close, maximize, restore, toggleMaximized, toggleFloating, setColumnWidth, resizeBetween, resizeColumnsBetween }
}

export type WindowStack = ReturnType<typeof useWindowStack>
