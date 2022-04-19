import { GameState } from '../types'
import VIEWS from '../views'

//TODO only works with type any but should work with GameState
export default (state: any) => {
  return { ...state, activeView: VIEWS.TEAM }
}
