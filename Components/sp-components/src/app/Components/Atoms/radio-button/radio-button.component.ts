import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'spt-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less']
})
export class RadioButtonComponent implements OnInit {

  constructor() { }

  radioButtons =  [
      {radioName: 'A', disable: false},
      {radioName: 'B', disable: true},
      {radioName: 'C', disable: false},
      {radioName: 'D', disable: false},
  ];

  @Input() model: string;

  ngOnInit() {}


}
