import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from '../Components/Organisms/chart/chart.component';
import { DialogsComponent, IModal } from '../Components/Organisms/dialogs/dialogs.component';

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

  createModal(dialog: IModal) {
    dialog = {
      title: 'Dialog Header',
      content: 'Gravida condimentum amet mauris justo, non non, feugiat aliquam vitae. Massa nec neque elementum id vulputate neque dui commodo a.',
      action1: () => { alert('Action 1') },
      action2: () => { alert('Action 1') },
      action1Label: 'Action 1',
      action2Label: 'Action 2'
    }
    this.dialog.createModal(dialog);
  }

}

