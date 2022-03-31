import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TagType } from '../../../utils/enums';

@Component({
  selector: 'spt-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.less']
})
export class ChipComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;
  @Input() icon: string;
  @Input() mode: string = TagType.default;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Output() onCloseEvent = new EventEmitter<any>();
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
