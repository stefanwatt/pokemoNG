import onCancel from '../controls/eventHandlers/onCancel'
import onConfirm from '../controls/eventHandlers/onConfirm'
import onGoDown from '../controls/eventHandlers/onGoDown'
import onGoLeft from '../controls/eventHandlers/onGoLeft'
import onGoRight from '../controls/eventHandlers/onGoRight'
import onGoUp from '../controls/eventHandlers/onGoUp'
import getPokemonTeam from '../getPokemonTeam'
import VIEWS from '../views'

export default {
  activeView: VIEWS.FIGHT,
  myTeam: getPokemonTeam(),
  enemyTeam: getPokemonTeam(),
  eventHandlers: {
    onGoUp: onGoUp,
    onGoDown: onGoDown,
    onGoLeft: onGoLeft,
    onGoRight: onGoRight,
    onConfirm: onConfirm,
    onCancel: onCancel,
  },
}
