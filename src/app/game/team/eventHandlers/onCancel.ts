import onCancel from '../../controls/eventHandlers/onCancel'
import { gameStore } from '../../game.store'
import VIEWS from '../../views'

export default () => {
  gameStore.update((state) => {
    return { ...state, activeView: VIEWS.FIGHT,eventHandlers:{...state.eventHandlers, onCancel:onCancel} }
  })
}
