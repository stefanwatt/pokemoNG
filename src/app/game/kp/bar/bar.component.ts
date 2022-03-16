import { Input, Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() hpPercent: number
}
