import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './app/diretiva-ngclass/diretiva-ngclass.component.html',
  styleUrls: ['./app/diretiva-ngclass/diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

}
