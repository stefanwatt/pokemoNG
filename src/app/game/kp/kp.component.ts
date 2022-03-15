import { Input, Component, OnInit } from '@angular/core'
import { Pokemon } from '../types'
@Component({
  selector: 'app-kp',
  templateUrl: './kp.component.html',
  styleUrls: ['./kp.component.css'],
})
export class KpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() pokemon: Pokemon

  hpPercent(): number {
    if (!this.pokemon) return 100
    const { currentKp, maxKp } = this.pokemon
    const percentage = Math.round((currentKp / maxKp) * 100)
    return percentage
  }
}
