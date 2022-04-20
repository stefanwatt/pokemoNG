import { Component, OnInit } from '@angular/core'
import { controlsStore } from './controls.store'
import { select } from '@ngneat/elf'
@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  controls$ = controlsStore.pipe(select((state) => state))
  ngOnInit(): void {}
}
