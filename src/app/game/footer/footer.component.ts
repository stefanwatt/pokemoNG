import { Component, OnInit } from '@angular/core'
import CHILDREN from './children'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  currentChild = CHILDREN.MESSAGE
  CHILDREN = CHILDREN
}