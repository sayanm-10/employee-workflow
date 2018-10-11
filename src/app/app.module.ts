import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';

import { EmployeeService } from './services/employee.service';

@NgModule({
    declarations: [
        AppComponent,
        AddUserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})

export class AppModule { }
