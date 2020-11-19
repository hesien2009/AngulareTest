import { Component, OnInit } from '@angular/core';
import { DbservicesService } from 'src/app/dbservices.service';

@Component({
  selector: 'category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent {

  Categories: any[];
  ViewModel = "Products";
  constructor(dbservices: DbservicesService) {
    this.Categories = dbservices.getCategory();

  }

  removecategory(Maincat, category) {
    this.Categories[Maincat]['Rows'].splice(category, 1);
    if (this.Categories[Maincat]['Rows'].length == 0)
      this.Categories.splice(Maincat, 1)

  }
  id: number;
  addcategory(Maincatindex, categ) {
    this.id = this.Categories[Maincatindex]['Rows'][this.Categories[(Maincatindex)]['Rows'].length - 1]['id'];
    this.id++;
    //this.Categories[Maincatindex]['Rows'].splice(this.Categories[(this.Categories.length-1)]['Rows'].length,-1,{'id':id,'name':categ});
    this.Categories[Maincatindex]['Rows'].push({ 'id': this.id, 'name': categ });
  }
  tracing(index, array: any[]) {
    return array[index] ? array[index] : undefined;
  }

  setView(Viewval) {
     this.ViewModel = Viewval;
  }

}
