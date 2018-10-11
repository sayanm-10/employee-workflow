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
        return this.http.get('http://localhost:3000/employee')
            .pipe(map(res => res.json()));
    }

    addEmployee(employee) {
        return this.http.post('http://localhost:3000/employee/add', employee);
    }
}
