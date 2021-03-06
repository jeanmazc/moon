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
var AlunosService = (function () {
    function AlunosService() {
        this.alunos = [
            { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
            { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
            { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' }
        ];
    }
    AlunosService.prototype.getAlunos = function () {
        return this.alunos;
    };
    AlunosService.prototype.getAluno = function (id) {
        for (var i = 0; i < this.alunos.length; i++) {
            var aluno = this.alunos[i];
            if (aluno.id == id) {
                return aluno;
            }
        }
        return null;
    };
    return AlunosService;
}());
AlunosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AlunosService);
exports.AlunosService = AlunosService;
//# sourceMappingURL=alunos.service.js.map