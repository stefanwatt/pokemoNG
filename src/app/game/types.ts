import { ControlsEntry } from './controls/types'
import VIEWS from './views'
export type Move = {
  name: string
  currentTp: number
  maxTp: number
}
export type Pokemon = {
  name: string
  level: number
  sex: 'm' | 'f'
  currentKp: number
  maxKp: number
  moves: Move[]
}
export const pokemonBlueprint: Pokemon = {
  name: 'machoke',
  level: 50,
  sex: 'm',
  currentKp: 200,
  maxKp: 200,
  moves: [{ name: 'Tackle', currentTp: 20, maxTp: 20 }],
}

export type GameState = {
  activeView: VIEWS
  myTeam: Pokemon[]
  enemyTeam: Pokemon[]
}
