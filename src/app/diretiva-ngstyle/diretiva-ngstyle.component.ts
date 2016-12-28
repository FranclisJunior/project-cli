import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  buttonAtivo: boolean = false;

  ative() {
    this.buttonAtivo = !this.buttonAtivo;
  }

  constructor() { }

  ngOnInit() {
  }

}
