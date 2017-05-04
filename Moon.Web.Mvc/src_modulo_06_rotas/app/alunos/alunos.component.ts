import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './app/alunos/alunos.component.html',
  styleUrls: ['./app/alunos/alunos.component.css']
})
export class AlunosComponent implements OnInit {

  private alunos: any[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}
