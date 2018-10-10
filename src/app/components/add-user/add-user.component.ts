import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

    newEmployee = {
        firstName: '',
        lastName: '',
        baseSalary: 0,
        deduction401k: 0,
        deductionMedical: 0,
        deductionVoluntary: 0,
        grossSalary: 0
    };
    currentEmployee: Employee = this.newEmployee;
    employees: Employee[] = [];

    constructor() { 
    }
    
    ngOnInit() {
        this.newEmployee = {
            firstName: '',
            lastName: '',
            baseSalary: 0,
            deduction401k: 0,
            deductionMedical: 0,
            deductionVoluntary: 0,
            grossSalary: 0
        };
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
        this.currentEmployee = this.newEmployee;
    }

    calculateSalary() {
        this.currentEmployee.grossSalary = this.currentEmployee.baseSalary - this.currentEmployee.deduction401k - 
            this.currentEmployee.deductionMedical - this.currentEmployee.deductionVoluntary;
    }

    selectEmployee(id: number) {
        debugger;
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
