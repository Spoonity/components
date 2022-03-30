import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'spt-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressCircleComponent implements OnInit {
  @Input() percent: number;
  @Input() showPercent = true;
  @Input() color = '#FF9900';
  @Input() width = 45;
  @Input() strokeWidth = 9;

  constructor() { }

  ngOnInit(): void {
  }

}
