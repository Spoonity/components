import { Component, Input } from '@angular/core';

@Component({
  selector: 'spt-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent {
  /** avatar component size (default: 40) */
  @Input() size: number = 40;

  /** the text to get the initial from (only displays the first character) */
  @Input() text: string;

  /** font color (default: #0D0C0B) */
  @Input() textColor: string = '#0D0C0B';

  /** background color (default: #FF9900) */
  @Input() backgroundColor: string = '#FF9900';

  constructor() { }
}
