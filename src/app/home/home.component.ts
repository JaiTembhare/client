import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private employeeServce: EmployeeService,
    private router: Router
  ) {}

  logout() {
    this.employeeServce.logOutEmployee().subscribe((data) => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    });
    this.goToHome();
  }
  goToHome() {
    this.router.navigate(['/login']);
  }
}
