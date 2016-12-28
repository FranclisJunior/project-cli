import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-ngif',
  templateUrl: './sample-ngif.component.html',
  styleUrls: ['./sample-ngif.component.css']
})
export class SampleNgifComponent implements OnInit {

  courses: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
