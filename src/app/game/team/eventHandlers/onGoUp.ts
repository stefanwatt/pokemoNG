import DIRECTIONS from '../lib/directions'
import moveCursor from '../lib/moveCursor'
import { ControlsState } from '../types'
import { controlsStore } from '../controls.store'

export default () => {
  controlsStore.update((state: ControlsState) => {
    const newIndex = moveCursor(state.selectedEntry, DIRECTIONS.UP)
    const selectedEntry =
      state.entries.find((entry) => entry.id === newIndex) ||
      state.selectedEntry
    return { ...state, selectedEntry }
  })
}
