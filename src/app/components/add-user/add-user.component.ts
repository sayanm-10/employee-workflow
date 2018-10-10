import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

    currentEmployee: Employee = {
        firstName: '',
        lastName: '',
        baseSalary: 0,
        deduction401k: 0,
        deductionMedical: 0,
        deductionVoluntary: 0,
        grossSalary: 0
    };
    employees: Employee[] = [];

    constructor() { 
    }
    
    ngOnInit() {
    }

    addEmployee(employee: Employee, form: NgForm) {
        // insert new employee into list of employees
        this.employees.push(employee);
        this.currentEmployee = {
            firstName: '',
            lastName: '',
            baseSalary: 0,
            deduction401k: 0,
            deductionMedical: 0,
            deductionVoluntary: 0,
            grossSalary: 0
        };
        // Reset validation
        form.form.controls.firstName.markAsUntouched();
        form.form.controls.lastName.markAsUntouched();
    }

    calculateSalary() {
        this.currentEmployee.grossSalary = this.currentEmployee.baseSalary - this.currentEmployee.deduction401k - 
            this.currentEmployee.deductionMedical - this.currentEmployee.deductionVoluntary;
    }

    selectEmployee(id: number) {
        this.currentEmployee = this.employees[id];
    }

}

interface Employee {
    firstName: string,
    lastName: string,
    baseSalary: number,
    deduction401k: number,
    deductionMedical: number,
    deductionVoluntary: number,
    grossSalary: number
}
