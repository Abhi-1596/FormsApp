import { Component } from '@angular/core';
import { IUser } from './forms.model';

@Component({
    selector: '<app-forms>',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})

export class FormsComponent {
    myUser = new IUser('','','','');

    myConsole() {
        console.log(this.myUser.firstname);
    }

    firstLetterToUpperCase(value: string): string {
        if (value.length > 0) {
        return (value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
        } else {
            return value;
        }
    }

    firstNameUpper(value: string): void {
        this.myUser.firstname = this.firstLetterToUpperCase(value);
    }
    lastNameUpper(value: string): void {
        this.myUser.lastname = this.firstLetterToUpperCase(value);
    }
}