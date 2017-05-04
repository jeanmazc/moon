"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var pagina_nao_encontrada_component_1 = require("./pagina-nao-encontrada.component");
describe('PaginaNaoEncontradaComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [pagina_nao_encontrada_component_1.PaginaNaoEncontradaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(pagina_nao_encontrada_component_1.PaginaNaoEncontradaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pagina-nao-encontrada.component.spec.js.map