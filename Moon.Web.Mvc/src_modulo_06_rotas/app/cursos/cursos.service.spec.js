/* tslint:disable:no-unused-variable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var cursos_service_1 = require("./cursos.service");
describe('CursosService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [cursos_service_1.CursosService]
        });
    });
    it('should ...', testing_1.inject([cursos_service_1.CursosService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=cursos.service.spec.js.map