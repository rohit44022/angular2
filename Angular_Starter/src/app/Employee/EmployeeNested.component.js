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
var EmployeeService_service_1 = require("./EmployeeService.service");
var EmployeeNested = (function () {
    //creating constructor to initilize service
    function EmployeeNested(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmployeeCountProp = 'all';
    }
    EmployeeNested.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployee().subscribe(function (employeeData) { return _this.employeess = employeeData; });
    };
    EmployeeNested.prototype.getAllEmployee = function () {
        return this.employeess.length;
    };
    EmployeeNested.prototype.getMaleEmployee = function () {
        return this.employeess.filter(function (e) { return e.gender === 'male'; }).length;
    };
    EmployeeNested.prototype.getFemaleCount = function () {
        return this.employeess.filter(function (e) { return e.gender === 'female'; }).length;
    };
    EmployeeNested.prototype.onEmployeeRadioButtonChange = function (selectRadioButtonValue) {
        this.selectedEmployeeCountProp = selectRadioButtonValue;
    };
    return EmployeeNested;
}());
EmployeeNested = __decorate([
    core_1.Component({
        selector: 'employeeNestedComponent',
        templateUrl: 'app/Employee/employeeNested.component.html',
        providers: [EmployeeService_service_1.EmployeeServicess]
    }),
    __metadata("design:paramtypes", [EmployeeService_service_1.EmployeeServicess])
], EmployeeNested);
exports.EmployeeNested = EmployeeNested;
//# sourceMappingURL=EmployeeNested.component.js.map