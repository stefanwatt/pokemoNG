import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css'],
})
export class EnemyComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  currentPokemon = {
    name: 'totodile',
    level: 5,
    sex: 'f',
    currentKP: 30,
    maxKP: 35,
  }
}
