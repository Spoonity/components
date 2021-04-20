
import { Component, OnInit, Input } from '@angular/core';
import { ProgressType } from '../../../utils/enums';

@Component({
  selector: 'sp-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() percent: number;
  @Input() info: Boolean;
  @Input() type: ProgressType = ProgressType.line;
}
