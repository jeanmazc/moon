import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './app/segundo-projeto/curso/cursos.component.html',
  styleUrls: ['./app/segundo-projeto/curso/cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'jean.cecon.com.br';

    /*for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }*/

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit() {
  }

}
