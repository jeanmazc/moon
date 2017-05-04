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
var Rx_1 = require("rxjs/Rx");
var ExemplosPipesComponent = (function () {
    function ExemplosPipesComponent() {
        this.livro = {
            titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
            rating: 4.54321,
            numeroPaginas: 314,
            preco: 44.99,
            dataLancamento: new Date(2016, 5, 23),
            url: 'http://a.co/glqjpRP'
        };
        this.livros = ['Java', 'Angular 2'];
        this.valorAsync = new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve('Valor assíncrono'); }, 2000);
        });
        this.valorAsync2 = Rx_1.Observable.interval(2000)
            .map(function (valor) { return 'Valor assíncrono 2'; });
    }
    ExemplosPipesComponent.prototype.addCurso = function (valor) {
        this.livros.push(valor);
        console.log(this.livros);
    };
    ExemplosPipesComponent.prototype.obterCursos = function () {
        var _this = this;
        if (this.livros.length === 0 || this.filtro === undefined
            || this.filtro.trim() === '') {
            return this.livros;
        }
        return this.livros.filter(function (v) { return v.toLocaleLowerCase().includes(_this.filtro.toLocaleLowerCase()); });
    };
    ExemplosPipesComponent.prototype.ngOnInit = function () {
    };
    return ExemplosPipesComponent;
}());
ExemplosPipesComponent = __decorate([
    core_1.Component({
        selector: 'app-exemplos-pipes',
        templateUrl: './app/exemplos-pipes/exemplos-pipes.component.html',
        styleUrls: ['./app/exemplos-pipes/exemplos-pipes.component.css']
    }),
    __metadata("design:paramtypes", [])
], ExemplosPipesComponent);
exports.ExemplosPipesComponent = ExemplosPipesComponent;
//# sourceMappingURL=exemplos-pipes.component.js.map