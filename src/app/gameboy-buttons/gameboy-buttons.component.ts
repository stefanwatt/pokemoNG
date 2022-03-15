import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import {
  cancel,
  confirm,
  goDown,
  goLeft,
  goRight,
  goUp,
} from '../game/controls/controls.actions'
import { ControlsState } from '../game/controls/types'
import CHILDREN from '../game/footer/children'
@Component({
  selector: 'app-gameboy-buttons',
  templateUrl: './gameboy-buttons.component.html',
  styleUrls: ['./gameboy-buttons.component.css'],
})
export class GameboyButtonsComponent implements OnInit {
  controls$: Observable<ControlsState>
  constructor(private store: Store<{ controls: ControlsState }>) {
    this.controls$ = store.select('controls')
  }

  @Output()
  switchFooterElem: EventEmitter<switchFooterElemEvent> = new EventEmitter<switchFooterElemEvent>()

  goUp() {
    this.store.dispatch(goUp())
  }
  goDown() {
    this.store.dispatch(goDown())
  }
  goLeft() {
    this.store.dispatch(goLeft())
  }
  goRight() {
    this.store.dispatch(goRight())
  }
  confirm() {
    this.store.dispatch(confirm())
    this.switchFooterElem.emit({ newElem: CHILDREN.MESSAGE, text: 'foo' })
  }
  cancel() {
    this.store.dispatch(cancel())
  }

  ngOnInit(): void {}
}
type switchFooterElemEvent = {
  newElem: CHILDREN
  text: string
}
