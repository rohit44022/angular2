import { Injectable } from '@angular/core';
import { Iemployee } from './IEmployee';
import { Http, Response } from '@angular/http'; // http is used to call http web api mehtods and response is used to get the response from web api
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';// map oprator is used to map service call to obserable type
import 'rxjs/add/operator/catch' // catch operator is used to handle error in web service 

@Injectable()
export class EmployeeServicess 
{

    //create a constructor to call web service and to initilize service
    constructor(private _http: Http) { }  //here Http is dependency 


    //commenting below harcoded data as now we are calling web api and getting data from service
    //getEmployees(): Iemployee[] {
    //    return [
    //        { empcode: '101', gender: 'male', firstname: 'rohit', lastname: 'tripathi', age: 29, company: 'TCS', salary: 4000000 },
    //        { empcode: '102', gender: 'male', firstname: 'ram', lastname: 'singh', age: 22, company: 'RTC', salary: 3200000 },
    //        { empcode: '104', gender: 'female', firstname: 'richar', lastname: 'loft', age: 45, company: 'VCS', salary: 3400000 },
    //        { empcode: '103', gender: 'female', firstname: 'ravi', lastname: 'jain', age: 12, company: 'wwe', salary: 5000000 }
    //    ];
    //}

    getEmployee(): Observable <Iemployee[]>
    {
        return this._http.get("http://localhost:51467/api/EmployeeDetail")
            .map((response: Response) => <Iemployee[]>response.json()).catch(this.handleError);
         //.map oprator we are passing response to it to convert response as Observable
        //.Catch method is used to handle error and under .catch we have custome method whcih actually handle error
    }

    getEmployeeByCode(empcode: string): Observable<Iemployee> {
        return this._http.get("http://localhost:51467/api/EmployeeDetail/"+empcode)
            .map((response: Response) => <Iemployee[]>response.json()).catch(this.handleError);
        //.map oprator we are passing response to it to convert response as Observable
        //.Catch method is used to handle error and under .catch we have custome method whcih actually handle error
    }

    handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error);
    }

    //(response: Response) => <Iemployee[]>response.json() --> this code taking Response from http call and transfroming data of http to Iemployee array. because our service return Observable

}