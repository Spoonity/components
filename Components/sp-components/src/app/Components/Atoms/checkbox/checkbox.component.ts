import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spt-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  span = 8;

  @Input() indeterminate: boolean;
  @Input() check: boolean;
  @Input() value: string;

  @Output() onChangeEvent = new EventEmitter<any>();

  onChange(e: any) {
    this.onChangeEvent.emit(e);
  }

}
