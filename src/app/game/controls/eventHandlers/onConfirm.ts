import fightEntries from '../lib/fightEntries'
import { ControlsState } from '../types'

import { controlsStore } from '../controls.store'

export default () => {
  controlsStore.update((state: ControlsState) => {
  if (state.selectedEntry.text === 'FIGHT')
    return { entries: fightEntries, selectedEntry: fightEntries[0] }
    else  
    return state
  })
}


