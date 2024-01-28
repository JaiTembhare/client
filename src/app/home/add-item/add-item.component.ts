import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/item.service';
import { ItemModule } from 'src/app/modules/item/item.module';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  item: ItemModule = new ItemModule();
  constructor(private itemService: ItemService, private router: Router) {}

  saveEmployee() {
    this.itemService.addItem(this.item).subscribe((data) => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    });
    this.item.itemName = '';
    this.item.quantity = 0;
    this.item.description = '';
  }
  onSubmit() {
    this.saveEmployee();
  }
}
