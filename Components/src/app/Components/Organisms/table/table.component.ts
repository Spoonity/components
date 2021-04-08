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
  @Input() rows:[];
  @Input() dataSet: IDataSet;

  constructor() { }

  // dataSet: IDataSet[] = [
  //   {
  //     number: 3455,
  //     date: 'Jan 1, 2012',
  //     description: 'January Monthly Fees',
  //     amount: '$1200.00 CAD',
  //     status: true,
  //     invoice: 'PDF'
  //   },
  //   {
  //     number: 4556,
  //     date: 'Dec 1, 2012',
  //     description: 'December Monthly Fees',
  //     amount: '$1200.00 CAD',
  //     status: true,
  //     invoice: 'PDF'
  //   },
  //   {
  //     number: 2689,
  //     date: 'Nov 1, 2012',
  //     description: 'November Monthly Fees',
  //     amount: '$1200.00 CAD',
  //     status: true,
  //     invoice: 'PDF'
  //   },
  //   {
  //     number: 2469,
  //     date: 'Oct 1, 2012',
  //     description: 'October Monthly Fees',
  //     amount: '$1200.00 CAD',
  //     status: true,
  //     invoice: 'PDF'
  //   }
  // ];

  titleRow = ['Name', 'Date', 'Description', 'Amount', 'Status', 'Invoice'];

  ngOnInit() {
  }

}
