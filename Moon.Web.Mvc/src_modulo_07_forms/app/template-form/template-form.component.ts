import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './app/template-form/template-form.component.html',
  styleUrls: ['./app/template-form/template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form: any){
    console.log(form);

    //form.value

    //console.log(this.usuario);
  }

  constructor() { }

  ngOnInit() {
  }

}
