import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbservicesService } from '../dbservices.service';

@Component({
  selector: 'productcomponent',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {
  products;
  dbservice;
  AllDataProducts;
  FirstName;
  isfavorite: boolean = false;

  constructor(dbservice: DbservicesService) {
    this.products = dbservice.getProducts();
    this.AllDataProducts = this.products;
  }

  @Input("titles") Adress: string = "Includes over 250 glyphs in font format from the Glyphicon Halflings set.";
  @Output() Change = new EventEmitter();
  getallproducts(products) {

    this.AllDataProducts = ['C1', 'C2'];
    this.Change.emit();
  }

  CurrentProduct(FirstName) {
    //this.ClickEvent  = products;  
    //this.AllDataProducts=['C1','C2'];
    //this.EventFire='Event fire '+this.Adress;
  }
  OnChange() {
    this.isfavorite = !this.isfavorite;
  }

}
