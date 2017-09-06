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
var dropdown_service_1 = require("./../shared/services/dropdown.service");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DataFormComponent = (function () {
    function DataFormComponent(formBuilder, http, dropdownService, cepService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.dropdownService = dropdownService;
        this.cepService = cepService;
    }
    DataFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropdownService.getEstadosBr().subscribe(function (dados) {
            _this.estados = dados;
            console.log(dados);
        });
        /*this.formulario = new FormGroup({
          nome: new FormControl(null),
          email: new FormControl(null),
    
          endereco: new FormGroup({
            cep: new FormControl(null)
          })
        });*/
        this.formulario = this.formBuilder.group({
            nome: [null, forms_1.Validators.required],
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]],
            endereco: this.formBuilder.group({
                cep: [null, forms_1.Validators.required],
                numero: [null, forms_1.Validators.required],
                complemento: [null],
                rua: [null, forms_1.Validators.required],
                bairro: [null, forms_1.Validators.required],
                cidade: [null, forms_1.Validators.required],
                estado: [null, forms_1.Validators.required]
            })
        });
        // tslint:disable-next-line:max-line-length
        // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        // [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
    };
    DataFormComponent.prototype.onSubmit = function () {
        console.log(this.formulario);
        if (this.formulario.valid) {
            this.http
                .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
                .map(function (res) { return res; })
                .subscribe(function (dados) {
                console.log(dados);
                // reseta o form
                // this.formulario.reset();
                // this.resetar();
            }, function (error) { return alert('erro'); });
        }
        else {
            console.log('formulario invalido');
            this.verificaValidacoesForm(this.formulario);
        }
    };
    DataFormComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            console.log(campo);
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof forms_1.FormGroup) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    DataFormComponent.prototype.resetar = function () {
        this.formulario.reset();
    };
    DataFormComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    DataFormComponent.prototype.verificaEmailInvalido = function () {
        var campoEmail = this.formulario.get('email');
        if (campoEmail.errors) {
            return campoEmail.errors['email'] && campoEmail.touched;
        }
    };
    DataFormComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    DataFormComponent.prototype.consultaCEP = function () {
        var _this = this;
        var cep = this.formulario.get('endereco.cep').value;
        this.cepService.consultaCEP(cep, this.resetaDadosForm, this.formulario)
            .subscribe(function (dados) { return _this.populaDadosForm(dados); });
    };
    DataFormComponent.prototype.populaDadosForm = function (dados) {
        //this.formulario.setValue({});
        this.formulario.patchValue({
            endereco: {
                rua: dados.logradouro,
                // cep: dados.cep,
                complemento: dados.complemento,
                bairro: dados.bairro,
                cidade: dados.localidade,
                estado: dados.uf
            }
        });
        this.formulario.get('nome').setValue('Loiane');
        // console.log(form);
    };
    DataFormComponent.prototype.resetaDadosForm = function (formulario) {
        formulario.patchValue({
            endereco: {
                rua: null,
                complemento: null,
                bairro: null,
                cidade: null,
                estado: null
            }
        });
    };
    return DataFormComponent;
}());
DataFormComponent = __decorate([
    core_1.Component({
        selector: 'app-data-form',
        templateUrl: './app/data-form/data-form.component.html',
        styleUrls: ['./app/data-form/data-form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        http_1.Http,
        dropdown_service_1.DropdownService,
        consulta_cep_service_1.ConsultaCepService])
], DataFormComponent);
exports.DataFormComponent = DataFormComponent;
//# sourceMappingURL=data-form.component.js.map