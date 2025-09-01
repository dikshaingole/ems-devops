import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: EmployeeFormComponent },
  { path: 'update-employee/:id', component: EmployeeFormComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })   // ✅ hash routing prevents Cannot GET error
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
