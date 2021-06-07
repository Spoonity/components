import { Renderer2 } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
export declare class DatePickerComponent extends FormFieldManager {
    formattedDate: string;
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
}
