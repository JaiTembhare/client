import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModule } from './modules/employee/employee.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:5000/api/users';

  constructor(private httpClient: HttpClient) {}

  registerEmployee(employee: EmployeeModule): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/register`, employee, {
      withCredentials: true,
    });
  }

  loginEmployee(employee: EmployeeModule): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/login`, employee, {
      withCredentials: true,
    });
  }
  logOutEmployee(): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/logout`, {
      withCredentials: true,
    });
  }
}
