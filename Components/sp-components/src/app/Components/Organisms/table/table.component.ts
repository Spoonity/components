import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NzTableComponent} from 'ng-zorro-antd/table';

export interface IDataSet {
  number: number;
  date: string;
  description: string;
  amount: string;
  status: boolean;
  invoice: string;
}

@Component({
  selector: 'spt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  @Input() checkboxOn: boolean;
  @Input() rows: any[];
  @Input() dataSet: any[];
  @Input() hideOuterBorder: boolean;

  constructor() { }

  ngOnInit() {
  }
}
