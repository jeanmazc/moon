import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './app/meu-form/meu-form.component.html',
  styleUrls: ['./app/meu-form/meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  constructor() { }

  ngOnInit() {
  }

}
