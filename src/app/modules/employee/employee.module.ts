import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class EmployeeModule {
  name!: String;
  email!: String;
  password!: String;
  joining_date!: Date;
}
