import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spt-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent {
  /** if the status is 'indeterminate' (will prioritize this status over the 'check' value */
  @Input() indeterminate: boolean;

  /** checkbox status */
  @Input() check: boolean;

  /** DEPRECATED (use [text]) the value to be displayed beside the checkbox */
  @Input() value: string;

  /** the value to be displayed beside the checkbox */
  @Input() text: string;

  /** emits the current boolean statys of the checkbox */
  @Output() onChangeEvent = new EventEmitter<any>();

  constructor() { }

  onChange(e: any) {
    this.onChangeEvent.emit(e);
  }
}
