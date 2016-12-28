import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-ngstyle',
  templateUrl: './sample-ngstyle.component.html',
  styleUrls: ['./sample-ngstyle.component.css']
})
export class SampleNgstyleComponent implements OnInit {

  active: boolean = false;

  activeButton() {
    this.active = !this.active;
  }

  constructor() { }

  ngOnInit() {
  }

}
