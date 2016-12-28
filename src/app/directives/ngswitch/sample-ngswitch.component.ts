import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-ngswitch',
  templateUrl: './sample-ngswitch.component.html',
  styleUrls: ['./sample-ngswitch.component.css']
})
export class SamplegswitchComponent implements OnInit {

  tab: string = 'home';

  constructor() { }

  ngOnInit() {
  }

}
