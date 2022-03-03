import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import {
  cancel,
  confirm,
  goDown,
  goLeft,
  goRight,
  goUp,
} from './controls.actions'
import type { ControlsState } from './controls.reducer'
@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  controls$: Observable<ControlsState>
  constructor(private store: Store<{ controls: ControlsState }>) {
    this.controls$ = store.select('controls')
  }
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
  }
  cancel() {
    this.store.dispatch(cancel())
  }
  ngOnInit(): void {}
  menuEntries = baseEntries
  activeEntryId = 1
  selectEntry(id: number): void {
    if (!id) return
    if (id === 1) this.menuEntries = fightEntries
    this.activeEntryId = id
  }
}
const fightEntries = [
  { id: 1, text: 'TACKLE' },
  { id: 2, text: 'LEER' },
]
const baseEntries = [
  { id: 1, text: 'FIGHT' },
  { id: 2, text: 'PKMN' },
  { id: 3, text: 'PACK' },
  { id: 4, text: 'RUN' },
]
