"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var alunos_deactivate_guard_1 = require("./../guards/alunos-deactivate.guard");
var alunos_guard_1 = require("./../guards/alunos.guard");
var aluno_form_component_1 = require("./aluno-form/aluno-form.component");
var aluno_detalhe_component_1 = require("./aluno-detalhe/aluno-detalhe.component");
var alunos_component_1 = require("./alunos.component");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var aluno_detalhe_resolver_1 = require("./guards/aluno-detalhe.resolver");
var alunosRoutes = [
    { path: '', component: alunos_component_1.AlunosComponent,
        canActivateChild: [alunos_guard_1.AlunosGuard],
        children: [
            { path: 'novo', component: aluno_form_component_1.AlunoFormComponent },
            { path: ':id', component: aluno_detalhe_component_1.AlunoDetalheComponent,
                resolve: { aluno: aluno_detalhe_resolver_1.AlunoDetalheResolver }
            },
            { path: ':id/editar', component: aluno_form_component_1.AlunoFormComponent,
                canDeactivate: [alunos_deactivate_guard_1.AlunosDeactivateGuard]
            }
        ] }
];
var AlunosRoutingModule = (function () {
    function AlunosRoutingModule() {
    }
    return AlunosRoutingModule;
}());
AlunosRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(alunosRoutes)],
        exports: [router_1.RouterModule]
    })
], AlunosRoutingModule);
exports.AlunosRoutingModule = AlunosRoutingModule;
//# sourceMappingURL=alunos.routing.module.js.map