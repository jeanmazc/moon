/* tslint:disable:no-unused-variable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var log_service_1 = require("./log.service");
describe('Service: Log', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [log_service_1.LogService]
        });
    });
    it('should ...', testing_1.inject([log_service_1.LogService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=log.service.spec.js.map