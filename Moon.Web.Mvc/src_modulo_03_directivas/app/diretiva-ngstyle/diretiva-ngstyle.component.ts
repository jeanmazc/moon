import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './app/diretiva-ngstyle/diretiva-ngstyle.component.html',
  styleUrls: ['./app/diretiva-ngstyle/diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit() {
  }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }

}
