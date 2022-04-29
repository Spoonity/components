import { Component, Input } from '@angular/core';

@Component({
  selector: 'spt-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.less']
})
export class DividerComponent {
  /* divider type */
  @Input() type: 'horizontal'|'vertical' = 'horizontal';

  constructor() { }
}
