import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './app/diretiva-ngfor/diretiva-ngfor.component.html',
  styleUrls: ['./app/diretiva-ngfor/diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = ["Angular 2", "Java", "Phonegap"]; 

  constructor() { }

  ngOnInit() {
    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }

}
