import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UserFormService {
    private url= "http://localhost:8080/users";
    
    constructor(private http: HttpClient) {}

    employeeForm(emp): Observable<any[]> {
        return this.http.post<any[]> (this.url, emp);
    }
}