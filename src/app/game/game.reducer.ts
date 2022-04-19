import { createReducer, on } from '@ngrx/store'
import { goToTeam } from './game.actions'
import onGoToTeam from './eventHandlers/onGoToTeam'
import initialState from './lib/initialState'
import { GameState } from './types'

const _gameReducer = createReducer(initialState, on(goToTeam, onGoToTeam))

export function controlsReducer(state: GameState, action: any) {
  return _gameReducer(state, action)
}
