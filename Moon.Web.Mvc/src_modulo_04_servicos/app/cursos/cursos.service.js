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
var log_service_1 = require("../shared/log.service");
var CursosService = CursosService_1 = (function () {
    function CursosService(logService) {
        this.logService = logService;
        this.emitirCursoCriado = new core_1.EventEmitter();
        this.cursos = ['Angular 2', 'Java', 'Phonegap'];
        console.log('CursosService');
    }
    CursosService.prototype.getCursos = function () {
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    };
    CursosService.prototype.addCurso = function (curso) {
        this.logService.consoleLog("Criando um novo curso " + curso);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService_1.criouNovoCurso.emit(curso);
    };
    return CursosService;
}());
CursosService.criouNovoCurso = new core_1.EventEmitter();
CursosService = CursosService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [log_service_1.LogService])
], CursosService);
exports.CursosService = CursosService;
var CursosService_1;
//# sourceMappingURL=cursos.service.js.map