"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./Employee/employee.component");
var employeeList_component_1 = require("./Employee/employeeList.component");
var EmployeeNested_component_1 = require("./Employee/EmployeeNested.component");
var employeeCount_component_1 = require("./Employee/employeeCount.component");
var employeeListDatabaseWebApi_1 = require("./Employee/employeeListDatabaseWebApi");
var employeeTitle_pipe_1 = require("./Employee/employeeTitle.pipe");
var http_1 = require("@angular/http");
var navigateOne_1 = require("./navigateOnee/navigateOne");
//import { pageNotFound } from './Employee/pageNotFound.component';
var router_1 = require("@angular/router");
var navigateTwo_component_1 = require("./navigateTwo/navigateTwo.component");
var pageNotFound_component_1 = require("./others/pageNotFound.component");
var appRoutes = [
    { path: 'EmployeeNested', component: EmployeeNested_component_1.EmployeeNested },
    { path: 'employee/:code', component: employee_component_1.employeeComponent },
    { path: 'navigateOne', component: navigateOne_1.navigateOne },
    { path: 'navigateTwo', component: navigateTwo_component_1.navigatetwo },
    { path: '', redirectTo: '/navigateOne', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.pageNotFound }
]; //now we create a route for our application bu now we need to tell angular that use these route and for this we have to register entry in ngmodule, routermodule
//all components what we create should be register here in module 
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, employee_component_1.employeeComponent, employeeList_component_1.employeeList, employeeTitle_pipe_1.employeePipe, EmployeeNested_component_1.EmployeeNested, employeeCount_component_1.employeeCount, employeeListDatabaseWebApi_1.employeeListDatabaseWebApi, navigateOne_1.navigateOne, pageNotFound_component_1.pageNotFound, navigateTwo_component_1.navigatetwo],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//NOTTES**
//app module is a root module  which booostrap  and launches angular application 
//# sourceMappingURL=app.module.js.map