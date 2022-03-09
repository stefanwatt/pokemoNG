import { Component, OnInit } from '@angular/core'
import getPokemonTeam from '../getPokemonTeam'

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  constructor() {}

  currentPokemon = {
    name: 'cyndaquil',
    level: 5,
    sex: 'm',
    currentKP: 30,
    maxKP: 35,
  }
  async ngOnInit(): Promise<void> {
    const team = await getPokemonTeam()
    this.currentPokemon.name = team[0].name.toLowerCase()
  }
}
