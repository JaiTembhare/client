import { Injectable } from '@angular/core';
import { ItemModule } from './modules/item/item.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private baseUrl = 'http://localhost:5000/api/items';

  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<ItemModule[]> {
    return this.httpClient.get<ItemModule[]>(`${this.baseUrl}/`, {
      withCredentials: true,
    });
  }
  addItem(item: ItemModule): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, item, {
      withCredentials: true,
    });
  }
  deleteItem(_id: object): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${_id}`, {
      withCredentials: true,
    });
  }
  updateItem(_id: object, updatedItem: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${_id}`, updatedItem, {
      withCredentials: true,
    });
  }
}
