import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  onSubmit(formulario: any){
    console.log(formulario);

    //form.value
    //console.log(this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        formulario.form.reset();
      });
  }

  constructor(private http: Http, private cepService: ConsultaCepService) { }

  ngOnInit() {
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any, form: any){
    this.cepService.consultaCEP(cep, this.resetaDadosForm, form)
      .subscribe(dados => this.populaDadosForm(dados, form));
  }

  populaDadosForm(dados: any, formulario: any){
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        //cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    //console.log(form);
  }

  resetaDadosForm(formulario: any){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
