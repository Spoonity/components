import {Component, forwardRef, Input, Renderer2, ViewChild} from '@angular/core';
import {FormFieldManager} from '../../shared/form-field.manager';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {differenceInCalendarDays} from 'date-fns';
import {NzDatePickerComponent} from 'ng-zorro-antd/date-picker';

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
  /* date format (and acceptable inputs). default: 'dd\/MM\/yyyy */
  @Input() dateFormat: 'dd/MM/yyyy' | 'dd/MM' | 'MM/yyy' = 'dd/MM/yyyy';

  /**
   * string formatted date
   */
  formattedDate: string;

  @ViewChild(NzDatePickerComponent) nzDatePickerComponent: NzDatePickerComponent;

  constructor(_renderer: Renderer2) {
    super(_renderer);
  }

  disabledDate = (current: Date): boolean => {
    if (this.min && this.max == null) {
      return differenceInCalendarDays(current, this.min) < 0;
    }

    if (this.max && this.min == null) {
      return differenceInCalendarDays(current, this.max) > 0;
    }

    if (this.min && this.max) {
      return differenceInCalendarDays(current, this.min) < 0 || differenceInCalendarDays(current, this.max) > 0;
    }

    return null;
  }

  /**
   * override: inherited writeValue
   */
  writeValue(obj: any): void {
    this.value = obj;
    this.checkDirty();
  }
}
