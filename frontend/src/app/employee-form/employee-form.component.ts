import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { name: '', email: '', department: '' };
  message: string = "";
  isUpdate: boolean = false;

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isUpdate = true;
      this.service.getEmployee(+id).subscribe(emp => this.employee = emp);
    }
  }

  save() {
    if (this.isUpdate && this.employee.id) {
      this.service.updateEmployee(this.employee.id, this.employee).subscribe({
        next: () => {
          this.message = "✅ Employee updated successfully!";
          this.router.navigate(['/employees']);
        },
        error: () => this.message = "❌ Failed to update employee!"
      });
    } else {
      this.service.addEmployee(this.employee).subscribe({
        next: () => {
          this.message = "✅ Employee added successfully!";
          this.router.navigate(['/employees']);
        },
        error: () => this.message = "❌ Failed to add employee!"
      });
    }
  }
}
