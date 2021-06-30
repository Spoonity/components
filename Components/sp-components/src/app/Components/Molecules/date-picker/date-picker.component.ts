import {Component, forwardRef, Renderer2, ViewChild} from '@angular/core';
import {FormFieldManager} from '../../shared/form-field.manager';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import { differenceInCalendarDays } from 'date-fns';
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
  /**
   * string formatted date
   */
  formattedDate: string;

  /**
   * open state for the date picker overlay
   */
  datePickerOpen: boolean;

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

  /**
   * close the datepicker
   */
  closeDatePicker(): void {
    this.nzDatePickerComponent.close();
  }

  /**
   * listen when the datepicker overlay status changes (open/close)
   * @param open
   */
  onDatePickerOpen(open: boolean) {
    this.datePickerOpen = open;
  }
}
