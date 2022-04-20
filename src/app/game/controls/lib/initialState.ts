import { ControlsState } from '../types'
import baseEntries from './baseEntries'
import onCancel from '../eventHandlers/onCancel'
import onConfirm from '../eventHandlers/onConfirm'
import onGoDown from '../eventHandlers/onGoDown'
import onGoLeft from '../eventHandlers/onGoLeft'
import onGoRight from '../eventHandlers/onGoRight'
import onGoUp from '../eventHandlers/onGoUp'

const initialState: ControlsState = {
  entries: baseEntries,
  selectedEntry: { id: 1, text: 'FIGHT' },
  // eventHandlers: {
  //   onGoUp: onGoUp,
  //   onGoDown: onGoDown,
  //   onGoLeft: onGoLeft,
  //   onGoRight: onGoRight,
  //   onConfirm: onConfirm,
  //   onCancel: onCancel,
  // },
}
export default initialState
