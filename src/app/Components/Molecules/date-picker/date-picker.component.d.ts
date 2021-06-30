import { Renderer2 } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
export declare class DatePickerComponent extends FormFieldManager {
    /**
     * string formatted date
     */
    formattedDate: string;
    /**
     * open state for the date picker overlay
     */
    datePickerOpen: boolean;
    nzDatePickerComponent: NzDatePickerComponent;
    constructor(_renderer: Renderer2);
    disabledDate: (current: Date) => boolean;
    /**
     * override: inherited writeValue
     */
    writeValue(obj: any): void;
    /**
     * set date to display
     */
    setDate(): void;
    /**
     * format date to display
     */
    convertDate(event: any): void;
    /**
     * close the datepicker
     */
    closeDatePicker(): void;
    /**
     * listen when the datepicker overlay status changes (open/close)
     * @param open
     */
    onDatePickerOpen(open: boolean): void;
}
