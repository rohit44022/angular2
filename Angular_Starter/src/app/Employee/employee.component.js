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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var EmployeeService_service_1 = require("./EmployeeService.service");
var employeeComponent = (function () {
    function employeeComponent(_employeeService, _activatedRoute) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
    }
    employeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empcode = this._activatedRoute.snapshot.params['empcode'];
        this._employeeService.getEmployeeByCode(empcode).subscribe(function (employeeData) { return _this.employee = employeeData; }, function (error) {
            _this.statusMessage = "problem with service , please try after some time";
            console.log(error);
        });
    };
    return employeeComponent;
}());
employeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: 'app/Employee/employee.component.html',
        styleUrls: ['app/Employee/employee.component.css'],
        providers: [EmployeeService_service_1.EmployeeServicess]
    }),
    __metadata("design:paramtypes", [EmployeeService_service_1.EmployeeServicess, router_1.ActivatedRoute])
], employeeComponent);
exports.employeeComponent = employeeComponent;
//# sourceMappingURL=employee.component.js.map