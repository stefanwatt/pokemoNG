import eventHandlers from '../controls/eventHandlers'
import getPokemonTeam from '../getPokemonTeam'
import VIEWS from '../views'

export default {
  activeView: VIEWS.FIGHT,
  myTeam: getPokemonTeam(),
  enemyTeam: getPokemonTeam(),
  eventHandlers,
}
