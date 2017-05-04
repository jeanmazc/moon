"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var diretiva_ngif_component_1 = require("./diretiva-ngif/diretiva-ngif.component");
var diretiva_ngfor_component_1 = require("./diretiva-ngfor/diretiva-ngfor.component");
var diretiva_ngswitch_component_1 = require("./diretiva-ngswitch/diretiva-ngswitch.component");
var diretiva_ngclass_component_1 = require("./diretiva-ngclass/diretiva-ngclass.component");
var diretiva_ngstyle_component_1 = require("./diretiva-ngstyle/diretiva-ngstyle.component");
var operador_elvis_component_1 = require("./operador-elvis/operador-elvis.component");
var exemplo_ng_content_component_1 = require("./exemplo-ng-content/exemplo-ng-content.component");
var fundo_amarelo_directive_1 = require("./shared/fundo-amarelo.directive");
var diretivas_customizadas_component_1 = require("./diretivas-customizadas/diretivas-customizadas.component");
var highlight_mouse_directive_1 = require("./shared/highlight-mouse.directive");
var highlight_directive_1 = require("./shared/highlight.directive");
var ng_else_directive_1 = require("./shared/ng-else.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            diretiva_ngif_component_1.DiretivaNgifComponent,
            diretiva_ngfor_component_1.DiretivaNgforComponent,
            diretiva_ngswitch_component_1.DiretivaNgswitchComponent,
            diretiva_ngclass_component_1.DiretivaNgclassComponent,
            diretiva_ngstyle_component_1.DiretivaNgstyleComponent,
            operador_elvis_component_1.OperadorElvisComponent,
            exemplo_ng_content_component_1.ExemploNgContentComponent,
            fundo_amarelo_directive_1.FundoAmareloDirective,
            diretivas_customizadas_component_1.DiretivasCustomizadasComponent,
            highlight_mouse_directive_1.HighlightMouseDirective,
            highlight_directive_1.HighlightDirective,
            ng_else_directive_1.NgElseDirective
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map