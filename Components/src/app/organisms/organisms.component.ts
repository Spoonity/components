import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from '../Components/Organisms/chart/chart.component';
import { DialogsComponent } from '../Components/Organisms/dialogs/dialogs.component';

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
  type1: ChartType = ChartType.line;

  @ViewChild(DialogsComponent, { static: false }) dialog?: DialogsComponent;

  constructor() { }

  ngOnInit() {
  }

  createModal(title: string, content: string) {
    this.dialog.createModal(title, content, () => {alert('Action 1')}, () => {alert('Action 2')});
  }

}

