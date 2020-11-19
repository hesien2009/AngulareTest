import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-PH-app';
  CurrentProduct(Adress?:string ) {

    console.log('Event fire '+Adress);
  }
}
