import DIRECTIONS from '../lib/directions'
import moveCursor from '../lib/moveCursor'
import { ControlsState } from '../types'

export default (state: ControlsState) => {
  const newIndex = moveCursor(state.selectedEntry, DIRECTIONS.DOWN)
  const selectedEntry =
    state.entries.find((entry) => entry.id === newIndex) || state.selectedEntry
  return { ...state, selectedEntry }
}
