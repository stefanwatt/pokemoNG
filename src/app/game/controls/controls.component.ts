import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuEntries=baseEntries
  activeEntryId=1
  selectEntry(id:number):void{
    if (!id)return
    if (id===1) this.menuEntries=fightEntries  
    this.activeEntryId=id
  }
}
const fightEntries =[
    {id:1,text:"TACKLE"},
    {id:2,text:"LEER"},
]  
const baseEntries = [
    {id:1,text:"FIGHT"},
    {id:2,text:"PKMN"},
    {id:3,text:"PACK"},
    {id:4,text:"RUN"},
]
