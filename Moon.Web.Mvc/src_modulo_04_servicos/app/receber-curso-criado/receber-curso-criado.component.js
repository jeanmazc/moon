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
var cursos_service_1 = require("../cursos/cursos.service");
var ReceberCursoCriadoComponent = (function () {
    function ReceberCursoCriadoComponent(cursosService) {
        this.cursosService = cursosService;
    }
    ReceberCursoCriadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cursosService.emitirCursoCriado.subscribe(function (cursoCriado) { return _this.curso = cursoCriado; });
    };
    return ReceberCursoCriadoComponent;
}());
ReceberCursoCriadoComponent = __decorate([
    core_1.Component({
        selector: 'app-receber-curso-criado',
        templateUrl: './app/receber-curso-criado/receber-curso-criado.component.html',
        styleUrls: ['./app/receber-curso-criado/receber-curso-criado.component.css']
    }),
    __metadata("design:paramtypes", [cursos_service_1.CursosService])
], ReceberCursoCriadoComponent);
exports.ReceberCursoCriadoComponent = ReceberCursoCriadoComponent;
//# sourceMappingURL=receber-curso-criado.component.js.map