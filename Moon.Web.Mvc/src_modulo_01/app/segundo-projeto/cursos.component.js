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
var cursos_service_1 = require("./cursos.service");
var core_1 = require("@angular/core");
var CursosComponent = (function () {
    function CursosComponent(cursosService) {
        this.cursosService = cursosService;
        this.nomePortal = 'http://loiane.training';
        /*for (let i=0; i<this.cursos.length; i++){
          let curso = this.cursos[i];
        }*/
        //var servico = new CursosService();
        this.cursos = this.cursosService.getCursos();
    }
    CursosComponent.prototype.ngOnInit = function () {
    };
    return CursosComponent;
}());
CursosComponent = __decorate([
    core_1.Component({
        selector: 'app-cursos',
        templateUrl: './app/segundo-projeto/cursos.component.html',
        styleUrls: ['./app/segundo-projeto/cursos.component.css']
    }),
    __metadata("design:paramtypes", [cursos_service_1.CursosService])
], CursosComponent);
exports.CursosComponent = CursosComponent;
//# sourceMappingURL=cursos.component.js.map