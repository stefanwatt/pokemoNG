import johtoPokemon from './johtoPokemon'
import { Pokemon, pokemonBlueprint } from './types'

export default (n = 6): Pokemon[] => {
  const shuffled = johtoPokemon.sort(() => 0.5 - Math.random())
  let selectedNames = shuffled.slice(0, n)
  const team = selectedNames.map((name) => ({ ...pokemonBlueprint, name }))
  return team
}
