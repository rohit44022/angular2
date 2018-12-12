import { Component } from '@angular/core';
import { Iemployee } from './IEmployee';

@Component({

    selector: 'employeeList',
    templateUrl: 'app/Employee/employeeList.component.html',
    styleUrls: ['app/Employee/employeeList.component.css']
   
})

export class employeeList
{
    employees: Iemployee[];

    constructor()
    {
        this.employees = [
            { empcode: '101', gender: 'male', firstname: 'rohit', lastname: 'tripathi', age: 29, company: 'TCS', salary: 4000000 },
            { empcode: '102',gender:'male'   , firstname: 'ram', lastname: 'singh', age: 22, company: 'RTC', salary: 3200000 },
            { empcode: '104',gender:'female'  , firstname: 'richar', lastname: 'loft', age: 45, company: 'VCS', salary: 3400000 },
            { empcode: '103',gender: 'female'  , firstname: 'ravi', lastname: 'jain', age: 12, company: 'wwe', salary: 5000000 },
        ];
    }

    getEmployee(): void
    {
        this.employees = [
            { empcode: '101', gender: 'male' , firstname: 'rohit', lastname: 'tripathi', age: 29, company: 'TCS', salary: 4000000 },
            { empcode: '102',gender:'male' ,  firstname: 'ram', lastname: 'singh', age: 22, company: 'RTC', salary: 3200000 },
            { empcode: '104',gender:'female',  firstname: 'richar', lastname: 'loft', age: 45, company: 'VCS', salary: 3400000 },
            { empcode: '103',gender:'female' , firstname: 'ravi', lastname: 'jain', age: 12, company: 'wwe', salary: 5000000 },
            { empcode: '105', gender: 'male' , firstname: 'ravi', lastname: 'luck', age: 22, company: 'we', salary: 432000000 },
        ];
    }

    //use of trackBy functionality to tear down only newly added elemetn in dom

    trackbyEmployee(index: number, employees: any): string
    {
        return employees.empcode;
    }

    

}