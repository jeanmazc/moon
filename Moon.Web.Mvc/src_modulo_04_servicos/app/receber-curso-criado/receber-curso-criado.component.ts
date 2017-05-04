import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './app/receber-curso-criado/receber-curso-criado.component.html',
  styleUrls: ['./app/receber-curso-criado/receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(
      (cursoCriado: any) => this.curso = cursoCriado
    );
  }

}
