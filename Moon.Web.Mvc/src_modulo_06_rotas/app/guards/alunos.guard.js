"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AlunosGuard = (function () {
    function AlunosGuard() {
    }
    AlunosGuard.prototype.canActivateChild = function (route, state) {
        //console.log(route);
        //console.log(state);
        console.log('AlunosGuard: Guarda de rota filha');
        if (state.url.includes('editar')) {
            //alert('Usuário sem acesso');
            //return Observable.of(false);
        }
        return true;
    };
    return AlunosGuard;
}());
AlunosGuard = __decorate([
    core_1.Injectable()
], AlunosGuard);
exports.AlunosGuard = AlunosGuard;
//# sourceMappingURL=alunos.guard.js.map