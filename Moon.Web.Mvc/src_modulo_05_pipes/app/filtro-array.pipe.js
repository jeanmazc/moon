"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FiltroArrayPipe = (function () {
    function FiltroArrayPipe() {
    }
    FiltroArrayPipe.prototype.transform = function (value, args) {
        if (value.length === 0 || args === undefined) {
            return value;
        }
        var filter = args.toLocaleLowerCase();
        return value.filter(function (v) { return v.toLocaleLowerCase().includes(filter); });
    };
    return FiltroArrayPipe;
}());
FiltroArrayPipe = __decorate([
    core_1.Pipe({
        name: 'filtroArray'
    })
], FiltroArrayPipe);
exports.FiltroArrayPipe = FiltroArrayPipe;
//# sourceMappingURL=filtro-array.pipe.js.map