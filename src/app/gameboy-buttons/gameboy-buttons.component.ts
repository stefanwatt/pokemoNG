import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import CHILDREN from '../game/footer/children'
import { gameStore } from '../game/game.store'
import { select } from '@ngneat/elf'
@Component({
  selector: 'app-gameboy-buttons',
  templateUrl: './gameboy-buttons.component.html',
  styleUrls: ['./gameboy-buttons.component.css'],
})
export class GameboyButtonsComponent implements OnInit {
  @Output()
  switchFooterElem: EventEmitter<switchFooterElemEvent> = new EventEmitter<switchFooterElemEvent>()

  eventHandlers = gameStore.getValue().eventHandlers
  eventHandlers$ = gameStore.pipe(select((state) => state.eventHandlers))

  ngOnInit(): void {
    this.eventHandlers$.subscribe((val) => {
      this.eventHandlers = val
    })
  }
}
type switchFooterElemEvent = {
  newElem: CHILDREN
  text: string
}
