import { Component, Input } from '@angular/core';

@Component({
  selector: 'spt-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent {
  @Input() percent: number;
  @Input() info: boolean;

  constructor() { }
}
