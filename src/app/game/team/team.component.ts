import { Component, Input, OnInit } from '@angular/core'
import { Pokemon } from '../types'
import { teamStore } from './team.store'
import { select } from '@ngneat/elf'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  constructor() {}

  selectedIndex$ = teamStore.pipe(select((state) => state.selectedIndex))
  ngOnInit(): void {}
  @Input() team: Pokemon[] | undefined
}
