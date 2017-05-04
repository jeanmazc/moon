"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var cursos_component_1 = require("./cursos/cursos.component");
var login_component_1 = require("./login/login.component");
var curso_detalhe_component_1 = require("./cursos/curso-detalhe/curso-detalhe.component");
var curso_nao_encontrado_component_1 = require("./cursos/curso-nao-encontrado/curso-nao-encontrado.component");
var APP_ROUTES = [
    { path: 'cursos', component: cursos_component_1.CursosComponent },
    { path: 'curso/:id', component: curso_detalhe_component_1.CursoDetalheComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'naoEncontrado', component: curso_nao_encontrado_component_1.CursoNaoEncontradoComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map