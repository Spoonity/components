import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'spt-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {
  @Input() tabs: {name: string, disabled?: boolean, icon?: string, tooltip?: string}[];
  @Input() index = 0;
  @Output() selectedIndexChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() orientation: 'vertical' | 'horizontal' = 'horizontal';

  TAB_POSITION: {[orientation: string]: 'top' | 'left'} = {
    vertical: 'left',
    horizontal: 'top'
  };

  constructor() { }

  ngOnInit() {
  }
}
