import eventHandlers from '../../controls/eventHandlers'
import onCancel from '../../controls/eventHandlers/onCancel'
import { gameStore } from '../../game.store'
import { GameState } from '../../types'

export default () => {
  gameStore.update((state: GameState) => {
    return {
      ...state,
      eventHandlers: { ...state.eventHandlers, onCancel },
    }
  })
}
