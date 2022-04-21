import eventHandlers from '../../controls/eventHandlers'
import { gameStore } from '../../game.store'
import { GameState } from '../../types'
import VIEWS from '../../views'

export default () => {
  gameStore.update((state: GameState) => {
    return {
      ...state,
      activeView: VIEWS.FIGHT,
      eventHandlers,
    }
  })
}
