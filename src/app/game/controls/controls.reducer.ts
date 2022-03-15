import { createReducer, on } from '@ngrx/store'
import {
  confirm,
  cancel,
  goUp,
  goDown,
  goLeft,
  goRight,
} from './controls.actions'
import onCancel from './eventHandlers/onCancel'
import onConfirm from './eventHandlers/onConfirm'
import onGoDown from './eventHandlers/onGoDown'
import onGoLeft from './eventHandlers/onGoLeft'
import onGoRight from './eventHandlers/onGoRight'
import onGoUp from './eventHandlers/onGoUp'
import initialState from './lib/initialState'

const _controlsReducer = createReducer(
  initialState,
  on(goUp, onGoUp),
  on(goDown, onGoDown),
  on(goLeft, onGoLeft),
  on(goRight, onGoRight),
  on(confirm, onConfirm),
  on(cancel, onCancel)
)
export function controlsReducer(state: any, action: any) {
  return _controlsReducer(state, action)
}
