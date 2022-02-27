import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentPokemon = {
    name:"cyndaquil",
    level: 5,
    sex:"m",
    currentKP:30,
    maxKP:35
  };
}
