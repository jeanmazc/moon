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
var router_1 = require("@angular/router");
var cursos_service_1 = require("../cursos.service");
var CursoDetalheComponent = (function () {
    function CursoDetalheComponent(route, router, cursosService) {
        this.route = route;
        this.router = router;
        this.cursosService = cursosService;
        //this.id = this.route.snapshot.params['id'];
        //console.log(this.route);
    }
    CursoDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.curso = _this.cursosService.getCurso(_this.id);
            if (_this.curso == null) {
                _this.router.navigate(['/cursos/naoEncontrado']);
            }
        });
    };
    CursoDetalheComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    return CursoDetalheComponent;
}());
CursoDetalheComponent = __decorate([
    core_1.Component({
        selector: 'app-curso-detalhe',
        templateUrl: './app/cursos/curso-detalhe/curso-detalhe.component.html',
        styleUrls: ['./app/cursos/curso-detalhe/curso-detalhe.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        cursos_service_1.CursosService])
], CursoDetalheComponent);
exports.CursoDetalheComponent = CursoDetalheComponent;
//# sourceMappingURL=curso-detalhe.component.js.map