import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbservicesService {

  constructor() { }
  getProducts() {
    return ['P1', 'P2', 'P3'];
  }

  getCategory() {
    let categories: any[] = [{
      'cate': 'C1',
      'Rows': [{ 'id': '1', 'name': 'C1' },
      { 'id': '2', 'name': 'C2' },
      { 'id': '3', 'name': 'C3' }]
    },
     { 'cate' : 'C2',
      'Rows': [{ 'id': '4', 'name': 'C1' },
      { 'id': '5', 'name': 'C2' },
      { 'id': '6', 'name': 'C3' }]
  }];
    return categories
}


}
