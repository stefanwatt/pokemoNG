import eventHandlers from '../../controls/eventHandlers'
import { gameStore } from '../../game.store'
import { GameState } from '../../types'
import VIEWS from '../../views'
import { TeamState, teamStore } from '../team.store'

export default () => {
  teamStore.update((state: TeamState) => {
    return { ...state, selectedIndex: 0 }
  })
  gameStore.update((state: GameState) => {
    return {
      ...state,
      activeView: VIEWS.FIGHT,
      eventHandlers,
    }
  })
}
