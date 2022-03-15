import { ControlsState } from '../types'
import baseEntries from './baseEntries'

const initialState: ControlsState = {
  entries: baseEntries,
  selectedEntry: { id: 1, text: 'FIGHT' },
}
export default initialState
