import { Component, OnInit } from '@angular/core';
import { fade } from '../animations/animation';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  animations:[
    fade
  ]
})
export class TodolistComponent implements OnInit {

  constructor() { }
 Languages:string[]=['C#','Java','Python','C++'];

  ngOnInit(): void {
  }
addLanguage(item){
  this.Languages.splice(0,0,item.value);
}
removeLanguage(item){
  let index=this.Languages.indexOf(item);
  this.Languages.splice(index,1);
}

}
