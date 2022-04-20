import { controlsStore } from '../controls.store'
import initialState from '../lib/initialState'
import { ControlsState } from '../types'

export default () => {
  controlsStore.update((state: ControlsState) => {
    return initialState
  })
}
