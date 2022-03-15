import { Component, Input, OnInit } from '@angular/core'
import { Pokemon, pokemonBlueprint } from '../types'

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css'],
})
export class EnemyComponent implements OnInit {
  constructor() {}

  currentPokemon = pokemonBlueprint
  ngOnInit() {
    this.currentPokemon = this.team[0]
  }

  @Input() team: Pokemon[]
}
