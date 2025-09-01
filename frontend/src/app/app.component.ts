import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="header">
      <h1>Employee Management System</h1>
    </div>

    <nav>
      <ul>
        <li><a routerLink="/employees">Employee List</a></li>
        <li><a routerLink="/add-employee">Add Employee</a></li>
      </ul>
    </nav>

    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
