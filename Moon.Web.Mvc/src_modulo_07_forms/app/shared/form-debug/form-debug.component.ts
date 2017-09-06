import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './app/shared/form-debug/form-debug.component.html',
  styleUrls: ['./app/shared/form-debug/form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit() {
  }

}
