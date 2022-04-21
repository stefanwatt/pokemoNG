import { createStore, withProps } from '@ngneat/elf'

export type TeamState = {
  selectedIndex: number
}

export const initialState: TeamState = {
  selectedIndex: 0,
}

export const teamStore = createStore(
  { name: 'team' },
  withProps<TeamState>(initialState)
)
