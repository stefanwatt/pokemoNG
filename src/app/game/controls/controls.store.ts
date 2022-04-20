import { createStore, withProps } from '@ngneat/elf'
import initialState from './lib/initialState'
import { ControlsState } from './types'

export const controlsStore = createStore(
  { name: 'controls' },
  withProps<ControlsState>(initialState)
)
