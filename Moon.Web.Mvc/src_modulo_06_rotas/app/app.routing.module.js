"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pagina_nao_encontrada_component_1 = require("./pagina-nao-encontrada/pagina-nao-encontrada.component");
var cursos_guard_1 = require("./guards/cursos.guard");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
//import { CursosComponent } from './cursos/cursos.component';
var login_component_1 = require("./login/login.component");
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
var auth_guard_1 = require("./guards/auth.guard");
var appRoutes = [
    { path: 'cursos',
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [cursos_guard_1.CursosGuard],
        canLoad: [auth_guard_1.AuthGuard]
    },
    { path: 'alunos',
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [auth_guard_1.AuthGuard],
        //canActivateChild: [AlunosGuard]
        canLoad: [auth_guard_1.AuthGuard]
    },
    //{ path: 'cursos', component: CursosComponent },
    //{ path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'home', component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pagina_nao_encontrada_component_1.PaginaNaoEncontradaComponent } //, canActivate: [AuthGuard]}
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map