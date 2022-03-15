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
import { ControlsState } from './types'
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
}
