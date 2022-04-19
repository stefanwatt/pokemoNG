import { Component, Input, OnInit } from '@angular/core'
import { Pokemon, pokemonBlueprint } from '../types'

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  constructor() {}
  currentPokemon = pokemonBlueprint
  ngOnInit() {
    this.currentPokemon = this?.team ? this.team[0] : pokemonBlueprint
  }

  @Input() team: Pokemon[] | undefined
}
