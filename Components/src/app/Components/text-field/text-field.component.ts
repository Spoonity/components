import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sp-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ]
})
export class TextFieldComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  /* size specification (large or medium) -- default to medium if not provided */
  @Input() size: 'medium' | 'large' = 'medium';

  /* text field label */
  @Input() label: string;

  /* error message */
  @Input() error?: string;

  /* optional: left icon */
  @Input() startIcon?: string;

  /* optional: right icon */
  @Input() endIcon?: string;

  /* optional: hint message */
  @Input() hint?: string;

  /* optional: placeholder */
  @Input() placeholder?: string;

  /* optional: max length */
  @Input() max: number;

  /* is disabled */
  @Input() isDisabled;

  /* value */
  value = null;

  /* dirty state */
  isDirty: boolean;

  /* ControlValueAccessor: onChange function **/
  onChange: any = () => { };

  /* ControlValueAccessor: onTouched function */
  onTouched: any = () => { };

  ngOnInit(): void {
    // this.setDisabledState(this.isDisabled);
  }

  changeAction($event) {
    this.onChange($event);
    this.checkDirty();
  }
  /**
   * check dirty
   */
  checkDirty() {
    this.isDirty =  this.value != null && this.value.trim() !== '';
  }

  /**
   * ControlValueAccessor override: registerOnChange
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * ControlValueAccessor override: registerOnTouched
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * ControlValueAccessor override: writeValue
   */
  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.value = obj;
      this.checkDirty();
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
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
