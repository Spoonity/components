import {Component, forwardRef} from '@angular/core';
import {FormFieldManager} from '../../shared/form-field.manager';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'spt-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['../../shared/form-field.manager.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent extends FormFieldManager {
  formattedDate: string;

  constructor() {
    super();
  }

  /**
   * override: inherited writeValue
   */
  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.value = obj;
      this.setDate();
      this.checkDirty();
    }
  }

  /**
   * set date to display
   */
  setDate(): void {
    if (this.value) {
      const date: Date = this.value;
      this.formattedDate = date.toLocaleDateString();
    }
  }

  /**
   * format date to display
   */
  convertDate(event: any): void {
    this.setDate();
    this.changeAction(event);
  }
}
