import { Component ,OnInit} from '@angular/core';
import { Iemployee } from './IEmployee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServicess } from './EmployeeService.service';



@Component({
selector: 'my-employee',
templateUrl: 'app/Employee/employee.component.html',
styleUrls: ['app/Employee/employee.component.css'],
providers: [EmployeeServicess]
})

export class employeeComponent implements OnInit
{
//  classToApply ="tablefont bold"
//  firstname: string = "rohit";
//  lastname: string = "tripathi";
//  gender: string = "male";
//  age: number = 29;
//  colSpan: number = 3;//in A2 attribute binding is using to bind componenty property with html attribute and for which we //userattr.colSpan 
//
//  buttonClick: boolean = true;
//
//  isBold: boolean = true;
//
//  getEmployeeName(): string{
//      return this.firstname + " " + this.lastname;
//  }
//
//  myClick(): void
//  {
//      console.log("button click");
//  }
//
//  ShowButon: boolean = false;
//  showDetail(): void
//  {
//      this.ShowButon = !this.ShowButon;
//  }
//
//  textboxname: string = "rohit Tripathi";

employee: Iemployee;

constructor(private _employeeService: EmployeeServicess, private _activatedRoute: ActivatedRoute)
{ }
statusMessage: string;
ngOnInit()
{
    let empcode: string = this._activatedRoute.snapshot.params['empcode'];
    this._employeeService.getEmployeeByCode(empcode).subscribe(
        (employeeData) => this.employee = employeeData, (error) => {
                                                                        this.statusMessage = "problem with service , please try after some time";
                                                                            console.log(error)
        }

                                                                    )
}

}