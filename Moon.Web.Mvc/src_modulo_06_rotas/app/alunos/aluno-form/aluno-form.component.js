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
var alunos_service_1 = require("./../alunos.service");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var AlunoFormComponent = (function () {
    function AlunoFormComponent(route, alunosService) {
        this.route = route;
        this.alunosService = alunosService;
        this.aluno = {};
        this.formMudou = false;
    }
    AlunoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.aluno = _this.alunosService.getAluno(id);
            if (_this.aluno === null) {
                _this.aluno = {};
            }
        });
    };
    AlunoFormComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    AlunoFormComponent.prototype.onInput = function () {
        this.formMudou = true;
        console.log('mudou');
    };
    AlunoFormComponent.prototype.podeMudarRota = function () {
        if (this.formMudou) {
            confirm('Tem certeza que deseja sair dessa página?');
        }
        return true;
    };
    AlunoFormComponent.prototype.podeDesativar = function () {
        return this.podeMudarRota();
    };
    return AlunoFormComponent;
}());
AlunoFormComponent = __decorate([
    core_1.Component({
        selector: 'app-aluno-form',
        templateUrl: './app/alunos/aluno-form/aluno-form.component.html',
        styleUrls: ['./app/alunos/aluno-form/aluno-form.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        alunos_service_1.AlunosService])
], AlunoFormComponent);
exports.AlunoFormComponent = AlunoFormComponent;
//# sourceMappingURL=aluno-form.component.js.map