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
var employeeList = (function () {
    function employeeList() {
        this.employees = [
            { empcode: '101', gender: 'male', firstname: 'rohit', lastname: 'tripathi', age: 29, company: 'TCS', salary: 4000000 },
            { empcode: '102', gender: 'male', firstname: 'ram', lastname: 'singh', age: 22, company: 'RTC', salary: 3200000 },
            { empcode: '104', gender: 'female', firstname: 'richar', lastname: 'loft', age: 45, company: 'VCS', salary: 3400000 },
            { empcode: '103', gender: 'female', firstname: 'ravi', lastname: 'jain', age: 12, company: 'wwe', salary: 5000000 },
        ];
    }
    employeeList.prototype.getEmployee = function () {
        this.employees = [
            { empcode: '101', gender: 'male', firstname: 'rohit', lastname: 'tripathi', age: 29, company: 'TCS', salary: 4000000 },
            { empcode: '102', gender: 'male', firstname: 'ram', lastname: 'singh', age: 22, company: 'RTC', salary: 3200000 },
            { empcode: '104', gender: 'female', firstname: 'richar', lastname: 'loft', age: 45, company: 'VCS', salary: 3400000 },
            { empcode: '103', gender: 'female', firstname: 'ravi', lastname: 'jain', age: 12, company: 'wwe', salary: 5000000 },
            { empcode: '105', gender: 'male', firstname: 'ravi', lastname: 'luck', age: 22, company: 'we', salary: 432000000 },
        ];
    };
    //use of trackBy functionality to tear down only newly added elemetn in dom
    employeeList.prototype.trackbyEmployee = function (index, employees) {
        return employees.empcode;
    };
    return employeeList;
}());
employeeList = __decorate([
    core_1.Component({
        selector: 'employeeList',
        templateUrl: 'app/Employee/employeeList.component.html',
        styleUrls: ['app/Employee/employeeList.component.css']
    }),
    __metadata("design:paramtypes", [])
], employeeList);
exports.employeeList = employeeList;
//# sourceMappingURL=employeeList.component.js.map