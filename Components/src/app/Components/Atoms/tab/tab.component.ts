import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sp-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() tabs: {};

  // tabs = [
  //   {
  //     name: 'Tab 1',
  //     disabled: false
  //   },
  //   {
  //     name: 'Tab 2',
  //     disabled: true
  //   },
  //   {
  //     name: 'Tab 3',
  //     disabled: false
  //   }
  // ];

}
