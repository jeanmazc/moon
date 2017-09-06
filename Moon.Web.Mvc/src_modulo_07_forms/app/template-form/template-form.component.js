"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var consulta_cep_service_1 = require("./../shared/services/consulta-cep.service");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TemplateFormComponent = (function () {
    function TemplateFormComponent(http, cepService) {
        this.http = http;
        this.cepService = cepService;
        this.usuario = {
            nome: null,
            email: null
        };
    }
    TemplateFormComponent.prototype.onSubmit = function (formulario) {
        console.log(formulario);
        //form.value
        //console.log(this.usuario);
        this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
            .map(function (res) { return res; })
            .subscribe(function (dados) {
            console.log(dados);
            formulario.form.reset();
        });
    };
    TemplateFormComponent.prototype.ngOnInit = function () {
    };
    TemplateFormComponent.prototype.verificaValidTouched = function (campo) {
        return !campo.valid && campo.touched;
    };
    TemplateFormComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    TemplateFormComponent.prototype.consultaCEP = function (cep, form) {
        var _this = this;
        this.cepService.consultaCEP(cep, this.resetaDadosForm, form)
            .subscribe(function (dados) { return _this.populaDadosForm(dados, form); });
    };
    TemplateFormComponent.prototype.populaDadosForm = function (dados, formulario) {
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
    };
    TemplateFormComponent.prototype.resetaDadosForm = function (formulario) {
        formulario.form.patchValue({
            endereco: {
                rua: null,
                complemento: null,
                bairro: null,
                cidade: null,
                estado: null
            }
        });
    };
    return TemplateFormComponent;
}());
TemplateFormComponent = __decorate([
    core_1.Component({
        selector: 'app-template-form',
        templateUrl: './app/template-form/template-form.component.html',
        styleUrls: ['./app/template-form/template-form.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, consulta_cep_service_1.ConsultaCepService])
], TemplateFormComponent);
exports.TemplateFormComponent = TemplateFormComponent;
//# sourceMappingURL=template-form.component.js.map