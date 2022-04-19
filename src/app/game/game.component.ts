import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import getPokemonTeam from './getPokemonTeam'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  activeComponent = {
    name: 'base',
  }

  myTeam = getPokemonTeam()
  enemyTeam = getPokemonTeam()
}
