import { Renderer2 } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
export declare class DatePickerComponent extends FormFieldManager {
    /**
     * string formatted date
     */
    formattedDate: string;
    /** date format (and acceptable inputs). default: 'dd/MM/yyyy **/
    dateFormat: 'dd/MM/yyyy' | 'dd/MM' | 'MM/yyy';
    nzDatePickerComponent: NzDatePickerComponent;
    constructor(_renderer: Renderer2);
    disabledDate: (current: Date) => boolean;
    /**
     * override: inherited writeValue
     */
    writeValue(obj: any): void;
}
