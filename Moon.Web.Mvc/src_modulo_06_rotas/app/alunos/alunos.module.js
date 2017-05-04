"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aluno_detalhe_resolver_1 = require("./guards/aluno-detalhe.resolver");
var alunos_deactivate_guard_1 = require("./../guards/alunos-deactivate.guard");
var forms_1 = require("@angular/forms");
var alunos_service_1 = require("./alunos.service");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var alunos_component_1 = require("./alunos.component");
var aluno_form_component_1 = require("./aluno-form/aluno-form.component");
var aluno_detalhe_component_1 = require("./aluno-detalhe/aluno-detalhe.component");
var alunos_routing_module_1 = require("./alunos.routing.module");
var AlunosModule = (function () {
    function AlunosModule() {
    }
    return AlunosModule;
}());
AlunosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            alunos_routing_module_1.AlunosRoutingModule
        ],
        exports: [],
        declarations: [
            alunos_component_1.AlunosComponent,
            aluno_form_component_1.AlunoFormComponent,
            aluno_detalhe_component_1.AlunoDetalheComponent
        ],
        providers: [
            alunos_service_1.AlunosService,
            alunos_deactivate_guard_1.AlunosDeactivateGuard,
            aluno_detalhe_resolver_1.AlunoDetalheResolver
        ],
    })
], AlunosModule);
exports.AlunosModule = AlunosModule;
//# sourceMappingURL=alunos.module.js.map