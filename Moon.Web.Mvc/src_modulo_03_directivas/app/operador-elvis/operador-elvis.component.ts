import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './app/operador-elvis/operador-elvis.component.html',
  styleUrls: ['./app/operador-elvis/operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
    //responsavel : {nome: 'Teste'}
  };

  constructor() { }

  ngOnInit() {
  }

}
