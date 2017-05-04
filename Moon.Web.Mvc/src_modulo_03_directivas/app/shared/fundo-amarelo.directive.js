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
var FundoAmareloDirective = (function () {
    function FundoAmareloDirective(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        //console.log(this._elementRef);
        //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    }
    return FundoAmareloDirective;
}());
FundoAmareloDirective = __decorate([
    core_1.Directive({
        selector: 'p[fundoAmarelo]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], FundoAmareloDirective);
exports.FundoAmareloDirective = FundoAmareloDirective;
//# sourceMappingURL=fundo-amarelo.directive.js.map