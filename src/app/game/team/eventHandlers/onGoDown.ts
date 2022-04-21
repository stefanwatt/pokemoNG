import { TeamState, teamStore } from '../team.store'

export default () => {
  teamStore.update((state: TeamState) => {
    const selectedIndex =
      state.selectedIndex === 5 ? 0 : state.selectedIndex + 1
    return { ...state, selectedIndex }
  })
}
