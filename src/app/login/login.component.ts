import { Component } from '@angular/core';
import { EmployeeModule } from '../modules/employee/employee.module';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  employee: EmployeeModule = new EmployeeModule();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  loginEmployee(employee: EmployeeModule) {
    this.employeeService.loginEmployee(employee).subscribe(
      (data: any) => {
        console.log(data);
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
    this.loginEmployee(this.employee);
  }
}
