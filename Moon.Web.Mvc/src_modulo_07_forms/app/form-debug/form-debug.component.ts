import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './app/form-debug/form-debug.component.html',
  styleUrls: ['./app/form-debug/form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit() {
  }

}
