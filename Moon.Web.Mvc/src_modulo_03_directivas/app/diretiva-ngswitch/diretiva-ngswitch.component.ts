import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './app/diretiva-ngswitch/diretiva-ngswitch.component.html',
  styleUrls: ['./app/diretiva-ngswitch/diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit() {
  }

}
