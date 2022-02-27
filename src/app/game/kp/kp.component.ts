import { Input, Component, OnInit } from '@angular/core';
type pokemon= {
  name:string;
  level:number;
  sex:string;
  currentKP:number;
  maxKP:number
}
@Component({
  selector: 'app-kp',
  templateUrl: './kp.component.html',
  styleUrls: ['./kp.component.css']
})
export class KpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() pokemon:pokemon

  hpPercent():number {
    if (!this.pokemon) return 100
    const {currentKP,maxKP}=this.pokemon
    const percentage= Math.round(currentKP/maxKP*100 )
    return percentage
  }
}
