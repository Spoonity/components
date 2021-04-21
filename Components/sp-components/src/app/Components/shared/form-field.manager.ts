import { Input, Directive } from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Directive()
export abstract class FormFieldManager implements ControlValueAccessor {
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

  /**
   * on change action
   */
  changeAction($event) {
    this.onChange($event);
    this.checkDirty();
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  /**
   * check dirty
   */
  checkDirty() {
    if (typeof this.value === 'string' || this.value instanceof String) {
      this.isDirty =  this.value.trim() !== '';
    } else {
      this.isDirty = false;
    }

  }
}

