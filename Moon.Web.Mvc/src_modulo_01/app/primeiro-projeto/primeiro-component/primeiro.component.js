"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PrimeiroComponent = (function () {
    function PrimeiroComponent() {
    }
    return PrimeiroComponent;
}());
PrimeiroComponent = __decorate([
    core_1.Component({
        selector: 'primeiro-component',
        template: '<p>Meu primeiro component com Angular 4!</p>'
    })
], PrimeiroComponent);
exports.PrimeiroComponent = PrimeiroComponent;
//# sourceMappingURL=primeiro.component.js.map