import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spt-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.less']
})
export class DataVisualizationComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
