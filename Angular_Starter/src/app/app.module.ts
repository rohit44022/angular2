import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { employeeComponent } from './Employee/employee.component';
import { employeeList } from './Employee/employeeList.component';
import { EmployeeNested } from './Employee/EmployeeNested.component';
import { employeeCount } from './Employee/employeeCount.component';
import { employeeListDatabaseWebApi } from './Employee/employeeListDatabaseWebApi';
import { employeePipe } from './Employee/employeeTitle.pipe';
import { HttpModule } from '@angular/http';
import { navigateOne } from './navigateOnee/navigateOne';
//import { pageNotFound } from './Employee/pageNotFound.component';
import { RouterModule, Routes } from '@angular/router';
import { navigatetwo } from './navigateTwo/navigateTwo.component';
import { pageNotFound } from './others/pageNotFound.component';

const appRoutes: Routes = [
    { path: 'EmployeeNested', component: EmployeeNested },
    { path: 'employee/:empcode', component: employeeComponent},
    { path: 'navigateOne', component: navigateOne },
    { path: 'navigateTwo', component: navigatetwo },
    { path: '', redirectTo: '/navigateOne', pathMatch: 'full' },
    { path: '**', component: pageNotFound }
]//now we create a route for our application bu now we need to tell angular that use these route and for this we have to register entry in ngmodule, routermodule


//all components what we create should be register here in module 

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, employeeComponent, employeeList, employeePipe, EmployeeNested, employeeCount, employeeListDatabaseWebApi, navigateOne, pageNotFound, navigatetwo], //whar ever component we declare in import must have registry in declaration 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


//NOTTES**
//app module is a root module  which booostrap  and launches angular application