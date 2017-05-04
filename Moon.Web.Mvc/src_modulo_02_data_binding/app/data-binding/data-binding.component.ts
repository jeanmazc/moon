import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './app/data-binding/data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight {
          background-color: yellow;
          font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://teste.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular XX';

  valorInicial = 15;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
      //alert('aki');
      console.log(evento);
  }

  constructor() { }

  ngOnInit() {
  }

}
