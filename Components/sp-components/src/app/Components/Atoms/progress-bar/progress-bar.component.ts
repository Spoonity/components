
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spt-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {
  @Input() percent: number;
  @Input() info: boolean;
  @Input() type: 'line'|'circle' = 'line';

  constructor() { }

  ngOnInit() {
  }

}
