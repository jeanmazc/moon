"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cursos_guard_1 = require("./guards/cursos.guard");
var alunos_guard_1 = require("./guards/alunos.guard");
var auth_guard_1 = require("./guards/auth.guard");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
//import { CursosComponent } from './cursos/cursos.component';
//import { routing } from './app.routing';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
var app_routing_module_1 = require("./app.routing.module");
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';
var auth_service_1 = require("./login/auth.service");
var pagina_nao_encontrada_component_1 = require("./pagina-nao-encontrada/pagina-nao-encontrada.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            pagina_nao_encontrada_component_1.PaginaNaoEncontradaComponent /*,
            CursosComponent,
            CursoDetalheComponent,
            CursoNaoEncontradoComponent*/
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            //CursosModule,
            //AlunosModule,
            app_routing_module_1.AppRoutingModule
            //routing
        ],
        providers: [
            auth_service_1.AuthService,
            auth_guard_1.AuthGuard,
            cursos_guard_1.CursosGuard,
            alunos_guard_1.AlunosGuard
        ],
        //providers: [CursosService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map