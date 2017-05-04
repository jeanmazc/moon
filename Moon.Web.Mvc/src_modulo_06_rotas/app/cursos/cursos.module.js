"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//import { RouterModule } from '@angular/router';
var cursos_component_1 = require("./cursos.component");
var curso_detalhe_component_1 = require("./curso-detalhe/curso-detalhe.component");
var curso_nao_encontrado_component_1 = require("./curso-nao-encontrado/curso-nao-encontrado.component");
var cursos_service_1 = require("./cursos.service");
var cursos_routing_module_1 = require("./cursos.routing.module");
var curso_form_component_1 = require("./curso-form/curso-form.component");
var CursosModule = (function () {
    function CursosModule() {
    }
    return CursosModule;
}());
CursosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            cursos_routing_module_1.CursosRoutingModule
            //RouterModule
        ],
        exports: [],
        declarations: [
            cursos_component_1.CursosComponent,
            curso_detalhe_component_1.CursoDetalheComponent,
            curso_nao_encontrado_component_1.CursoNaoEncontradoComponent,
            curso_form_component_1.CursoFormComponent
        ],
        providers: [cursos_service_1.CursosService],
    })
], CursosModule);
exports.CursosModule = CursosModule;
//# sourceMappingURL=cursos.module.js.map