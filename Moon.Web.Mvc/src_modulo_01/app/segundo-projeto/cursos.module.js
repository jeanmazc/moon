"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cursos_service_1 = require("./cursos.service");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var cursos_component_1 = require("./cursos.component");
var curso_detalhe_component_1 = require("./curso-detalhe/curso-detalhe.component");
var CursosModule = (function () {
    function CursosModule() {
    }
    return CursosModule;
}());
CursosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            cursos_component_1.CursosComponent,
            curso_detalhe_component_1.CursoDetalheComponent
        ],
        exports: [
            cursos_component_1.CursosComponent
        ],
        providers: [cursos_service_1.CursosService]
    })
], CursosModule);
exports.CursosModule = CursosModule;
//# sourceMappingURL=cursos.module.js.map