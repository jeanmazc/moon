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
var AlunoDetalheComponent = (function () {
    function AlunoDetalheComponent(route, router, alunosService) {
        this.route = route;
        this.router = router;
        this.alunosService = alunosService;
    }
    AlunoDetalheComponent.prototype.ngOnInit = function () {
        /*this.inscricao = this.route.params.subscribe(
          (params: any) => {
            let id = params['id'];
    
            this.aluno = this.alunosService.getAluno(id);
          }
        );*/
        var _this = this;
        console.log('ngOnInit: AlunoDetalheComponent');
        this.inscricao = this.route.data.subscribe(function (info) {
            console.log('Recebendo o obj Aluno do resolver');
            _this.aluno = info.aluno;
        });
    };
    AlunoDetalheComponent.prototype.editarContato = function () {
        this.router.navigate(['/alunos', this.aluno.id, 'editar']);
    };
    AlunoDetalheComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    return AlunoDetalheComponent;
}());
AlunoDetalheComponent = __decorate([
    core_1.Component({
        selector: 'app-aluno-detalhe',
        templateUrl: './app/alunos/aluno-detalhe/aluno-detalhe.component.html',
        styleUrls: ['./app/alunos/aluno-detalhe/aluno-detalhe.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        alunos_service_1.AlunosService])
], AlunoDetalheComponent);
exports.AlunoDetalheComponent = AlunoDetalheComponent;
//# sourceMappingURL=aluno-detalhe.component.js.map