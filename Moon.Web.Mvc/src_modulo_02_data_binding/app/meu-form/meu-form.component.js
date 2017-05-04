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
var MeuFormComponent = (function () {
    function MeuFormComponent() {
        this.nome = 'abc';
        this.pessoa = {
            nome: 'def',
            idade: 20
        };
    }
    MeuFormComponent.prototype.ngOnInit = function () {
    };
    return MeuFormComponent;
}());
MeuFormComponent = __decorate([
    core_1.Component({
        selector: 'app-meu-form',
        templateUrl: './app/meu-form/meu-form.component.html',
        styleUrls: ['./app/meu-form/meu-form.component.css']
    }),
    __metadata("design:paramtypes", [])
], MeuFormComponent);
exports.MeuFormComponent = MeuFormComponent;
//# sourceMappingURL=meu-form.component.js.map