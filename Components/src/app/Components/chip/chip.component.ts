import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TagType } from 'src/app/utils/enums';

@Component({
  selector: 'sp-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.less']
})
export class ChipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() text: string;
  @Input() icon: string;
  @Input() mode: string = TagType.default;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Output() onCloseEvent = new EventEmitter<any>();
  @Output() onCheckEvent = new EventEmitter<any>();

  onClose() {
    this.onCloseEvent.emit(true);
  }

  checkChange(e: boolean): void {
    this.checked = e;
    this.onCheckEvent.emit(e);
  }







}
