import { EventEmitter } from '@angular/core';
export declare class CheckboxComponent {
    /** if the status is 'indeterminate' (will prioritize this status over the 'check' value */
    indeterminate: boolean;
    /** checkbox status */
    check: boolean;
    /** DEPRECATED (use [text]) the value to be displayed beside the checkbox */
    value: string;
    /** the value to be displayed beside the checkbox */
    text: string;
    /** emits the current boolean statys of the checkbox */
    onChangeEvent: EventEmitter<any>;
    constructor();
    onChange(e: any): void;
}
