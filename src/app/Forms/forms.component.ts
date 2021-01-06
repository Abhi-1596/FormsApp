import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from './forms.model';

@Component({
    selector: '<app-forms>',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})

export class FormsComponent {
    languages: string[] = ['NodeJs', 'React', 'Angular', 'Go', 'Java'];
    hasCodeLangError: boolean = false;

    myUser = new IUser('', '', '', '', '');

    myConsole() {
        console.log(this.myUser.firstname);
    }

    firstLetterToUpperCase(value: string): string {
        if (value.length > 0) {
            return (value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
        }
        return value;
    }

    firstNameUpper(value: string): void {
        this.myUser.firstname = this.firstLetterToUpperCase(value);
    }
    lastNameUpper(value: string): void {
        this.myUser.lastname = this.firstLetterToUpperCase(value);
    }

    validateCodeLang(event): void {
        if (this.myUser.codeLang === 'default') {
            this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }

    sunmitForm(form: NgForm): void {
        console.log(form.value);

        document.getElementById('display').innerHTML = '<p>First Name :\t' + form.value.firstname +
                                                        '</p><p>Last Name :\t' + form.value.lastname +
                                                        '</p><p>Email ID :\t' + form.value.email +
                                                        '</p><p>Password :\t' + form.value.password +
                                                        '</p><p>Coding Language :\t' + form.value.codeLang + '</p>';
    }
}