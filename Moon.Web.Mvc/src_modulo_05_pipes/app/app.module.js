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
var exemplos_pipes_component_1 = require("./exemplos-pipes/exemplos-pipes.component");
var camel_case_pipe_1 = require("./camel-case.pipe");
var settings_service_1 = require("./settings.service");
var filtro_array_pipe_1 = require("./filtro-array.pipe");
var filtro_array_impuro_pipe_1 = require("./filtro-array-impuro.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            exemplos_pipes_component_1.ExemplosPipesComponent,
            camel_case_pipe_1.CamelCasePipe,
            filtro_array_pipe_1.FiltroArrayPipe,
            filtro_array_impuro_pipe_1.FiltroArrayImpuroPipe
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        providers: [
            /*{
              provide: LOCALE_ID,
              useValue: 'pt-BR'
            }*/
            settings_service_1.SettingsService,
            {
                provide: core_1.LOCALE_ID,
                deps: [settings_service_1.SettingsService],
                useFactory: function (settingsService) { return settingsService.getLocale(); }
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map