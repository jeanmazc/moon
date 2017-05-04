import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './app/diretivas-customizadas/diretivas-customizadas.component.html',
  styleUrls: ['./app/diretivas-customizadas/diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
