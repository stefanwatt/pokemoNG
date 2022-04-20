import { controlsStore } from '../controls.store'
import DIRECTIONS from '../lib/directions'
import moveCursor from '../lib/moveCursor'
import { ControlsState } from '../types'

export default () => {
  controlsStore.update((state: ControlsState) => {
    const newIndex = moveCursor(state.selectedEntry, DIRECTIONS.LEFT)
    const selectedEntry =
      state.entries.find((entry) => entry.id === newIndex) ||
      state.selectedEntry
    return { ...state, selectedEntry }
  })
}

