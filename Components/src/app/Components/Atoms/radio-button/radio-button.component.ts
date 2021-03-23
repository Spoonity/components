import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'sp-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less']
})
export class RadioButtonComponent implements OnInit {

  radioButtons =  [
      {radioName: 'A', disable: false},
      {radioName: 'B', disable: true},
      {radioName: 'C', disable: false},
      {radioName: 'D', disable: false},
  ]
  

  constructor() { }

  ngOnInit() {
    this.radioButtons.forEach(element => {
      console.log(element)
      
    });
  }

  @Input() model: string;


}
