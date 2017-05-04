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
var DiretivasCustomizadasComponent = (function () {
    function DiretivasCustomizadasComponent() {
        this.mostrarCursos = false;
    }
    DiretivasCustomizadasComponent.prototype.ngOnInit = function () {
    };
    DiretivasCustomizadasComponent.prototype.onMostrarCursos = function () {
        this.mostrarCursos = !this.mostrarCursos;
    };
    return DiretivasCustomizadasComponent;
}());
DiretivasCustomizadasComponent = __decorate([
    core_1.Component({
        selector: 'app-diretivas-customizadas',
        templateUrl: './app/diretivas-customizadas/diretivas-customizadas.component.html',
        styleUrls: ['./app/diretivas-customizadas/diretivas-customizadas.component.css']
    }),
    __metadata("design:paramtypes", [])
], DiretivasCustomizadasComponent);
exports.DiretivasCustomizadasComponent = DiretivasCustomizadasComponent;
//# sourceMappingURL=diretivas-customizadas.component.js.map