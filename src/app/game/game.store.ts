import { createStore, withProps } from '@ngneat/elf'
import initialState from './lib/initialState'
import { GameState } from './types'

export const gameStore = createStore(
  { name: 'game' },
  withProps<GameState>(initialState)
)
