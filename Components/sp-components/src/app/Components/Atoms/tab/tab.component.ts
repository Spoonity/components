import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'spt-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() tabs: {name: string, disabled: boolean}[];
  @Input() index = 0;
  @Output() selectedIndexChange: EventEmitter<any> = new EventEmitter<any>();

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
