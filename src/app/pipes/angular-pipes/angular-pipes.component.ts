import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {


  book: any = {
    title: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numberPages: 314,
    price: 44.99,
    releaseDate: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  constructor() { }

  ngOnInit() {
  }

}
