import { Component, OnInit } from '@angular/core'
import VIEWS from './views'
import { gameStore } from './game.store'
import { select } from '@ngneat/elf'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  game$ = gameStore.pipe(select((state) => state))

  ngOnInit(): void {}
  VIEWS = VIEWS
}
