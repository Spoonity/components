import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TagType } from '../../../utils/enums';

@Component({
  selector: 'spt-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.less']
})
export class ChipComponent implements OnInit {
  /* chip text */
  @Input() text: string;

  /* background color */
  @Input() color: string;

  /* icon to appear on the left side */
  @Input() icon: string;

  /* chip mode*/
  @Input() mode: 'default' | 'closeable' | 'checkable' = 'default';

  /* checked status of the chip (shows a checkmark on the left or in place of icon if set to true) */
  @Input() checked: boolean;

  /* disabled state */
  @Input() disabled: boolean;

  /* emit action if the close button is clicked */
  @Output() onCloseEvent = new EventEmitter<any>();

  /* emit action if the chip is checked */
  @Output() onCheckEvent = new EventEmitter<any>();

  styles: { 'width.px': number; 'height.px': number; fill: string };

  constructor() { }

  ngOnInit() {
    this.styles = { 'width.px': 20, 'height.px': 20, fill: '#0D0C0B'};
  }

  onClose() {
    this.onCloseEvent.emit(true);
  }

  checkChange(e: boolean): void {
    this.checked = e;
    this.onCheckEvent.emit(e);
  }
}
