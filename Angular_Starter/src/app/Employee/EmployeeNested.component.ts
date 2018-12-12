import { Component } from '@angular/core';
import { Iemployee } from './IEmployee';
import { EmployeeServicess } from './EmployeeService.service';

@Component({
    selector: 'employeeNestedComponent',
    templateUrl: 'app/Employee/employeeNested.component.html',
    providers: [EmployeeServicess]
})

export class EmployeeNested 
{
   // employeess: any[];
   //
   // constructor()
   // {
   //     this.employeess = [
   //         { empcode: '101', gender: 'male', firstname: 'rohit', lastname: 'tripathi', age: 29, company: 'TCS', salary: 4000000 },
   //         { empcode: '102', gender: 'male', firstname: 'ram', lastname: 'singh', age: 22, company: 'RTC', salary: 3200000 },
   //         { empcode: '104', gender: 'female', firstname: 'richar', lastname: 'loft', age: 45, company: 'VCS', salary: 3400000 },
   //         { empcode: '103', gender: 'female', firstname: 'ravi', lastname: 'jain', age: 12, company: 'wwe', salary: 5000000 },
   //     ];
   // }

    employeess: Iemployee[]; //here emloyeess type is Iemployee array

    //creating constructor to initilize service
    constructor(private _employeeService: EmployeeServicess)
    {

    }

    ngOnInit() // ngoninit is the right cycle to initiateservice methods
    {
         this._employeeService.getEmployee().subscribe((employeeData) => this.employeess = employeeData); 
    }

    getAllEmployee(): number
    {
        return this.employeess.length;
    }

    getMaleEmployee(): number
    {
        return this.employeess.filter(e => e.gender === 'male').length;
    }

    getFemaleCount(): number
    {
        return this.employeess.filter(e => e.gender === 'female').length;
    }

    selectedEmployeeCountProp: string = 'all';

    onEmployeeRadioButtonChange(selectRadioButtonValue: string): void {
        this.selectedEmployeeCountProp = selectRadioButtonValue;
    }


   

}

