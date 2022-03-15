import { ControlsEntry } from '../types'
import DIRECTIONS from './directions'

export default (selectedEntry: ControlsEntry, direction: DIRECTIONS) => {
  const currentId = selectedEntry.id
  switch (direction) {
    case DIRECTIONS.UP:
      return currentId == 1 || currentId == 2 ? currentId + 2 : currentId - 2
    case DIRECTIONS.DOWN:
      return currentId == 3 || currentId == 4 ? currentId - 2 : currentId + 2
    case DIRECTIONS.LEFT:
      return currentId == 1 || currentId == 3 ? currentId + 1 : currentId - 1
    case DIRECTIONS.RIGHT:
      return currentId == 2 || currentId == 4 ? currentId - 1 : currentId + 1
    default:
      return currentId
  }
}
