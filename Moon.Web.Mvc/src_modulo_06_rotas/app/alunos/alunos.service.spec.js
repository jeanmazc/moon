/* tslint:disable:no-unused-variable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var alunos_service_1 = require("./alunos.service");
describe('AlunosService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [alunos_service_1.AlunosService]
        });
    });
    it('should ...', testing_1.inject([alunos_service_1.AlunosService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=alunos.service.spec.js.map