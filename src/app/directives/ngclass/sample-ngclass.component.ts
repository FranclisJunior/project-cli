import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-ngclass',
  templateUrl: './sample-ngclass.component.html',
  styleUrls: ['./sample-ngclass.component.css']
})
export class SampleNgclassComponent implements OnInit {

  favorite: boolean = false;

  favoriteItem() {
    this.favorite = !this.favorite;
  }

  constructor() { }

  ngOnInit() {
  }

}
