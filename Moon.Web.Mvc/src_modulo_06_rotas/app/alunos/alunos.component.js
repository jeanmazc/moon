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
var alunos_service_1 = require("./alunos.service");
var AlunosComponent = (function () {
    function AlunosComponent(alunosService) {
        this.alunosService = alunosService;
        this.alunos = [];
    }
    AlunosComponent.prototype.ngOnInit = function () {
        this.alunos = this.alunosService.getAlunos();
    };
    return AlunosComponent;
}());
AlunosComponent = __decorate([
    core_1.Component({
        selector: 'app-alunos',
        templateUrl: './app/alunos/alunos.component.html',
        styleUrls: ['./app/alunos/alunos.component.css']
    }),
    __metadata("design:paramtypes", [alunos_service_1.AlunosService])
], AlunosComponent);
exports.AlunosComponent = AlunosComponent;
//# sourceMappingURL=alunos.component.js.map