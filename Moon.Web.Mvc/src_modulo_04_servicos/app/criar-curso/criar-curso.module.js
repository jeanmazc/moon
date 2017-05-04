"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var criar_curso_component_1 = require("./criar-curso.component");
var receber_curso_criado_component_1 = require("../receber-curso-criado/receber-curso-criado.component");
var CriarCursoModule = (function () {
    function CriarCursoModule() {
    }
    return CriarCursoModule;
}());
CriarCursoModule = __decorate([
    core_1.NgModule({
        declarations: [
            criar_curso_component_1.CriarCursoComponent,
            receber_curso_criado_component_1.ReceberCursoCriadoComponent
        ],
        imports: [
            common_1.CommonModule
        ],
        exports: [criar_curso_component_1.CriarCursoComponent] //,
        //providers: [CursosService]
    })
], CriarCursoModule);
exports.CriarCursoModule = CriarCursoModule;
//# sourceMappingURL=criar-curso.module.js.map