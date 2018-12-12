import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    //template: `<h1>hello {{name}}</h1>`
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

    pageHeader: string = "Employee Details";


}