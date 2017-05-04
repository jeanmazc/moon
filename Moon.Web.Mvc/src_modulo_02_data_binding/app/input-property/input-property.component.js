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
var InputPropertyComponent = (function () {
    function InputPropertyComponent() {
        this.nomeCurso = '';
    }
    InputPropertyComponent.prototype.ngOnInit = function () {
    };
    return InputPropertyComponent;
}());
__decorate([
    core_1.Input('nome'),
    __metadata("design:type", String)
], InputPropertyComponent.prototype, "nomeCurso", void 0);
InputPropertyComponent = __decorate([
    core_1.Component({
        selector: 'app-curso',
        templateUrl: './app/input-property/input-property.component.html',
        styleUrls: ['./app/input-property/input-property.component.css'] //,
        //inputs: ['nomeCurso:nome']
    }),
    __metadata("design:paramtypes", [])
], InputPropertyComponent);
exports.InputPropertyComponent = InputPropertyComponent;
//# sourceMappingURL=input-property.component.js.map