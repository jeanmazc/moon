"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var curso_nao_encontrado_component_1 = require("./curso-nao-encontrado.component");
describe('CursoNaoEncontradoComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [curso_nao_encontrado_component_1.CursoNaoEncontradoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(curso_nao_encontrado_component_1.CursoNaoEncontradoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=curso-nao-encontrado.component.spec.js.map