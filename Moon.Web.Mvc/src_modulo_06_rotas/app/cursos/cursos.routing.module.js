"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cursos_component_1 = require("./cursos.component");
var curso_detalhe_component_1 = require("./curso-detalhe/curso-detalhe.component");
var curso_nao_encontrado_component_1 = require("./curso-nao-encontrado/curso-nao-encontrado.component");
var cursosRoutes = [
    { path: '', component: cursos_component_1.CursosComponent },
    { path: 'naoEncontrado', component: curso_nao_encontrado_component_1.CursoNaoEncontradoComponent },
    { path: ':id', component: curso_detalhe_component_1.CursoDetalheComponent }
];
var CursosRoutingModule = (function () {
    function CursosRoutingModule() {
    }
    return CursosRoutingModule;
}());
CursosRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(cursosRoutes)],
        exports: [router_1.RouterModule]
    })
], CursosRoutingModule);
exports.CursosRoutingModule = CursosRoutingModule;
//# sourceMappingURL=cursos.routing.module.js.map