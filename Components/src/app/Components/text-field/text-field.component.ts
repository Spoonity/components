import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {FormFieldManager} from '../shared/form-field.manager';

@Component({
  selector: 'sp-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['../shared/form-field.manager.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ]
})
export class TextFieldComponent extends FormFieldManager implements OnInit {

  constructor() {
    super();
  }

  @Input() type: string;

  /* optional: max length */
  @Input() max: number;

  ngOnInit(): void {
  }

  /**
   * get current value length
   */
  getLength(): number {
    if (!this.value) {
      return 0;
    }

    return this.value.length;
  }
}
