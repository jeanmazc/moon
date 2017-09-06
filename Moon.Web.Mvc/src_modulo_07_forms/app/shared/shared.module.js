"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var consulta_cep_service_1 = require("./services/consulta-cep.service");
var http_1 = require("@angular/http");
var dropdown_service_1 = require("./services/dropdown.service");
var campo_control_erro_component_1 = require("./campo-control-erro/campo-control-erro.component");
var form_debug_component_1 = require("./form-debug/form-debug.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            form_debug_component_1.FormDebugComponent,
            campo_control_erro_component_1.CampoControlErroComponent
        ],
        exports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            form_debug_component_1.FormDebugComponent,
            campo_control_erro_component_1.CampoControlErroComponent
        ],
        providers: [dropdown_service_1.DropdownService, consulta_cep_service_1.ConsultaCepService]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map