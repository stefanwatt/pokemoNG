import { Component, OnInit } from '@angular/core'
import { select } from '@ngneat/elf'
import { gameStore } from '../game.store'
import VIEWS from '../views'
import CHILDREN from './children'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  activeView$ = gameStore.pipe(select((state) => state.activeView))
  constructor() {}

  ngOnInit(): void {
    this.activeView$.subscribe((activeView) => {
      switch (activeView) {
        case VIEWS.TEAM:
          this.currentChild = CHILDREN.MESSAGE
          break

        case VIEWS.FIGHT:
          this.currentChild = CHILDREN.CONTROLS
          break
        default:
          break
      }
    })
  }

  currentChild = CHILDREN.CONTROLS
  CHILDREN = CHILDREN
}
