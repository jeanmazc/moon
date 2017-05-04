import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './app/input-property/input-property.component.html',
  styleUrls: ['./app/input-property/input-property.component.css']//,
  //inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
