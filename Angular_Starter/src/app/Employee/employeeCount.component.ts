import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'employeeCount',
    templateUrl: 'app/Employee/employeeCount.component.html'

})

export class employeeCount
{ 
    //for sending data from child componenet to parent compoenet below is the code

    // register properties
    RadiobuttonValue: string = "all";

    //create a custom event
    @Output()
    radioButtonSelectionChange: EventEmitter<string> = new EventEmitter<string>();

    //create a function which is raise above custom event
    onRadioButtonChange()
    {
        this.radioButtonSelectionChange.emit(this.RadiobuttonValue);
        console.log(this.RadiobuttonValue);
    }

    //code end

    @Input()
    all: number;    // these are the input properties means when we want to pass data from parent component to child 
         
    //component then in child component we have to declare input properties
    @Input()
    male: number;

    @Input()
    female: number
} 