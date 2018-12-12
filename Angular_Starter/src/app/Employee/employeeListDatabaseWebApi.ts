import { Component } from '@angular/core';
import { Iemployee } from './IEmployee';
import { EmployeeServicess } from './EmployeeService.service';

@Component({
    selector: 'employeeListDatabaseWebApi',
    templateUrl: 'app/Employee/employeeListDatabaseWebApi.html',
    providers: [EmployeeServicess]

})

export class employeeListDatabaseWebApi
{
    employeeList: Iemployee[];
    errorStatus: string;

    constructor(private _employeeHttpCall : EmployeeServicess)
    {
    }

    ngOnInit()
    {
        this._employeeHttpCall.getEmployee().subscribe((employeeListCollection) => this.employeeList = employeeListCollection, (error) => {
            this.errorStatus = "problem in service";
        });
    }
}