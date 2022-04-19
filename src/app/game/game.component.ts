import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import getPokemonTeam from './getPokemonTeam'
import VIEWS from './views'
import { GameState } from './types'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  game$: Observable<GameState>
  constructor(private store: Store<{ game: GameState }>) {
    this.game$ = store.select('game')
  }

  ngOnInit(): void {}
  VIEWS = VIEWS
}
