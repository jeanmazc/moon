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
var core_1 = require("@angular/core");
var DataBindingComponent = (function () {
    function DataBindingComponent() {
        this.url = 'http://teste.com';
        this.cursoAngular = true;
        this.urlImagem = 'http://lorempixel.com/400/200/nature/';
        this.valorAtual = '';
        this.valorSalvo = '';
        this.isMouseOver = false;
        this.nomeDoCurso = 'Angular XX';
        this.valorInicial = 15;
    }
    DataBindingComponent.prototype.getValor = function () {
        return 1;
    };
    DataBindingComponent.prototype.getCurtirCurso = function () {
        return true;
    };
    DataBindingComponent.prototype.botaoClicado = function () {
        alert('Botão clicado!');
    };
    DataBindingComponent.prototype.onKeyUp = function (evento) {
        this.valorAtual = evento.target.value;
    };
    DataBindingComponent.prototype.salvarValor = function (valor) {
        this.valorSalvo = valor;
    };
    DataBindingComponent.prototype.onMouseOverOut = function () {
        this.isMouseOver = !this.isMouseOver;
    };
    DataBindingComponent.prototype.onMudouValor = function (evento) {
        //alert('aki');
        console.log(evento);
    };
    DataBindingComponent.prototype.ngOnInit = function () {
    };
    return DataBindingComponent;
}());
DataBindingComponent = __decorate([
    core_1.Component({
        selector: 'app-data-binding',
        templateUrl: './app/data-binding/data-binding.component.html',
        //styleUrls: ['./data-binding.component.css']
        styles: [
            "\n      .highlight {\n          background-color: yellow;\n          font-weight: bold;\n      }\n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], DataBindingComponent);
exports.DataBindingComponent = DataBindingComponent;
//# sourceMappingURL=data-binding.component.js.map