import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ItemModule {
  _id!: object;
  employee!: string;
  itemName!: string;
  description!: string;
  quantity!: number;
}
