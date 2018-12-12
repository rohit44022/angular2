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
var employeeCount = (function () {
    function employeeCount() {
        //for sending data from child componenet to parent compoenet below is the code
        // register properties
        this.RadiobuttonValue = "all";
        //create a custom event
        this.radioButtonSelectionChange = new core_1.EventEmitter();
    }
    //create a function which is raise above custom event
    employeeCount.prototype.onRadioButtonChange = function () {
        this.radioButtonSelectionChange.emit(this.RadiobuttonValue);
        console.log(this.RadiobuttonValue);
    };
    return employeeCount;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], employeeCount.prototype, "radioButtonSelectionChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], employeeCount.prototype, "all", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], employeeCount.prototype, "male", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], employeeCount.prototype, "female", void 0);
employeeCount = __decorate([
    core_1.Component({
        selector: 'employeeCount',
        templateUrl: 'app/Employee/employeeCount.component.html'
    })
], employeeCount);
exports.employeeCount = employeeCount;
//# sourceMappingURL=employeeCount.component.js.map