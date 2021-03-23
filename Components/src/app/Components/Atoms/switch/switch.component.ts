import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sp-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() on: boolean = false;

}
