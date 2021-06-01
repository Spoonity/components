import { FormFieldManager } from '../../shared/form-field.manager';
export declare class DatePickerComponent extends FormFieldManager {
    formattedDate: string;
    constructor();
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
