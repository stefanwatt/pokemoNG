import { Component, Input, OnInit } from '@angular/core'
import { Pokemon } from '../types'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() team: Pokemon[]
}
