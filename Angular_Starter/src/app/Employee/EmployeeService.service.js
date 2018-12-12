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
var http_1 = require("@angular/http"); // http is used to call http web api mehtods and response is used to get the response from web api
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map"); // map oprator is used to map service call to obserable type
require("rxjs/add/operator/catch"); // catch operator is used to handle error in web service 
var EmployeeServicess = (function () {
    //create a constructor to call web service and to initilize service
    function EmployeeServicess(_http) {
        this._http = _http;
    } //here Http is dependency 
    //commenting below harcoded data as now we are calling web api and getting data from service
    //getEmployees(): Iemployee[] {
    //    return [
    //        { empcode: '101', gender: 'male', firstname: 'rohit', lastname: 'tripathi', age: 29, company: 'TCS', salary: 4000000 },
    //        { empcode: '102', gender: 'male', firstname: 'ram', lastname: 'singh', age: 22, company: 'RTC', salary: 3200000 },
    //        { empcode: '104', gender: 'female', firstname: 'richar', lastname: 'loft', age: 45, company: 'VCS', salary: 3400000 },
    //        { empcode: '103', gender: 'female', firstname: 'ravi', lastname: 'jain', age: 12, company: 'wwe', salary: 5000000 }
    //    ];
    //}
    EmployeeServicess.prototype.getEmployee = function () {
        return this._http.get("http://localhost:51467/api/EmployeeDetail")
            .map(function (response) { return response.json(); }).catch(this.handleError);
        //.map oprator we are passing response to it to convert response as Observable
        //.Catch method is used to handle error and under .catch we have custome method whcih actually handle error
    };
    EmployeeServicess.prototype.getEmployeeByCode = function (empcode) {
        return this._http.get("http://localhost:51467/api/EmployeeDetail/" + empcode)
            .map(function (response) { return response.json(); }).catch(this.handleError);
        //.map oprator we are passing response to it to convert response as Observable
        //.Catch method is used to handle error and under .catch we have custome method whcih actually handle error
    };
    EmployeeServicess.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    return EmployeeServicess;
}());
EmployeeServicess = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeServicess);
exports.EmployeeServicess = EmployeeServicess;
//# sourceMappingURL=EmployeeService.service.js.map