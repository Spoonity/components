import { Component, Input, OnInit } from '@angular/core';

export interface IDataSet {
  number: number;
  date: string;
  description: string;
  amount: string;
  status: boolean;
  invoice: string;
}

@Component({
  selector: 'sp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  @Input() checkboxOn: boolean;
  @Input() rows: [];
  @Input() dataSet: IDataSet[];

  totalData: number;

  constructor() { }

  ngOnInit() {
    this.totalData = this.dataSet.length;
  }

}
