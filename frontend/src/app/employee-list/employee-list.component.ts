import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  // ✅ keep router private but expose methods
  constructor(private service: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  // ✅ method to navigate
  goToAddEmployee() {
    this.router.navigate(['/add-employee']);
  }

  goToUpdateEmployee(id: number) {
    this.router.navigate(['/update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}
