import { Component, OnInit } from '@angular/core';
import { ChartType } from '../Components/Organisms/chart/chart.component';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.component.html',
  styleUrls: ['./organisms.component.less']
})
export class OrganismsComponent implements OnInit {
  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];
  type1:ChartType = ChartType.line;
  constructor() { }

  ngOnInit() {
  }

}

