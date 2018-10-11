import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    constructor(public http: Http) {
        console.log('Data service connected....');
    }

    getEmployees() {
        console.log('getEmp() called!');
        
        return this.http.get('http://localhost:3000/employee')
            .pipe(map(res => res.json()));
    }
}
