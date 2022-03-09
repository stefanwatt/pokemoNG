import { createReducer, on } from '@ngrx/store'
import {
  confirm,
  cancel,
  goUp,
  goDown,
  goLeft,
  goRight,
} from './controls.actions'

const fightEntries = [
  { id: 1, text: 'TACKLE' },
  { id: 2, text: 'LEER' },
  { id: 3, text: '----' },
  { id: 4, text: '----' },
]
const baseEntries: ControlsEntry[] = [
  { id: 1, text: 'FIGHT' },
  { id: 2, text: 'PKMN' },
  { id: 3, text: 'PACK' },
  { id: 4, text: 'RUN' },
]
export type ControlsEntry = {
  id: number
  text: string
}
export type ControlsState = {
  entries: ControlsEntry[]
  selectedEntry: ControlsEntry
}

export const initialState: ControlsState = {
  entries: baseEntries,
  selectedEntry: { id: 1, text: 'FIGHT' },
}
enum DIRECTIONS {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
const moveCursor = (selectedEntry: ControlsEntry, direction: DIRECTIONS) => {
  const currentId = selectedEntry.id
  switch (direction) {
    case DIRECTIONS.UP:
      return currentId == 1 || currentId == 2 ? currentId + 2 : currentId - 2
    case DIRECTIONS.DOWN:
      return currentId == 3 || currentId == 4 ? currentId - 2 : currentId + 2
    case DIRECTIONS.LEFT:
      return currentId == 1 || currentId == 3 ? currentId + 1 : currentId - 1
    case DIRECTIONS.RIGHT:
      return currentId == 2 || currentId == 4 ? currentId - 1 : currentId + 1
    default:
      return currentId
  }
}
const _controlsReducer = createReducer(
  initialState,
  on(goUp, (state: ControlsState) => {
    const newIndex = moveCursor(state.selectedEntry, DIRECTIONS.UP)
    const selectedEntry =
      state.entries.find((entry) => entry.id === newIndex) ||
      state.selectedEntry
    return { ...state, selectedEntry }
  }),
  on(goDown, (state: ControlsState) => {
    const newIndex = moveCursor(state.selectedEntry, DIRECTIONS.DOWN)
    const selectedEntry =
      state.entries.find((entry) => entry.id === newIndex) ||
      state.selectedEntry
    return { ...state, selectedEntry }
  }),
  on(goLeft, (state: ControlsState) => {
    const newIndex = moveCursor(state.selectedEntry, DIRECTIONS.LEFT)
    const selectedEntry =
      state.entries.find((entry) => entry.id === newIndex) ||
      state.selectedEntry
    return { ...state, selectedEntry }
  }),
  on(goRight, (state: ControlsState) => {
    const newIndex = moveCursor(state.selectedEntry, DIRECTIONS.RIGHT)
    const selectedEntry =
      state.entries.find((entry) => entry.id === newIndex) ||
      state.selectedEntry
    return { ...state, selectedEntry }
  }),
  on(confirm, (state: ControlsState) => {
    if (state.selectedEntry.text === 'FIGHT')
      return { entries: fightEntries, selectedEntry: fightEntries[0] }
    return state
  }),
  on(cancel, (state: ControlsState) => {
    return initialState
  })
)
export function controlsReducer(state: any, action: any) {
  return _controlsReducer(state, action)
}
