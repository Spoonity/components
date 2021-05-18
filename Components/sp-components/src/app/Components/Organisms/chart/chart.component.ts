import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sp-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {

  @Input() options = {};
  @Input() data = [];
  @Input() labels = [];
  @Input() type: ChartType;

  constructor() { }

  ngOnInit() {
  }

}

export enum ChartType {
  pie = 'pie',
  doughnut = 'doughnut',
  bar = 'bar',
  line = 'line',
  polarArea = 'polarArea',
  radar = 'radar',
  horizontalBar = 'horizontalBar'
}

export interface IChart {
  data: Array<IData>;
  labels: Array<string>;
}

export interface IData {
  data: number;
  label: string;
}

