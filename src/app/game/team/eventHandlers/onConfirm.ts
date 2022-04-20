import fightEntries from '../lib/fightEntries'
import { ControlsState } from '../types'
import onCancelTeam from '../../team/eventHandlers/onCancel'
import { controlsStore } from '../controls.store'
import { gameStore } from '../../game.store'
import { GameState } from '../../types'
import VIEWS from '../../views'

export default () => {
  controlsStore.update((state: ControlsState) => {
    if (state.selectedEntry.text === 'PKMN')
      gameStore.update((state: GameState) => {
        return {
          ...state,
          activeView: VIEWS.TEAM,
          eventHandlers: { ...state.eventHandlers, onCancel: onCancelTeam },
        }
      })
    if (state.selectedEntry.text === 'FIGHT')
      return { entries: fightEntries, selectedEntry: fightEntries[0] }
    else return state
  })
}
