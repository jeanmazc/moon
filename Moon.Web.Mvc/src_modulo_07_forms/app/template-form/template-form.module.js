"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var form_debug_component_1 = require("./../form-debug/form-debug.component");
var forms_1 = require("@angular/forms");
var template_form_component_1 = require("./template-form.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var TemplateFormModule = (function () {
    function TemplateFormModule() {
    }
    return TemplateFormModule;
}());
TemplateFormModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            template_form_component_1.TemplateFormComponent,
            form_debug_component_1.FormDebugComponent
        ]
    })
], TemplateFormModule);
exports.TemplateFormModule = TemplateFormModule;
//# sourceMappingURL=template-form.module.js.map