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
var NgElseDirective = (function () {
    function NgElseDirective(_templateRef, _viewContainerRef) {
        this._templateRef = _templateRef;
        this._viewContainerRef = _viewContainerRef;
    }
    Object.defineProperty(NgElseDirective.prototype, "ngElse", {
        set: function (condition) {
            if (!condition) {
                this._viewContainerRef.createEmbeddedView(this._templateRef);
            }
            else {
                this._viewContainerRef.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgElseDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgElseDirective.prototype, "ngElse", null);
NgElseDirective = __decorate([
    core_1.Directive({
        selector: '[ngElse]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef])
], NgElseDirective);
exports.NgElseDirective = NgElseDirective;
//# sourceMappingURL=ng-else.directive.js.map