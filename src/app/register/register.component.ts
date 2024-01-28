import { Component } from '@angular/core';
import { EmployeeModule } from '../modules/employee/employee.module';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  employee: EmployeeModule = new EmployeeModule();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  registerEmployee() {
    this.employeeService.registerEmployee(this.employee).subscribe(
      (data: any) => {
        // Use 'any' type for data
        // Assuming the server sends a response containing the token
        if (data.token) {
          // Set the 'token' cookie with the received token
          document.cookie = `token=${data.token}; path=/; expires=${new Date(
            Date.now() + 86400000 // 1 day in milliseconds
          ).toUTCString()}; samesite=None; secure`;
        }
        this.goToHome();
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    console.log(this.employee);
    this.registerEmployee();
  }
}
