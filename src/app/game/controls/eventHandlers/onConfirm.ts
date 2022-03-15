import fightEntries from '../lib/fightEntries'
import { ControlsState } from '../types'

export default (state: ControlsState) => {
  if (state.selectedEntry.text === 'FIGHT')
    return { entries: fightEntries, selectedEntry: fightEntries[0] }
  if (state.selectedEntry.text === 'PKMN') {
    return state
  }
  return state
}
