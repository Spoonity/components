import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  span = 8;

  @Input() indeterminate: boolean;
  @Input() isOn: boolean;
  @Input() value: string;

}
