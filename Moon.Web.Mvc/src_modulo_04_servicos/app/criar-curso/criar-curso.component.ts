import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './app/criar-curso/criar-curso.component.html',
  styleUrls: ['./app/criar-curso/criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(curso: string){
    this.cursosService.addCurso(curso);
  }

}
