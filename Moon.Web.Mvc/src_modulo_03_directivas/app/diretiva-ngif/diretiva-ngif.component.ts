import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './app/diretiva-ngif/diretiva-ngif.component.html',
  styleUrls: ['./app/diretiva-ngif/diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular 2"];

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
