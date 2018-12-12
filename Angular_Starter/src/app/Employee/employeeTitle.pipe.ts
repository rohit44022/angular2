import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name: 'employeepipeTransform'
})

export class employeePipe implements PipeTransform
{
    transform(value: string, gender: string): string
    {
        if (gender == 'male') {
            return 'Mr.' + value;
        }
        else
        {
            return 'Mrs.' + value;
        }
    }
}