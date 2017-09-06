import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './app/shared/campo-control-erro/campo-control-erro.component.html',
  styleUrls: ['./app/shared/campo-control-erro/campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  constructor() { }

  ngOnInit() {
  }

}
