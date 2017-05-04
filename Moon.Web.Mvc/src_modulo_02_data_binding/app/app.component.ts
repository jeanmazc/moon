import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
})
export class AppComponent {
  
  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++;
  }

  destruirClico(){
    this.deletarCiclo = true;
  }
}
