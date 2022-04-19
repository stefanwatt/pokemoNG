import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
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
  ngOnInit(): void {}
}
