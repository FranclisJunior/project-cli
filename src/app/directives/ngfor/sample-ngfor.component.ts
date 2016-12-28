import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-ngfor',
  templateUrl: './sample-ngfor.component.html',
  styleUrls: ['./sample-ngfor.component.css']
})
export class SampleNgforComponent implements OnInit {

  courses: string[] = ['Angular 2', 'Java', 'Spring Boot'];

  constructor() { }

  ngOnInit() {
  }

}
