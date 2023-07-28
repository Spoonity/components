import { Component, Input } from '@angular/core';

@Component({
  selector: 'spt-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.less']
})
export class BadgeComponent {
  /** badge text */
  @Input() name: string;

  /** badge color */
  @Input() color: string;

  /** badge text color */
  @Input() textColor: string;

  constructor() { }
}
