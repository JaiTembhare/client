import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/item.service';
import { ItemModule } from 'src/app/modules/item/item.module';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items!: ItemModule[];
  selectedItem: ItemModule = new ItemModule();

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.itemService.getItems().subscribe((data: ItemModule[]) => {
      this.items = data;
      console.log('====================================');
      console.log(this.items);
      console.log('====================================');
    });
  }

  editItem(item: any) {
    this.selectedItem = { ...item }; // make a copy of the item
  }

  deleteItem(id: object) {
    this.itemService.deleteItem(id).subscribe((data) => {
      console.log('====================================');
      console.log(data);
      this.getItems();
      console.log('====================================');
    });
  }

  saveChanges(id: object) {
    const updatedItem = {
      itemName: this.selectedItem.itemName,
      description: this.selectedItem.description,
      quantity: this.selectedItem.quantity,
    };

    this.itemService.updateItem(id, updatedItem).subscribe((data) => {
      console.log('====================================');
      console.log(data);
      this.getItems();
      console.log('====================================');
      // Close the modal after saving changes
    });
  }
}
